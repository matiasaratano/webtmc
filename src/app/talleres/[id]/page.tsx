'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

// Esto sería reemplazado por datos reales de tu backend
const workshopsData = {
  'taller-1': {
    title: 'Taller de Cerámica Básica',
    description: 'Aprende las técnicas fundamentales de la cerámica en este taller introductorio.',
    image: '/images/pic1.jpg',
    instructor: 'María González',
    duration: '4 semanas',
    schedule: 'Lunes y Miércoles 18:00 - 20:00',
    price: '$15,000',
    content: [
      'Introducción a los materiales y herramientas',
      'Técnicas básicas de modelado',
      'Proceso de horneado',
      'Acabados y esmaltado'
    ]
  },
  // Agrega más talleres aquí
};

export default function WorkshopPage() {
  const params = useParams();
  const workshop = workshopsData[params.id as keyof typeof workshopsData];

  if (!workshop) {
    return <div>Taller no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4 tracking-tighter">{workshop.title}</h1>
        <p className="text-xl text-muted-foreground mb-8 tracking-tight">{workshop.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 tracking-tighter">Detalles del Taller</h2>
            <ul className="space-y-4 tracking-tight">
              <li>
                <span className="font-medium">Instructor:</span> {workshop.instructor}
              </li>
              <li>
                <span className="font-medium">Duración:</span> {workshop.duration}
              </li>
              <li>
                <span className="font-medium">Horario:</span> {workshop.schedule}
              </li>
              <li>
                <span className="font-medium">Inversión:</span> {workshop.price}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 tracking-tighter">Contenido</h2>
            <ul className="list-disc list-inside space-y-2 tracking-tight">
              {workshop.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://bienalvg.web.app/index.html"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Inscribirse al Taller
          </a>
        </div>
      </div>
    </div>
  );
} 