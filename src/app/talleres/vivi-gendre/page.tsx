'use client';

import { WorkshopPage } from '@/components/ui/workshop-page';
import { workshops } from '@/data/workshops';

export default function ViviGendrePage() {
  const workshop = workshops.find(w => w.slug === 'vivi-gendre');
  
  if (!workshop) {
    return null;
  }

  return <WorkshopPage workshop={workshop} />;
} 