'use client';

import { Footer } from '@/components/ui/footer';
import { ImageModal } from '@/components/ui/image-modal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CasiopeaPage() {
  return (
    <main className="flex min-h-screen flex-col">
    
      <div className="flex-1 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">CASIOPEA~poeticas cerámicas~</h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              
              
              <p className="text-xl text-muted-foreground tracking-tight">
                piezas artesanales de pastas y esmaltes caseros de gres
              </p>
              
              <p className="text-xl text-muted-foreground tracking-tight">
                Córdoba, Argentina.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                @sol.carranza.sieber y @luan_chin
              </p>

              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Hace ya un tiempo, en enero del 2014, dejamos el taller para ver cómo era la cerámica si la mirábamos desde el movimiento, desde el no lugar definido y a cielo abierto. Emprendimos un viaje en nuestras bicicletas, para ver paisajes nuevos, probar sabores desconocidos, conocer gente distinta y, como eje de todo, aprender más sobre nuestro oficio, la cerámica. Queríamos explorar en movimiento, conocer un poco más el mundo, a pulmón.
              </p>

              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Planeamos un proyecto de relevamiento de talleres latinoamericanos. Viajar, y a medida que avanzáramos, conocer todos los talleres que estuvieran a nuestro alcance. El fin del proyecto era poder generar una especie de red o guía.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                El viaje duró dos años y medio, en los que visitamos 12 países y más de 140 de talleres, museos, y proyectos de cerámica.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Regresamos en el 2016 a retomar nuestro trabajo, al que extrañábamos muchísimo, volvimos a montar nuestro taller y a reponernos económicamente.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Nos llevó cinco años procesar toda esta información -emocional, sensorial, técnica-, y luego de tanto trabajo, junto a dos editoriales hermosas ,de Córdoba y de Buenos Aires, hemos terminado un libro que recopila y relata esta experiencia.
              </p>
              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Para poder imprimir este libro, lo hemos lanzamos en preventa durante el mes de agosto, para poder costear la impresión. Necesitamos vender unos 180 libros para lograrlo. La preventa se está haciendo a través de nuestras redes.
              </p>

              <p className="text-xl text-muted-foreground mb-6 tracking-tight">
                Características del libro: 19 X 13 cm, impreso y editado en Córdoba, en papel bookcell, a color. El libro contiene reflexiones sobre el oficio, ilustraciones, poesía, anécdotas, datos de viaje, y, lo más importante para el mundo de la cerámica, una guía de todos los talleres visitados.
              </p>

              {/* Espacio para imágenes */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ImageModal 
                  src="/images/02/img1.jpg" 
                  alt="Imagen 02a"
                  images={[
                    { src: "/images/02/img1.jpg", alt: "Imagen 02a" },
                    { src: "/images/02/img2.jpg", alt: "Imagen 02b" }
                  ]}
                />
                <ImageModal 
                  src="/images/02/img2.jpg" 
                  alt="Imagen 02b"
                  images={[
                    { src: "/images/02/img1.jpg", alt: "Imagen 02a" },
                    { src: "/images/02/img2.jpg", alt: "Imagen 02b" }
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