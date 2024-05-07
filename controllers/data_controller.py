from flask import Blueprint, jsonify
import instaloader

data_blueprint = Blueprint('data', __name__)

@data_blueprint.route('/instadata', methods=['GET'])
def get_datas():
    try:
        L = instaloader.Instaloader()
        profile = instaloader.Profile.from_username(L.context, "test")
        return jsonify({
            "followers": profile.followers,
            "followees": profile.followees,
        })
    except Exception as e:
        return jsonify({ "error": str(e) }), 500