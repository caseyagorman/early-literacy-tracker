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
from model import Student, Word, Sound, StudentWord, StudentWordTestResult, StudentLetterTestResult, StudentSoundTestResult, Letter, StudentLetter, StudentSound, connect_to_db, db, User
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


@app.route("/foo")
def foo():
    return "good job"

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
    return jsonify({'newUser': 'user added'})


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
    # look up all students- I have to do this, I have no other way of getting them
    students = Student.query.filter_by(user_id=public_id).options(
        db.joinedload('studentwords')).all()
    student_list = []
    for student in students:
    

        # word_list = sorted(get_student_word_list(student)[0])
        # unlearned_word_list = sorted(get_student_word_list(student)[1])
        # letter_list = sorted(get_student_letter_list(student)[0])

        # unlearned_letter_list = sorted(get_student_letter_list(student)[1])

        # sound_list = sorted(get_student_sound_list(student)[0])
        # unlearned_sound_list = sorted(get_student_sound_list(student)[1])
        # word_count = len(word_list)
        # letter_count = len(letter_list)
        # sound_count = len(sound_list)
        # unlearned_word_count = len(unlearned_word_list)
        # unlearned_letter_count = len(unlearned_letter_list)
        # unlearned_sound_count = len(unlearned_sound_list)
        student = {
            'student_id': student.student_id,
            'fname': student.fname,
            'lname': student.lname,
            # 'grade': student.grade,
            # 'word_count': word_count,
            # 'letter_count': letter_count,
            # 'sound_count': sound_count,
            # 'word_list': word_list,
            # 'letter_list': letter_list,
            # 'sound_list': sound_list,
            # 'unlearned_word_count': unlearned_word_count,
            # 'unlearned_letter_count': unlearned_letter_count,
            # 'unlearned_sound_count': unlearned_sound_count,
            # 'unlearned_word_list': unlearned_word_list,
            # 'unlearned_letter_list': unlearned_letter_list,
            # 'unlearned_sound_list': unlearned_sound_list
            

        }
        student_list.append(student)

    student_list = sorted(student_list, key=itemgetter('fname', 'lname'),  reverse=False) 
    end = time.time()
    elapsed_time = end - start
    print('getting all students took', elapsed_time)
    return jsonify(student_list)

if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
