'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { workshops } from '@/data/workshops';

export function WorkshopsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const workshopsPerPage = 3;
  const totalWorkshops = workshops.length;
  const totalPages = Math.ceil(totalWorkshops / workshopsPerPage);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const visibleWorkshops = workshops.slice(
    currentIndex * workshopsPerPage,
    (currentIndex + 1) * workshopsPerPage
  );

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight"></h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0 || isTransitioning}
            className="border-gray-300 hover:border-gray-400 hover:bg-gray-100"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1 || isTransitioning}
            className="border-gray-300 hover:border-gray-400 hover:bg-gray-100"
          >
            <ChevronRight className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleWorkshops.map((workshop) => (
          <Link 
            key={workshop.id} 
            href={`/talleres/${workshop.slug}`} 
            className={`group block transition-all duration-300 ease-in-out transform ${
              isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image
                src={workshop.images[0].src}
                alt={workshop.images[0].alt}
                fill
                className="object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
              {workshop.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 transition-colors duration-300 group-hover:text-foreground">
              {workshop.description.split('\n\n')[0]}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/talleres">
          <Button 
            variant="outline" 
            size="lg"
            className="transition-all duration-300 hover:scale-105 border-gray-300 hover:border-gray-400 hover:bg-gray-100"
          >
            Ver todos los talleres
          </Button>
        </Link>
      </div>
    </div>
  );
}
