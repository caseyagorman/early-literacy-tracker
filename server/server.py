import datetime
import time
import itertools
import string
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


@app.route("/api/items/<item_type>")
@token_required
def get_items(current_user, item_type):
    user_id = current_user.public_id
    items = Item.query.filter_by(user_id=user_id).filter_by(item_type=item_type).options(
    db.joinedload('studentitems')).filter_by(user_id=user_id).filter_by(item_type=item_type).all()
    item_list =[]
    for item in items:
        count = get_item_student_counts(item)
        unlearned_count = get_unlearned_item_student_counts(item)
        student_list = get_item_student_list(item)[0]
        unlearned_student_list = get_item_student_list(item)[1]
        total_count = count + unlearned_count
        item = {
            'itemId': item.item_id,
            'item': item.item,
            'count': count,
            'unlearnedCount': unlearned_count,
            'students': student_list,
            'unlearnedStudents':unlearned_student_list,
            'totalCount': total_count
        }
        item_list.append(item)
    return jsonify({
        "items": item_list
        })
def get_item_student_list(item_object):
    student_list = []
    unlearned_student_list =[]
    for item in item_object.studentitems:
        if item.Learned == True:
            student = Student.query.filter_by(student_id=item.student_id).first()
            student_list.append(student.name)
        else:
            student = Student.query.filter_by(student_id=item.student_id).first()
            unlearned_student_list.append(student.name)
    return [student_list, unlearned_student_list]


def get_item_student_counts(item):
    item_id = item.item_id
    items = StudentItem.query.filter(StudentItem.item_id == item_id).filter(
        StudentItem.Learned == True).all()
    return len(items)

def get_unlearned_item_student_counts(item):
    item_id = item.item_id
    items = StudentItem.query.filter(StudentItem.item_id == item_id).filter(
        StudentItem.Learned == False).all()
    return len(items)

    
@app.route("/api/item-detail/<item_type>/<item>")
@token_required
def item_detail(current_user, item_type, item):
    """Display item and students who are learning that item"""
    user_id = current_user.public_id
    item_object = Item.query.filter_by(item_id=item, user_id=user_id).first()
    student_items = StudentItem.query.filter_by(
        item_id=item).options(db.joinedload('students')).all()
    learned_student_list = []
    unlearned_student_list =[]
    item_detail = {}

    for student in student_items:
        if student.Learned == False:
            student = {
                'student_id': student.students.student_id,
                'name': student.students.name
                }
            unlearned_student_list.append(student)

        else:
            student = {
                'student_id': student.students.student_id,
                'name': student.students.name
                }
            learned_student_list.append(student)

    item_object = {
        'item_id': item_object.item_id,
        'item': item_object.item,
        'date': item_object.date_added,
        'itemType': item_object.item_type
    }
    # student_list = sorted(student_list, key=itemgetter('name')) 
    item_detail['unlearnedStudentList'] = unlearned_student_list
    item_detail['learnedStudentList'] = learned_student_list
    item_detail['item'] = item_object
    return jsonify(item_detail)

@app.route("/api/unassigned-students/<item>")
@token_required
def get_unassigned_students_item(current_user, item):
    """gets students are not assigned to item"""
    user_id = current_user.public_id
    students = StudentItem.query.filter_by(
        item_id=item, user_id=user_id).options(db.joinedload('students')).all()
    student_ids = []
    for student in students:
        student_ids.append(student.student_id)

    unassigned_students = Student.query.filter_by(user_id=user_id).filter(Student.student_id.notin_(student_ids)).all()
    student_list = []

    for student in unassigned_students:
        student = {
            'student_id': student.student_id,
            'student': student.name 
            
        }

        student_list.append(student)
    student_list = sorted(student_list, key=itemgetter('student'))
    return jsonify([student_list])

@app.route("/api/add-student", methods=['POST'])
@token_required
def add_student(current_user):
    user_id = current_user.public_id
    data = request.get_json()

    names = data.get("names")
    names = names.splitlines()
    db.session.bulk_save_objects(
        [
            Student(
                name=name,
                user_id=user_id,
                grade = "K"
            )
            for name in names
        ]
    )    
    db.session.commit()
    return jsonify(data)

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

@app.route("/api/delete-item", methods=['POST'])
@token_required
def delete_item(current_user):
    data = request.get_json()
    item_id = data.get("item")
    item_type = data.get("itemType")
    user_id = current_user.public_id
    item = Item.query.filter_by(
        item_id=item_id, user_id=user_id).first()
    db.session.delete(item)
    db.session.commit()
    return item_type
  

