'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function WorkshopButtons() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12 mb-20">
      <Link href="https://bienalvg.web.app/" target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg"
          className="gap-2"
        >
          Inscripciones
        </Button>
      </Link>
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