from config import ma

class DocSchema(ma.Schema):
  class Meta:
    fields = ('key', 'label', 'children')

doc_schema = DocSchema()
docs_schema = DocSchema(many=True)