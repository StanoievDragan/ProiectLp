'use client';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className="text-center p-10 text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
          <img src={item.image} className="w-16 h-16 object-cover rounded" alt={item.name} />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold">{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2 gap-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right font-bold text-xl mt-6">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}
