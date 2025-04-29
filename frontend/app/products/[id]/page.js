export default async function ProductDetail({ params }) {
    const { id } = params;
  
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      return <p className="text-center p-8">Product not found.</p>;
    }
  
    const product = await res.json();
  
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">${product.price}</p>
        <p className="text-md text-gray-700 mt-4">
          {/* Example description */}
          This is a high-quality {product.name} perfect for everyday use.
        </p>
      </div>
    );
  }
  