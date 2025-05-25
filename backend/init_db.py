from app import db, Product, app

with app.app_context():

    db.create_all()


    Product.query.delete()


    products = [
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        )


    ]


    db.session.add_all(products)
    db.session.commit()

    print(" Baza de date a fost creată și populată cu succes.")
