// import { MoveRight, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              {/* <Badge variant="outline">Bienvenidos a la web</Badge> */}
            </div>
            <div className="flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-center font-regular">14º Seminario Bienal de Cerámica de Villa Gesell
              </h1>
              <p className="text-3xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-center">
              Del 30 de octubre al 2 de noviembre de 2025.
              </p>
            </div>
            <img src="/images/logo.gif" alt="Logo" className="w-1/4" />
            {/* <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div> */}
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

export { Hero };