@app.route("/api/add-item", methods=['POST'])
@token_required
def add_item(current_user):
    data = request.get_json()
    items = data['item']
    item_type = data['itemType']

    user_id = current_user.public_id
    table = str.maketrans({key: None for key in string.punctuation})
    new_string = items.translate(table) 
    new_items = new_string.split()
    user_items = Item.query.filter_by(user_id=user_id).filter_by(item_type=item_type).all()
    user_list = [user.item for user in user_items]
    list_to_add = list(set(new_items).difference(user_list))
    db.session.bulk_save_objects(
        [
            Item(
                item=item,
                user_id=user_id,
                item_type=item_type
            )
            for item in list_to_add
        ]
    )    
    db.session.commit()
    return jsonify(data)

@app.route('/api/add-new-items-to-students', methods=['POST'])
@token_required
def add_new_items_to_students(current_user):
    data = request.get_json()
    items = data['studentItems'].get('item')
    table = str.maketrans({key: None for key in string.punctuation})
    new_string = items.translate(table) 
    new_items = new_string.split()
    item_type = data['studentItems'].get('itemType')
    user_id = current_user.public_id
    item_list = Item.query.filter(Item.item.in_(new_items)).filter(Item.user_id == user_id).filter(Item.item_type==item_type).all()
    student_list = Student.query.filter_by(user_id = user_id).all()
    if student_list == []:
        return "no students"
    
    else:
        item_ids = [item.item_id for item in item_list]
        student_ids = [student.student_id for student in student_list]

        db.session.bulk_save_objects(
            [
                StudentItem(
                    item_id=item_id,
                    student_id=student_id,
                    item_type=item_type,
                    user_id=user_id
                )
                for item_id, student_id in itertools.product(item_ids, student_ids)
            ]
        )
        db.session.commit()
        return "items added!"


@app.route('/api/add-items-to-new-students', methods=['POST'])
@token_required
def add_items_to__new_students(current_user):
    data = request.get_json()
    names = data.get("names")
    table = str.maketrans({key: None for key in string.punctuation})
    new_names = names.translate(table)  
    new_names = new_names.splitlines()
    user_id = current_user.public_id
    student_list = Student.query.filter(Student.name.in_(new_names)).filter(Student.user_id == user_id).all()
    item_list = Item.query.filter_by(user_id = user_id).all()
    items = [(item.item_id, item.item_type)for item in item_list]
    student_ids = [student.student_id for student in student_list]
    db.session.bulk_save_objects(
        [
            StudentItem(
                item_id=items[0],
                student_id=student_id,
                item_type=items[1],
                user_id=user_id
            )
            for items, student_id in itertools.product(items, student_ids)
        ]
    )
    db.session.commit()
    return "student items added!"
# @app.route('/api/add-items-to-student', methods=['POST'])
# @token_required
# def add_items_to_student(current_user):
#     data = request.get_json()
#     data = data.get("studentItems")
#     items = data.get("items")
#     item_type = data.get("itemType")
#     student_id = data.get("student")
#     user_id = current_user.public_id
#     item_list = Item.query.filter(Item.item.in_(items)).filter(Item.user_id == user_id).filter(Item.item_type==item_type).all()
#     item_ids = []
#     for item in item_list:
#         item_ids.append(item.item_id)
#     for item_id in item_ids:
#         new_student_item = StudentItem(
#             item_id=item_id, item_type=item_type,student_id=student_id, user_id=user_id)
#         db.session.add(new_student_item)
#         db.session.commit()

    

@app.route('/api/add-student-to-item', methods=['POST'])
@token_required
def add_student_to_item(current_user):
    data = request.get_json()
    
    students = data.get("students")
    item_id = data.get("id")
    item_type = data.get("itemType")
    user_id = current_user.public_id
    for student_id in students:
        existing_item = StudentItem.query.filter_by(student_id = student_id, 
        item_id = item_id, user_id = user_id).first()
        if not existing_item:
            new_item_student = StudentItem(
                student_id=student_id, item_id=item_id, user_id=user_id, item_type=item_type)
            db.session.add(new_item_student)
            db.session.commit()
        else:
            continue

    return jsonify(data)


