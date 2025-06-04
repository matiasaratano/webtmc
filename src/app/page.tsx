'use client';

import { WorkshopsCarousel } from '@/components/blocks/workshops-carousel';
import { Footer } from '@/components/ui/footer';
import { Hero } from '@/components/blocks/hero';
import { ContactSection } from '@/components/blocks/contact-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      <div className="flex-1 w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl tracking-tighter mb-4">Talleres</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros talleres especializados en cerámica
            </p>
          </div>
          <WorkshopsCarousel />
        </div>
      </div>

      <ContactSection />

      <Footer />
    </main>
  );
}
