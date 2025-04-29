import Link from "next/link";


export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <Link
          href={`/products/${product.id}`}
          className="inline-block mt-4 text-blue-600 hover:underline text-sm"
        >
          View Product
        </Link>
        </div>
      </div>
    );
  }
  