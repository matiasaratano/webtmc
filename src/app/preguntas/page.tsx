'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const faqs = [
  {
    question: "¿Cuánto cuesta?",
    answer: "Con alojamiento $ 36.000 (incluye 2 noches, viernes y sábado, en hotel con desayuno, en habitación compartida con otros participantes). Sin alojamiento $ 24.000. Ambas modalidades incluyen una cena con show y fiesta en la noche del sábado y los materiales para usar en los talleres."
  },
  {
    question: "¿Se puede pagar en cuotas?",
    answer: "Sí. En caso de la inscripción con alojamiento, se puede pagar en 1 pago de $36.000 cada uno (al momento de la inscripción mediante transferencia bancaria), o en 2 pagos de $18.000 (el primero al momento de la inscripción mediante transferencia bancaria y el segundo, en efectivo al momento de la acreditación). En caso de inscribirte sin alojamiento, puede ser en 1 pago de $ 24.000 (al momento de la inscripción mediante transferencia bancaria), o en 2 pagos de $13.000 (el primero al momento de la inscripción mediante transferencia bancaria y el segundo, en efectivo al momento de la acreditación)."
  },
  {
    question: "¿Cuándo empieza de inscripción?",
    answer: "16 de Julio."
  },
  {
    question: "¿Dónde me puedo inscribir?",
    answer: "La solicitud se recibe exclusivamente a través de este formulario en internet (disponible de 08 a 22,00 hs). Dentro del formulario se aclaran los medios y formas de pago."
  },
  {
    question: "¿Hasta cuándo es la inscripción?",
    answer: "Hasta que se terminen las vacantes de los talleres o hasta 96 horas antes del evento, lo que suceda primero."
  },
  {
    question: "¿Dónde hay que depositar la plata?",
    answer: "La plata se enviara por medio de un link de MercadoPago que brindaremos al momento de realizar la inscripción. No podrá inscribirte si no se realiza el pago y no se envía el comprobante ya que es solicitud requerida para poder hacerlo."
  },
  {
    question: "Mandé el formulario y todavía no me llegó nada. ¿Lo mando de nuevo?",
    answer: "No. La respuesta no es automática, te la envía una persona humana que hace lo humanamente posible. Sobre todo los primeros días, esperamos tener muchas solicitudes al mismo tiempo y es posible que se demore un poco la respuesta. Si estás en la lista el mail fue emitido, si no lo recibiste por favor consultá tu carpeta de spam o correo no deseado y si aun así no lo encontrás, ponete en contacto (hay una sección de comentarios en esa página) por si te equivocaste cuando escribiste tu dirección de correo."
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
    answer: "Acá."
  },
  {
    question: "¿Cuándo me anoto a los diferentes talleres?",
    answer: "La reserva de vacantes de los talleres se hace junto con la inscripción. Una vez asignadas las vacantes, no se puede cambiar de taller."
  },
  {
    question: "¿Puedo ir como oyente a algún taller sin inscribirme, si me queda algún horario libre?",
    answer: "No. Los talleres no admiten oyentes. Hay 25 participantes en cada uno y el trabajo se dificulta si hay más gente en el lugar."
  },
  {
    question: "¿Me puedo anotar en más de un taller?",
    answer: "Te podes anotar en todos los talleres que puedas cursar siempre y cuando no se superpongan los horarios ni siquiera en una clase. (El formulario eliminará automáticamente aquellos que se superpongan con el taller elegido antes)"
  },
  {
    question: "Quiero seleccionar un taller en el formulario y no me deja, ¿por qué?",
    answer: "Puede ser que ya no haya vacantes (en ese caso debería estar indicado) o que tengas seleccionado otro taller que se superponga en algún horario."
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
    answer: "En la solicitud de inscripción vas a poder poner con quién te gustaría compartir habitación, y que tus compañer@s pongan lo mismo. Se hará lo que se pueda."
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
    answer: "Algunos de los hoteles que contratamos tienen estacionamiento y otros no. Si necesitás estacionamiento para tu auto, aclaralo en 'observaciones' en el formulario de inscripción."
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
    answer: "La acreditación del día viernes es en el teatro municipal de paseo 108 casi avenida 3"
  }
];

export default function PreguntasPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 tracking-tighter">Preguntas Frecuentes 2023</h1>
        
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
  );
} 