'use client';
import React, { useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Testimonial {
  type: "image" | "video";
  name: string;
  image?: string;
  video?: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    type: "image",
    name: "Avisha",
    image: "/images/review/avisha_review.jpeg",
    quote: "100% Recommend. Very Very good quality bags, using it for my pets and kitchen, would totally recommend.",
    avatar: "A",
    rating: 5,
  },
  {
    type: "video",
    name: "Anoop",
    video: "/videos/anoop_review.MP4",
    quote: "I personally liked the bags. The price is a bit higher compared to the local options, but the product quality is good. The moment I first held the bag, it felt premium and sturdier than most garbage bags I have used.",
    avatar: "A",
    rating: 4,
  },
  {
    type: "image",
    name: "Mekhala",
    image: "/images/review/mekhala_review.jpeg",
    quote: "Purchased these bear bags from Amazon, and the quality of these bags is visible, the bags are thick so do not anticipate any leakage, big enough to fit the dustbins properly and plus they are compostable.",
    avatar: "M",
    rating: 4.5,
  },
  {
    type: "image",
    name: "Sachin",
    image: "/images/review/sachin_review.jpeg",
    quote: "Great product! The bags are sturdy and handle daily waste without tearing. Reliable and well made, glad to have found a compostable option that doesn't compromise on strength.",
    avatar: "S",
    rating: 5,
  },
  {
    type: "video",
    name: "Ayushi",
    video: "/videos/ayushi_review.mp4",
    quote: "Quality is good, strength is also good, can hold the household waste with ease.",
    avatar: "A",
    rating: 5,
  },
  {
    type: "image",
    name: "Anish",
    image: "/images/review/anish_review.jpeg",
    quote: "Bear Bag is really good, great build quality, good strength and we were able to fill it completely without it getting stretched. Would recommend it to folks interested to contribute to mother earth!",
    avatar: "M",
    rating: 5,
  },
  {
    type: "image",
    name: "Lavanya",
    image: "/images/review/lavanya_review.jpg",
    quote: "Good Quality biodegradable bags. Strong, practical and eco-friendly.",
    avatar: "L",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex items-center gap-1 text-[#ffb400] text-lg">
      {[...Array(Math.floor(rating))].map((_, i) => <FaStar key={i} />)}
      {rating % 1 !== 0 && <FaStarHalfAlt />}
    </div>
  );
}

function TestimonialCard({ item, onMouseEnter, onMouseLeave }: {
  item: Testimonial;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="w-[300px] sm:w-[340px] shrink-0 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-sm"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.type === "image" && item.image && (
        <div className="mb-5 overflow-hidden rounded-2xl">
          <img src={item.image} alt={item.name} className="h-[200px] sm:h-[240px] w-full object-cover" />
        </div>
      )}
      {item.type === "video" && item.video && (
        <div className="mb-5 overflow-hidden rounded-2xl">
          <video src={item.video} autoPlay muted loop playsInline className="h-[200px] sm:h-[240px] w-full object-cover" />
        </div>
      )}

      <StarRating rating={item.rating} />

      <p className="text-neutral-700 leading-7 mb-6 text-sm sm:text-base">
        "{item.quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm sm:text-base shrink-0">
          {item.avatar}
        </div>
        <h4 className="font-semibold text-neutral-900">{item.name}</h4>
      </div>
    </div>
  );
}

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    let animationFrame: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current) {
        position -= speed;
        const track = trackRef.current;
        if (track) {
          const firstSetWidth = track.scrollWidth / 2;
          if (Math.abs(position) >= firstSetWidth) position = 0;
          track.style.transform = `translateX(${position}px)`;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="testimonials" className="bg-[#f8f8f6] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-neutral-500 mb-3">
          Customer Reviews
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">
          What people are saying
        </h2>
      </div>

      {/* ── Mobile / tablet: touch-scrollable row, no animation ── */}
      <div className="lg:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-5 sm:px-8 pb-4 w-max">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* ── Desktop: animated marquee ── */}
      <div className="hidden lg:block relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f8f8f6] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f8f8f6] to-transparent pointer-events-none" />

        <div ref={trackRef} className="flex w-max will-change-transform">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="mx-3">
              <TestimonialCard
                item={item}
                onMouseEnter={() => { isPaused.current = true; }}
                onMouseLeave={() => { isPaused.current = false; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