@app.route("/api/students")
@token_required
def get_students(current_user):
    start = time.time()
    user_id = current_user.public_id
    students = Student.query.filter_by(user_id=user_id).options(
        db.joinedload('studentitems')).all()
    student_list = []
    for student in students:
        last_word_test = get_test_dates(student.student_id, "words")
        last_letter_test = get_test_dates(student.student_id, "letters")
        last_sound_test = get_test_dates(student.student_id, "sounds")
        word_count = get_student_item_counts(student.student_id, "words")[0]
        unlearned_word_count = get_student_item_counts(student.student_id, "words")[1]
        total_word_count = get_student_item_counts(student.student_id, "words")[2]
        letter_count = get_student_item_counts(student.student_id, "letters")[0]
        unlearned_letter_count = get_student_item_counts(student.student_id, "letters")[1]
        total_letter_count = get_student_item_counts(student.student_id, "letters")[2]
        sound_count = get_student_item_counts(student.student_id, "sounds")[0]
        unlearned_sound_count = get_student_item_counts(student.student_id, "sounds")[1]
        total_sound_count = get_student_item_counts(student.student_id, "sounds")[2]
        word_list = get_student_item_list(student, "words")[0]
        unlearned_word_list = get_student_item_list(student, "words")[1]
        letter_list = get_student_item_list(student, "letters")[0]
        unlearned_letter_list = get_student_item_list(student, "letters")[1]
        sound_list = get_student_item_list(student, "sounds")[0]
        unlearned_sound_list = get_student_item_list(student, "sounds")[1]
        student = {
            'studentId': student.student_id,
            'name': student.name,
            'wordCount': word_count,
            'wordList': word_list,
            'unlearnedWordList': unlearned_word_list,
            'totalWordCount': total_word_count,
            'unlearnedWordCount': unlearned_word_count,
            'lastWordTest': last_word_test,
            'letterCount': letter_count,
            'unlearnedLetterCount': unlearned_letter_count,
            'letterList': letter_list,
            'unlearnedLetterList': unlearned_letter_list,
            'totalLetterCount': total_letter_count,
            'lastLetterTest': last_letter_test,
            'soundCount': sound_count,
            'unlearnedSoundCount': unlearned_sound_count,
            'soundList': sound_list,
            'unlearnedSoundList': unlearned_sound_list,
            'totalSoundCount': total_sound_count,
            'lastSoundTest': last_sound_test
        }
        student_list.append(student)
    end = time.time()
    elapsed_time = end - start
    print('getting all students took', elapsed_time)

    return jsonify(student_list)

@token_required
def get_student_item_counts(current_user, student_id, item_type):
    user_id = current_user.public_id
    items = StudentItem.query.filter_by(user_id = user_id, student_id = student_id, item_type = item_type).all()
    learned_count = 0
    unlearned_count = 0
    total_count = 0
    for item in items:
        if item.Learned == True:
            learned_count +=1
            total_count += 1
        else: 
            unlearned_count += 1
            total_count += 1 
    
    return [learned_count, unlearned_count, total_count]

def get_student_item_list(student, item_type):
    student_id = student.student_id
    items = StudentItem.query.filter(StudentItem.student_id == student_id).filter_by(item_type=item_type).options(db.joinedload('items')).filter_by(item_type=item_type).all()
    item_list = []
    unleared_item_list = []
    for item in items:
        if item.Learned == True:
            item_list.append(item.items.item)
        else: 
            unleared_item_list.append(item.items.item)

    return [item_list, unleared_item_list]


