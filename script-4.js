const TANGENTS_FILE = "tangents.txt";

let tangents = {};

async function loadTangents() {
  try {
    const response = await fetch(TANGENTS_FILE);

    if (!response.ok) {
      throw new Error(
        `Could not load ${TANGENTS_FILE}. HTTP status: ${response.status}`
      );
    }

    const text = await response.text();

    tangents = parseTangents(text);

    console.log("Tangents loaded:", tangents);

  } catch (error) {
    console.error("Failed to load tangents.txt:", error);

    document.getElementById("tangent-title").textContent =
      "Unable to load Tangents";

    document.getElementById("tangent-text").innerHTML =
      `<p>Could not load <strong>${TANGENTS_FILE}</strong>.</p>
       <p>Make sure the file is in the same folder as tangents.html.</p>`;
  }
}

function parseTangents(text) {
  const result = {};

  // Normalize line endings.
  text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // Split the file into entries.
  const entries = text.split(/^---ENTRY---$/m);

  entries.forEach((entry) => {
    entry = entry.trim();

    if (!entry) return;

    // Find the ID.
    const idMatch = entry.match(/^\[TANGENT:(.+?)\]\s*$/m);

    if (!idMatch) {
      console.warn("Tangent entry is missing an ID:", entry);
      return;
    }

    const id = idMatch[1].trim();

    // Find the title.
    const titleMatch = entry.match(/^TITLE:(.*)$/m);

    if (!titleMatch) {
      console.warn(`Tangent "${id}" is missing a TITLE.`);
      return;
    }

    const title = titleMatch[1].trim();

    // Find everything after the title.
    const titleIndex = entry.indexOf(titleMatch[0]);

    let body = entry
      .substring(titleIndex + titleMatch[0].length)
      .trim();

    result[id] = {
      title: title,
      text: body
    };
  });

  return result;
}

function showTangent(id) {
  const tangent = tangents[id];

  if (!tangent) {
    console.error(`Tangent "${id}" was not found.`);

    document.getElementById("tangent-title").textContent =
      "Tangent not found";

    document.getElementById("tangent-text").innerHTML =
      `<p>No tangent with the ID <strong>${escapeHTML(id)}</strong> was found.</p>`;

    return;
  }

  document.getElementById("tangent-title").textContent =
    tangent.title;

  // Convert newlines to HTML while safely escaping the text.
  document.getElementById("tangent-text").innerHTML =
    escapeHTML(tangent.text).replace(/\n/g, "<br>");
}

function showDream(id) {
  showTangent(id);
}

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.querySelectorAll(".tangent-section-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.parentElement;
    const sidebar = section.parentElement;

    sidebar
      .querySelectorAll(":scope > .tangent-section")
      .forEach((item) => {
        if (item !== section) {
          item.classList.remove("open");
        }
      });

    section.classList.toggle("open");
  });
});

let lastScroll = 0;

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".tangent-sidebar");

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll && current > 80) {
    navbar.classList.add("hide");
    sidebar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("hide");
    sidebar.classList.remove("nav-hidden");
  }

  lastScroll = current;
});

loadTangents();