'use client';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  size?: string;
  count?: number;
  features?: string[];
}

interface CheckoutProps {
  cartItems: { product: Product; quantity: number }[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export default function Checkout({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }: CheckoutProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;
  const impact = Math.round(total * 0.3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        paymentMethod: 'cod'
      });
    }, 4000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--cream)' }}>
        <div className="text-center">
          <div className="text-[60px] md:text-[80px] mb-6">🛒</div>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold mb-4"
              style={{ color: 'var(--forest)' }}>
            Your cart is empty
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Add some Bear Bags to get started!
          </p>
          <a href="/products"
             className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full no-underline font-medium text-sm md:text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-lg"
             style={{ background: 'var(--forest)', color: 'white' }}>
            Browse Products
          </a>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--cream)' }}>
        <div className="text-center max-w-[500px] px-4 md:px-6">
          <div className="text-[60px] md:text-[80px] mb-6">✓</div>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] font-bold mb-4"
              style={{ color: 'var(--forest)' }}>
            Order Placed Successfully!
          </h2>
          <p className="text-base md:text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
            Thank you for choosing Bear Bags. Your order will be delivered soon.
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--forest-light)' }}>
            You are helping us make a difference. 30% of your purchase goes to community development.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-[5%]" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-['Playfair_Display'] text-[32px] md:text-[48px] font-bold mb-8 md:mb-12 text-center"
            style={{ color: 'var(--forest)' }}>
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-[24px] p-4 md:p-8 mb-6 md:mb-8"
                 style={{ background: 'white', border: '1px solid rgba(26,58,42,0.08)' }}>
              <h2 className="font-['Playfair_Display'] text-[20px] md:text-[24px] font-bold mb-4 md:mb-6"
                  style={{ color: 'var(--forest)' }}>
                Your Items
              </h2>

              <div className="space-y-3 md:space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id}
                       className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl border"
                       style={{ borderColor: 'rgba(26,58,42,0.08)' }}>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                         style={{ background: 'var(--cream-dark)' }}>
                      {item.product.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1 text-sm md:text-base" style={{ color: 'var(--forest)' }}>
                        {item.product.name}
                      </h3>
                      <p className="text-xs md:text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                        {item.product.size} • {item.product.count} bags
                      </p>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <div className="flex items-center gap-2 rounded-lg overflow-hidden border"
                             style={{ borderColor: 'rgba(26,58,42,0.15)' }}>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="px-2 md:px-3 py-1 hover:bg-black/5 transition-colors text-sm md:text-base"
                            style={{ color: 'var(--forest)' }}>
                            −
                          </button>
                          <span className="font-medium min-w-[24px] md:min-w-[30px] text-center text-sm md:text-base"
                                style={{ color: 'var(--forest)' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 md:px-3 py-1 hover:bg-black/5 transition-colors text-sm md:text-base"
                            style={{ color: 'var(--forest)' }}>
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-xs md:text-sm opacity-60 hover:opacity-100 transition-opacity"
                          style={{ color: 'var(--destructive)' }}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-['Playfair_Display'] text-[18px] md:text-[20px] font-bold"
                           style={{ color: 'var(--forest)' }}>
                        ₹{item.product.price * item.quantity}
                      </div>
                      <div className="text-xs opacity-60">₹{item.product.price} each</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Form */}
            <div className="rounded-[24px] p-4 md:p-8"
                 style={{ background: 'white', border: '1px solid rgba(26,58,42,0.08)' }}>
              <h2 className="font-['Playfair_Display'] text-[20px] md:text-[24px] font-bold mb-4 md:mb-6"
                  style={{ color: 'var(--forest)' }}>
                Shipping Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors text-sm md:text-base"
                    style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors text-sm md:text-base"
                      style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors text-sm md:text-base"
                      style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                    Address
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors resize-none text-sm md:text-base"
                    style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors text-sm md:text-base"
                      style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--forest)' }}>
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl border outline-none transition-colors text-sm md:text-base"
                      style={{ borderColor: 'rgba(26,58,42,0.15)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--forest)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-3" style={{ color: 'var(--forest)' }}>
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors"
                           style={{
                             borderColor: formData.paymentMethod === 'cod' ? 'var(--forest)' : 'rgba(26,58,42,0.15)',
                             background: formData.paymentMethod === 'cod' ? 'rgba(26,58,42,0.03)' : 'transparent'
                           }}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="font-medium" style={{ color: 'var(--forest)' }}>Cash on Delivery</div>
                        <div className="text-xs opacity-60">Pay when you receive</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors"
                           style={{
                             borderColor: formData.paymentMethod === 'online' ? 'var(--forest)' : 'rgba(26,58,42,0.15)',
                             background: formData.paymentMethod === 'online' ? 'rgba(26,58,42,0.03)' : 'transparent'
                           }}>
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="font-medium" style={{ color: 'var(--forest)' }}>Online Payment</div>
                        <div className="text-xs opacity-60">UPI, Cards, Net Banking</div>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full font-medium text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mt-6"
                  style={{ background: 'var(--forest)', color: 'white' }}>
                  Place Order - ₹{total}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-[24px] p-4 md:p-8 lg:sticky lg:top-4"
                 style={{ background: 'white', border: '1px solid rgba(26,58,42,0.08)' }}>
              <h2 className="font-['Playfair_Display'] text-[20px] md:text-[24px] font-bold mb-4 md:mb-6"
                  style={{ color: 'var(--forest)' }}>
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                  <span style={{ color: 'var(--forest)' }}>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                  <span style={{ color: 'var(--forest)' }}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs" style={{ color: 'var(--forest-light)' }}>
                    ✓ Free shipping on orders above ₹500
                  </p>
                )}
                <div className="pt-3 border-t flex justify-between"
                     style={{ borderColor: 'rgba(26,58,42,0.1)' }}>
                  <span className="font-medium" style={{ color: 'var(--forest)' }}>Total</span>
                  <span className="font-['Playfair_Display'] text-[24px] font-bold"
                        style={{ color: 'var(--forest)' }}>
                    ₹{total}
                  </span>
                </div>
              </div>

              <div className="rounded-xl p-4 mb-6"
                   style={{ background: 'var(--cream-dark)' }}>
                <div className="flex gap-3 items-start">
                  <div className="text-2xl">❤️</div>
                  <div>
                    <div className="font-medium text-sm mb-1" style={{ color: 'var(--forest)' }}>
                      Your Impact
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      ₹{impact} from this order will support community development programs
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>100% Compostable Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Easy Returns & Refunds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