@app.route("/api/details/<student_id>")
@token_required
def student_detail(current_user, student_id):
    """Show student detail"""
    start = time.time()
    user_id = current_user.public_id
    student_object = Student.query.filter_by(
        student_id=student_id, user_id=user_id).first()
    student_items = StudentItem.query.filter_by(
        student_id=student_id).options(db.joinedload('items')).all()
    student = {
        'student_id': student_object.student_id,
        'name': student_object.name
    }
    word_list = []
    letter_list = []
    sound_list = []
    unlearned_word_list = []
    unlearned_letter_list = []
    unlearned_sound_list = []
    word_test = get_test_dates(student_id, "words")
    letter_test = get_test_dates(student_id, "letters")
    sound_test = get_test_dates(student_id, "sounds")
    student_object = {}
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
                    'item': item.items.item
                    }
                unlearned_word_list.append(unlearned_word)
        elif item.item_type == "letters":
            if item.Learned == True:
                letter = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                letter_list.append(letter)
            else:
                unlearned_letter = {
                    'item_id': item.items.item_id,
                    'item': item.items.item}
                unlearned_letter_list.append(unlearned_letter)

        elif item.item_type == "sounds":
            if item.Learned == True:
                sound = {
                    'item_id': item.items.item_id,
                    'item': item.items.item,
                }
                sound_list.append(sound)
            else:
                unlearned_sound = {
                    'item_id': item.items.item_id,
                    'item': item.items.item}
                unlearned_sound_list.append(unlearned_sound)
    word_count = len(word_list)
    unlearned_word_count = len(unlearned_word_list)
    
    total_words = word_count + unlearned_word_count
    letter_count = len(letter_list)
    unlearned_letter_count = len(unlearned_letter_list)
    total_letters = letter_count + unlearned_letter_count
    sound_count = len(sound_list)
    unlearned_sound_count = len(unlearned_sound_list)

    print("unlearned word list", unlearned_word_list, "unlearned letter list", unlearned_letter_list, "unlearned sound list", unlearned_sound_list)
    total_sounds = sound_count + unlearned_sound_count
    student_object['student'] = student
    student_object['wordCount'] = word_count
    student_object['unlearnedWordCount'] = unlearned_word_count
    student_object['totalWordCount'] = total_words
    student_object['wordList'] = word_list
    student_object['unlearnedWordList'] = unlearned_word_list
    student_object['lastWordTest'] = word_test
    student_object['letterCount'] = letter_count
    student_object['unlearnedLetterCount'] = unlearned_letter_count
    student_object['totalLetterCount'] = total_letters
    student_object['letterList'] = letter_list
    student_object['unlearnedLetterList'] = unlearned_letter_list
    student_object['lastLetterTest'] = letter_test
    student_object['soundCount'] = sound_count
    student_object['unlearnedSoundCount'] = unlearned_sound_count
    student_object['totalSoundCount'] = total_sounds
    student_object['soundList'] = sound_list
    student_object['unlearnedSoundList'] = unlearned_sound_list
    student_object['lastSoundTest'] = sound_test
    end = time.time()
    elapsed_time = end - start
    print('getting student detail took', elapsed_time)
    return jsonify(student_object)


@app.route("/api/create-student-test", methods=["POST"])
@token_required
def create_student_test(current_user):
    """creates new student  test row in db, calls update_correct_items
    and update_incorrect_items functions"""

    data = request.get_json()
    student_test = data.get('studentTest')
    test_type = data.get('testType')
    student_id = data.get('studentId')
    user_id = current_user.public_id
    correct_items = []
    incorrect_items = []

    for entry in student_test:

        if entry['answeredCorrectly']:
            correct_items.append(entry.get('testItems'))
        if entry['answeredCorrectly'] == False:
            incorrect_items.append(entry.get('testItems'))
    update_correct_items(student_id, correct_items, test_type, user_id)
    update_incorrect_items(student_id, incorrect_items, test_type, user_id)
    score = calculate_score(correct_items, incorrect_items)
    db.session.add(StudentTestResult(student_id=student_id, user_id=user_id, score=score,
    correct_items=correct_items, incorrect_items=incorrect_items, test_type=test_type))
    db.session.commit()
    return jsonify({'response': 'student test added!'})

def update_correct_items(student_id, correct_items, test_type, user_id):
    """updates correct items in db, called by create_student_test"""
    student_item_list = StudentItem.query.filter_by(student_id=student_id, user_id=user_id, item_type=test_type).options(db.joinedload('items')).filter(
    Item.item.in_(correct_items)).all()
    for item in student_item_list:
        if item.correct_count >= 1:
            item.Learned = True
        item.correct_count = StudentItem.correct_count + 1
        db.session.commit()
    return "correct items"

def update_incorrect_items(student_id, incorrect_items, test_type, user_id):
    """updates incorrect letters in db, called by create_student_test"""
    print("INCORRECT ITEMS", incorrect_items)
    student_item_list = StudentItem.query.filter_by(student_id=student_id, user_id=user_id, item_type=test_type).options(db.joinedload('items')).filter(
    Item.item.in_(incorrect_items)).all()
    print("STUDENT ITEM LIST", student_item_list)
    for item in student_item_list:
        print("item", item.items.item)
        if item.items.item in incorrect_items:
            item.incorrect_count = StudentItem.incorrect_count + 1
            db.session.commit()
    return "incorrect items"

def calculate_score(known_items, unknown_items):
    """calculates student test score, called by create_student_test"""
    score = len(known_items) / (len(known_items) + len(unknown_items))
    score = score * 100
    score = int(round(score))
    return score


@app.route("/api/get-test-dates")
@token_required
def get_test_dates(current_user, student, test_type):
    user_id = current_user.public_id
    student_id = student 
    test_type = test_type
    test_dates = StudentTestResult.query.filter_by(user_id=user_id, student_id=student_id, test_type=test_type).all()
    if test_dates != []:
        most_recent = test_dates[-1].test_date
        most_recent = most_recent.strftime("%a, %b %d")
    else:
        most_recent = "N/A"
    return most_recent

