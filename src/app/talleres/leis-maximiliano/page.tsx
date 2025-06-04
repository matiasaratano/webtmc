'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function LeisMaximilianoPage() {
  const workshop = workshops.find(w => w.slug === 'leis-maximiliano');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
} 