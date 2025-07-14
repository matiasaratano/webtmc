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
    descripcion: `Taller de mosaico con materiales reciclados.
Un paseo por el trabajo de Gaudí atravez de las aves que pueblan Villa Gesell.
Trabajo comunitario que deja una impronta definitiva en el complejo de talleres de cerámica y alfarería municipal. Chin pum.

Magdalena Serna nace en Buenos Aires en la primavera del 72. Hija de la artesana Eva Spiech y el artista plástico Eduardo Serna. Crece en Villa Gesell rodeada de mar y naturaleza. Estudia artes plásticas en la Escuela Nacional de Bellas Artes Prilidiano Pueyrredón (hoy IUNA), donde incorpora teorías y prácticas en historia del arte, pintura, escultura, figura viva y exteriores.

Trabaja durante varios años en el taller de Cristina Dartiguelongue, aprende el arte aplicado a la decoración, técnicas específicas como las pátinas, la imitación de materiales nobles y hace sus primeros pasos en el trampantojo. En la década de los ’90 comienza a desarrollar su carrera en Buenos Aires y aplica sus conocimientos en diferentes espacios privados y restaurantes como Cherubino, Garbis, Amarello y Heriberto en el barrio de Belgrano; Portezuelo y Parada Norte en Recoleta; Spell Café en Puerto Madero, entre otros…

Inicia un viaje por el mundo en búsqueda de colores y formas nuevas. Se instala en el barrio de Poblenou de Barcelona, incursiona en el arte del mosaico y conecta con esta técnica de forma definitiva. Su trabajo evoluciona creando con la fusión entre mosaico, pintura y collage, uno de sus sellos personales.

Hoy divide el tiempo entre su nuevo taller en el barrio del Serrallo de Tarragona -en España- y el pueblo que la vio crecer, Villa Gesell, donde se encuentra junto a su familia desarrollando el proyecto más significativo de su carrera: se trata de un gran mural, un enorme mosaico que cubrirá la propiedad en donde funciona el negocio que fundaran sus abuelos en el año 1956, Gema Cosas Raras.

La obra también abarcará la ampliación del Museo que expone importantes contenidos arqueológicos, fósiles, anatomía animal, una amplia colección de caracoles y por supuesto, la historia de un pequeño gran sueño…hecho realidad.
`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/2/img1.jpg', alt: 'Imagen del taller 2 1' },
      { src: '/images/2/img2.jpg', alt: 'Imagen del taller 2 2' },
      { src: '/images/2/3.jpg', alt: 'Imagen del taller 2 3' },
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
    redes: '',
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
    nombre: 'Experiencia serigrafía sobre el objeto cerámico crudo',
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
    images: [],
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
    nombre: 'Moldería',
    descripcion: `Perfil Profesional
Profesora de cerámica con más de 11 años de experiencia en docencia artística. Especializada en técnicas de diseño, serialización, decoración cerámica, moldería y vitral. Con vocación por la enseñanza y el trabajo colectivo, ha desarrollado talleres para diversas instituciones y participado en encuentros binacionales y nacionales relacionados con el arte cerámico y la integración cultural.`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/9/img1.png', alt: 'Imagen del taller 9 - Moldería' },
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
    images: [],
  },
  {
    id: '11',
    letra: '11',
    docente: 'Maria Cheung',
    nombre: 'Charla – Una Experiencia Personal del Proceso Creativo',
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
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
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

Instagram :@claudiacambours
https://padlet.com/camboursclaudia/claudia-cambours-40xl4kbfqwugv5b2
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
    redes: '',
    info: '',
    images: [],
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
    nombre: 'Vitrofusión',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
  },
  {
    id: '17',
    letra: '17',
    docente: 'Juanjo Izaguirre',
    nombre: '',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
  },
  {
    id: '18',
    letra: '18',
    docente: 'Antonio Paez',
    nombre: '',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
  },
  {
    id: '19',
    letra: '19',
    docente: 'Karina Neu',
    nombre: '',
    descripcion: `Karina Neu
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
    nombre: '',
    descripcion: `Nombre: Eduardo Naveira
Edad: 62 años
Nacionalidad: Argentino

Estudios:

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

IG: @eduardonaveira 
Web: edunaveir5.wix.com/naveiraglassdesign
Facebook: Naveira Glass Design, Nave Interior`,
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
    docente: 'Andrea Da Ponte',
    nombre: 'Pasta de vidrio moldeado',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
  },
  {
    id: '23',
    letra: '23',
    docente: 'Cuini Chiappero',
    nombre: '',
    descripcion: `Docente de Artes Visuales, Ceramista.
Estudiante de clarinete, Flauta traversa y percusión.
Villa María Córdoba.
Autor del libro “Dulce Fuego”`,
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [
      { src: '/images/23/img1.png', alt: 'Imagen del taller 23 1' },
      { src: '/images/23/img2.png', alt: 'Imagen del taller 23 2' },
      { src: '/images/23/img3.png', alt: 'Imagen del taller 23 3' },
    ],
  },
  {
    id: '24',
    letra: '24',
    docente: 'Beatriz Trepat',
    nombre: '',
    descripcion: '',
    cupos: '',
    turno: '',
    redes: '',
    info: '',
    images: [],
  },
  {
    id: '25',
    letra: '25',
    docente: 'Laura Rivolta',
    nombre: 'Pintura Artística sobre Vidrio: Nebulosa Vítrea y Micas Destapadas',
    descripcion: `Soy artista del vidrio y docente con más de 20 años de experiencia, especializada en técnicas de horno y vitrofusión, caída libre, termoformado, casting, pasta de vidrio, y trabajo con soplete. Me formé con artistas nacionales e internacionales y, a lo largo de los años, desarrollé mis propias técnicas, buscando siempre aportar una mirada personal e innovadora a mi obra. He participado en salones y muestras colectivas y presenté recientemente mi primera muestra individual. Además de crear en mi estudio, brindo clases, seminarios y capacitaciones para artistas y docentes, tanto presenciales como online, y he difundido el arte en vidrio a través de medios de comunicación.`,
    cupos: '',
    turno: '',
    redes: '',
    info: `Taller:
“Pintura Artística sobre Vidrio: Nebulosa Vítrea y Micas Destapadas”
En este taller exploraremos técnicas pictóricas sobre vidrio utilizando polvos de vidrio, fritas, escamas y micas en polvo compatibles con vidrio float. A partir de estas técnicas propias, llamadas Nebulosa Vítrea y Micas Destapadas, trabajaremos la creación de efectos artísticos enfocados en paisajes, con una mirada expresiva y experimental.

El objetivo es que cada participante descubra nuevas posibilidades creativas en la pintura sobre vidrio, aprovechando la transparencia, las texturas y los colores que surgen de la fusión a alta temperatura.

Estas técnicas pueden ser aplicadas en utilitarios y otras piezas renovando la estética de los objetos cotidianos con una impronta artística.`,
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
    docente: 'Ariel Menniti',
    nombre: 'Vitrales',
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
      { src: '/images/26/img1.jpeg', alt: 'Imagen del taller 26 1' },
    ],
  },
  // Puedes agregar más talleres aquí si es necesario
]; 