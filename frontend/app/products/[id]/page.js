"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
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

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        image,
      }),
    });

    if (res.ok) {
      const updated = await res.json();
      setProduct(updated);
      alert("Produs actualizat cu succes!");
    } else {
      alert("Eroare la actualizare.");
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
      <div className="mt-6 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Product Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Price"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Image URL"
        />

        <div className="flex gap-4">
          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Update Product
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
