'use client';

import { Footer } from '@/components/ui/footer';
import { ImageModal } from '@/components/ui/image-modal';
import { WorkshopButtons } from '@/components/ui/workshop-buttons';
import { Workshop } from '@/data/workshops';

interface WorkshopPageProps {
  workshop: Workshop;
}

export function WorkshopPage({ workshop }: WorkshopPageProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">{workshop.title}</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              {workshop.bio && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Mini Biografía</h2>
                  <div className="space-y-4">
                    {workshop.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-xl text-muted-foreground tracking-tight">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {workshop.description && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Descripción del taller</h2>
                  <div className="space-y-4">
                    {workshop.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-xl text-muted-foreground tracking-tight">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {workshop.images.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Galería</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {workshop.images.map((image, index) => (
                      <ImageModal 
                        key={index}
                        src={image.src} 
                        alt={image.alt}
                        images={workshop.images}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      <WorkshopButtons />

      <Footer />
    </main>
  );
} 