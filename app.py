from flask import Flask
from config import db, ma
from flask_migrate import Migrate
from controllers import doc_blueprint, data_blueprint
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:jakki@localhost/db_react_project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db.init_app(app)
ma.init_app(app)

migrate = Migrate(app, db)

app.register_blueprint(doc_blueprint)
app.register_blueprint(data_blueprint)

if __name__ == '__main__':
  app.run(port=5000, host='localhost', debug=True)