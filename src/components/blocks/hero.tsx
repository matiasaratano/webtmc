'use client';


import Image from "next/image";

export function Hero() {
  //const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col items-center text-center">
            <div className="flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-center font-regular">
                XIV Seminario Bienal de Cerámica de Villa Gesell
              </h1>
              <p className="text-3xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-center">
                Del 30 de octubre al 2 de noviembre de 2025.
              </p>
            </div>
            <img src="/images/logo.gif" alt="Logo" className="w-1/4" />
            <button
  onClick={() => window.location.href = 'https://bienalvg.web.app/'}
  className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-black rounded-full shadow hover:bg-gray-800 transition-colors"
>
  Formulario de inscripción
</button>

            {/* {showPopup && (
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
            )} */}
          </div>
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/pic1.jpg"
                alt="Imagen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative row-span-2 rounded-md overflow-hidden">
              <Image
                src="/images/pic6.jpg"
                alt="Imagen"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/pic9.jpg"
                alt="Imagen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 