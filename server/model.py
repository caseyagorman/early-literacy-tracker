from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


db = SQLAlchemy()


class User(db.Model):
    """User of literacy website."""

    __tablename__ = "users"

    id = db.Column(db.Integer,
                   autoincrement=True,
                   primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    username = db.Column(db.String(64), nullable=False, unique=True)
    email = db.Column(db.String(64), nullable=False, unique=True)
    password = db.Column(db.String(128))
    created = db.Column(db.DateTime, nullable=False,
                           default=datetime.now)

    students = db.relationship(
        'Student', cascade="save-update, merge, delete")
    items = db.relationship('Item', cascade="save-update, merge, delete") 
    studentitems = db.relationship(
        'StudentItem', cascade="save-update, merge, delete")
    studenttestresults = db.relationship(
        'StudentTestResult', cascade="save-update, merge, delete")


    def __repr__(self):
        return f"<User id={self.public_id} email={self.email}>"


class Student(db.Model):
    """table of students"""

    __tablename__ = "students"

    student_id = db.Column(
        db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=False)
    name = db.Column(db.String(64), nullable=False)

    users = db.relationship(
        'User')
    studentitems = db.relationship(
        'StudentItem', cascade="save-update, merge, delete")
    studenttestresults = db.relationship(
        'StudentTestResult', cascade="save-update, merge, delete")
    def __repr__(self):
        return f"<Student student_id={self.student_id} first_name={self.name}>"

class ReadingLevel(db.Model):
    __tablename__ = "readinglevels"
    reading_level_id = db.Column(
        db.Integer, autoincrement=True, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.student_id'), nullable=False)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=False)
    reading_level = db.Column(db.String(25), nullable=False)
    students = db.relationship(
        'Student')
    users = db.relationship(
        'User')

class Item(db.Model):
    """table of items"""

    __tablename__ = "items"

    item_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    item_type = db.Column(db.String(25), nullable=False)
    item = db.Column(db.String(25), nullable=False)
    date_added = db.Column(db.DateTime, nullable=False,
                           default=datetime.today)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=False)
    custom = db.Column(db.Boolean, unique=False, default=False)
    studentitems = db.relationship(
        'StudentItem', cascade="save-update, merge, delete")
    users = db.relationship(
        'User')

    def __repr__(self):
        return f"<Item item_id={self.item_id} item={self.item}>"



class StudentItem(db.Model):
    """table of student items"""

    __tablename__ = "studentitems"

    student_item_id = db.Column(
        db.Integer, autoincrement=True, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey(
        'items.item_id'), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.student_id'), nullable=False)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=False)
    item_type = db.Column(db.String(25), nullable=False)
    added_to_student = db.Column(
        db.DateTime, nullable=False, default=datetime.today)
    correct_count = db.Column(db.Integer, default=0, nullable=True)
    incorrect_count = db.Column(db.Integer, default=0, nullable=True)
    Learned = db.Column(db.Boolean, unique=False, default=False)

    students = db.relationship(
        'Student')
    items = db.relationship(
        'Item')
    users = db.relationship(
        'User')

    def __repr__(self):
        return f"<StudentItem student_item_id={self.student_item_id}>"


class StudentTestResult(db.Model):
    """table of student tests"""

    __tablename__ = "studenttestresults"

    student_test_id = db.Column(
        db.Integer, autoincrement=True, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.student_id'), nullable=False)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=False)
    test_type = db.Column(db.String(25), nullable=False)
    score = db.Column(db.Float)
    test_date = db.Column(db.DateTime, nullable=True,
                          default=datetime.today)
    correct_items = db.Column(
        db.ARRAY(db.String(25)))
    incorrect_items = db.Column(
        db.ARRAY(db.String(25)))

    students = db.relationship(
        'Student')
    users = db.relationship(
        'User')

    def __repr__(self):
        return f"<StudentTestResults student_test_id={self.student_test_id}>"


    # def __repr__(self):
    #     return f"<StudentTestResults student_test_id={self.student_test_id}>"


def connect_to_db(app):
    """Connect the database to our Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///students'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
    print("Connected to DB.")

