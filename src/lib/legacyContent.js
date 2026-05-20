import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDirs = ["_help", "_pages"];

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: source };
  const data = {};
  const lines = match[1].split("\n");
  let currentKey = null;
  for (const line of lines) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      data[currentKey] = value.replace(/^["']|["']$/g, "") || [];
      continue;
    }
    const imageMatch = line.match(/^\s+- image_path:\s*(.*)$/);
    if (imageMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push({ image_path: imageMatch[1].trim() });
      continue;
    }
    const altMatch = line.match(/^\s+alt:\s*(.*)$/);
    if (altMatch && currentKey && Array.isArray(data[currentKey])) {
      const last = data[currentKey][data[currentKey].length - 1];
      if (last) last.alt = altMatch[1].trim().replace(/^["']|["']$/g, "");
    }
    const titleMatch = line.match(/^\s+title:\s*(.*)$/);
    if (titleMatch && currentKey && Array.isArray(data[currentKey])) {
      const last = data[currentKey][data[currentKey].length - 1];
      if (last) last.title = titleMatch[1].trim().replace(/^["']|["']$/g, "");
    }
    const excerptMatch = line.match(/^\s+excerpt:\s*>?\s*(.*)$/);
    if (excerptMatch && currentKey && Array.isArray(data[currentKey])) {
      const last = data[currentKey][data[currentKey].length - 1];
      if (last) last.excerpt = excerptMatch[1].trim();
    }
    const urlMatch = line.match(/^\s+url:\s*(.*)$/);
    if (urlMatch && currentKey && Array.isArray(data[currentKey])) {
      const last = data[currentKey][data[currentKey].length - 1];
      if (last) last.url = urlMatch[1].trim().replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: source.slice(match[0].length) };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function localizeText(value = "", lang = "all") {
  const latest = getLatestRelease();
  let localized = value
    .replaceAll("{{ latest_version }}", latest.version)
    .replace(/ver\.\d+(?:\.\d+)*/g, `ver.${latest.version}`);
  if (lang === "ja") {
    return localized.replace(
      "サイド（もしくは上部）がそうです。",
      "制作者は hidea です。rukari / ソフトウェア開発、自転車(ブルベ)、ペンギン、ゆるキャン、ウマ娘 etc. / [rukari.com](https://rukari.com) / [Bluesky](https://bsky.app/profile/hidea.bsky.social) / [GitHub](https://github.com/hidea)",
    );
  }
  if (lang === "en") {
    return localized
      .replace("Google Form へ", "Open Google Form")
      .replace(
        "Please see sidebar(or top banner).",
        "Creator: hidea. rukari / Software Development, Cycling(Brevet), Penguin, YuruCamp, UmaMusume etc. / [rukari.com](https://rukari.com) / [Bluesky](https://bsky.app/profile/hidea.bsky.social) / [GitHub](https://github.com/hidea)",
      );
  }
  return value;
}

function inlineMarkdown(value, lang = "all") {
  return escapeHtml(localizeText(value, lang))
    .replace(/\{\{\s*['"](.*?)['"]\s*\|\s*relative_url\s*\}\}/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}

function galleryHtml(items = [], caption = "") {
  if (!items.length) return "";
  return `<figure class="content-gallery">${items
    .map((item) => `<img src="${item.image_path}" alt="${escapeHtml(item.alt || "")}">`)
    .join("")}${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
}

function normalizeTitle(title = "") {
  return title.replace(/\s+[–-]\s+.*$/, "");
}

export function localizeTitle(title = "", lang = "ja") {
  const parts = title.split(/\s+[–-]\s+/);
  if (parts.length < 2) return title;
  return lang === "ja" ? parts.slice(1).join(" – ") : parts[0];
}

function hasJapanese(value = "") {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(value);
}

function shouldRenderText(value = "", lang = "all") {
  if (lang === "all") return true;
  if (value.includes("docs.google.com")) return true;
  if (/\]\(https?:\/\//.test(value)) return true;
  return lang === "ja" ? hasJapanese(value) : !hasJapanese(value);
}

export function loadLegacyMarkdown(relativePath, options = {}) {
  const fullPath = path.join(root, relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const lang = options.lang || "all";
  return {
    data,
    title: localizeTitle(data.title || "", lang),
    html: renderLegacyMarkdown(body, data, { lang }),
  };
}

export function listLegacyHelp() {
  return fs
    .readdirSync(path.join(root, "_help"))
    .filter((file) => file.endsWith(".markdown"))
    .map((file) => file.replace(/\.markdown$/, ""));
}

export function listHelpPages(lang = "ja") {
  return listLegacyHelp()
    .filter((slug) => slug !== "help" && slug !== "release-notes")
    .map((slug) => {
      const page = loadLegacyMarkdown(`_help/${slug}.markdown`, { lang });
      return {
        slug,
        title: page.title || slug,
        shortTitle: normalizeTitle(page.title || slug),
      };
    });
}

export function renderReleaseNotes(limit, lang = "all") {
  const page = loadLegacyMarkdown("_help/release-notes.markdown", { lang });
  const entries = page.html.match(/<section class="release-entry">[\s\S]*?<\/section>/g) || [];
  return typeof limit === "number" ? entries.slice(0, limit).join("\n") : page.html;
}

export function getLatestRelease() {
  const raw = fs.readFileSync(path.join(root, "_help/release-notes.markdown"), "utf8");
  const match = raw.match(/^- (\d{4}\.\d{1,2}\.\d{1,2})\s+ver\.([^\s]+)/m);
  return {
    date: match?.[1] || "",
    version: match?.[2] || "",
  };
}

export function renderLegacyMarkdown(body, data = {}, options = {}) {
  const lang = options.lang || "all";
  const html = [];
  let listOpen = false;
  let releaseOpen = false;
  let rawHtmlOpen = false;
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const visibleLines = paragraph.filter((line) => shouldRenderText(line, lang));
    if (visibleLines.length) {
      html.push(`<p>${visibleLines.map((line) => inlineMarkdown(line, lang)).join("<br>")}</p>`);
    }
    paragraph = [];
  };

  const closeList = () => {
    if (!listOpen) return;
    html.push("</ul>");
    listOpen = false;
  };

  const closeRelease = () => {
    if (!releaseOpen) return;
    closeList();
    html.push("</section>");
    releaseOpen = false;
  };

  for (const rawLine of body.split("\n")) {
    const line = rawLine.trimEnd();
    if (rawHtmlOpen) {
      html.push(line);
      if (line.includes("</script>") || line.includes("</blockquote>")) {
        rawHtmlOpen = false;
      }
      continue;
    }
    const include = line.match(/\{% include gallery id="([^"]+)"(?: layout="[^"]+")?(?: caption="([^"]+)")? %\}/);
    if (include) {
      flushParagraph();
      closeList();
      html.push(galleryHtml(data[include[1]], include[2]));
      continue;
    }
    if (line.match(/^\{:\s*align="center"\}/)) {
      flushParagraph();
      closeList();
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }
    const release = line.match(/^- (\d{4}\.\d{1,2}\.\d{1,2})\s+ver\.([^\s]+)$/);
    if (release) {
      flushParagraph();
      closeRelease();
      html.push(`<section class="release-entry"><div class="release-meta"><span class="pill">v${escapeHtml(release[2])}</span><span class="pill">${escapeHtml(release[1])}</span></div>`);
      releaseOpen = true;
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      closeList();
      const title = localizeTitle(line.slice(3), lang);
      if (shouldRenderText(title, lang)) html.push(`<h2>${inlineMarkdown(title, lang)}</h2>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      closeList();
      const title = localizeTitle(line.slice(4), lang);
      if (shouldRenderText(title, lang)) html.push(`<h3>${inlineMarkdown(title, lang)}</h3>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      closeList();
      const title = localizeTitle(line.slice(2), lang);
      if (shouldRenderText(title, lang)) html.push(`<h2>${inlineMarkdown(title, lang)}</h2>`);
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) {
      flushParagraph();
      if (!shouldRenderText(bullet[1], lang)) continue;
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(bullet[1], lang)}</li>`);
      continue;
    }
    const linkedImg = line.match(/\[<img src="\{\{\s*["'](.*?)["']\s*\|\s*relative_url\s*\}\}"([^>]*)>\]\((.*?)\)/);
    if (linkedImg) {
      flushParagraph();
      closeList();
      html.push(`<a class="content-image-link" href="${linkedImg[3]}"><img class="content-image" src="${linkedImg[1]}"${linkedImg[2]}></a>`);
      continue;
    }
    const img = line.match(/<img src="\{\{\s*["'](.*?)["']\s*\|\s*relative_url\s*\}\}"([^>]*)>/);
    if (img) {
      flushParagraph();
      closeList();
      html.push(`<img class="content-image" src="${img[1]}"${img[2]}>`);
      continue;
    }
    if (line.startsWith("<blockquote") || line.startsWith("<script") || line.startsWith("</")) {
      flushParagraph();
      closeList();
      html.push(line);
      if (line.startsWith("<blockquote") && !line.includes("</blockquote>")) {
        rawHtmlOpen = true;
      }
      continue;
    }
    paragraph.push(line.replace(/\s{2}$/, ""));
  }
  flushParagraph();
  closeRelease();
  closeList();
  return html.join("\n");
}

export function sourceSummary() {
  return sourceDirs.flatMap((dir) =>
    fs
      .readdirSync(path.join(root, dir))
      .filter((file) => file.endsWith(".markdown"))
      .map((file) => `${dir}/${file}`),
  );
}
