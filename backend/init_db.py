from app import db, Product, app

with app.app_context():
    db.create_all()

with app.app_context():
    nritems=Product.query.count()
if nritems == 0:
    products = [
        Product(
            name="Tricou cu imprimeu",
            price=27.99,
            image="https://images.unsplash.com/photo-1739001402245-af41b0f740b4?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        Product(
            name="Tricou cu imprimeu Vintage",
            price=27.99,
            image="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/7/4/745DE-01X-050-1-1000304.jpg"
        ),
        Product(
            name="Tricou cu imprimeu",
            price=27.99,
            image="https://static.cropp.com/media/catalog/product/7/1/716DE-00X-050-1-1042521.jpg"
        ),
        Product(
            name="Tricou cu imprimeu",
            price=51.99,
            image="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/7/6/766DE-00X-001-1-1028743_3.jpg"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
        ),
        Product(
            name="Sosete sporty",
            price=51.99,
            image="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/9/1/9132V-00X-002-1-882148.jpg"
        ),
        Product(
            name="Sosete sporty cu imprimeu goofy",
            price=51.99,
            image="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/3/2/324DD-49X-001-1-962701_1.jpg"
        ),
        Product(
            name="Pantaloni Scurti",
            price=51.99,
            image="https://static.cropp.com/media/catalog/product/cache/850/a4e40ebdc3e371adff845072e1c73f37/2/3/233CU-09M-050-1-963830_2.jpg"
        ),
        Product(
            name="Pantaloni Scurti emo",
            price=51.99,
            image="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/3/3/330DE-99X-050-1-1021978.jpg"
        ),
        Product(
            name="Sporty Sneakers",
            price=51.99,
            image="https://picsum.photos/200/300"
        ),
        Product(
            name="Sporty Shoes '2'",
            price=51.99,
            image="https://cdn.4f.com.pl/media/catalog/product/cache/126134d464c7385b2f5a1c0d60cd5352/4/F/4FRSS25FSPOM147-20S-P-01-MAIN.jpg"
        ),
        Product(
            name="Costum catwoman",
            price=51.99,
            image="https://cdn.4f.com.pl/media/catalog/product/cache/126134d464c7385b2f5a1c0d60cd5352/4/F/4FALSSS25TFTIF382-20S-M-04.jpg"
        )
    ]

    db.session.add_all(products)
    db.session.commit()

print(" Baza de date a fost creată și populată cu succes.")
