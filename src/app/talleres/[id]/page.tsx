'use client';

import { useParams } from 'next/navigation';
import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function TallerDinamicoPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id.toUpperCase() : Array.isArray(params.id) ? params.id[0].toUpperCase() : '';
  const workshop = workshops.find(w => w.id === id);

  if (!workshop) {
    return <div className="container mx-auto px-4 py-20 text-center text-2xl">Taller no encontrado</div>;
  }

  return <WorkshopPage workshop={workshop} />;
} 