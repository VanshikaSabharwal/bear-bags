'use client';

import { useState } from 'react';
import Image from 'next/image';

const letters = [
  {
    name: 'Samarthanam Trust',
    image: '/letters/samarthanam-preview.jpg',
    pdf: '/letters/samarthanam-letter.pdf',
  },
  {
    name: 'Gana Jyothi Trust',
    image: '/letters/gana-jyothi-preview.jpg',
    pdf: '/letters/gana-jyothi-letter.pdf',
  },
];

export default function NGOAcknowledgements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-4xl font-semibold text-center mb-4">
            NGO Acknowledgements
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Recognition letters received from our partner organizations.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {letters.map((letter) => (
              <div
                key={letter.name}
                className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setSelectedImage(letter.image)}
                  className="relative w-full h-[450px]"
                >
                  <Image
                    src={letter.image}
                    alt={letter.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {letter.name}
                  </h3>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedImage(letter.image)}
                      className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
                    >
                      View Letter
                    </button>

                    <a
                      href={letter.pdf}
                      download
                      className="px-5 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
        >
          <div
            className="relative max-w-5xl w-full h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full px-4 py-2"
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Acknowledgement Letter"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}