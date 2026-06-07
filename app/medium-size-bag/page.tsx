'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { getProductBySlug } from '@/lib/products';

const page = () => {
  const product = getProductBySlug('medium-size-bag');
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<'subscribe' | 'oneTime'>('subscribe');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const subscribePrice = Math.round(product.price * 0.9);
  const selectedPrice = selectedOption === 'subscribe' ? subscribePrice : product.price;

  const handleDecrease = () => setQuantity((value) => Math.max(value - 1, 1));
  const handleIncrease = () => setQuantity((value) => value + 1);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.title,
        description: product.description,
        price: selectedPrice,
        icon: product.icon,
        option: selectedOption,
      },
      quantity
    );
  };

  return (
    <main className="bg-[#f4f4ec] min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">

          {/* Left image + thumbnails */}
          <section className="space-y-6">
            <div className="overflow-hidden rounded-[34px] border border-[#d3e5c9] bg-white/90 p-6 shadow-[0_22px_56px_rgba(36,71,63,0.12)]">
              <div className="relative mx-auto h-[520px] max-w-[640px] overflow-hidden rounded-[28px] p-8 sm:p-10">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-contain shadow-xl"
                  priority
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button className="grid h-11 w-11 place-items-center rounded-full bg-[#dbe9d7] text-[#23473f] shadow-sm transition hover:bg-[#c9ddc4]">
                <FiChevronLeft size={20} />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-20 w-20 overflow-hidden rounded-2xl border border-[#cfe2cf] bg-white shadow-sm"
                  >
                    <Image
                      src="/images/2box_2Roll_White_ 2000 x 2000_px_without BG.png"
                      alt="Thumbnail"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button className="grid h-11 w-11 place-items-center rounded-full bg-[#dbe9d7] text-[#23473f] shadow-sm transition hover:bg-[#c9ddc4]">
                <FiChevronRight size={20} />
              </button>
            </div>
          </section>

          {/* Right details */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-[#134632] sm:text-5xl">
                {product.title}
              </h1>

              <p className="text-lg font-semibold text-[#c82b2d]">₹{selectedPrice}</p>
            </div>

            <div className="rounded-[28px] bg-[#0f3f30] p-1 shadow-[0_20px_40px_rgba(15,63,48,0.18)]">
              <button
                type="button"
                onClick={() => setSelectedOption('subscribe')}
                className={`w-full rounded-[26px] bg-white px-6 py-6 sm:px-8 sm:py-7 text-left transition ${
                  selectedOption === 'subscribe'
                    ? 'border-2 border-[#23473f] shadow-sm'
                    : 'border border-[#c4d9ca]'
                }`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-[#23473f]">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#23473f] text-[#23473f]">●</span>
                    <span className="font-semibold text-lg">{product.subscriptionLabel}</span>
                  </div>
                  <span className="text-xl font-extrabold text-[#0f3f30]">₹{subscribePrice}</span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="text-sm font-semibold text-[#3b604c]">Deliver Every:</span>
                  <div className="flex w-full items-center justify-between rounded-[18px] border border-[#c4d9ca] bg-[#f8f8f4] px-4 py-3 text-left text-sm font-medium text-[#2f523a] shadow-sm">
                    <span>{product.subscriptionDetails}</span>
                    <FiChevronDown size={18} />
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedOption('oneTime')}
                className={`w-full rounded-[26px] px-6 py-5 sm:px-8 text-left transition ${
                  selectedOption === 'oneTime'
                    ? 'border-2 border-[#23473f] bg-[#e1f0e4] shadow-sm'
                    : 'border border-transparent bg-[#0f3f30]'
                }`}>
                <div className="flex items-center gap-3 text-white">
                  <span className="grid h-5 w-5 shrink-0 rounded-full border border-white/70 bg-transparent" />
                  <span className="text-base font-semibold">{product.oneTimeLabel}</span>
                  <span className="ml-auto text-lg font-extrabold text-white">₹{product.price}</span>
                </div>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex items-center gap-1 rounded-3xl border border-[#d1ddcf] bg-white px-3 py-2 shadow-sm">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="h-10 w-10 rounded-2xl border border-[#c7d7c7] bg-[#f8fcf6] text-xl font-semibold text-[#23473f]">
                  −
                </button>
                <span className="min-w-[48px] text-center text-lg font-semibold text-[#23473f]">{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="h-10 w-10 rounded-2xl border border-[#c7d7c7] bg-[#f8fcf6] text-xl font-semibold text-[#23473f]">
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#f7d843] px-6 text-base font-semibold text-[#1f3a2d] shadow-md transition hover:bg-[#f7dd54]">
                Add to Cart - ₹{selectedPrice * quantity}
              </button>
            </div>

            <div className="rounded-[30px] border border-[#dbe7d2] bg-white p-6 shadow-sm">
              <button className="text-sm font-semibold text-[#23473f] underline underline-offset-4">
                See Purchase Options
              </button>
              <p className="mt-4 text-sm leading-7 text-[#555]">
                {product.summary}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#555]">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#23473f]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
