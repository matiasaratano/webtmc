'use client';

import { Hero } from "@/components/ui/hero-with-group-of-images-text-and-two-buttons";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { WorkshopsCarousel } from "@/components/blocks/workshops-carousel";
import { workshops } from '@/data/workshops';

function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/542255123456', '_blank');
  };

  return (
    <Button 
      size="lg" 
      className="w-fit gap-2 bg-green-600 hover:bg-green-700"
      onClick={handleClick}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      Contactar por WhatsApp
    </Button>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      <WorkshopsCarousel
        title="Nuestros Talleres"
        description="Descubre nuestros talleres especializados en cerámica y aprende de los mejores artistas."
        workshops={workshops}
      />

      {/* Sección de Contacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl tracking-tighter mb-4">Contacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? No dudes en contactarnos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Villa Gesell, Buenos Aires</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+54 2255 123456</span>
            </div>
            <WhatsAppButton />
          </div>

          {/* Mapa */}
          <div className="w-full max-w-4xl mx-auto h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1234567890123!2d-56.96274401349086!3d-37.25075168865299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE1JzAyLjciUyA1NsKwNTcnNDEuOSJX!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
