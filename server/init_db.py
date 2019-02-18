import subprocess
import model
from server import app

# subprocess.run(['dropdb', 'students'])
# subprocess.run(["createdb", "students"])
model.connect_to_db(app)
model.db.create_all()
