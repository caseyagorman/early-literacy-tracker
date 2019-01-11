from flask import (Flask, jsonify, request, session)
from jinja2 import StrictUndefined
from flask_cors import CORS, cross_origin
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


if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
