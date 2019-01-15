import datetime
import time
from operator import itemgetter
from flask import (Flask, jsonify, request, session)
from jinja2 import StrictUndefined
from flask_cors import CORS, cross_origin
from flask_restful import  Api, Resource, reqparse
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
from functools import wraps
from model import Student, Item, StudentItem, StudentTestResult, connect_to_db, db, User
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message': 'Token is missing'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(
                public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'Token is invalid'})
        return f(current_user, *args, **kwargs)
    return decorated


@app.route("/api/register", methods=['POST'])
@cross_origin()
def add_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    hashed_password = generate_password_hash(password)
    existing_user_name = User.query.filter_by(username=username).first()
    existing_user_email = User.query.filter_by(email=email).first()
    if existing_user_name:
        return jsonify({'error': 'username already in use'})
    if existing_user_email:
        return jsonify({'error': 'email already in use'})
    new_user = User(public_id=str(uuid.uuid4()), username=username, email=email,
                    password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'username': username})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    auth_user = User.query.filter_by(username=username).first()
    if not auth_user:
        return jsonify({'error': 'user does not exist'})
    if auth_user and check_password_hash(auth_user.password, password.encode('utf-8')):
        token = jwt.encode({'public_id': auth_user.public_id, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(hours=24)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('utf-8'), 'username': auth_user.username})
    else:
        return jsonify({'error': 'incorrect password'})


@app.route("/api/words")
@token_required
def get_words(current_user):
    user_id = current_user.public_id
    items = Item.query.filter_by(user_id=user_id).filter_by(item_type="words").options(
        db.joinedload('studentitems')).filter_by(user_id=user_id).filter_by(item_type="words").all()
    print("items", items)
    item_list =[]
    for item in items:
        word = {
            'item_id': item.item_id,
            'item': item.item
        }
        item_list.append(word)
    item_type = "words"
    return jsonify({
        "items": item_list
        })


@app.route("/api/letters")
@token_required
def get_letters(current_user):
    user_id = current_user.public_id
    items = Item.query.filter_by(user_id=user_id).filter_by(item_type="letters").options(
    db.joinedload('studentitems')).filter_by(user_id=user_id).filter_by(item_type="letters").all()
    print("items", items)
    item_list =[]
    for item in items:
        letter = {
            'item_id': item.item_id,
            'item': item.item
        }
        item_list.append(letter)
    item_type = "letters"
    return jsonify({
        "items": item_list
        })

@app.route("/api/sounds")
@token_required
def get_sounds(current_user):
    user_id = current_user.public_id
    items = Item.query.filter_by(user_id=user_id).filter_by(item_type="sounds").options(
        db.joinedload('studentitems')).filter_by(user_id=user_id).filter_by(item_type="sounds").all()
    print("items", items)
    item_list =[]
    for item in items:
        sound = {
            'item_id': item.item_id,
            'item': item.item
        }
        item_list.append(sound)
    item_type = "sounds"
    return jsonify({
        "items": item_list
        })
 


@app.route("/api/add-student", methods=['POST'])
@token_required
def add_student(current_user):
    print("current user", current_user)
    data = request.get_json()
    fname = data.get('fname')
    lname = data.get('lname')
    user_id = current_user.public_id
    new_student = Student(user_id=user_id, fname=fname, lname=lname, grade="K")
    db.session.add(new_student)
    db.session.commit()
    return 'student added!'

@app.route("/api/delete-student", methods=['POST'])
@token_required
def delete_student(current_user):
    student_id = request.get_json()
    user_id = current_user.public_id
    student = Student.query.filter_by(
        student_id=student_id, user_id=user_id).first()
    db.session.delete(student)
    db.session.commit()
    return 'student deleted!'

@app.route("/api/add-item", methods=['POST'])
@token_required
def add_item(current_user):
    data = request.get_json()
    items = data['item']
    item_type = data['itemType']
    user_id = current_user.public_id
    new_items = items.split()
    user_items = Item.query.filter_by(user_id=user_id).filter_by(item_type=item_type).all()
    user_list = []
    for item in user_items:
        user_list.append(item.item)
    list_to_add = list(set(new_items).difference(user_list))
    for item in list_to_add:
            user_id = user_id
            item = Item(item=item, user_id=user_id, item_type=item_type)
            db.session.add(item)
            db.session.commit()

    return 'items added'


@app.route("/api/students")
@token_required
def get_students(current_user):
    print(current_user)
    start = time.time()
    public_id = current_user.public_id
    students = Student.query.filter_by(user_id=public_id).options(
        db.joinedload('studentitems')).all()
    student_list = []
    for student in students:

        student = {
            'student_id': student.student_id,
            'fname': student.fname,
            'lname': student.lname,
        }
        student_list.append(student)
    # doubles time, think of other way if possible
    #  - student_list = sorted(student_list, key=itemgetter('fname', 'lname'),  reverse=False) 
    end = time.time()
    elapsed_time = end - start
    print('getting all students took', elapsed_time)
    return jsonify(student_list)


@app.route("/api/details/<student>")
@token_required
def student_detail(current_user, student):
    """Show student detail"""
    start = time.time()
    user_id = current_user.public_id
    student_object = Student.query.filter_by(
        student_id=student, user_id=user_id).first()
    student_items = StudentItem.query.filter_by(
        student_id=student).options(db.joinedload('items')).all()
    student_object = {
        'student_id': student_object.student_id,
        'fname': student_object.fname,
        'lname': student_object.lname
    }
    word_list = []
    letter_list = []
    sound_list = []
    unlearned_word_list = []
    unlearned_letter_list = []
    unlearned_sound_list = []

    for item in student_items:
        if item.item_type == "words":
            if item.Learned == True:
                word = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                word_list.append(word)
            else:
                 unlearned_word = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                unlearned_word_list.append(unlearned_word)


        else if item.item_type == "letters":
            if item.Learned == True:
                letter = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                letter_list.append(letter)
            else:
                 unlearned_letter = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                unlearned_letter_list.append(unlearned_letter)

        else if item.item_type == "sounds":
            if item.Learned == True:
                sound = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                sound_list.append(sound)
            else:
                 unlearned_sound = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                unlearned_sound_list.append(unlearned_sound)
            
    end = time.time()
    elapsed_time = end - start
    print('getting student detail took', elapsed_time)
    return jsonify([student_object, word_list, letter_list, sound_list, unlearned_word_list, unlearned_letter_list, unlearned_sound_list])

if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
