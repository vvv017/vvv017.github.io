const projects = [
  {
    title: "WhiteDragon",
    eyebrow: "Owner · Maintainer · Current release 4.5.0",
    summary:
      "A customizable expression-avatar userscript for ChatGPT. It switches expressions while responses stream, supports per-Project avatar packs, and keeps all user art in local browser storage.",
    tags: ["JavaScript", "Userscript", "ChatGPT UI", "IndexedDB"],
    links: [
      { label: "View repository", url: "https://github.com/vvv017/WhiteDragon" }
    ],
    accent: "rose"
  },
  {
    title: "Codex Neuro Dream Skin",
    eyebrow: "Owner · Maintainer · Visual adaptation",
    summary:
      "An unofficial dark pixel-art theme for the Windows Codex desktop app, with reversible installation, local-only CDP injection, distinct screen artwork, and guarded restore flows.",
    tags: ["PowerShell", "JavaScript", "CSS", "Windows"],
    links: [
      { label: "View repository", url: "https://github.com/vvv017/Codex-Neuro-Dream-Skin" }
    ],
    accent: "lavender"
  },
  {
    title: "POE-Filter-Audio-Manager",
    eyebrow: "Owner · Maintainer · Desktop utility",
    summary:
      "A bilingual local audio manager for Path of Exile filters, with previews, rule-based renaming, duplicate handling, and a lightweight Windows desktop build through Pake and Tauri.",
    tags: ["JavaScript", "Tauri / Pake", "Local Files", "Bilingual UI"],
    links: [
      { label: "View repository", url: "https://github.com/vvv017/POE-Filter-Audio-Manager" }
    ],
    accent: "mint"
  },
  {
    title: "B.A.S.S.",
    eyebrow: "Team member · SJSU CMPE 195",
    summary:
      "A biometric vehicle-access prototype combining a React dashboard, local face enrollment and verification, Raspberry Pi device APIs, and ESP32 hardware work.",
    tags: ["React", "Python", "OpenCV", "Raspberry Pi", "ESP32"],
    links: [
      { label: "View team repository", url: "https://github.com/SJSU-CMPE-195/group-project-team-face-id" }
    ],
    accent: "sky"
  },
  {
    title: "LikeHome",
    eyebrow: "Frontend contributor · CMPE 165 team project",
    summary:
      "Contributed to the user-facing interface of a full-stack team project with a TypeScript and CSS frontend backed by Python services.",
    tags: ["Team Project", "Frontend", "TypeScript", "CSS", "Python"],
    links: [
      {
        label: "View team repository · access may be restricted",
        url: "https://github.com/arjunsudheer/cmpe-165-likehome"
      }
    ],
    accent: "lavender"
  },
  {
    title: "bilibili-link-cleaner",
    eyebrow: "Owner · Maintainer · Published extension",
    summary:
      "A privacy-friendly Chrome and Edge extension that strips tracking parameters from copied Bilibili share links. Processing stays in the browser and the extension is published in the Chrome Web Store.",
    tags: ["Manifest V3", "Browser Extension", "Local-only", "Automation"],
    links: [
      { label: "View repository", url: "https://github.com/vvv017/bilibili-link-cleaner" },
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/fmoffogeilchfilofdkccphjadfoacnp" }
    ],
    accent: "honey"
  },
  {
    title: "NTE Drive Calculator",
    eyebrow: "Upstream contributor · July 2026",
    summary:
      "Contributed optional low-score drive discard marking to an upstream Python desktop calculator for scanning, evaluating, and assigning equipment in Neverness to Everness.",
    tags: ["Python", "Desktop Tool", "Upstream Contribution"],
    links: [
      { label: "View upstream repository", url: "https://github.com/hxwd94666/NTE-Drive-Calculator" },
      { label: "View contribution", url: "https://github.com/hxwd94666/NTE-Drive-Calculator/commit/c68a7e5d6c0f61fa87ed7f1ad725c2940b05ae92" }
    ],
    accent: "lavender"
  }
];

