
from app import create_app

if __name__ == "__main__":
    app = create_app()
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    app.run(port=5000, host='0.0.0.0')
