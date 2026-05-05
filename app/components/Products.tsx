import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  count: number;
  icon: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Small Kitchen Bags',
    description: 'Perfect for daily kitchen waste',
    price: 199,
    size: '19" × 21"',
    count: 30,
    icon: '🗑️',
    features: ['100% Compostable', 'Leak-proof', 'Tear-resistant']
  },
  {
    id: 2,
    name: 'Medium Garbage Bags',
    description: 'Ideal for bathroom and bedroom bins',
    price: 249,
    size: '21" × 24"',
    count: 30,
    icon: '🛍️',
    features: ['100% Compostable', 'Extra Strong', 'Odor Control']
  },
  {
    id: 3,
    name: 'Large Trash Bags',
    description: 'Heavy-duty for large waste bins',
    price: 349,
    size: '24" × 32"',
    count: 20,
    icon: '📦',
    features: ['100% Compostable', 'Maximum Strength', 'Commercial Grade']
  },
  {
    id: 4,
    name: 'Variety Pack',
    description: 'Mix of all sizes for complete home coverage',
    price: 599,
    size: 'Mixed Sizes',
    count: 60,
    icon: '🎁',
    features: ['Best Value', 'All Sizes Included', 'Free Shipping']
  }
];

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  cartItems: { product: Product; quantity: number }[];
}

export function Products({ onAddToCart, cartItems }: ProductsProps) {
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const getCartQuantity = (productId: number) => {
    const item = cartItems.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[5%] text-center">
        <div className="text-[10px] sm:text-xs font-semibold tracking-[2px] sm:tracking-[2.5px] uppercase mb-3 sm:mb-4"
             style={{ color: 'var(--earth)' }}>
          Our Products
        </div>
        <h1 className="font-['Playfair_Display'] font-bold tracking-tight mb-4 sm:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: 'var(--forest)' }}>
          Choose Your Size
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
           style={{ color: 'var(--text-muted)' }}>
          All our bags are 100% compostable, tear-resistant, and leak-proof. Plus, 30% of profits go to community development.
        </p>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const cartQty = getCartQuantity(product.id);
            const isAdded = addedToCart === product.id;

            return (
              <div key={product.id}
                   className="rounded-[20px] sm:rounded-[24px] overflow-hidden border transition-all hover:-translate-y-2 hover:shadow-xl"
                   style={{ background: 'white', borderColor: 'rgba(26,58,42,0.08)' }}>
                {/* Product Icon */}
                <div className="h-32 sm:h-40 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl"
                     style={{ background: 'var(--cream-dark)' }}>
                  {product.icon}
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl font-bold mb-2"
                      style={{ color: 'var(--forest)' }}>
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex gap-3 mb-4 text-xs sm:text-sm">
                    <div className="flex-1 px-2 sm:px-3 py-2 rounded-lg text-center"
                         style={{ background: 'var(--cream-dark)' }}>
                      <div className="font-medium" style={{ color: 'var(--forest)' }}>
                        {product.size}
                      </div>
                      <div className="text-xs opacity-60">Size</div>
                    </div>
                    <div className="flex-1 px-2 sm:px-3 py-2 rounded-lg text-center"
                         style={{ background: 'var(--cream-dark)' }}>
                      <div className="font-medium" style={{ color: 'var(--forest)' }}>
                        {product.count}
                      </div>
                      <div className="text-xs opacity-60">Count</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5 space-y-1.5">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs"
                           style={{ color: 'var(--forest-mid)' }}>
                        <div className="w-1 h-1 rounded-full" style={{ background: 'var(--forest-light)' }}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-['Playfair_Display'] text-[28px] font-bold"
                           style={{ color: 'var(--forest)' }}>
                        ₹{product.price}
                      </div>
                      {cartQty > 0 && (
                        <div className="text-xs font-medium" style={{ color: 'var(--forest-light)' }}>
                          {cartQty} in cart
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:-translate-y-0.5 hover:shadow-md flex-shrink-0"
                      style={{
                        background: isAdded ? 'var(--forest-light)' : 'var(--forest)',
                        color: 'white'
                      }}>
                      {isAdded ? '✓ Added' : '+ Add'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-[5%]" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-3">🌱</div>
            <h4 className="font-medium mb-2" style={{ color: 'var(--forest)' }}>
              100% Compostable
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              No microplastics, no harm to the environment
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3">💪</div>
            <h4 className="font-medium mb-2" style={{ color: 'var(--forest)' }}>
              Super Strong
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Tear-resistant and leak-proof tested
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3">❤️</div>
            <h4 className="font-medium mb-2" style={{ color: 'var(--forest)' }}>
              30% Give Back
            </h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Supporting community development programs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
