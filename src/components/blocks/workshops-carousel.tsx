'use client';

import Image from 'next/image';
import Link from 'next/link';
import { workshops } from '@/data/workshops';

export function WorkshopsCarousel() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop) => (
          <Link 
            key={workshop.id} 
            href={`/talleres/${workshop.id.toLowerCase()}`}
            className="group block transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
              {workshop.images && workshop.images.length > 0 ? (
                <Image
                  src={workshop.images[0].src}
                  alt={workshop.images[0].alt}
                  fill
                  className="object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105"
                />
              ) : (
                <span className="text-5xl text-gray-400 font-bold">{workshop.letra}</span>
              )}
            </div>
            <div className="mb-1 text-sm text-gray-500 font-semibold">Taller {workshop.letra}</div>
            <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">
              {workshop.nombre || 'Nombre del taller'}
            </h3>
            <div className="text-base text-gray-700 mb-2">
              <span className="font-medium">Docente:</span> {workshop.docente}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WorkshopsDestacadosCarousel() {
  const destacados = workshops.filter(w => w.id === '11' || w.id === '24');
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destacados.map((workshop) => (
          <Link 
            key={workshop.id} 
            href={`/talleres/${workshop.id.toLowerCase()}`}
            className="group block transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
              {workshop.images && workshop.images.length > 0 ? (
                <Image
                  src={workshop.images[0].src}
                  alt={workshop.images[0].alt}
                  fill
                  className="object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105"
                />
              ) : (
                <span className="text-5xl text-gray-400 font-bold">{workshop.letra}</span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-yellow-700">
              {workshop.nombre || 'Nombre del taller'}
            </h3>
            <div className="text-base text-gray-700 mb-2">
              <span className="font-medium">Docente:</span> {workshop.docente}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
