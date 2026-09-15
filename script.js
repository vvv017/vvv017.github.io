const projects = [
  {
    title: "VTuber Studio",
    eyebrow: "Backend Developer &amp; Operations Manager · 2026–Present",
    summary:
      "Built TypeScript APIs on Cloudflare Workers with D1/R2 for weekly schedules, time-zone conflict detection, Discord OAuth, and role-based access. Added version checks and idempotency keys to guard against duplicate or outdated announcements, and consolidated the React scheduler and Worker API into a Bun monorepo with shared contracts and independent studio website deployment.",
    tags: ["TypeScript", "Bun", "Cloudflare Workers", "D1/R2", "Discord OAuth"],
    links: [],
    accent: "rose"
  },
  {
    title: "AI Content Manager",
    eyebrow: "Full-Stack Developer · Jun 2026–Present",
    summary:
      "Built a React/TypeScript workspace with Node.js and PostgreSQL for projects, tasks, media uploads, AI-assisted transcription, video analysis, and highlight suggestions. Implemented database-backed job queues, retry tracking, revocable sessions, server-side OAuth state, and encrypted provider tokens, with Docker packaging and CI checks for migrations, types, builds, and integration smoke tests.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    links: [],
    accent: "lavender"
  },
  {
    title: "B.A.S.S.",
    eyebrow: "Primary Frontend &amp; Android Developer · Sep 2025–Present",
    summary:
      "Built the React frontend for a Raspberry Pi vehicle-access prototype, connecting facial enrollment, verification, and device controls to FastAPI endpoints. Developed a native Kotlin/Jetpack Compose app with QR-code pairing, automatic device discovery, and phone-camera face enrollment.",
    tags: ["React", "Kotlin", "Jetpack Compose", "FastAPI", "InsightFace", "SQLite", "Raspberry Pi"],
    links: [
      {
        label: "View team repository",
        url: "https://github.com/SJSU-CMPE-195/group-project-team-face-id"
      }
    ],
    accent: "sky"
  },
  {
    title: "Swarm",
    eyebrow: "Procedural 3D Road Trip Game Prototype · May 2026–Present",
    summary:
      "Developed a Godot 4 prototype with on-foot exploration, vehicle driving, interactive cockpit controls, and companion state transitions. Built a deterministic, chunk-streamed world across forest, countryside, and coastal regions. Used Codex, godot-ai, and Blender MCP to iterate on gameplay and models, with explicit state ownership and typed world interfaces that preserve seed-specific saves.",
    tags: ["Godot 4", "GDScript", "Blender", "Codex", "MCP"],
    links: [
      {
        label: "Watch devlog",
        url: "https://www.youtube.com/watch?v=bv0qrKVAqB8&list=PLXqCA3d5cOLfXsxVJ6nG1i8VzQtS53BgS"
      }
    ],
    accent: "mint"
  },
  {
    title: "Bili Share Link Cleaner",
    eyebrow: "Published Chrome Extension · May 2026",
    summary:
      "Published a Chrome/Edge extension that removes Bilibili tracking parameters, preserves surrounding message text, and processes clipboard data locally. 160+ installs as of September 2026.",
    tags: ["JavaScript", "Manifest V3", "Chrome Extension APIs", "Local Processing"],
    links: [
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/bili-share-link-cleaner/fmoffogeilchfilofdkccphjadfoacnp"
      },
      {
        label: "View source",
        url: "https://github.com/vvv017/bilibili-link-cleaner"
      }
    ],
    accent: "honey"
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
const email = "sozecho784566@gmail.com";

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
