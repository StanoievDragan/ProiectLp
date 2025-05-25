"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      } else {
        router.push("/products");
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Esti sigur ca vrei sa stergi produsul?");
    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/products");
    } else {
      alert("Failed to delete the product.");
    }
  };

  if (!product) return <p className="p-8 text-center">Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded"
      />
      <h1 className="text-black color text-3xl font-bold mt-6">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">${product.price}</p>
      <p className="text-md text-gray-700 mt-4">
      Acesta este un {product.name} de înaltă calitate, perfect pentru utilizarea de zi cu zi. Fabricat din materiale durabile, acest produs oferă confort și stil. Ideal pentru orice ocazie, fie că este vorba de o întâlnire casuală sau de o ieșire în oraș. Cu un design modern și funcțional, acest {product.name} este alegerea perfectă pentru cei care apreciază calitatea și estetica. Nu rata ocazia de a adăuga acest produs versatil la colecția ta!

      </p>

      <button
        onClick={handleDelete}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Delete Product
      </button>
    </div>
  );
}
