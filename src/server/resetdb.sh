from flask import Blueprint

bp = Blueprint('auth', __name__)

from app.auth import routesfrom flask import Blueprint

bp = Blueprint('auth', __name__)

from app.auth import routes# chmod +x whatever you're executing ./
# bash resetdb.sh

dropdb users
dropdb students
dropdb items
dropdb studentitems
dropdb studenttestresults

createdb users
createdb items
createdb students
createdb studenttestresults
createdb studentitems

# start-server.sh