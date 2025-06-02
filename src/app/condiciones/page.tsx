'use client';

import { Footer } from "@/components/ui/footer";

export default function CondicionesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Condiciones de Participación</h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-muted-foreground tracking-tight">
                El precio de la inscripción es de 1 Pago Total de $36.000 al contado al momento de la inscripción (mediante transferencia bancaria), o 2 Pagos de $18.000 cada uno (el primero al momento de la inscripción mediante transferencia bancaria y el segundo en efectivo en el momento de la acreditación).
                Este precio incluye 2 noches de alojamiento en hotel con desayuno, en habitación a compartir con otros participantes (viernes 29 y sábado 30/09), cena del sábado 30 en comedor colectivo y materiales para utilizar en los talleres (no incluye la provisión de herramientas de modelado y/o pinceles, que el participante deberá traer de acuerdo a la actividad que realizará).
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                En caso de que el participante con alojamiento deseara acreditarse el jueves 28 de septiembre, puede optar por tomar una noche extra de alojamiento en el mismo hotel abonando la diferencia antes del ingreso al mismo.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                En caso de que el participante no deseara contratar alojamiento por medio de los organizadores, el precio de la inscripción será de 1 Pago total de $24.000 (mediante transferencia bancaria), o en 2 Pagos de $13.000, el primero al momento de la inscripción (mediante transferencia bancaria) y la segunda en efectivo al momento de la acreditación. Esta modalidad también incluye materiales para los talleres y la cena colectiva del día sábado 30 y no incluye la provisión de herramientas de modelado y/o pinceles, que el participante deberá traer de acuerdo a la actividad que realizará.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                En caso de haber abonado la inscripción y no poder asistir, se le reintegrará al participante el 85 por ciento del dinero ingresado si desiste hasta 20 días antes del evento, el 70 por ciento hasta una semana antes y no se reintegrará dinero, pero sí se podrá cambiar la titularidad de la inscripción, conservando los mismos talleres seleccionados, sin ningún cargo extra, desde una semana antes y hasta 24 horas anteriores al evento.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Los participantes podrán acreditarse el día viernes 29 de septiembre a las 08,00 hs en el Teatro Gesell Plaza. Av.3 entre paseos 105 y 106. informando su correspondiente número de inscripción. Se invita a los participantes a presentar en el momento de la acreditación una obra cerámica de técnica y formato libres para participar en la muestra colectiva.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Los cupos para los distintos talleres son limitados. Las posibles modificaciones en el programa serán comunicadas por el whatsapp de contacto que se deja al momento de la inscripción. Las actividades programadas al aire libre podrán ser suspendidas en caso de mal tiempo y reemplazadas por actividades a determinar por la organización.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Por razones de seguridad, no está permitido asistir con niños a los talleres.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Si bien el Municipio junto con los organizadores procurarán guardar por la seguridad y el bienestar de los participantes y talleristas, no serán responsables ante posibles robos o accidentes.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Cualquier aspecto que aquí no estuviese contemplado será resuelto por los organizadores.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                El sólo hecho de participar en el Seminario implica la conformidad con todo lo expresado.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Este seminario está pensado con el fin de crear un espacio para el intercambio técnico y pedagógico de nuestro oficio. Los fondos recaudados serán utilizados para cubrir los gastos de organización, estadía y traslado de los docentes, quienes dictan sus saberes ad honorem. De resultar algún excedente, será utilizado para mejorar el Taller de Cerámica de la comuna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 