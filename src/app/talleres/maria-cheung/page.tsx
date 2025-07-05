'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function MariaCheungPage() {
  const workshop = workshops.find(w => w.letra === 'K');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
}
