'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function WorkshopButtons() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 mt-12 mb-20">
      <Button 
        size="lg"
        className="gap-2"
        onClick={() => setShowPopup(true)}
      >
        Inscripciones
      </Button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
            <p className="text-xl font-semibold mb-4">Las inscripciónes a los talleres de la bienal serán habilitadas el día 26 de Julio. Muchas gracias!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
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