'use client';

import Image from 'next/image';
import Link from 'next/link';
import { workshops } from '@/data/workshops';
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TalleresPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl tracking-tighter mb-4">Nuestros Talleres</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre todos nuestros talleres especializados en cerámica y aprende de los mejores artistas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {workshops.map((workshop) => (
              <Link
                key={workshop.id}
                href={workshop.href}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary">
                    {workshop.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {workshop.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
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
        </div>
      </section>

      <Footer />
    </main>
  );
} 