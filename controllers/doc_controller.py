from flask import Blueprint, jsonify, request
from schemas import doc_schema, docs_schema
from models import Doc
from config import db

doc_blueprint = Blueprint('doc', __name__)

@doc_blueprint.route('/docs', methods=['POST'])
def create():
  try: 
    for item in request.json:
      label = item['label']
      children = item['children']
    new_doc = Doc(label, children)
    db.session.add(new_doc)
    db.session.commit()
    return doc_schema.jsonify(new_doc), 201
  except Exception as error:
    return jsonify({
      "message": "Erro ao criar novo documento",
      "error": str(error)
    }), 500


@doc_blueprint.route('/docs', methods=['GET'])
def get_docs():
    try:
        all_docs = Doc.query.order_by(Doc.key.asc()).all()
        result = docs_schema.dump(all_docs)
        return jsonify(result)
    except Exception as e:
        return jsonify({ "error": str(e) }), 500