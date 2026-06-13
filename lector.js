const READER_DOCS = {
  libro: {
    title: "Libro base v4",
    description:
      "El manuscrito narrativo-filosófico del origen, la caída y la posibilidad de regreso.",
    file: "cuando_eramos_uno_v4.md",
  },
  biblia: {
    title: "Biblia del universo",
    description:
      "La compilación ontológica y narrativa: Todo, Unidad, Fragmentación, Tierra viva y Reinos.",
    file: "biblia_del_universo.md",
  },
  resonancia: {
    title: "Ley de Resonancia Material",
    description:
      "Reglas de materia, amplitud, transformación, energía y comunión con lo vivo.",
    file: "ley_de_resonancia_material.md",
  },
  responsabilidad: {
    title: "Responsabilidad Frecuencial",
    description:
      "El humano como nodo de elección: frecuencia, Reinos, mundo vivo y cuidado de la materia.",
    file: "ley_de_responsabilidad_frecuencial.md",
  },
  recopilacion: {
    title: "Recopilación del universo",
    description:
      "Resumen maestro para próximos libros, videos largos, shorts y desarrollo del canon.",
    file: "recopilacion_universo.md",
  },
  videos: {
    title: "Videos publicados",
    description:
      "Registro de enlaces de YouTube, TikTok y ruta narrativa del primer bloque audiovisual.",
    file: "enlaces_publicados_video_largo_1.md",
  },
};

const params = new URLSearchParams(window.location.search);
const selectedDoc = READER_DOCS[params.get("doc")] ? params.get("doc") : "libro";
const doc = READER_DOCS[selectedDoc];
const titleEl = document.querySelector("#readerTitle");
const descriptionEl = document.querySelector("#readerDescription");
const contentEl = document.querySelector("#readerContent");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>'
    )
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

function flushParagraph(parts, html) {
  if (!parts.length) return;
  html.push(`<p>${inlineMarkdown(parts.join(" "))}</p>`);
  parts.length = 0;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const paragraph = [];
  let list = null;

  function closeList() {
    if (!list) return;
    html.push(`</${list}>`);
    list = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph(paragraph, html);
      closeList();
      continue;
    }

    if (line === "---" || line === "⸻") {
      flushParagraph(paragraph, html);
      closeList();
      html.push("<hr />");
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(paragraph, html);
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph(paragraph, html);
      closeList();
      html.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph(paragraph, html);
      if (list !== "ul") {
        closeList();
        html.push("<ul>");
        list = "ul";
      }
      html.push(`<li>${inlineMarkdown(unordered[1])}</li>`);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph(paragraph, html);
      if (list !== "ol") {
        closeList();
        html.push("<ol>");
        list = "ol";
      }
      html.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph(paragraph, html);
  closeList();
  return html.join("\n");
}

function setActiveNav() {
  document.querySelectorAll("[data-doc-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.docLink === selectedDoc);
  });
}

async function loadReaderDoc() {
  titleEl.textContent = doc.title;
  descriptionEl.textContent = doc.description;
  document.title = `${doc.title} | Cuando éramos uno`;
  setActiveNav();

  try {
    const response = await fetch(doc.file);
    if (!response.ok) throw new Error(`No se pudo cargar ${doc.file}`);
    const markdown = await response.text();
    contentEl.innerHTML = markdownToHtml(markdown);
  } catch (error) {
    contentEl.innerHTML = `
      <p class="error">No pude cargar esta lectura con formato de libro.</p>
      <p class="error"><a href="${doc.file}">Abrir el texto original</a></p>
    `;
  }
}

loadReaderDoc();
