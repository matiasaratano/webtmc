'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  images: { src: string; alt: string }[];
}

export function ImageModal({ src, alt, images }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div 
        className="relative h-80 w-full cursor-pointer"
        onClick={() => handleOpen(images.findIndex(img => img.src === src))}
      >
        <Image 
          src={src} 
          alt={alt} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg transition-transform hover:scale-105" 
        />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 p-2"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 text-white hover:text-gray-300 p-2"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl max-h-[90vh]">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
} 