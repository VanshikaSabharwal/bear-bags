'use client';

import Checkout from '../components/Checkout';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <Checkout
      cartItems={cart ?? []} // prevents undefined error
      onUpdateQuantity={updateQuantity}
      onRemoveItem={removeFromCart}
      onClearCart={clearCart}
    />
  );
}