from config import db

class Doc(db.Model):
  __tablename__ = 'tb_docs'
  key = db.Column(db.Integer, primary_key=True, autoincrement=True)
  label = db.Column(db.String(255), nullable=False)
  children = db.Column(db.String(3000), nullable=False)

  def __init__(self, label, children):
    self.label = label
    self.children = children