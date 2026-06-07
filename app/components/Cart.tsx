'use client';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-[#f7f3ec] p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item: { product: { id: number; icon: string; name: string; description: string; price: number; option?: string }; quantity: number }) => (
        <div
          key={`${item.product.id}-${item.product.option ?? 'default'}`}
          className="flex flex-col gap-4 bg-white p-4 rounded mb-4 sm:flex-row sm:items-center"
        >
          <div className="text-3xl">{item.product.icon}</div>

          <div className="flex-1">
            <h3>{item.product.name}</h3>
            {item.product.option && (
              <p className="text-sm text-gray-500">
                Option: {item.product.option === 'subscribe' ? 'Subscribe & Save' : 'One-Time Purchase'}
              </p>
            )}
            <p className="text-sm text-gray-500">
              {item.product.description}
            </p>
          </div>

          <div className="text-right">
            <div className="font-semibold">{item.quantity} × ₹{item.product.price}</div>
            <div className="text-sm text-gray-500">Total: ₹{item.product.price * item.quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
}