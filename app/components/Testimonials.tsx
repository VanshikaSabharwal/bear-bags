'use client';
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    type: "image",
    name: "Avisha",
    image: "/images/review/avisha_review.jpeg",
    quote:
      "I've tried at least four eco-friendly garbage bags before.",
    avatar: "A",
  },

  {
    type: "video",
    name: "Anoop",
    video: "/videos/anoop_review.MP4",
    quote:
      "Love that 30% of profits go to a good cause.",
    avatar: "A",
  },
   {
    type: "image",
    name: "Mekhala",
    image: "/images/review/mekhala_review.jpeg",
    quote:
      "Finally found a compostable bag that actually works.",
    avatar: "M",
  },
  {
    type: "image",
    name: "Sachin",
    image: "/images/review/sachin_review.jpeg",
    quote:
      "Finally switched my entire home to compostable bags.",
      avatar: "S",
  },
    {
    type: "video",
    name: "Ayushi",
    video: "/videos/ayushi_review.mp4",
    quote:
      "Love that 30% of profits go to a good cause.",
    avatar: "A",
  },
   {
    type: "image",
    name: "Anish",
    image: "/images/review/anish_review.jpeg",
    quote:
      "Finally found a compostable bag that actually works.",
    avatar: "M",
  },
  {
    type: "image",
    name: "Lavanya",
    image: "/images/review/lavanya_review.jpg",
    quote:
      "Finally switched my entire home to compostable bags.",
      avatar: "L",
  },
];
interface TrackType {
  scrollWidth: number;
  style: {
    transform: string;
  }
}

const Testimonials = () => {
const trackRef = useRef<HTMLDivElement | null>(null);
const isPaused = useRef(false);

  useEffect(() => {
    let animationFrame: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;

      const track: TrackType | null = trackRef.current;

      if (track) {
        if(!isPaused.current) {
          position -= speed;
        
        const firstSetWidth = track.scrollWidth / 2;

        if (Math.abs(position) >= firstSetWidth) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
      }
    }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#f8f8f6] overflow-hidden"
    >
      <div className="text-center mb-14 px-4">
        <p className="uppercase tracking-[0.2em] text-sm text-neutral-500 mb-3">
          Customer Reviews
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">
          What people are saying
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f8f8f6] to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f8f8f6] to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
<div
  key={index}
  className="w-[350px] shrink-0 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm mx-3"
    onMouseEnter={() => {
    isPaused.current = true;
  }}
  onMouseLeave={() => {
    isPaused.current = false;
  }}
>

  {/* IMAGE */}
  {item.type === "image" && item.image && (
    <div className="mb-5 overflow-hidden rounded-2xl">
      <img
        src={item.image}
        alt={item.name}
        className="h-[240px] w-full object-cover"
      />
    </div>
  )}

  {/* VIDEO */}
  {item.type === "video" && item.video && (
    <div className="mb-5 overflow-hidden rounded-2xl">
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="h-[240px] w-full object-cover"
      />
    </div>
  )}

  <div className="mb-4 flex text-[#ffb400] text-lg">
    ★★★★★
  </div>

  <p className="text-neutral-700 leading-7 mb-6">
    “{item.quote}”
  </p>

  <div className="flex items-center gap-4">

    {item.avatar ? (
      <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center font-semibold">
        {item.avatar}
      </div>
    ) : (
      <img
        src={item.image}
        alt={item.name}
        className="h-12 w-12 rounded-full object-cover"
      />
    )}

    <div>
      <h4 className="font-semibold text-neutral-900">
        {item.name}
      </h4>

      {/* <p className="text-sm text-neutral-500">
        {item.role}
      </p> */}
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;