@app.route("/api/get-student-item-test/<item_type>/<student>")
@token_required
def get_student_item_test(current_user, item_type, student):
    """get list of student test results, word_counts and chart_data"""

    user_id = current_user.public_id
    student_id = student
    student_items = StudentItem.query.filter_by(
        user_id=user_id, student_id=student_id, item_type=item_type).options(db.joinedload('items')).options(db.joinedload('students')).all()
    student_tests = StudentTestResult.query.filter_by(
        student_id=student_id, user_id=user_id, test_type=item_type).all()
    item_counts = get_item_counts(student_items)
    student_test_list = get_student_item_test_list(student_tests)
    learned_items_list = get_learned_items_list(student_items)
    item_counts = get_item_counts(student_items)
    test_data = {'itemCounts': item_counts, 'studentTestList':student_test_list, 'learnedItemList': learned_items_list
    }
    return test_data


@app.route("/api/get-all-student-tests/<student_id>")
@token_required
def get_all_student_tests(current_user,  student_id):
    """get list of student test results, word_counts and chart_data"""
    user_id = current_user.public_id
    student_tests = StudentTestResult.query.filter_by(
        student_id=student_id, user_id=user_id).all()
    test_data = {}
    word_test_list = []
    letter_test_list = []
    sound_test_list = []

    for test in student_tests:
        test_date = test.test_date.strftime("%a, %b %d")
        student_test_object = {
            'studentId': test.student_id,
            'score': test.score,
            'testDate': test.test_date,
            'correctItems': test.correct_items,
            'incorrectItems': test.incorrect_items,
            'testType': test.test_type
        }
        if test.test_type == "words":
            word_test_list.append(student_test_object)
            test_data['words'] = get_student_item_test("words", test.student_id)
        elif test.test_type == "letters":
             letter_test_list.append(student_test_object)
             test_data['letters'] = get_student_item_test("letters", test.student_id)
        elif test.test_type == "sounds":
             sound_test_list.append(student_test_object)
             test_data['sounds'] = get_student_item_test("sounds", test.student_id)
    if word_test_list != []:
        word_test_list = word_test_list[-1]
    if letter_test_list != []:
        letter_test_list = letter_test_list[-1]
    if sound_test_list != []:
        sound_test_list = sound_test_list[-1]

    test_object = {
        "testData": test_data,
        "wordTest":word_test_list,
        "letterTest": letter_test_list,
        "soundTest": sound_test_list,
    }
    return jsonify(test_object)

def get_item_counts(student_items):
    """is called by get student test, returns item, times read correctly,times read incorrectly """
    item_counts = []
    for student_item in student_items:
        count = {
            "item": student_item.items.item,
            "correctCount": student_item.correct_count,
            "incorrectCount": student_item.incorrect_count
        }
        item_counts.append(count)

    return item_counts

def get_learned_items_list(student_items):
    """is called by get student test, returns list of learned items"""
    learned_items = []
    for student_item in student_items:
        if student_item.Learned == True:
            learned_items.append(student_item.items.item)
    return learned_items


def get_student_item_test_list(student_test):
    """is called by get_student_item_test, returns list of student tests"""
    student_test_list = []
    for student in student_test:
        test_date = student.test_date.strftime("%a, %b %d")
        student_test_object = {
            'studentId': student.student_id,
            'score': student.score,
            'testDate': test_date,
            'correctItems': student.correct_items,
            'incorrectItems': student.incorrect_items
        }
        student_test_list.append(student_test_object)
    return student_test_list

@app.route("/api/mark-items-learned", methods=["POST"])
@token_required
def mark_items_learned(current_user):
    data = request.get_json()
    student_id = data.get('studentId')
    item = data.get('item')
    item = item['item_id']
    user_id = current_user.public_id
    student_item = StudentItem.query.filter_by(user_id=user_id, student_id=student_id, item_id=item).first()
    student_item.Learned = True
    db.session.commit()
    return jsonify(student_id)

@app.route("/api/mark-items-unlearned", methods=["POST"])
@token_required
def mark_items_unlearned(current_user):
    data = request.get_json()
    student_id = data.get('studentId')
    item = data.get('item')
    item = item['item_id']
    user_id = current_user.public_id
    student_item = StudentItem.query.filter_by(user_id=user_id, student_id=student_id, item_id=item).first()
    student_item.Learned = False
    db.session.commit()
    return jsonify(student_id)

if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')


