import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store", 
  });

  const products = await res.json();

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">janes </h1>
    </section>
  );
}