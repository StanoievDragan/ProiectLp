'use client';
import Link from "next/link";
import { useCart } from "../app/context/CartContext"; 

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); 

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.price} lei</p>

      
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition text-sm"
        >
          Adauga în coș
        </button>

        <Link
          href={`/products/${product.id}`}
          className="block mt-2 text-blue-600 hover:underline text-sm text-center"
        >
          Vezi detalii
        </Link>
      </div>
    </div>
  );
}
