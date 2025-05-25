import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()


def test_homepage(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"hello test" in response.data


def test_get_all_products(client):
    response = client.get("/products")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) >= 1


def test_get_product_by_id_valid(client):
    response = client.get("/products/1")
    assert response.status_code == 200
    data = response.get_json()
    assert data["id"] == 1
    assert "name" in data
    assert "price" in data


def test_get_product_by_id_invalid(client):
    response = client.get("/products/999")
    assert response.status_code == 404