const repos = [
  {
    name: "WhiteDragon",
    description: "Expression-avatar userscript for ChatGPT with live streaming-state changes.",
    role: "Owner · Maintainer",
    language: "JavaScript",
    updated: "Pushed Aug 18, 2026",
    url: "https://github.com/vvv017/WhiteDragon"
  },
  {
    name: "Codex-Neuro-Dream-Skin",
    description: "Reversible pixel-art theme and local injection workflow for Codex on Windows.",
    role: "Owner · Maintainer",
    language: "PowerShell",
    updated: "Pushed Aug 12, 2026",
    url: "https://github.com/vvv017/Codex-Neuro-Dream-Skin"
  },
  {
    name: "POE-Filter-Audio-Manager",
    description: "Local Path of Exile audio workflow with a lightweight Windows build.",
    role: "Owner · Maintainer",
    language: "JavaScript",
    updated: "Pushed Jul 30, 2026",
    url: "https://github.com/vvv017/POE-Filter-Audio-Manager"
  },
  {
    name: "bilibili-link-cleaner",
    description: "Published Manifest V3 extension for cleaning copied Bilibili links locally.",
    role: "Owner · Maintainer",
    language: "Browser extension",
    updated: "Pushed May 17, 2026",
    url: "https://github.com/vvv017/bilibili-link-cleaner"
  },
  {
    name: "group-project-team-face-id",
    description: "B.A.S.S. team repository for a biometric vehicle-access prototype.",
    role: "Organization team member",
    language: "JavaScript / Python",
    updated: "5 merged PRs · Apr 2026",
    url: "https://github.com/SJSU-CMPE-195/group-project-team-face-id"
  },
  {
    name: "cmpe-165-likehome",
    description: "Full-stack CMPE 165 team project with my contribution focused on the frontend.",
    role: "Frontend contributor",
    language: "TypeScript / Python",
    updated: "Repository access may be restricted",
    url: "https://github.com/arjunsudheer/cmpe-165-likehome"
  },
  {
    name: "NTE-Drive-Calculator",
    description: "Upstream Python desktop tool with my discard-marking contribution.",
    role: "Upstream contributor",
    language: "Python",
    updated: "Contributed Jul 2026",
    url: "https://github.com/hxwd94666/NTE-Drive-Calculator"
  },
  {
    name: "WanderPaw",
    description: "Client/server virtual-pet team project in my collaborator footprint.",
    role: "Collaborator",
    language: "JavaScript",
    updated: "My activity through Dec 2024",
    url: "https://github.com/div-dhingra/WanderPaw"
  }
];

const projectGrid = document.querySelector("#project-grid");
const repoGrid = document.querySelector("#repo-grid");
const email = "devampy79@gmail.com";

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card ${project.accent}">
          <p class="card-eyebrow">${project.eyebrow}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="card-links">
            ${project.links
              .map(
                (link) =>
                  `<a href="${link.url}" target="_blank" rel="noreferrer" aria-label="${link.label} for ${project.title}">${link.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderRepos() {
  repoGrid.innerHTML = repos
    .map(
      (repo) => `
        <article class="repo-card">
          <div>
            <p class="repo-role">${repo.role}</p>
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
          </div>
          <div class="repo-meta">
            <span>${repo.language}</span>
            <span>${repo.updated}</span>
          </div>
          <a href="${repo.url}" target="_blank" rel="noreferrer" aria-label="Open ${repo.name} on GitHub">View on GitHub</a>
        </article>
      `
    )
    .join("");
}

function copyEmail(button) {
  const setCopied = () => {
    const originalText = button.textContent;
    button.textContent = "Email copied";
    button.classList.add("copied");

    window.setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 1800);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(setCopied);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = email;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  setCopied();
}

renderProjects();
renderRepos();
document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", () => copyEmail(button));
});
