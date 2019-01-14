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
    print("user data", data)
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

@app.route("/api/students")
@token_required
def get_students(current_user):
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

@app.route("/api/words")
@token_required
def get_words(current_user):

    user_id = current_user.public_id
    items = StudentItem.query.filter_by(user_id=user_id).filter_by(item_type="words").options(
        db.joinedload('items')).filter_by(user_id=user_id).filter_by(item_type="words").options(
        db.joinedload('students')).filter_by(user_id=user_id).all()
    for item in items:
        print("item", item)
        print("item.items", item.items)
        print("item.students", item.students)
    return "yay!"

@app.route("/api/letters")
@token_required
def get_letters(current_user):

    user_id = current_user.public_id
    items = StudentItem.query.filter_by(user_id=user_id).filter_by(item_type="letters").options(
        db.joinedload('items')).filter_by(user_id=user_id).filter_by(item_type="letters").options(
        db.joinedload('students')).filter_by(user_id=user_id).all()
    for item in items:
        print("item", item)
        print("item.items", item.items)
        print("item.students", item.students)
    return "yay!"

@app.route("/api/sounds")
@token_required
def get_sounds(current_user):

    user_id = current_user.public_id
    items = StudentItem.query.filter_by(user_id=user_id).filter_by(item_type="sounds").options(
        db.joinedload('items')).filter_by(user_id=user_id).filter_by(item_type="sounds").options(
        db.joinedload('students')).filter_by(user_id=user_id).all()
    for item in items:
        print("item", item)
        print("item.items", item.items)
        print("item.students", item.students)
    return "yay!"


@app.route("/api/add-student", methods=['POST'])
@token_required
def add_student(current_user):
    data = request.get_json()
    fname = data.get('fname')
    lname = data.get('lname')
    user_id = current_user.public_id
    new_student = Student(user_id=user_id, fname=fname, lname=lname, grade="K")
    db.session.add(new_student)
    db.session.commit()
    return 'student added!'

@app.route("/api/add-item", methods=['POST'])
@token_required
def add_word(current_user):
    data = request.get_json()
    new_items = data.get("new_items")
    item_type = data.get("item_type")
    user_id = current_user.public_id
    new_items = new_items.split()
    item_dict = {}
    user_items = Item.query.filter_by(user_id=user_id).all()
    for item in new_items:
        if item not in user_items:
            user_id = user_id
            item = Item(item=item, user_id=user_id, item_type=item_type)
            db.session.add(item)
            db.session.commit()
        else:
            continue

    return 'items added'

if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
