'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function MariaCheungPage() {
  const workshop = workshops.find(w => w.slug === 'maria-cheung');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
}
