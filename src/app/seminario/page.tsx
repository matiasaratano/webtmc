'use client';

import { Footer } from "@/components/ui/footer";

export default function Seminario() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl tracking-tighter mb-8">El Seminario</h1>
          <div className="space-y-6">
            <p className="text-lg tracking-tight">
              El Seminario se realizará en el Taller Municipal de Cerámica de Villa Gesell, los días 15, 16 y 17 de noviembre de 2024.
            </p>
            <p className="text-lg tracking-tight">
              Está dirigido a ceramistas, artistas, docentes y estudiantes de cerámica, con un cupo máximo de 20 participantes.
            </p>
            <p className="text-lg tracking-tight">
              El Seminario tiene como objetivo principal, generar un espacio de intercambio y reflexión sobre la cerámica contemporánea, a través de la experimentación y la investigación.
            </p>
            <p className="text-lg tracking-tight">
              El Seminario está organizado por el Taller Municipal de Cerámica de Villa Gesell, con el apoyo de la Secretaría de Cultura y Educación de la Municipalidad de Villa Gesell.
            </p>
            <p className="text-lg tracking-tight">
              El Seminario cuenta con el auspicio de la Asociación Argentina de Cerámica.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 