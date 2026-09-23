const READER_DOCS = {
  "universo-septiembre-2026": {
    title: "Cuando éramos uno — Universo canónico vigente",
    description:
      "La narrativa oficial vigente, revisada el 23 de septiembre de 2026.",
    file: "universo_actualizado_septiembre_2026.md",
  },
  "tratado-septiembre-2026": {
    title: "Tratado filosófico del Todo, la conciencia y el estar siendo",
    description:
      "El canon filosófico oficial vigente, revisado el 23 de septiembre de 2026.",
    file: "tratado_filosofico_septiembre_2026.md",
  },
};

const params = new URLSearchParams(window.location.search);
const selectedDoc = READER_DOCS[params.get("doc")] ? params.get("doc") : "universo-septiembre-2026";
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
