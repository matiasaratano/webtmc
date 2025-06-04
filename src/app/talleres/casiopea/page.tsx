'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function CasiopeaPage() {
  const workshop = workshops.find(w => w.slug === 'casiopea');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
} 