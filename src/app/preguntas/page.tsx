'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Footer } from "@/components/ui/footer";

const faqs = [
  {
    question: "¿Cuánto cuesta?",
    answer: "Con alojamiento $ 170.000 (incluye 3 noches, jueves, viernes y sábado, en hotel con desayuno, en habitación compartida con otros participantes). Sin alojamiento $ 80.000. Ambas modalidades incluyen una cena con show y fiesta en la noche del sábado y los materiales para usar en los talleres."
  },
  {
    question: "¿Se puede pagar en cuotas?",
    answer: "Sí. En caso de la inscripción con alojamiento, se puede pagar en 3 pagos de $65.000 cada uno (ver en condiciones). En caso de inscribirte sin alojamiento, puede ser en 3 pagos de $ 30.000 (ver en condiciones)."
  },
  {
    question: "¿Cuándo empieza de inscripción?",
    answer: "26 de Julio."
  },
  {
    question: "¿Dónde me puedo inscribir?",
    answer: "La solicitud se recibe exclusivamente a través de este formulario en internet (disponible a partir de las 14hs). En el mail que recibirán luego de pre-inscribirse se aclaran los medios y formas de pago."
  },
  {
    question: "¿Hasta cuándo es la inscripción?",
    answer: "Hasta que se terminen las vacantes de los talleres o hasta 96 horas antes del evento, lo que suceda primero."
  },
  {
    question: "¿Dónde hay que depositar la plata?",
    answer: "La plata se enviara por medio de transferencia a cuenta de MercadoPago que brindaremos al momento de realizar la pre-inscripción. No podrá inscribirte si no se realiza el pago y no se envía el comprobante ya que es solicitud requerida para poder hacerlo."
  },
  {
    question: "Mandé el formulario y todavía no me llegó nada. ¿Lo mando de nuevo?",
    answer: "No. La respuesta no es automática, te la envía una persona humana que hace lo humanamente posible. Sobre todo los primeros días, esperamos tener muchas solicitudes al mismo tiempo y es posible que se demore un poco la respuesta. Si estás en la lista el mail fue emitido, si no lo recibiste por favor consultá tu carpeta de spam o correo no deseado y si aun así no lo encontrás, ponete en contacto (ver whatsapp en la web) por si te equivocaste cuando escribiste tu dirección de correo."
  },
  {
    question: "Si ya pagué y no puedo ir, ¿me devuelven la plata?",
    answer: "En caso de haber hecho algún pago y no poder asistir, te devolvemos el 85 por ciento del dinero ingresado si desistís hasta 20 días antes del evento, el 70 por ciento hasta una semana antes, y pasado ese plazo no se te reintegrará dinero, pero sí podrás transferir la titularidad de la inscripción (con las respectivas vacantes de talleres) sin ningún cargo extra, hasta 96 horas antes del evento."
  },
  {
    question: "¿Qué talleres se dictarán?",
    answer: "Se pueden consultar en la Página Principal."
  },
  {
    question: "¿Dónde está el cronograma de talleres?",
    answer: "En nuestra web."
  },
  {
    question: "¿Cuándo me anoto a los diferentes talleres?",
    answer: "La reserva de vacantes de los talleres se hace junto con la inscripción. Una vez asignadas las vacantes, no se puede cambiar de taller."
  },
  {
    question: "¿Puedo ir como oyente a algún taller sin inscribirme, si me queda algún horario libre?",
    answer: "No. Los talleres no admiten oyentes. Hay cupos de participantes estipulados en cada uno y el trabajo se dificulta si hay más gente en el lugar."
  },
  {
    question: "¿Me puedo anotar en más de un taller?",
    answer: "Te podes anotar en todos los talleres que puedas cursar siempre y cuando no se superpongan los horarios ni siquiera en una clase. (El formulario eliminará automáticamente aquellos que se superpongan con el taller elegido antes)"
  },
  {
    question: "Quiero seleccionar un taller en el formulario y no me deja, ¿por qué?",
    answer: "Puede ser que ya no haya vacantes (en ese caso debería estar indicado) o que tengas seleccionado otro taller que se superponga en algún horario. También puede suceder que tengas otra inscripción con el mismo mail, por lo que no te va a dejar anotarte en mas de 3 talleres"
  },
  {
    question: "¿Si hago un solo taller el precio es el mismo?",
    answer: "Sí."
  },
  {
    question: "¿Dónde se hacen los talleres?",
    answer: "En diversas locaciones repartidas por la ciudad de Villa Gesell. La definición de las mismas va a tardar un tiempo todavía."
  },
  {
    question: "¿Puedo elegir a mis compañer@s de habitación en el hotel?",
    answer: "Se hará lo que se pueda. (Aclararlo en el correo)"
  },
  {
    question: "¿Cuándo voy a saber qué hotel me toca?",
    answer: "Las plazas de los hoteles se asignan luego de finalizado el período de inscripción."
  },
  {
    question: "¿Puedo llevar acompañantes?",
    answer: "Solo alojamos a los participantes. Si querés alojarte con familiares o amigos que no participan del seminario, te conviene inscribirte sin alojamiento y gestionar por tu cuenta el alojamiento para tu grupo. Única excepción: personas con movilidad reducida que necesiten un acompañante."
  },
  {
    question: "¿Hay estacionamiento para mi auto en el hotel?",
    answer: "Algunos de los hoteles que contratamos tienen estacionamiento y otros no. Si necesitás estacionamiento para tu auto, aclaralo en el correo al enviar tu comprobante de pago."
  },
  {
    question: "¿Puedo asistir a los talleres con mis chicos?",
    answer: "No. No se admiten niños en los talleres por razones de seguridad."
  },
  {
    question: "¿Puedo llevar invitados a la cena?",
    answer: "No. En el comedor solo habrá mesa para los participantes acreditados, los profesores y los organizadores."
  },
  {
    question: "¿Si no voy a la cena, pago menos?",
    answer: "No. El asistir a la cena es opcional, pero el precio de la inscripción es el mismo."
  },
  {
    question: "¿Si soy vegetarian@ o celíaco podré ir a comer?",
    answer: "Sí, habrá menú para vegetarianos y para celíacos (indicalo en la solicitud de inscripción, para que podamos preparate tu menú especial)."
  },
  {
    question: "¿Qué tengo que llevar?",
    answer: "Tu número de inscripción. Documento, Herramientas de modelado y/o pinceles, en el caso de que la actividad que vas a a realizar lo requiera (te vamos a avisar). Para participar de la muestra colectiva llevar una obra de técnica y tamaño libres, que deberás presentar en el momento de la acreditación (te lo podés llevar cuando termine la muestra o dejarlo como donación)."
  },
  {
    question: "¿Dónde me tengo que presentar para acreditarme?",
    answer: "Los participantes podrán acreditarse el día jueves 30 de octubre desde las 11hs a 22hs en el Taller Municipal de Cerámica. Situado en Alameda 202 al 150 (ver mapa)"
  }
];

export default function PreguntasPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Preguntas Frecuentes</h1>
            
            <Accordion.Root
              type="single"
              collapsible
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg overflow-hidden"
                >
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-lg font-medium tracking-tight">{faq.question}</span>
                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-muted-foreground tracking-tight">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 