'use client';

import Image from 'next/image';

export default function SeminarioPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 tracking-tighter">El Seminario</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6 tracking-tight">
            Entre el 29 de Septiembre y el 1 de octubre de 2023 se realizará la XIII edición del Seminario Bienal de Cerámica en Villa Gesell, Argentina, al que asistirán más de 600 ceramistas de todo el país y algunos del exterior. Organizamos este encuentro desde el año 1996.
          </p>

          <p className="text-xl text-muted-foreground mb-6 tracking-tight">
            Reconocidos profesionales de las artes del fuego, a quienes agradecemos enormemente su colaboración desinteresada (ad honorem), dictarán diversos talleres.
          </p>

          <p className="text-xl text-muted-foreground mb-6 tracking-tight">
            El evento no tiene fines de lucro, y de resultar excedentes de fondos una vez cubiertos los gastos de organización, se utilizarán para mejorar el taller de cerámica de la comunidad de Villa Gesell.
          </p>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <p className="text-lg font-medium tracking-tight">
                Coordinación general: Profesora Analía Basset.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <p className="text-lg font-medium tracking-tight">
                Organiza: Asociación Amigos de la Cerámica de Villa Gesell.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <p className="text-lg font-medium tracking-tight">
                Auspicia: Secretaría de Cultura y Educación de la Municipalidad de Villa Gesell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 