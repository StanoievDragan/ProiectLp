from flask import Flask, jsonify, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


products = [
    {
        "id": 1,
        "name": "Cool T-Shirt",
        "price": 29.99,
        "image": "https://images.unsplash.com/photo-1585386959984-a4155220a4b7?auto=format&fit=crop&w=400&q=80",
    },
    {
        "id": 2,
        "name": "Stylish Hat",
        "price": 19.99,
        "image": "https://images.unsplash.com/photo-1591348276312-3be32a9c899e?auto=format&fit=crop&w=400&q=80",
    },
    {
        "id": 3,
        "name": "Czuzzz",
        "price": 51.99,
        "image": "https://images.unsplash.com/photo-1591348276312-3be32a9c899e?auto=format&fit=crop&w=400&q=80",
    }
]

@app.route('/')
def hello():
    return "hello test"

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route("/products/<int:product_id>")
def get_product(product_id):

    product = next((p for p in products if p["id"] == product_id), None)
    if product is None:
        abort(404)
    return jsonify(product)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)