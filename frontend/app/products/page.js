import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Cool T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/300x300?text=T-Shirt",
  },
  {
    id: 2,
    name: "Stylish Hat",
    price: 19.99,
    image: "https://via.placeholder.com/300x300?text=Hat",
  },
  {
    id: 3,
    name: "Comfortable Shoes",
    price: 59.99,
    image: "https://via.placeholder.com/300x300?text=Shoes",
  },
  {
    id: 4,
    name: "Backpack",
    price: 49.99,
    image: "https://via.placeholder.com/300x300?text=Backpack",
  },
];

export default function ProductsPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
