export interface Workshop {
  id: string; // Letra identificadora
  letra: string; // Letra identificadora (redundante para claridad)
  docente: string;
  nombre: string;
  descripcion: string;
  cupos: string;
  turno: string;
  redes: string;
  info: string;
  images: { src: string; alt: string }[];
}

export const workshops: Workshop[] = [
  {
    id: '1',
    letra: '1',
    docente: 'Marcela D´Ottavio',
    nombre: 'Construcción de horno de ladrillo de tiro invertido',
    descripcion: `Estimados/as miembros del comité de la Bienal:
Mi nombre es Marcela D´Ottavio, nací en Rosario y desde 2010 vivo y trabajo
en Pueblo Esther, Santa Fe. Desde hace casi una década me dedico de
manera exclusiva a la cerámica, un oficio que me acompaña desde la
infancia y que con el tiempo se transformó en el centro de mi vida creativa,
técnica y pedagógica.

Mi recorrido en la cerámica es, ante todo, un camino de búsqueda: guiado
por la curiosidad, la prueba y el error, el hacer constante y el estudio
autodidacta. A lo largo de estos años he complementado esa base con
cursos específicos de construcción manual, torno y esmaltes, y desde 2020
he profundizado en la construcción de hornos eléctricos y a leña,
desarrollando versiones propias que hoy son parte esencial de mi propuesta.

En la actualidad, además de producir piezas en gres y construir hornos, dicto
cursos y tutorías online —individuales y grupales— y he desarrollado varios
cursos grabados que buscan compartir lo aprendido con otras personas
apasionadas por la cerámica. Mi proyecto, @iluminaceramicas, es también
una forma de tejer comunidad y de iluminar, como su nombre sugiere, los
caminos del oficio.

Agradezco profundamente la posibilidad de presentarme a esta Bienal. Para
mí, formar parte de estos espacios es una forma de seguir construyendo con
otros/as ceramistas un lenguaje común, nacido del barro y de la
experiencia.

Con afecto y entusiasmo,
Marcela D´Ottavio`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/1/img1.png', alt: 'Imagen del taller 1 - Construcción de horno 1' },
      { src: '/images/1/img2.png', alt: 'Imagen del taller 1 - Construcción de horno 2' },
      { src: '/images/1/img3.png', alt: 'Imagen del taller 1 - Construcción de horno 3' },
    ],
  },
  {
    id: '2',
    letra: '2',
    docente: 'Magda Serna',
    nombre: 'El trencadís de gaudí en el bosque geselino',
    descripcion: `Estudié en la Escuela Nacional de Bellas artes Prilidiano Pueyrredón, y también incorporé técnicas aplicadas a la decoración. 
Después de mucho viajar, estudiando colores y posibilidades,desarrollé una larga carrera como artista decorativa en la ciudad de Barcelona, haciendo de restaurantes y casas particulares,una exposición de mis obras.
Así conocí a Gaudí y su mundo mágico de cerámica inspirada en la naturaleza.
Hoy, basándome en esa premisa, es que estamos aquí en el bosque.
MAGDALENASERNA.NET

La interacción entre  naturaleza y arte, hace de este taller una experiencia de fusión armoniosa, llena de información e inspiración!
En el medio del bosque, representaremos atravez de la técnica del mosaico trencadís, las distintas especies de aves que habitan  bosque,  playa y campo,dejando una huella de enseñanza y profundo respeto hacia el conocimiento  de la naturaleza que nos rodea.
Hemos comenzado un mural proyectándolo en el tiempo y este es el tercer encuentro sobre la misma pared,que va creciendo con la intervención de manos curiosas,principiantes y profesionales  que aman expresarse atravez de ellas.
Aprenderemos una técnica para emplear de muchas maneras distintas!

Los esperamos!`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/2/img1.jpg', alt: 'Imagen del taller 2 1' },
      { src: '/images/2/img2.jpg', alt: 'Imagen del taller 2 2' },
      { src: '/images/2/3.jpg', alt: 'Imagen del taller 2 3' },
      { src: '/images/2/img4.png', alt: 'Imagen del taller 2 4' },
      { src: '/images/2/img5.jpg', alt: 'Imagen del taller 2 5' },
    ],
  },
  {
    id: '3',
    letra: '3',
    docente: 'Maxi Leis',
    nombre: 'Modelado de figura humana con modelo vivo desde una mirada anatómica',
    descripcion: `
Artista plástico, profesor y licenciado en artes visuales (UNA). Escultor y ceramista.

Escultura: figura humana, arte clásico, modelado, talla en mármol, yeso y otros materiales. Modelado en arcilla y plasticera. Restauraciones.

Cerámica: alfarería, decoración, moldería cerámica, moldería en caucho, matricería.

Historia del arte, mosaico, dibujo.

Competencias: ayudar a los alumnos, acompañando y monitoreando los procesos de aprendizaje.
`,
    cupos: '',
    turno: '',
    redes: 'https://www.instagram.com/leismaximiliano?utm_source=qr&igsh=d3p2MXhlOGFpZjVh',
    info: '',
    images: [
      { src: '/images/3/img1.jpeg', alt: 'Imagen del taller 3 1' },
      { src: '/images/3/img2.jpeg', alt: 'Imagen del taller 3 2' },
      { src: '/images/3/img3.png', alt: 'Imagen del taller 3 3' },
      { src: '/images/3/img4.png', alt: 'Imagen del taller 3 4' },
    ],
  },
  {
    id: '4',
    letra: '4',
    docente: 'Adrian Gonzalez',
    nombre: 'Raku',
    descripcion: `Adrian González

Marplatense

Ceramista, Artista plástico.

Profesor superior de cerámica

Docente y Director de la Escuela de artes visuales- cerámica Rogelio Yrurtia hasta 2018.

Participante y organizador del EnACer desde 1997.

Participante- tallerista Bienal de Cerámica de Villa Gesell.

Participante del Simposio Internacional de Cerámica de Avellaneda 2010.

Participante del Simposio Internacional de Cerámica de Camagüey- Cuba. 2012

Realización de muestras colectivas e individuales
`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/4/img1.jpg', alt: 'Imagen del taller 4 1' },
    ],
  },
  {
    id: '5',
    letra: '5',
    docente: 'Vivi Gendre',
    nombre: 'Quimica y poetica de la materia',
    descripcion: `Les convido un espacio donde a partir de distintas  prácticas artísticas buscaremos nuevas posibilidades de tratamiento de superficies desde el barro crudo

A partir de la química cerámica como disparador y desde la imagen y la palabras como recursos, incorporaremos conocimientos teóricos y prácticos para abordar el diseño ceramico

Engobes, texturas y transferencias
Color, imagen y palabra 
Y el soporte que nos sostiene, la Tierra

`,
    cupos: '',
    turno: '',
    redes: 'https://www.instagram.com/ceramicavivigendre/',
    info: '',
    images: [
      { src: '/images/5/img1.jpg', alt: 'Imagen del taller 5 1' },
      { src: '/images/5/img2.png', alt: 'Imagen del taller 5 2' },
    ],
  },
  {
    id: '6',
    letra: '6',
    docente: 'Gloria Rodriguez',
    nombre: 'Experiencia serigráfica sobre el objeto cerámico crudo',
    descripcion: `Artista ceramista, Profesora. Licenciada en Artes Visuales- Artes del Fuego (UNA). Maestra Joyera.

Nacida en 1961, Rosales- Provincia de Córdoba. Argentina

Desarrolle la carrera docente en las Escuelas donde me forme, Fernando Arranz y Escuela de Cerámica N°1, nivel medio y profesorado; dictando Tecnología, Decoración, Modelado, Molderia, Vitral y Esmaltado sobre metal.

Experimento con prácticas contemporáneas, utilizando las nuevas tecnologías sobre soportes relacionados con la historia de la cultura, "objetos cerámicos". La Grafica en la cerámica puede transformar el soporte cerámico, ofreciendo un nuevo dialogo social, visual y plástico.

Nos permite abordar temas personales a través de la fotografía, imágenes relacionadas con recuerdos de infancia, las publicidades de revistas, propagandas en las redes, la TV, carteles publicitarios, marcas de alimentos, de objetos y perfumería, entre otros.

Recorrer este mundo Grafico en lo personal, abrió una nueva posibilidad expresiva, a través de la fotografía, la realización de calco digital, la transferencia con papel, la serigrafía, permitiéndome jugar con el collage, la ruptura y composición, ofreciendo la posibilidad de ordenar mi propio lenguaje expresivo, el mundo de las ideas internas, lo que no se grita, pero se lleva dentro como ser social y persona.

He participado de salones, exposiciones conjuntas, Congresos y Jornadas internacionales de Cerámica, en Brasil, Uruguay y Cuba, abordando diferentes temas referidos a procesos de construcción cerámica, tratamiento de superficie y horneadas alternativas (Raku y Ahumados); obteniendo premios, el más reciente 2023 del Centro de Arte Cerámico-Salón Internacional, Gran premio de honor en Cerámica y Multiplicidad.

OBJETIVOS DEL TALLER:
Transferir a partir de shablon imágenes sobre objetos cerámicos en crudo, desarrollando técnicas de tratamiento de superficie sobre la arcilla húmeda. La serigrafía nos permite trabajar sobre diferentes papeles para transferir y realizar intervenciones sobre plano y volumen.`,
    cupos: '15 alumnos (habrá 2 grupos)',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/6/img1.png', alt: 'Imagen del taller 6 1' },
      { src: '/images/6/img2.jpeg', alt: 'Imagen del taller 6 2' },
      { src: '/images/6/img3.jpeg', alt: 'Imagen del taller 6 3' },
    ],
  },
  {
    id: '7',
    letra: '7',
    docente: 'Myrtha Sirna',
    nombre: 'El principio del esmalte sobre metal',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/7/img1.png', alt: 'Imagen del taller 7 1' },
    ],
  },
  {
    id: '8',
    letra: '8',
    docente: 'Luciano Giménez y Sol Carranza Sieber',
    nombre: 'Clínica de obra: procesos y reflexiones sobre el hacer artístico cerámico',
    descripcion: `CASIOPEA, poéticas cerámicas

El colectivo nació en el año 2009, en Córdoba; está desde su inicio integrado por Sol Carranza S. y Luciano Giménez.

Casiopea entiende la cerámica como una materialidad concreta, con potencial poético, como un eje desde el cual se abren diferentes constelaciones en las que trabajar: vajilla, joyería, muralismo, escultura, docencia, producción de pensamiento, investigación química, investigación artística, etc.

Como antecedentes, en el 2017 obtuvo el Primer Premio Concurso Mural: La reforma universitaria, de la Facultad de Artes, UNC; en el 2018 una Beca a la creación del FNA; en el 2019 el sello del diseño de Córdoba, entre otras distinciones.

En el 2020 publicó el libro-objeto Memoria material.

SOL CARRANZA SIEBER - BIO BREVE

Sol nació y vive en la provincia de Córdoba. Estudió Escultura en la Facultad de Arte de la UNC, y Cerámica, en la Facultad de Arte y diseño de la UPC; actualmente estudia un posgrado de especialización en producción de Arte Contemporáneo.

Trabaja en la cerámica desde hace 16 años, produciendo obra, piezas de vajilla, proyectos de investigación y joyería. Es docente en las dos instituciones en las que se formó.

Ha expuesto su trabajo en diversos espacios entre ellos: el Museo de las Mujeres y Museo Emilio Caraffa en Córdoba, el Museo de Bellas Artes en Corrientes, el espacio Cultural de la UNR y el Museo de Arte Contemporáneo de Rosario; el Museo de Las Conceptas en Ecuador, y la Academia de arte Pratt en Estados Unidos. Ha obtenido becas del Fondo Nacional de las artes y BECAR Cultura; premios como el Premio Escultura Olmos del MAC, y menciones de distintos organismos.

LUCIANO GIMÉNEZ - BIO BREVE

Luciano estudió Diseño Industrial y Artes visuales en la UNC. Se formó como dibujante y ceramista de manera formal e informal.

Trabaja en el dibujo desde hace 20 años; y desde hace 16 en la cerámica, produciendo murales, obra y piezas de vajilla.

Ha realizado numerosas muestras tanto individuales como colectivas, nacionales e internacionales, entre ellas en los museos: Arte Contemporáneo de Unquillo, de las Mujeres, E. Caraffa, Genaro Pérez, o en galerías como El gran vidrio -Cba.-, Domicilio desconocido -CDMX-, Pasaje 17 y Salas del CFI -CABA- entre muchas otras.

Ganó el 3º premio, categoría Artes del fuego, del 110º Salón Nacional de Artes Visuales y el Primer premio mural Banco de Córdoba en el 2022.

Actualmente se especializa en los murales y esculturas cerámicas de gran formato. Integra también el colectivo de dibujo Carbonillas Project.

PROYECTO DE TALLER - En el marco de la Bienal de Cerámica de Villa Gesell

Clínica de obra: procesos y reflexiones sobre el hacer artístico cerámico

A cargo de: Sol Carranza y Luciano Giménez

DATOS GENERALES:
Modalidad: taller teórico-práctico con formato clínica
Duración: 4 encuentros
Duración por encuentro: 2 a 2.5 horas
Cupo máximo: 24 participantes
Destinatarios: ceramistas, artistas visuales que trabajan con cerámica y estudiantes avanzados, interesades en reflexionar sobre sus procesos creativos

FUNDAMENTACIÓN:
La cerámica contemporánea ha trascendido su tradición de objeto utilitario para posicionarse como un lenguaje artístico plural, donde conviven técnicas ancestrales con exploraciones conceptuales, materiales e instalativas. En la actualidad, los creadores trabajan en un territorio expandido que desafía los límites de la disciplina: desde la integración con nuevos medios (como lo digital o lo performático) hasta la reflexión crítica sobre identidad, memoria, ecología y política.

Esta clínica surge como respuesta a la necesidad de un espacio de análisis y diálogo sobre estos procesos creativos, donde lo técnico y lo conceptual se entrelazan. En un contexto como la Bienal de Villa Gesell —punto de encuentro clave para la cerámica argentina—, proponemos un taller que funcione como laboratorio de ideas.

A través de devoluciones personalizadas y grupales, buscamos que cada participante pueda profundizar en su poética personal, identificando núcleos problemáticos y oportunidades de crecimiento en su práctica. Nos interesa también rastrear posibles puntos de apoyo, de diferencia o de similitud entre las prácticas presentadas.

OBJETIVOS:
- Generar un ámbito de discusión sobre prácticas cerámicas actuales
- Brindar herramientas para repensar, retomar, potenciar los proyectos desde lo técnico, formal y conceptual
- Fortalecer la red de intercambio entre ceramistas que se dedican a la producción de objetos artísticos

METODOLOGÍA:
Una clínica es un espacio de trabajo colectivo donde los participantes presentan sus proyectos u obras en proceso para recibir devoluciones críticas de docentes y pares. A diferencia de un taller tradicional centrado en la enseñanza técnica, la clínica prioriza el análisis conceptual, el debate y la reflexión sobre la práctica artística. Cada participante dispone de un tiempo acotado para exponer su trabajo, seguido de un diálogo abierto que aborda aspectos como la coherencia estética, los recursos materiales, los referentes y los desafíos del proceso creativo. Este formato dinámico fomenta la autogestión del proyecto, el pensamiento crítico y la construcción de comunidad entre artistas.

Organizamos el taller entonces de la siguiente manera:

Día 1: Presentación de docentes y participantes. Charla introductoria sobre el Arte Cerámico contemporáneo, repaso de su historia, ejes, problemas, desafíos, etc. (30/40 min). Inicio de clínica: 3-4 participantes presentan su proyecto (20 min c/u)

Días 2 y 3: 5-6 participantes presentan su proyecto.

Día 4: última ronda de clínicas (4-5 participantes). Cierre plenario: conclusiones generales, reflexiones grupales.

REQUISITOS PARA PARTICIPANTES:
- Completar el formulario de participación con dos semanas de anterioridad al encuentro. En el mismo deberá adjuntar una presentación digital* de un proyecto artístico cerámico, sea este individual o colectivo. El proyecto puede estar en proceso, avanzado, o ser solo una idea a desarrollar; también se puede participar de la clínica para trabajar sobre el hacer de una grupalidad, y su cuerpo de obras o acciones. La finalidad de este requisito, es conocer de antemano los proyectos, a fin de enriquecer las devoluciones en el encuentro.

*la presentación deberá tener formato PDF, y debe incluir: imágenes fotográficas, dibujos o bocetos de la/s pieza/s o proyecto a desarrollar, o cualquier otra información que considere relevante del proyecto.

Formulario: https://docs.google.com/forms/d/e/1FAIpQLScqhARVTER6kbiVHfoTh9fMVqMcKVL0b27UL30capc9DrUVhw/viewform

- Llevar de manera física, las piezas, maquetas, bocetos o elementos del proyecto u obra a desarrollar o concluir (puede ordenarse la participación de cada integrante en los diferentes días y horarios, a fin de que cada quien lleve sus cosas solo el día que le toca exponer en caso de ser frágiles o pesadas).

CRONOGRAMA SUGERIDO:
Día 1: Introducción + clínica (3-4 participantes) - 2.5 hs
Día 2: Clínica (5-6 participantes) - 2.5 hs
Día 3: Clínica (5-6 participantes) - 2.5 hs
Día 4: Clínica (4-5 participantes) + plenario - 2.5 hs

RESPONSABLES DEL TALLER:
Luciano y Sol trabajan la cerámica desde hace más de 16 años. Han desarrollado juntes un proyecto llamado Casiopea, poéticas cerámicas, que explora la cerámica desde diversas miradas y procedimientos. Tanto en equipo, como de manera individual, han creado piezas de vajilla, de arte, murales, joyería, e investigaciones de diversos tipos, desde químico materiales, o expositivos, hasta un viaje-relevamiento de ceramistas de Latinoamérica que devino en el libro Memoria material, que presentan en la Bienal de este año.`,
    cupos: '24 participantes',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/8/img1.jpg', alt: 'Imagen del taller 8 1' },
      { src: '/images/8/img2.jpg', alt: 'Imagen del taller 8 2' },
    ],
  },
  {
    id: '9',
    letra: '9',
    docente: 'Daysi Linares',
    nombre: 'Iniciación a la moldería cerámica',
    descripcion: `
Profesora de cerámica con más de 11 años de experiencia en docencia artística. Especializada en técnicas de diseño, serialización, decoración cerámica, moldería y vitral. Con vocación por la enseñanza y el trabajo colectivo, ha desarrollado talleres para diversas instituciones y participado en encuentros binacionales y nacionales relacionados con el arte cerámico y la integración cultural.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/9/img1.png', alt: 'Imagen del taller 9 1' },
      { src: '/images/9/img2.jpeg', alt: 'Imagen del taller 9 2' },
      { src: '/images/9/img3.jpeg', alt: 'Imagen del taller 9 3' },
      { src: '/images/9/img4.jpeg', alt: 'Imagen del taller 9 4' },
    ],
  },
  {
    id: '10',
    letra: '10',
    docente: 'Vero Horak',
    nombre: 'Articulados',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/10/img1.png', alt: 'Imagen del taller 10 1' },
      { src: '/images/10/img2.png', alt: 'Imagen del taller 10 2' },
    ],
  },
  {
    id: '11',
    letra: '11',
    docente: 'Maria Cheung',
    nombre: 'Plenario de Apertura – Una Experiencia Personal del Proceso Creativo',
    descripcion: `14º Seminario Bienal de Cerámica de Villa Gesell
Del 30 de octubre al 2 de noviembre de 2025

Charla – Una Experiencia Personal del Proceso Creativo

Artista: Maria Cheung
Público: Libre
Cupos: Ilimitados
Duración: 2h
Idioma: Portuñol (mezcla de portugués y español)


Descripción:
La charla es un viaje íntimo y sensible a través del proceso creativo de la artista. A través de imágenes, Maria Cheung comparte no solo el desarrollo de su Arte Conceptual, sino, sobre todo, fragmentos de su propia historia: vivencias cotidianas, descubrimientos y aprendizajes que han moldeado quién es.

Al compartir este camino, la artista desea mostrar que el arte puede (y debe) ser un territorio de libertad, valentía y autoconocimiento. Con su humilde experiencia, espera conmover e inspirar a quienes la escuchen a también permitirse: crear, arriesgarse, jugar… y comprender que la creatividad no es un privilegio — habita en todos nosotros, esperando simplemente un espacio para manifestarse y expresar su esencia.

Mini Biografía:
Maria Cheung es una artista visual, nacida en Hong Kong en 1957 y nacionalizada brasileña. Vive y trabaja en Foz de Iguaçu (Brasil). Licenciada en Educación Artística, desarrolla su carrera desde 1981, con exposiciones individuales y colectivas en Brasil y en el extranjero.

Su trayectoria incluye residencias artísticas dentro y fuera del país, además de una destacada actuación como curadora de exposiciones. Ha sido premiada en numerosos salones de arte y participa como jurado en eventos nacionales e internacionales.

Sus obras forman parte de importantes colecciones de museos e instituciones en Brasil, Europa, Asia, África y América Latina, y también se encuentran en espacios públicos de países como China y Argentina. Desde 2017, es miembro de la Academia Internacional de Cerámica, en Ginebra, Suiza.`,
    cupos: 'Ilimitados',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/11/img1.webp', alt: 'Imagen del taller 11 1' },
      { src: '/images/11/img2.png', alt: 'Imagen del taller 11 2' },
      { src: '/images/11/img3.jpg', alt: 'Imagen del taller 11 3' },
      { src: '/images/11/img4.jpeg', alt: 'Imagen del taller 11 4' },
    ],
  },
  {
    id: '12',
    letra: '12',
    docente: 'Laura Ospina - Laura Henao Monsalve',
    nombre: 'Cerámica sonora inspirada en el arte prehispánico',
    descripcion: `Laura Vanessa Ospina Bedoya:

OSSINISSA ALFARERÍA, es un proyecto de alfarería tradicional que nace en 2019
y que se mantiene vigente, el enfoque de este se ha centrado en reconocer las
técnicas y las manifestaciones cerámicas precolombinas del territorio colombiano
y de sus periferias. A través del estudio, en museos, de arqueología de diferentes
artefactos cerámicos he procurado encontrar mi estilo y resolver mis inquietudes
que inquieren sobre la presencia femenina y el placer en las representaciones
cerámicas.

Laura Henao Monsalve:

Desde el 2021 inicié mi proceso de aprendizaje cerámico en el taller de Ossinissa alfarería, aprendiendo diferentes técnicas asociadas al arte cerámico prehispánico tanto de Colombia como del resto de América. Lo que me ha permitido hacer parte de procesos formativos informales desempeñando funciones de enseñanza y acompañamiento en talleres de formación cerámica tradicional.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/12/img1.png', alt: 'Imagen del taller 12 1' },
      { src: '/images/12/img2.png', alt: 'Imagen del taller 12 2' },
      { src: '/images/12/img3.png', alt: 'Imagen del taller 12 3' },
    ],
  },
  {
    id: '13',
    letra: '13',
    docente: 'Claudia Cambours',
    nombre: 'Pensar el hacer, habitar el grupo.',
    descripcion: `Much@s ceramistas llevamos a cabo nuestro trabajo en talleres de diversos ámbitos no formales tales como centros culturales, espacios alternativos y  o en talleres propios. Armamos nuestras propuestas con los saberes que hemos aprendido en nuestra formación y con los que seguimos constantemente incorporando. Con la multiplicidad de información, fotos y videos que hoy se comparten en las redes, las personas concurren a los talleres pensando que rápidamente podrán llegar a “exitosos” resultados. Sabemos que nuestra práctica requiere de un largo proceso y eso es lo que la hace maravillosa. Como hacer entonces para que nuestras propuestas resulten convocantes? En tiempos de excesiva individualidad, como se propicia el encuentro grupal de l@s asistentes? Las propuestas de trabajo tienen que ser grupales o individuales? Que buscan l@s participantes que concurren a nuestros talleres?  Estos y otros interrogantes que hacen a nuestra práctica, será lo que trabajaremos en este encuentro. Esta actividad está pensada para ceramistas con experiencia a cargo en talleres como a así también para los que estén interesados en coordinarlos.

“Es muy optimista ser maestro, ocuparse de la educación. Es una apuesta al futuro, una certeza de que hay vida, de que todo puede mutar, de que algo que no se sabía se puede saber, de que algo que no se juntaba se puede juntar” Diana Aisenberg

El taller consta de dos momentos, uno vivencial en el que trabajaremos con arcilla, otro de intercambio y donde compartiré algunas vivencias y experiencias de los talleres que coordino.

L@s participantes tendrán que traer sus herramientas para la propuesta práctica, cuaderno y lápiz.

Claudia Cambours es Egresada de la Tecnicatura Nacional en Cerámica Artística. Siguió su formación en la UNA, INCA, en clínicas  y seminarios. Realizo la Especialización de Educación por el Arte en El Instituto Vocacional de Arte, IVA.
Desde el año 1982 hasta la actualidad coordina talleres para niños y adultos en su propio espacio, en la Secretaria de niñez, adolescencia y familia y en el circuito de Espacios Culturales de Bs As.
En el año 2008 fue seleccionada para participar en el Seminario Internacional De Cerámica Artística en Sargadelos Galicia España.
Participó en numerosas muestras y Salones, como el Salón Nacional De Artes Visuales en la disciplina Cerámica 2014 y en el 57 Salón Anual Internacional De Cerámica CAAC- 2016 M. Sivori.
En el año 2012 le otorgan el premio-mención en el II Salón Cerámico De La Bidimensional Centro Argentino De Arte Cerámico. En 2017 recibe el 2º premio en el XX Salón De Pequeño Formato CAAC San Martin De Los Andes y en el año 2018 le otorgaran el Primer Premio Adquisición del XXVI Salón Municipal De Cerámica De Avellaneda.
En el año 2022 recibió el Primer Premio en Arte Cerámico en Salón Anual Internacional De Cerámica CAAC 2022 y en el 2023 el Gran Premio de Honor de la misma institución.
Se desempeñó como asistente de curaduría en el Área De Museografía en el Museo Sivori, como curadora en el  Centro Arte Contemporáneo Chacra De Los Remedios Parque Avellaneda y hasta la actualidad es docente del taller de cerámica del mismo espacio.

`,
    cupos: '',
    turno: '',
    redes: '@claudiacambours',
    info: 'https://padlet.com/camboursclaudia/claudia-cambours-40xl4kbfqwugv5b2',
    images: [
      { src: '/images/13/img1.jpeg', alt: 'Imagen del taller 13 1' },
      { src: '/images/13/img2.jpeg', alt: 'Imagen del taller 13 2' },
      { src: '/images/13/img3.jpeg', alt: 'Imagen del taller 13 3' },
      { src: '/images/13/img4.jpeg', alt: 'Imagen del taller 13 4' },
    ],
  },
  {
    id: '14',
    letra: '14',
    docente: 'Mariano Mungo',
    nombre: 'Taller intensivo de escultura en torno alfarero',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '@https://www.instagram.com/marianomungo',
    info: '',
    images: [
      { src: '/images/14/img1.png', alt: 'Imagen del taller 14 1' },
      { src: '/images/14/img2.png', alt: 'Imagen del taller 14 2' },
      { src: '/images/14/img3.png', alt: 'Imagen del taller 14 3' },
    ],
  },
  {
    id: '15',
    letra: '15',
    docente: 'Eliana Oliva',
    nombre: 'La cuerda seca y sus posibilidades',
    descripcion: `Creadora del Taller de Cerámica “Fuego Blanco”
Clases de alfarería   
Taller de introducción en Cerámica para 
Niños y adultos.
Desde 2008`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/15/img1.jpeg', alt: 'Imagen del taller 15 1' },
      { src: '/images/15/img2.jpeg', alt: 'Imagen del taller 15 2' },
      { src: '/images/15/img3.jpeg', alt: 'Imagen del taller 15 3' },
      { src: '/images/15/img4.jpeg', alt: 'Imagen del taller 15 4' },
      { src: '/images/15/img5.jpeg', alt: 'Imagen del taller 15 5' },
      { src: '/images/15/img6.jpeg', alt: 'Imagen del taller 15 6' },
    ],
  },
  {
    id: '16',
    letra: '16',
    docente: 'Karina del Savio',
    nombre: 'Los lustres de oro sobre el vidrio',
    descripcion: `KARINA DEL SAVIO

En Buenos Aires, a mediados de 1970 en el seno de una familia Italo-Argentina nace Karina Del Savio.

Desde muy temprana edad refleja su pasión por el dibujo. Su madre, pintora, ceramista y amante del arte, la estimula y acerca al fascinante mundo de los lápices, papeles, acuarelas y libros de pintura.

A los 8 años, frente a su inquietud, asiste a clases de dibujo en un taller cercano a su casa donde intercambiaba experiencias con otros niños de su edad. En menos de un mes Karina dibujaba una figura humana y su profesor sugiere cambiarla a un grupo de alumnos avanzados. Al poco tiempo asiste a estas nuevas clases pero una notable diferencia de edad le impide adaptarse y Karina deja de dibujar. Sólo lo hace en momentos en que nadie la ve siendo su madre la única testigo de su trabajo.

A los 17 años ingresa en el conservatorio de Arte Dramático, dónde encuentra especial interés por las técnicas escenográficas y descubre la importancia de la luz: “aprendí que en el teatro la luz materializa el espacio”. A los 22 años retoma definitivamente la actividad plástica: ingresa a estudiar en la escuela de vidrio de Berazategui donde encuentra no sólo un espacio de aprendizaje sino también de creación. Allí cursa los tres años de enseñanza y pronto es contratada como ayudante en la sala de hornos. Aprende a trabajar el vidrio de la mano de Amalia García, (ex-directora de la escuela de vidrio de Berazategui) y de todo su equipo de profesores. Más tarde toma clases con Silvia Levenson, Miriam Difiere, Eduardo Osimani y Santiago Sanz Llorente, quienes le enseñan las primeras notas del arte en vidrio. Su curiosidad y su persistente búsqueda de del desarrollo de nuevas técnicas la llevan a la “Cristalería El Progreso”, donde dictas clases teóricas junto a los más destacados operarios. De esta experiencia, y del contacto directo con la fábrica, adquiere el conocimiento del desplazamiento del vidrio dentro del horno y de sus posibilidades estéticas. Comienza el desarrollo de su producción artística.

A partir de 1998, sus obras de arte y objetos funcionales se muestran en importantes empresas de diseño de interiores y arquitectura. Desde entonces perfecciona sus conocimientos de la producción artesanal. Sus abras artísticas se exponen en eventos como SOFA (USA), e integran colecciones en todo el mundo.

Actualmente se encuentra dirigiendo su taller cuyo foco es la producción de exclusivos objetos artesanales de altísima calidad. Divide su tiempo entre la creación, la experimentación, y el aprendizaje constante.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/16/img1.jpg', alt: 'Imagen del taller 16 1' },
      { src: '/images/16/img2.jpg', alt: 'Imagen del taller 16 2' },
      { src: '/images/16/img3.jpg', alt: 'Imagen del taller 16 3' },
    ],
  },
  {
    id: '17',
    letra: '17',
    docente: 'Juanjo Izaguirre',
    nombre: 'Recuperación de la escultura ´Adolescencia” del Maestro Vicente Puig',
    descripcion: `Juan José Izaguirre es ceramista, docente, músico y escritor. Nació en Buenos Aires en 1961.

Comenzó sus estudios en la (entonces) Escuela Nacional de Cerámica, egresando como Técnico en Cerámica Artística en 1980, como Profesor Nacional de Cerámica Artística en 1982.

Paralelamente a sus estudios, desde muy joven trabajó en pequeñas fábricas y talleres, como Cerámicas Campichuelo (1977) y Manufacturas Cerámicas Bresser (1978); y entre 1979 y 1983 en el taller de la ceramista Teodolina García Cabo.

Entre 1983 y 1996, desarrolló su actividad en su propio taller dedicándose a la reproducción cerámica, la enseñanza, la investigación y el desarrollo de su propia obra artística.

Participó en exposiciones individuales y colectivas, obteniendo premios y menciones en diferentes salones.

Como docente, se inició en la Escuela de Educación Estética N° 1 de Ramos Mejía, en 1984, y al año siguiente ingresó como tal a la (entonces) Escuela Nacional de Cerámica, desempeñándose como docente de las materias Taller Cerámico, Modelado, Moldería y Dibujo hasta 1995.

Entre 1995 y 2011 no tuvo actividad en el ámbito de la Cerámica, ni en la docencia.

En 2011, regresó a la docencia en la actual Escuela Superior de Enseñanza Artística en Cerámica N°1, de la Ciudad Autónoma de Buenos Aires, donde se desempeña actualmente como profesor de la materia Moldería, en los ciclos de Técnico en Cerámica Artística y Auxiliares de Taller.

Paralelamente, como músico ha participado de diversos proyectos como autor, compositor y cantante; y ha publicado los álbumes “Vagos y mal entretenidos” (junto a Guillermo Roffé, en 2013) y “Qué menos, qué más” (en 2022). Ambos con canciones propias y “en complicidad”.

Como escritor, ha participado en diversas antologías del género “cuento”, en Argentina, España y México; y como “ghost-writter” en proyectos institucionales. Ha publicado “Objetos perdidos” (cuentos, Ediciones Bao-Bab, 2003) y “Miradas y voces” (conversaciones con artistas plásticos, Organización de Estados Iberoamericanos, 2024), que puede descargarse gratuitamente desde la página https://oei.int/oficinas/argentina/publicaciones/miradas-y-voces-una-publicacion-del-espacio-cultural-de-la-oei-en-argentina/

 

Vive en Caballito (el lugar donde siempre quiso vivir). Vane lo aguanta desde hace trece años (¡todo un record!, comentan en el vecindario). Hace 38 años, es el papá de Alejo “grande”, el mejor profesor de música de California. Y, -según declaran los propios damnificados-; es el “Papá adoptado” por Alejo “chico” y Morena.
`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/17/img1.jpeg', alt: 'Imagen del taller 17 1' },
      { src: '/images/17/img2.jpeg', alt: 'Imagen del taller 17 2' },
    ],
  },
  {
    id: '18',
    letra: '18',
    docente: 'Antonio Paez - Gabriel Gian Calepore',
    nombre: 'Esmaltes cerámicos del pasado',
    descripcion: `Acercamiento a las recetas de algunos esmaltes del pasado.
Consideración de las materias primas.
Averiguación sobre su existencia o inexistencia.
Determinación si hay materiales actuales que sustituyan o combinen algunas de aquellas materias primas.
Realización de los ensayos y/o pruebas necesarias para verificar los resultados.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/18/img1.jpg', alt: 'Imagen del taller 18 1' },
    ],
  },
  {
    id: '19',
    letra: '19',
    docente: 'Karina Neu',
    nombre: 'Tiffany',
    descripcion: `
Comencé en este apasionante mundo del vidrio allá por el año 2005 donde fue
que aprendí la técnica del vitral emplomado, de a poco fui comprando mis
primeras herramientas y haciendo pequeños trabajos, sóltandome y ganando
confianza , y me fui dando cuenta que quería mas.
Tres años mas tarde fui a aprender la técnica tyﬀany de cinta de cobre y me
estuve desarrollando unos años, hasta que, con la idea de hacer mis propios
vidrios, fui a aprender vitrofusion, y ahí empieza un capítulo aparte.
Con la vitrofusion no solo podía hacer mis propios vidrios, se abrió todo un mundo
nuevo, hice un cerramiento en una galería de casa, compré un horno usado y
armé mi tallercito.
En el año 2016 hago mi primer importación de polvo de vidrio Optul, costó
muchísimo que la gente se animara a usarlo cuando sólo se conocía el esmalte
como técnica para decorar el vidrio.
Un poquito mas tarde formé @alikavitral, me mudé a un taller mas grande,
compré otro horno, doy clases a mas personas, y sigo distribuyendo a toda
américa el polvo de vidrio.
Todo este camino me llevó a conocer mucha gente a la que admiro
profundamente, con quienes sigo aprendiendo y tomando cursos, porque todavía
me falta mucho y porque nunca se termina de aprender….

Descripción del trabajo elegido para enseñar en la bienal:
Trabajo: BARQUITO DE PAPEL.
Técnica: Tiﬀany o cinta de cobre
En estos empos que corren, de inmediatez e inteligencia ar ficial, mi propuesta
es volver un poquito a lo análogo, a la herramienta y al trabajo manual, al
barquito de papel de diario que nos hacían para ponerlo a flotar cuando llovía….
Vamos a hacer un barquito de papel de diario pero de vidrio, con la técnica Tiﬀany
de cinta de cobre.`,
    cupos: '',
    turno: '',
    redes: '@alikavitral',
    info: '',
    images: [
      { src: '/images/19/img1.jpeg', alt: 'Imagen del taller 19 1' },
      { src: '/images/19/img2.jpeg', alt: 'Imagen del taller 19 2' },
      { src: '/images/19/img3.jpeg', alt: 'Imagen del taller 19 3' },
      { src: '/images/19/img4.jpeg', alt: 'Imagen del taller 19 4' },
      { src: '/images/19/img5.jpeg', alt: 'Imagen del taller 19 5' },
      { src: '/images/19/img6.jpeg', alt: 'Imagen del taller 19 6' },
      { src: '/images/19/img7.jpeg', alt: 'Imagen del taller 19 7' },
      { src: '/images/19/img8.jpeg', alt: 'Imagen del taller 19 8' },
    ],
  },
  {
    id: '20',
    letra: '20',
    docente: 'Eduardo Naveira',
    nombre: 'Cerámica, Vidrio y Caídas Libres Controladas',
    descripcion: `

Diseño gráfico, en Escuela Panamericana de Arte. 
Fotografía, en el Foto Club Buenos Aires. 
Dirección de Cine, en ENERC, dependiente del Instituto Nacional de Cine. 

Formación en el arte en  vidrio: 
Me formé en talleres especializados de Argentina y tomé seminarios con artistas internacionales del vidrio como Silvia Levenson, Andrea Da Ponte, Eduardo Nieto, Karina Del Savio, Débora Gurman y Marco Romero, Sol Abbadi entre otros. 
Trabajo como artista del vidrio hace 10 años y doy clases enseñando a otros artesanos y artistas diferentes técnicas de trabajar el vidrio. He dado seminarios de capacitación en CABA, Córdoba, Santa Fe, Mendoza, Chaco, Salta, La Rioja y La Plata, durante la pandemia en forma virtual a artesanos y artistas de numerosos países alrededor del mundo. 

Exposiciones en las que he participado:

2012. Galeria Solange Guez Arte Contemporáneo 
2014. Salón Nacional del Vidrio en Berazategui. Mención de honor. 
2015. Artista invitado en la muestra colectiva del taller de Daniela Fabian de arte en vidrio. 
2018. Muestra colectiva en el Morán, Quememos todo. 
2018. Reina Kunti un espacio para el arte. 
2020. Seleccionado para la muestra virtual organizada por la Asociación del vidrio de Polonia (Zaz). 
2022. Artista invitado en la muestra del artista Pablo Schapira, Alma ecléctica, en Capdepont Antiques. 
2022. Artista invitado por el Comité Organizador  a la 1ra Bienal Internacional de Arte en Vidrio de Iberoamérica (BIAVI) en Costa Rica. 
2022. Obra seleccionada por el Salón Nacional de Artes Visuales 2022. Jardín Seta. 
2023 Proyecto Camitas
2023 Exposición/Charla "El proceso creativo y el vidrio", en la Escuela Municipal de Vidrio de Berazategui. 
2023 También en ese año fui parte de la instalación en Casa FOA, compartida con destacados artistas de vidrio, y organizada por Guillermo Patiño, Pablo Schapira y Mariela De Mario. 

En el año 1998 como director de cine y por la realización del cortometraje La risa de Ana, recibí la Mención de Honor del festival DERHUMALC, Fundación por los Derechos Humanos en América Latina y el Caribe. 
Por el mismo cortometraje fui seleccionado para participar del Festival de Cine Latinoamericano de La Habana, Cuba y por el Festival de graduados de escuelas de Cine realizado en Sao Pablo, Brasil. 

Cómo diseñador gráfico he participado y obtenido diversas distinciones a lo largo de los años en que ejercí a pleno dicha profesión, ganando el primer premio en el llamado a concurso para crear la marca de Cultura Abasto en el año 2009.

Redes donde ver mi obra artística y trabajo docente:

`,
    cupos: '',
    turno: '',
    redes: 'IG: @eduardonaveira',
    info: 'Web: edunaveir5.wix.com/naveiraglassdesign | Facebook: Naveira Glass Design, Nave Interior',
    images: [
      { src: '/images/20/img1.jpeg', alt: 'Imagen del taller 20 1' },
      { src: '/images/20/img2.jpeg', alt: 'Imagen del taller 20 2' },
      { src: '/images/20/img3.jpeg', alt: 'Imagen del taller 20 3' },
      { src: '/images/20/img4.jpeg', alt: 'Imagen del taller 20 4' },
      { src: '/images/20/img5.jpeg', alt: 'Imagen del taller 20 5' },
    ],
  },
  {
    id: '21',
    letra: '21',
    docente: 'Silvia Materyn',
    nombre: 'Fileteando Juntos',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/21/img1.jpeg', alt: 'Imagen del taller 21 1' },
      { src: '/images/21/img2.jpeg', alt: 'Imagen del taller 21 2' },
      { src: '/images/21/img3.jpeg', alt: 'Imagen del taller 21 3' },
    ],
  },
  {
    id: '22',
    letra: '22',
    docente: 'Escuela del vidrio Berazategui',
    nombre: 'Reciclado de botellas',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/22/img1.jpg', alt: 'Imagen del taller 22 1' },
    ],
  },
  {
    id: '23',
    letra: '23',
    docente: 'Cuini Chiappero',
    nombre: 'Dulce Fuego',
    descripcion: `Día 1 (por la mañana):
Construcción de 2 hornos de 18 ladrillos para hornear con guano y carbón

Día 2 (por la tarde): 
Construcción de un horno cuadrado o hexagonal para quema a leña.
Construcción de un hornito de 4 ladrillos para bizcochar con carbón

En ambas quemas mientras se desarrollan las mismas se responden las dudas y consultas que las participantes tengan, incluyendo una explicación de cómo hacer pastas para fuego directo (Y Distintas fórmulas) y cómo se prensa en cartón para quemas cerámica
Los cuatro hornos se abren luego de una media hora aproximada de haber terminado la quema.

PIEZAS DE LAS PARTICIPANTES: 
DEBEN SER DE TAMAÑO CHICO, NO MAS DE 8 CM DE DIÁMETRO, HECHAS CON PASTA PARA FUEGO DIRECTO. Se pueden traer bruñidas o con engobes, BIEN SECAS Y DE ESPESOR CHICO (NO MAS DE 5 MM)


Rubén Darío Chiappero
Nació en Córdoba, Argentina en 1958.
Docente de Artes Visuales.
Autor del libro “Dulce Fuego” Hornos para cerámica

Realizó diversas capacitaciones con renombrados maestros ceramistas
de Argentina y otros países., como Adriana Martínez, Alejandro Gregorio, Hernán Vargas, Maneno, Kyoong Woo Im, Alvaro Borrazas Pollak, Victoria Morando, Maria Eugenia Brusco , entre tantos Ceramistas que me transmitieron sus saberes.
Impartió cursos y seminarios en
forma presencial y virtual entre ellos en la Escuela de Cerámica Arranz de Córdoba en los años 2015, 2017 y 2019.
En los últimos años su tarea principal es la investigación sobre pastas cerámicas con diversos antiplásticos no convencionales, formulaciones de esmaltes de cenizas y la creación de hornos para uso cerámico con ladrillos comunes de obra de variados diseños, usando diversos biocombustibles para las quemas. También la experimentación continua en casetas especiales para microondas.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/23/img1.png', alt: 'Imagen del taller 23 1' },
      { src: '/images/23/img2.jpeg', alt: 'Imagen del taller 23 2' },
      { src: '/images/23/img3.jpeg', alt: 'Imagen del taller 23 3' },
    ],
  },
  {
    id: '24',
    letra: '24',
    docente: 'Beatriz Trepat',
    nombre: 'Trabajo en su obra - Interacción con el público',
    descripcion: `Nació en 1965, Rosario, Prov. de Santa Fe. En Rosario estudió en la Escuela Provincial de Artes Visuales y en la Universidad Nacional de
Rosario, con especialidad en grabado y cerámica, egresando del Magisterio en 1986; continuó su formación en los talleres de Carlos Cantore y Dante Alberro. En París, ciudad en la que se radicó
a fines de los ochenta, se especializó en esmaltes de alta temperatura en el taller de Helena Klug.

Con una intensa actividad docente y artística, ha participado en numerosas muestras y eventos. Se destacan de los últimos años: ́Fricciones ́(2018) y ́Parabiosis ́(2023) en galería Subsuelo, Pinta Parc Lima (2024), Pinta Miami (2023) Arteba (2023); Céramique 14, París; Grès Contemporain, Saint Amand, Puisaye; Journées de la Céramique à Saint Sulpice, París (2011); Keramikos Festival de Cerámica, Bracciano, Italia; Bienal de Andenne, Bélgica (2010); Festival Terramicales, París; Festival Internacional de Cerámica Multiplex, Varazdin, Croacia (2009);
Bienal de Cerámica Contemporánea, Sèvres (2008); Bienal de Carouge, Suiza; Terres Mêlées, Le Lavoir, Clamart (2007); Bienal de Cerámica Contemporánea, Troyes (2005).

Su obra integra las colecciones públicas del Museo Mandet, Riom, Francia y del Museo de Cerámica, Varazdin, Croacia.

Vive y trabaja en París, Francia.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/24/img1.jpg', alt: 'Imagen del taller 24 1' },
      { src: '/images/24/img2.png', alt: 'Imagen del taller 24 2' },
      { src: '/images/24/img3.jpg', alt: 'Imagen del taller 24 3' },
      { src: '/images/24/img4.png', alt: 'Imagen del taller 24 4' },
    ],
  },
  {
    id: '25',
    letra: '25',
    docente: 'Laura Rivolta',
    nombre: 'Vitrofusión',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/25/img1.jpeg', alt: 'Imagen del taller 25 1' },
      { src: '/images/25/img2.jpeg', alt: 'Imagen del taller 25 2' },
      { src: '/images/25/img3.jpeg', alt: 'Imagen del taller 25 3' },
      { src: '/images/25/img4.jpeg', alt: 'Imagen del taller 25 4' },
      { src: '/images/25/img5.jpeg', alt: 'Imagen del taller 25 5' },
      { src: '/images/25/img6.jpeg', alt: 'Imagen del taller 25 6' },
      { src: '/images/25/img7.jpeg', alt: 'Imagen del taller 25 7' },
    ],
  },
  {
    id: '26',
    letra: '26',
    docente: 'Ariel Menitti',
    nombre: 'Grisalla',
    descripcion: `📸 Instagram: @arielmenniti_vitrales

⸻

🧑‍🎨 Perfil Profesional

Soy Ariel Menniti, artista vitralista con más de 15 años de trayectoria. Me especializo en la creación y restauración de vitrales artísticos, integrando técnicas tradicionales y contemporáneas. Trabajo tanto en obras religiosas como civiles, buscando siempre respetar el lenguaje arquitectónico y simbólico del espacio.

⸻

🛠️ Técnicas y Estilos que desarrollo
	• Grisalla y esmaltes sobre vidrio
	• Emplomado tradicional y Tiffany 
	• Termofusión y vitrofusión
	• Pintura figurativa y simbólica
	• Restauración de vitrales antiguos
	• Estilos: gótico, neogótico, art nouveau y contemporáneo
	• Diseño de vitrales para iglesias, museos, residencias, cúpulas, etc.

⸻

🌟 Obras destacadas
	• Santuario de Lourdes
	• Museo Colección Gómez Nordelta
	• Casa Rosada
	• Mercado de San Telmo
	• Regimiento de Artillería
	• Regimiento de Ingenieros
	• Heraldos del Evangelio
	• Don Orione
	• Cura Brochero`,
    cupos: '',
    turno: '',
    redes: '@arielmenniti_vitrales',
    info: '',
    images: [
      { src: '/images/26/img1.png', alt: 'Imagen del taller 26 1' },
      { src: '/images/26/img2.png', alt: 'Imagen del taller 26 2' },
      { src: '/images/26/img3.png', alt: 'Imagen del taller 26 3' },
      { src: '/images/26/img4.png', alt: 'Imagen del taller 26 4' },
    ],
  },
  {
    id: '27',
    letra: '27',
    docente: 'Farina Ruiz, Maria Paula',
    nombre: 'Pintura Medieval para vitrales',
    descripcion: `Taller Intensivo

Sumergite en el arte de la pintura medieval sobre vidrio. En este taller intensivo de dos jornadas (8 horas en total), aprenderás a realizar un vitral rectangular de 27 x 19 cm, compuesto por piezas de vidrio de colores y una imagen medieval inspirada en vitrales góticos reales, de distintas catedrales. Combinaremos teoría e historia de la técnica grisalla tradicional con práctica directa sobre el vidrio, abordando el uso de pigmentos, pinceles, métodos de aplicación y horneado. No se requieren conocimientos previos: el taller está pensado para quienes deseen iniciarse en este oficio artístico y descubrir los secretos de un arte milenario.

MARÍA PAULA FARINA RUIZ
Soy Técnica Superior en Vitrales, formada en el Instituto Superior Catedral de La Plata. Me especialicé en conservación y restauración de vitrales en el Centre International du Vitrail de Chartres (Francia), donde también realicé prácticas en la catedral Notre-Dame de Chartres y me perfeccioné en técnica de grisalla y vitral contemporáneo.

Cursé estudios de Patrimonio en el CICOP y la Universidad Torcuato Di Tella y actualmente curso la Maestría en Conservación y Restauración de Bienes Artísticos y Bibliográficos en la Universidad Nacional de San Martín.

En 2019 recibí el Primer Premio en Patrimonio del Fondo Nacional de las Artes por el proyecto de restauración de la cúpula de vitrales del Círculo Militar – Ex Palacio Paz. Además, soy miembro del Comité Científico Internacional para la Conservación de Vitrales de ICOMOS Internacional y Asesora Honoraria de la Comisión Nacional de Monumentos, de Lugares y de Bienes Históricos.

`,
    cupos: '',
    turno: '',
    redes: 'www.linkedin.com/in/farinaruiz',
    info: '',
    images: [
      { src: '/images/27/img1.avif', alt: 'Imagen del taller 27 1' },
      { src: '/images/27/img2.jpeg', alt: 'Imagen del taller 27 2' },
      { src: '/images/27/img3.jpg', alt: 'Imagen del taller 27 3' },
      { src: '/images/27/img4.jpeg', alt: 'Imagen del taller 27 4' },
    ],
  },
  // Puedes agregar más talleres aquí si es necesario
]; 