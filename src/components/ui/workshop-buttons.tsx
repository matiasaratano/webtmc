'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function WorkshopButtons() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12 mb-20">
      <Button 
        size="lg"
        className="gap-2"
        onClick={() => window.location.href = 'https://bienalvg.web.app/'}
      >
        Inscripciones
      </Button>

      <Link href="/">
        <Button 
          variant="outline" 
          size="lg"
          className="gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
