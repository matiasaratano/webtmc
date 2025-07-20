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
                El precio de la inscripción es de 1 Pago Total de $150.000 al contado al momento de la inscripción (mediante transferencia bancaria), o 3 Pagos de $60.000 cada uno (el primero al momento de la inscripción mediante transferencia bancaria, el segundo al mes  y el tercero en efectivo en el momento de la acreditación).
                Este precio incluye 3 noches de alojamiento en hotel con desayuno, en habitación a compartir con otros participantes (noche del jueves 30, viernes 31 y sábado 1/11), cena del sábado 1 en comedor colectivo y materiales para utilizar en los talleres (no incluye la provisión de herramientas y/o pinceles, que el participante deberá traer de acuerdo a la actividad que realizará).
              </p>

              

              <p className="text-lg text-muted-foreground tracking-tight">
                En caso de que el participante no deseara contratar alojamiento por medio de los organizadores, el precio de la inscripción será de 1 Pago total de $80.000 (mediante transferencia bancaria), o en 3 Pagos de $30.000, el primero al momento de la inscripción (mediante transferencia bancaria), el segundo al mes y el tercero en efectivo al momento de la acreditación. Esta modalidad también incluye materiales para los talleres y la cena colectiva del día sábado 1 y no incluye la provisión de herramientas y/o pinceles, que el participante deberá traer de acuerdo a la actividad que realizará.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                En caso de haber abonado la inscripción y no poder asistir, se le reintegrará al participante el 85 por ciento del dinero ingresado si desiste hasta 20 días antes del evento, el 70 por ciento hasta una semana antes y no se reintegrará dinero, pero sí se podrá cambiar la titularidad de la inscripción, conservando los mismos talleres seleccionados, sin ningún cargo extra, desde una semana antes y hasta 24 horas anteriores al evento.
              </p>

              <p className="text-lg text-muted-foreground tracking-tight">
                Los participantes podrán acreditarse el día jueves 30 de octubre desde las 11hs a 22hs en el Taller Municipal de Cerámica. Situado en Alameda 202 al 150. informando su correspondiente número de inscripción. Se invita a los participantes a presentar en el momento de la acreditación una obra cerámica de técnica y formato libres para participar en la muestra colectiva.
              </p>

              <div className="w-full max-w-4xl mx-auto h-[400px] rounded-lg overflow-hidden mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.8745166743183!2d-56.9624793!3d-37.2506846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b605ecd795a49%3A0x59dc842213435ecc!2sConfiter%C3%ADa%20del%20Taller%20Municipal%20de%20Cer%C3%A1mica%20de%20Villa%20Gesell!5e0!3m2!1ses-419!2sar!4v1751674356553!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

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