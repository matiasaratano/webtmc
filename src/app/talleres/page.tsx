'use client';

import { Footer } from '@/components/ui/footer';
import { ImageModal } from '@/components/ui/image-modal';
import { workshops } from '@/data/workshops';
import Link from 'next/link';

export default function TalleresPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Talleres</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workshops.map((workshop) => (
                <Link 
                  key={workshop.id} 
                  href={`/talleres/${workshop.letra}`}
                  className="group block"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    {workshop.images && workshop.images.length > 0 ? (
                      <ImageModal 
                        src={workshop.images[0].src} 
                        alt={workshop.images[0].alt}
                        images={workshop.images}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Sin imagen</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{workshop.nombre}</h2>
                  <p className="text-muted-foreground line-clamp-2">
                    {workshop.descripcion ? workshop.descripcion.split('\n\n')[0] : 'Sin descripción disponible'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 