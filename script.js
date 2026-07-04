// Para publicar un video nuevo, cambia solamente los campos youtube.url y tiktok.url
// del capítulo correspondiente. La web enviará las vistas a cada plataforma.
const VIDEO_LIBRARY = [
  {
    id: "antes-estrellas",
    number: "Video largo 1",
    title: "Antes de las estrellas",
    status: "disponible",
    description:
      "Cosmología viva, Tierra madre, primera humanidad, tríadas, materia confiada y mundo original.",
    poster: "video-largo-1-poster.jpg",
    youtube: {
      label: "YouTube",
      url: "https://www.youtube.com/watch?v=Ghd5rXRrHuw&list=PLEt-rjfyU7_w7GRjPx411z6K12UaloJ7B",
      cta: "Abrir lista en YouTube",
      note:
        "Se abre la lista de reproducción del universo en YouTube para apoyar todas las vistas del proyecto.",
      fallbackSrc: "",
      ratio: "wide",
    },
    tiktok: {
      label: "TikTok",
      url: "https://www.tiktok.com/@jorgerubalcavarios/video/7650356996805315848?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      cta: "Ver video largo en TikTok",
      note:
        "Se abre la versión publicada en TikTok para apoyar las vistas desde esa plataforma.",
      fallbackSrc: "",
      ratio: "vertical",
    },
    clips: [
      {
        label: "Pieza 1",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648397881853873426?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 2",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648427430801132818?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 3",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648633777958292754?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 4",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648726281609022738?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 5",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7649396452048915730?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 6",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7649479944367656199?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 7",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7649861966307118343?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 8",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7650109435020365064?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 9",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7650248702992403719?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 10",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7650276614911069447?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 11",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7650356996805315848?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
    youtubeClips: [
      {
        label: "Lista 12",
        title: "Antes de las estrellas",
        url: "https://youtu.be/Ghd5rXRrHuw",
      },
      {
        label: "Lista 13",
        title: "Antes de las estrellas - versión adicional",
        url: "https://youtu.be/DM1KwkeW3HA",
      },
      {
        label: "Lista 14",
        title: "El templo eres tú",
        url: "https://youtu.be/8XfBmzcARhA",
      },
      {
        label: "Lista 15",
        title: "Los templos",
        url: "https://youtu.be/aj_L2TqOFpA",
      },
      {
        label: "Lista 16",
        title: "Los que aún nos buscan",
        url: "https://youtu.be/DnfxVM5QlcQ",
      },
      {
        label: "Lista 17",
        title: "El joven devoto",
        url: "https://youtu.be/_mroC5UCdEA",
      },
      {
        label: "Lista 18",
        title: "El vacío",
        url: "https://youtu.be/_rEFd6JbaOk",
      },
      {
        label: "Lista 19",
        title: "Las ideas muertas",
        url: "https://youtu.be/S5a6SdYs4KI",
      },
      {
        label: "Lista 20",
        title: "La tierra protesta",
        url: "https://youtu.be/9Fw40lP9RaQ",
      },
      {
        label: "Lista 21",
        title: "La herida",
        url: "https://youtu.be/WRJkEsksFr4",
      },
      {
        label: "Lista 22",
        title: "El vacío",
        url: "https://youtu.be/VEmXJhqYjxA",
      },
      {
        label: "Lista 23",
        title: "La voluntad",
        url: "https://youtu.be/X6zTHTatM80",
      },
      {
        label: "Lista 24",
        title: "El lenguaje de los maestros",
        url: "https://youtu.be/RIwkybpI9Do",
      },
      {
        label: "Lista 25",
        title: "Los maestros",
        url: "https://youtu.be/Do_MCzUcXwo",
      },
      {
        label: "Lista 26",
        title: "Los testigos del recuerdo",
        url: "https://youtu.be/fzaMoKv-k0U",
      },
      {
        label: "Lista 27",
        title: "Los símbolos",
        url: "https://youtu.be/7Ag-gr-mOO4",
      },
      {
        label: "Lista 28",
        title: "Los que buscaron el regreso",
        url: "https://youtu.be/UYtulj3-Qis",
      },
      {
        label: "Lista 29",
        title: "La división después de la fragmentación",
        url: "https://youtu.be/Aa2h7AA4NzE",
      },
      {
        label: "Lista 30",
        title: "Babel",
        url: "https://youtu.be/qw93cbVmLZM",
      },
      {
        label: "Lista 31",
        title: "El primer caballo de Troya",
        url: "https://youtu.be/QKRajZjX-gM",
      },
      {
        label: "Lista 32",
        title: "El primer hombre y la primera mujer",
        url: "https://youtu.be/nDr4LiYXGqA",
      },
      {
        label: "Lista 33",
        title: "La llegada 2",
        url: "https://youtu.be/uBBIA0Ufsf4",
      },
      {
        label: "Lista 34",
        title: "La llegada",
        url: "https://youtu.be/v_7Xwb1QTN4",
      },
      {
        label: "Lista 35",
        title: "Recorríamos el mundo",
        url: "https://youtu.be/9kOALWQHVEA",
      },
      {
        label: "Lista 36",
        title: "Todos podían sentirse",
        url: "https://youtu.be/qYDoNqLyq4o",
      },
      {
        label: "Lista 37",
        title: "Antes de las estrellas",
        url: "https://youtu.be/vc3Pns5gZoU",
      },
      {
        label: "Lista 38",
        title: "El oro anunaki",
        url: "https://youtu.be/GzNPkTtZMSo",
      },
      {
        label: "Lista 39",
        title: "Babel nunca fue una torre",
        url: "https://youtu.be/huBNuInqPdM",
      },
    ],
  },
  {
    id: "reglas-resonancia",
    number: "Video largo 2",
    title: "La materia confiaba",
    status: "YouTube y TikTok publicados",
    description:
      "Amplitud como caudal, frecuencia como cadencia, mente antena, Reinos vivos y Responsabilidad Frecuencial.",
    poster: "piedra-recibe-primordial.png",
    youtube: {
      label: "YouTube",
      url: "https://youtu.be/s4yxolmFrVU?si=Ner5ryq-udCTnHKH",
      cta: "Ver video largo en YouTube",
      note: "Se abre la primera pieza publicada en YouTube. Abajo estan todas las piezas ordenadas del capítulo.",
      fallbackSrc: "",
      ratio: "wide",
    },
    tiktok: {
      label: "TikTok",
      url: "https://www.tiktok.com/@jorgerubalcavarios/video/7652595194466028808?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      cta: "Ver video largo en TikTok",
      note: "Se abre la versión publicada en TikTok para apoyar las vistas desde esa plataforma.",
      fallbackSrc: "",
      ratio: "vertical",
    },
    clips: [
      {
        label: "Pieza 1",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7653152323606236424?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 2",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7653318910439066898?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 3",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7653698894320225543?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 4",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7653923832830545159?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 5",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7654424157697969415?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 6",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7654583673362107655?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 7",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7654682636740218119?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 8",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7654952931627715847?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 9",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7655199173825924359?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        label: "Pieza 10",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7655452140747394312?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
    youtubeClips: [
      {
        label: "Pieza 1",
        title: "Somos el legado",
        url: "https://youtu.be/s4yxolmFrVU?si=Ner5ryq-udCTnHKH",
      },
      {
        label: "Pieza 2",
        title: "Todo vibra",
        url: "https://youtu.be/f3tqX5cWNms?si=oOFDOglqnRepGeO4",
      },
      {
        label: "Pieza 3",
        title: "Vivimos el lienzo",
        url: "https://youtu.be/NreGDYoWPSs?si=UmN1cjPDuUd-S-hY",
      },
      {
        label: "Pieza 4",
        title: "La amplitud",
        url: "https://youtu.be/9LfSOOwjysI?si=PFiNOli4Y-YgasEs",
      },
      {
        label: "Pieza 5",
        title: "La frecuencia",
        url: "https://youtu.be/4PpCAbAUuf8?si=WsHjrG1xnempnA6K",
      },
      {
        label: "Pieza 6",
        title: "La mente es antena",
        url: "https://youtu.be/1k3tgve8wpo?si=DVvCTHWAaru_kKWe",
      },
      {
        label: "Pieza 7",
        title: "Los reinos son memoria viva",
        url: "https://youtu.be/TXwX4OaWTKI?si=03QpTrUcXOxwAQPa",
      },
      {
        label: "Pieza 8",
        title: "Los seres de los reinos",
        url: "https://youtu.be/mzuxKkuogEE?si=tSESDm9HxnujszmF",
      },
      {
        label: "Pieza 9",
        title: "Amor y apatía",
        url: "https://youtu.be/jNzkb1MqgfY?si=Z7UPViWFgqObAFMb",
      },
      {
        label: "Pieza 10",
        title: "La responsabilidad frecuencial",
        url: "https://youtu.be/_zAnnjoVh-A?si=AyW8B0DFPKXX3sSA",
      },
      {
        label: "Pieza 11",
        title: "La materia aún confiaba",
        url: "https://youtu.be/OTTwc8OQqdA?si=6TXri8uhg_g-i_uH",
      },
    ],
  },
  {
    id: "cielo-infinito",
    number: "Video largo 3",
    title: "El cielo infinito y los acorazados",
    status: "en escritura",
    description:
      "Las estrellas que miran, la noche, lo seco, el sol directo y los visitantes acorazados que no podíamos sentir.",
    poster: "cielo-abierto-estrellas.png",
    youtube: {
      label: "YouTube",
      url: "",
      cta: "Agregar enlace de YouTube",
      note: "Este capítulo está en pulido. Falta pegar aquí el vínculo público cuando se publique.",
      fallbackSrc: "",
      ratio: "wide",
    },
    tiktok: {
      label: "TikTok",
      url: "",
      cta: "Agregar enlace de TikTok",
      note: "Los primeros cinco shorts ya están reordenados. Falta pegar aquí el vínculo público cuando se publique.",
      fallbackSrc: "",
      ratio: "vertical",
    },
    clips: [],
  },
  {
    id: "division-palabra",
    number: "Video largo 4",
    title: "La división y la palabra rota",
    status: "en desarrollo",
    description:
      "La Fragmentación entra como clasificación, después intervención, lenguaje, mentira, propiedad y Babel.",
    poster: "ecosistema-unidad.png",
    youtube: { label: "YouTube", url: "", fallbackSrc: "", ratio: "wide" },
    tiktok: { label: "TikTok", url: "", fallbackSrc: "", ratio: "vertical" },
    clips: [],
  },
];

const ORIGIN_CHAPTERS = [
  {
    number: "Video 1",
    title: "El universo dormía",
    line: "Al principio, las partes estaban demasiado separadas para sentirse.",
    image: "universo-dormido.png",
    url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648397881853873426?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
  },
  {
    number: "Video 2",
    title: "Nacimiento de la diversidad",
    line: "La vida quiso más movimiento, más memoria y más experiencia.",
    image: "ecosistema-unidad.png",
    url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648427430801132818?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
  },
  {
    number: "Video 3",
    title: "La Tierra como madre amorosa",
    line: "Nubes luminosas, lluvia cálida y luz suave para abrir los ojos sin romperlos.",
    image: "tierra-vientre-nubes.png",
    url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648633777958292754?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
  },
  {
    number: "Video 4",
    title: "La primera humanidad",
    line: "Humanos, animales, árboles, ríos y piedras conectados por Resonancia.",
    image: "triada-primordial-lluvia.png",
    url: "https://www.tiktok.com/@jorgerubalcavarios/video/7648726281609022738?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
  },
];

const TIKTOK_STORY_ARCS = [
  {
    title: "El mundo original",
    description:
      "La Tierra como madre, la primera humanidad, los animales y la materia que todavía confiaba.",
    clips: [
      {
        number: "Ruta 01",
        title: "Las nubes abrazaban toda la Tierra",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7640012985313873170?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 02",
        title: "Experimentábamos las formas con ella",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7640540568195452168?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 03",
        title: "Nunca nos sentimos solos",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7641287687231540487?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 04",
        title: "La materia escucha",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645907179353935111?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "El cielo infinito y los acorazados",
    description:
      "Primero la maravilla: estrellas, noche, sequedad y sol directo. Después los visitantes cerrados que no podíamos sentir.",
    clips: [
      {
        number: "Ruta 05",
        title: "El cielo se abrió hacia una inmensidad",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645904323813068050?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 06",
        title: "Los visitantes llegaron cerrados al mundo",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645910941367897362?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 07",
        title: "La materia parecía muda con ellos",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645900153303354642?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 08",
        title: "El regalo ambiguo de las palabras",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7641761171011439880?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "Lenguaje, símbolos y templos",
    description:
      "Cuando la experiencia dejó de transmitirse completa, nacieron palabras, símbolos y lugares para conservar memoria.",
    clips: [
      {
        number: "Ruta 09",
        title: "No transmitíamos ideas",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7646177414892080402?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 10",
        title: "Las palabras no contienen la verdad",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7643321999997095175?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 11",
        title: "Los símbolos como recuerdos vivos",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7643151604350291218?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 12",
        title: "Templos y lugares energéticos",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7642648879279656210?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "Los antiguos sobrevivientes",
    description:
      "Algunos no olvidaron: profetas, druidas, nahuales, sabios, monjes y guardianes del recuerdo.",
    clips: [
      {
        number: "Ruta 13",
        title: "La humanidad antigua también se dividió",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7642387616129649928?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 14",
        title: "No todos se fueron",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7646607631133478162?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 15",
        title: "Profetas, druidas, nahuales, sabios y monjes",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7643192865195052295?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 16",
        title: "Todos enseñaban lo mismo",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7643225597195373842?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "El mundo que inventamos",
    description:
      "Propiedad, carencia, ideologías, ruido moderno y la nostalgia por volver a escuchar.",
    clips: [
      {
        number: "Ruta 17",
        title: "Posesiones, riqueza y estatus",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645898117593812232?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 18",
        title: "Ideas nacidas de codicia de poder",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645647525067738386?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 19",
        title: "Carencia, miedo, limitación y muerte",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7644623918971489554?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 20",
        title: "El humano atrapado dentro de sí",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7644746155544333576?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 21",
        title: "Nos llama volver",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645867952973106439?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 22",
        title: "Sabían que olvidaríamos",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7646720918537964808?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "La Tierra y el dolor",
    description:
      "La Tierra seguía hablando, pero la humanidad empezó a necesitar dolor para volver a sentir al otro.",
    clips: [
      {
        number: "Ruta 23",
        title: "La Tierra seguía hablando",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645248213032652050?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
      {
        number: "Ruta 24",
        title: "El sufrimiento puede quebrar el ego",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7645119758962035986?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
      },
    ],
  },
  {
    title: "Piezas por confirmar",
    description:
      "Material visto en los archivos descargados, pero con enlace público dudoso o pendiente de revisar.",
    clips: [
      {
        number: "Pendiente",
        title: "Buscamos el templo afuera",
        note: "Falta confirmar su enlace único de TikTok antes de publicarlo en la ruta.",
      },
      {
        number: "Revisar",
        title: "El guardián de mi hermano",
        url: "https://www.tiktok.com/@jorgerubalcavarios/video/7646577798504598791?is_from_webapp=1&sender_device=pc&web_id=7649052957916579329",
        note: "El archivo descargado tiene una cola negra larga; conviene revisar si el TikTok publicado también la conserva.",
      },
    ],
  },
];

const STORY_STEPS = [
  {
    tab: "Tierra madre",
    kicker: "Movimiento 1",
    title: "La Tierra dosificó la luz.",
    text:
      "Antes de la noche visible, la Tierra cubrió el cielo con nubes luminosas. No ocultaba el mundo: lo cuidaba.",
    image: "tierra-vientre-nubes.png",
    alt: "Tierra primigenia envuelta en nubes luminosas como vientre protector.",
  },
  {
    tab: "Triadas",
    kicker: "Movimiento 2",
    title: "Nunca necesitaron multitudes para estar unidos.",
    text:
      "Los primordiales vivían en tríadas: pequeño, joven y adulto. Separados por mares, seguían sintiendo una misma red.",
    image: "triada-primordial-lluvia.png",
    alt: "Tres humanos primordiales bajo lluvia cálida.",
  },
  {
    tab: "Materia",
    kicker: "Movimiento 3",
    title: "La materia confiaba.",
    text:
      "La piedra no era esclava ni objeto muerto. Era joven, inocente, abierta. Se reconocía en el humano y respondía sin esperar traición.",
    image: "piedra-recibe-primordial.png",
    alt: "Piedra viva suavizando su forma para recibir a un primordial.",
  },
  {
    tab: "Profundidad",
    kicker: "Movimiento 4",
    title: "La Tierra hablaba desde todos sus Reinos.",
    text:
      "Los mares enseñaban memoria, las cavernas duración, los volcanes transformación y los animales formas distintas de presencia.",
    image: "mundos-acuaticos.png",
    alt: "Humanos primordiales junto a criaturas antiguas bajo el mar.",
  },
  {
    tab: "Cielo infinito",
    kicker: "Movimiento 5",
    title: "Las estrellas nos llamaron desde lejos.",
    text:
      "El cielo abierto no fue herida al principio. Fue exposición anticipada: noche, distancia, sol directo y una curiosidad infinita.",
    image: "cielo-abierto-estrellas.png",
    alt: "Primeras estrellas visibles sobre la Tierra primordial.",
  },
];

let activeVideoIndex = 1;
let activeFormat = "youtube";
let activeStoryIndex = 0;

function isExternalUrl(src) {
  return /^https?:\/\//i.test(src);
}

function getYouTubeEmbed(src) {
  const match = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : src;
}

function renderVideo() {
  const episode = VIDEO_LIBRARY[activeVideoIndex];
  const format = episode[activeFormat];
  const videoShell = document.querySelector("#videoShell");
  const videoPlayer = document.querySelector("#videoPlayer");
  const label = document.querySelector("#episodeLabel");
  const title = document.querySelector("#episodeTitle");
  const description = document.querySelector("#episodeDescription");

  if (!videoShell || !videoPlayer) return;

  label.textContent = episode.number;
  title.textContent = episode.title;
  description.textContent = episode.description;
  videoShell.classList.toggle("is-vertical", format.ratio === "vertical");

  if (format.url && activeFormat === "youtube") {
    videoPlayer.innerHTML = `
      <iframe
        src="${getYouTubeEmbed(format.url)}"
        title="${episode.title} en YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="video-note">
        ${format.note || "Video publicado en YouTube."}
        <a href="${format.url}" target="_blank" rel="noopener">Abrir en YouTube</a>
      </div>
    `;
    return;
  }

  if (format.url) {
    videoPlayer.innerHTML = `
      <div class="platform-card" style="background-image: linear-gradient(rgba(3, 6, 9, 0.72), rgba(3, 6, 9, 0.88)), url('${episode.poster}')">
        <div>
          <p class="episode-label">${format.label}</p>
          <h3>${episode.title}</h3>
          <p>${format.note || `Abre el video publicado para apoyar las vistas del proyecto en ${format.label}.`}</p>
          <a class="button primary" href="${format.url}" target="_blank" rel="noopener">${format.cta || `Ver en ${format.label}`}</a>
        </div>
      </div>
    `;
    return;
  }

  if (!format.fallbackSrc) {
    videoPlayer.innerHTML = `
      <div class="video-placeholder">
        <div>
          <strong>Espacio reservado</strong>
          <p>${format.note || "Cuando este capítulo esté listo, cambia su enlace en VIDEO_LIBRARY y aparecerá aquí."}</p>
        </div>
      </div>
    `;
    return;
  }

  videoPlayer.innerHTML = `
    <div class="video-note">Vista previa local. Cuando agreguemos el enlace publicado, este botón enviará a ${format.label}.</div>
    <video controls playsinline preload="metadata" poster="${episode.poster}">
      <source src="${format.fallbackSrc}" type="video/mp4" />
      Tu navegador no pudo cargar este video.
    </video>
  `;
}

function renderVideoTabs() {
  const tabs = document.querySelector("#videoTabs");
  if (!tabs) return;

  tabs.innerHTML = ["youtube", "tiktok"]
    .map((formatName) => {
      const episode = VIDEO_LIBRARY[activeVideoIndex];
      const label = episode[formatName].label;
      const active = activeFormat === formatName ? " is-active" : "";
      return `<button class="video-tab${active}" type="button" data-format="${formatName}">${label}</button>`;
    })
    .join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFormat = button.dataset.format;
      renderVideoTabs();
      renderVideo();
      renderClipGrid();
    });
  });
}

function renderChapterList() {
  const list = document.querySelector("#chapterList");
  if (!list) return;

  list.innerHTML = VIDEO_LIBRARY.map((episode, index) => {
    const active = index === activeVideoIndex ? " is-active" : "";
    const statusLabel = episode.status === "disponible" ? "Publicado" : episode.status;
    return `
      <button class="chapter-button${active}" type="button" data-index="${index}">
        <strong>${episode.number}: ${episode.title}</strong>
        <span>${statusLabel}</span>
      </button>
    `;
  }).join("");

  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeVideoIndex = Number(button.dataset.index);
      activeFormat = "youtube";
      renderChapterList();
      renderVideoTabs();
      renderVideo();
      renderClipGrid();
    });
  });
}

function renderSeriesGrid() {
  const grid = document.querySelector("#seriesGrid");
  if (!grid) return;

  grid.innerHTML = VIDEO_LIBRARY.map((episode) => `
    <article class="series-card" data-status="${episode.status}">
      <strong>${episode.number}</strong>
      <h3>${episode.title}</h3>
      <p>${episode.description}</p>
      <p>${episode.status === "disponible" ? "Con salida a plataformas." : "Listo para conectar cuando tengamos el enlace público."}</p>
    </article>
  `).join("");
}

function renderOriginChapters() {
  const grid = document.querySelector("#originChapterGrid");
  if (!grid) return;

  grid.innerHTML = ORIGIN_CHAPTERS.map((chapter) => `
    <a class="origin-card" href="${chapter.url}" target="_blank" rel="noopener" style="background-image: linear-gradient(rgba(3, 6, 9, 0.3), rgba(3, 6, 9, 0.86)), url('${chapter.image}')">
      <span>${chapter.number}</span>
      <strong>${chapter.title}</strong>
      <small>${chapter.line}</small>
    </a>
  `).join("");
}

function renderClipGrid() {
  const grid = document.querySelector("#clipGrid");
  const kicker = document.querySelector("#clipKicker");
  const title = document.querySelector("#clipTitle");
  if (!grid) return;

  const episode = VIDEO_LIBRARY[activeVideoIndex];
  const isYouTube = activeFormat === "youtube";
  const platform = isYouTube ? "YouTube" : "TikTok";
  const clips = isYouTube ? episode.youtubeClips || [] : episode.clips || [];

  if (kicker) kicker.textContent = platform;
  if (title) title.textContent = `Piezas publicadas en ${platform}`;

  if (!clips.length) {
    if (title) title.textContent = `Sin piezas separadas en ${platform}`;
    grid.innerHTML = `
      <div class="clip-empty">
        Este capítulo ya tiene su salida principal arriba. Cuando haya piezas separadas en ${platform}, aparecerán aquí.
      </div>
    `;
    return;
  }

  grid.innerHTML = clips.map((clip) => `
    <a class="clip-card" href="${clip.url}" target="_blank" rel="noopener">
      <span>${clip.label}</span>
      <strong>${clip.title || `Ver en ${platform}`}</strong>
      <small>${clip.note || `Abrir en ${platform}`}</small>
    </a>
  `).join("");
}

function renderExtraClipGrid() {
  const grid = document.querySelector("#extraClipGrid");
  if (!grid) return;

  grid.innerHTML = TIKTOK_STORY_ARCS.map((arc) => `
    <article class="arc-card">
      <div class="arc-heading">
        <p class="section-kicker">${arc.title}</p>
        <p>${arc.description}</p>
      </div>
      <div class="clip-grid arc-grid">
        ${arc.clips.map((clip) => {
          const content = `
            <span>${clip.number}</span>
            <strong>${clip.title}</strong>
            ${clip.note ? `<small>${clip.note}</small>` : "<small>Ver en TikTok</small>"}
          `;

          if (!clip.url) {
            return `<div class="clip-card is-pending">${content}</div>`;
          }

          return `<a class="clip-card" href="${clip.url}" target="_blank" rel="noopener">${content}</a>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderStoryButtons() {
  const holder = document.querySelector("#storyButtons");
  if (!holder) return;

  holder.innerHTML = STORY_STEPS.map((step, index) => {
    const active = index === activeStoryIndex ? " is-active" : "";
    return `<button class="story-button${active}" type="button" data-index="${index}">${step.tab}</button>`;
  }).join("");

  holder.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeStoryIndex = Number(button.dataset.index);
      renderStoryButtons();
      renderStoryStep();
    });
  });
}

function renderStoryStep() {
  const step = STORY_STEPS[activeStoryIndex];
  const image = document.querySelector("#storyImage");
  const kicker = document.querySelector("#storyKicker");
  const title = document.querySelector("#storyTitle");
  const text = document.querySelector("#storyText");

  if (!image || !kicker || !title || !text) return;

  image.src = step.image;
  image.alt = step.alt;
  kicker.textContent = step.kicker;
  title.textContent = step.title;
  text.textContent = step.text;
}

function setupResonanceCanvas() {
  const canvas = document.querySelector("#resonanceCanvas");
  const range = document.querySelector("#resonanceRange");
  const output = document.querySelector("#resonanceValue");

  if (!canvas || !range || !output) return;

  const ctx = canvas.getContext("2d");
  const bodyPoints = createMeditationBodyPoints();
  const particles = bodyPoints.map((point, index) => ({
    ...point,
    index,
    angle: (index / bodyPoints.length) * Math.PI * 2,
    seed: index * 1.618,
    drift: 0.002 + ((index % 7) * 0.0007),
    x: 0,
    y: 0,
  }));

  let resonance = Number(range.value) / 100;
  let frame = 0;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function smoothstep(edge0, edge1, value) {
    const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  function createMeditationBodyPoints() {
    const points = [];

    function addPoint(x, y, group = "body") {
      points.push({ tx: x, ty: y, group });
    }

    function addCircle(cx, cy, radius, count, group) {
      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2;
        addPoint(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, group);
      }
    }

    function addCurve(fromX, fromY, toX, toY, count, bend, group) {
      for (let i = 0; i < count; i += 1) {
        const t = count === 1 ? 1 : i / (count - 1);
        const x = fromX + (toX - fromX) * t;
        const y = fromY + (toY - fromY) * t + Math.sin(t * Math.PI) * bend;
        addPoint(x, y, group);
      }
    }

    function addOval(cx, cy, rx, ry, count, group, start = 0, end = Math.PI * 2) {
      for (let i = 0; i < count; i += 1) {
        const t = count === 1 ? 0 : i / (count - 1);
        const angle = start + (end - start) * t;
        addPoint(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry, group);
      }
    }

    addCircle(0, -150, 29, 24, "head");
    addCircle(0, -150, 12, 8, "head");

    for (let i = 0; i < 32; i += 1) {
      const t = i / 31;
      const y = -104 + t * 138;
      const width = 18 + Math.sin(t * Math.PI) * 36;
      addPoint(Math.sin(t * Math.PI * 2) * 5, y, "spine");
      addPoint(-width * 0.62, y + Math.sin(t * Math.PI) * 6, "torso");
      addPoint(width * 0.62, y + Math.sin(t * Math.PI) * 6, "torso");
    }

    addCurve(-42, -58, -102, 52, 18, 26, "arm");
    addCurve(42, -58, 102, 52, 18, 26, "arm");
    addCircle(-104, 55, 9, 6, "hand");
    addCircle(104, 55, 9, 6, "hand");

    addOval(-44, 92, 118, 30, 30, "leg", Math.PI * 0.12, Math.PI * 0.94);
    addOval(44, 92, 118, 30, 30, "leg", Math.PI * 0.06, Math.PI * 0.88);
    addOval(0, 24, 126, 212, 44, "aura");

    return points;
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function draw() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const cx = width / 2;
    const cy = height / 2 + 18;
    const scale = Math.min(width / 620, height / 560);
    frame += 1;

    ctx.clearRect(0, 0, width, height);

    const bg = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(width, height) * 0.72);
    bg.addColorStop(0, `rgba(31, 119, 114, ${0.14 + resonance * 0.18})`);
    bg.addColorStop(0.46, "rgba(16, 36, 31, 0.66)");
    bg.addColorStop(1, "rgba(5, 8, 10, 1)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const formation = smoothstep(0.16, 0.88, resonance);
    const activeProgress = smoothstep(0.03, 1, resonance);
    const visibleCount = Math.max(1, Math.round(1 + Math.pow(activeProgress, 1.08) * (particles.length - 1)));
    const pulse = 1 + Math.sin(frame * 0.025) * 0.035 * formation;
    const auraAlpha = smoothstep(0.54, 0.96, resonance);

    if (auraAlpha > 0) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale * pulse, scale * pulse);
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(213, 168, 79, ${auraAlpha * (0.16 - i * 0.035)})`;
        ctx.lineWidth = 2 + i;
        ctx.ellipse(0, -16, 128 + i * 26, 228 + i * 34, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    particles.forEach((particle, index) => {
      particle.angle += particle.drift * (0.4 + resonance);
      const earlyRadius = (index === 0 ? 0 : 16 + index * 2.2) * (1 - formation);
      const spiralX = Math.cos(particle.angle + frame * 0.006) * earlyRadius;
      const spiralY = Math.sin(particle.angle + frame * 0.006) * earlyRadius * 0.72;
      const bodyDrift = Math.sin(frame * 0.018 + particle.seed) * (7 - formation * 5);
      const targetX = particle.tx * scale + bodyDrift * scale;
      const targetY = particle.ty * scale + Math.cos(frame * 0.015 + particle.seed) * 4 * scale;
      const appear = clamp((visibleCount - index) / 8, 0, 1);
      const merge = formation * appear;

      particle.visible = appear > 0;
      particle.alpha = appear;
      particle.x = cx + spiralX * (1 - merge) + targetX * merge;
      particle.y = cy + spiralY * (1 - merge) + targetY * merge;
    });

    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i += 1) {
      if (!particles[i].visible) continue;
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        if (!b.visible) continue;
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        const sameGroup = a.group === b.group;
        const limit = sameGroup ? 42 + formation * 28 : 24 + formation * 16;
        if (distance < limit) {
          const alpha = (1 - distance / limit) * (0.08 + formation * 0.32) * Math.min(a.alpha, b.alpha);
          ctx.strokeStyle = `rgba(242, 224, 175, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const particle of particles) {
      if (!particle.visible) continue;
      const groupBoost = particle.group === "head" || particle.group === "spine" ? 1.25 : 1;
      const alpha = (0.38 + resonance * 0.44) * particle.alpha;
      const radius = (2 + formation * 2.4) * groupBoost;
      ctx.beginPath();
      ctx.fillStyle = `rgba(238, 198, 94, ${alpha})`;
      ctx.shadowColor = particle.group === "aura" ? "rgba(213, 168, 79, 0.9)" : "rgba(31, 119, 114, 0.95)";
      ctx.shadowBlur = 3 + resonance * 10;
      ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    if (formation > 0.72) {
      const bodyGlow = ctx.createRadialGradient(cx, cy - 72 * scale, 18, cx, cy - 26 * scale, 190 * scale);
      bodyGlow.addColorStop(0, `rgba(255, 247, 232, ${0.16 * formation})`);
      bodyGlow.addColorStop(0.34, `rgba(213, 168, 79, ${0.09 * formation})`);
      bodyGlow.addColorStop(1, "rgba(213, 168, 79, 0)");
      ctx.fillStyle = bodyGlow;
      ctx.beginPath();
      ctx.ellipse(cx, cy - 28 * scale, 112 * scale, 208 * scale, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255, 247, 232, 0.84)";
    ctx.font = "700 13px system-ui, sans-serif";
    ctx.fillText(
      resonance > 0.82 ? "Cuerpo de Unidad" : resonance > 0.42 ? "Resonancia encarnando" : "Partícula sola",
      22,
      height - 24,
    );

    requestAnimationFrame(draw);
  }

  range.addEventListener("input", () => {
    resonance = Number(range.value) / 100;
    output.textContent = `${range.value}%`;
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  draw();
}

renderVideoTabs();
renderChapterList();
renderSeriesGrid();
renderOriginChapters();
renderClipGrid();
renderExtraClipGrid();
renderStoryButtons();
renderStoryStep();
renderVideo();
setupResonanceCanvas();
