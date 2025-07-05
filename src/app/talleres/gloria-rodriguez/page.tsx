'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function GloriaRodriguezPage() {
  const workshop = workshops.find(w => w.letra === 'F');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
} 