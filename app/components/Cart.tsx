'use client';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-[#f7f3ec] p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item: { product: { id: number; icon: string; name: string; description: string; price: number }; quantity: number }) => (
        <div
          key={item.product.id}
          className="flex items-center gap-4 bg-white p-4 rounded mb-4"
        >
          <div className="text-3xl">{item.product.icon}</div>

          <div className="flex-1">
            <h3>{item.product.name}</h3>
            <p className="text-sm text-gray-500">
              {item.product.description}
            </p>
          </div>

          <div>
            {item.quantity} × ₹{item.product.price}
          </div>
        </div>
      ))}
    </div>
  );
}