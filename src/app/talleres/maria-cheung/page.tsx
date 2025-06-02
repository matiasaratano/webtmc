'use client';

import { Footer } from '@/components/ui/footer';
import { ImageModal } from '@/components/ui/image-modal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function MariaCheungPage() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <div className="flex-1 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Maria Cheung</h1>
            
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                La cerámica entró en su vida en 1978, cuando comenzó a estudiar Educación Artística en la universidad.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Su obra se destaca por el rescate cultural a través de instalaciones de arte conceptual.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                A lo largo de su carrera artística ha acumulado varios premios en salones de arte, y ha realizado numerosas exposiciones tanto en su país como en el extranjero.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Maria vive y trabaja en Foz do Iguaçu - Brasil, donde mantiene un taller de cerámica desde 1995. Allí divide su tiempo entre la participación en exposiciones, su rol como jurado en salones de arte y la producción artística.
              </p>

              {/* Espacio para imágenes */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ImageModal 
                  src="/images/01/img1.webp" 
                  alt="Imagen 01a"
                  images={[
                    { src: "/images/01/img1.webp", alt: "Imagen 01a" },
                    { src: "/images/01/img2.png", alt: "Imagen 01b" },
                    { src: "/images/01/img3.jpg", alt: "Imagen 01c" },
                    { src: "/images/01/img4.jpeg", alt: "Imagen 01d" }
                  ]}
                />
                <ImageModal 
                  src="/images/01/img2.png" 
                  alt="Imagen 01b"
                  images={[
                    { src: "/images/01/img1.webp", alt: "Imagen 01a" },
                    { src: "/images/01/img2.png", alt: "Imagen 01b" },
                    { src: "/images/01/img3.jpg", alt: "Imagen 01c" },
                    { src: "/images/01/img4.jpeg", alt: "Imagen 01d" }
                  ]}
                />
                <ImageModal 
                  src="/images/01/img3.jpg" 
                  alt="Imagen 01c"
                  images={[
                    { src: "/images/01/img1.webp", alt: "Imagen 01a" },
                    { src: "/images/01/img2.png", alt: "Imagen 01b" },
                    { src: "/images/01/img3.jpg", alt: "Imagen 01c" },
                    { src: "/images/01/img4.jpeg", alt: "Imagen 01d" }
                  ]}
                />
                <ImageModal 
                  src="/images/01/img4.jpeg" 
                  alt="Imagen 01d"
                  images={[
                    { src: "/images/01/img1.webp", alt: "Imagen 01a" },
                    { src: "/images/01/img2.png", alt: "Imagen 01b" },
                    { src: "/images/01/img3.jpg", alt: "Imagen 01c" },
                    { src: "/images/01/img4.jpeg", alt: "Imagen 01d" }
                  ]}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 mb-20">
        <Link href="/">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
