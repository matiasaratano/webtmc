'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Workshop } from '@/data/workshops';

interface WorkshopsCarouselProps {
  title: string;
  description: string;
  workshops: Workshop[];
}

export function WorkshopsCarousel({ title, description, workshops }: WorkshopsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 1 : 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= workshops.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? Math.max(0, workshops.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleWorkshops = workshops.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-tighter mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {workshops.length > itemsPerPage && (
              <button
                onClick={prevSlide}
                className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {visibleWorkshops.map((workshop) => (
                    <Link key={workshop.id} href={workshop.href} className="group block">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={workshop.image}
                          alt={workshop.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                        {workshop.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {workshop.description}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {workshops.length > itemsPerPage && (
              <button
                onClick={nextSlide}
                className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Link 
              href="/talleres"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver todos los talleres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
