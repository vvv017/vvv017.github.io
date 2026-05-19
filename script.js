const projects = [
  {
    title: "LikeHome",
    eyebrow: "Frontend Contribution - Team Project",
    summary:
      "Contributed to the frontend of a CMPE 165 team project with a full-stack structure, including a TypeScript/CSS frontend and Python backend. My role focused on building and refining parts of the user-facing interface.",
    tags: ["Team Project", "Frontend", "TypeScript", "CSS", "Python Backend"],
    url: "https://github.com/arjunsudheer/cmpe-165-likehome",
    accent: "lavender"
  },
  {
    title: "POE-Filter-Audio-Manager",
    eyebrow: "Small Utility",
    summary:
      "A local Path of Exile filter audio manager. It manages audio files in a selected folder, supports quick preview, filter-rule renaming, manual renaming, rule management, and duplicate handling by swapping names or moving the old file to a suffixed name.",
    tags: ["JavaScript", "HTML", "CSS", "UI Design"],
    url: "https://github.com/vvv017/POE-Filter-Audio-Manager",
    accent: "mint"
  },
  {
    title: "B.A.S.S.",
    eyebrow: "Biometric Automobile Security System - Team Project",
    summary:
      "A Raspberry Pi-based vehicle access prototype that uses facial recognition to verify identity and enable secure, contactless door unlocking and ignition control.",
    tags: ["Raspberry Pi", "Facial Recognition", "JavaScript", "Security"],
    url: "https://github.com/vvv017/BASS",
    accent: "rose"
  },
  {
    title: "bilibili-link-cleaner",
    eyebrow: "Small Utility - PowerShell",
    summary:
      "A focused utility for cleaning shared Bilibili links. Small scripts like this are where I practice turning small annoyances into reusable tools.",
    tags: ["PowerShell", "Automation", "Utility"],
    url: "https://github.com/vvv017/bilibili-link-cleaner",
    accent: "sky"
  }
];

const repos = [
  {
    name: "Likehome",
    description: "LikeHome team project with frontend and backend folders.",
    language: "TypeScript / Python",
    updated: "Team repo",
    url: "https://github.com/arjunsudheer/cmpe-165-likehome"
  },
  {
    name: "bilibili-link-cleaner",
    description: "Make shared Bilibili links cleaner.",
    language: "PowerShell",
    updated: "May 2026",
    url: "https://github.com/vvv017/bilibili-link-cleaner"
  },
  {
    name: "BASS",
    description: "Biometric vehicle access prototype using facial recognition for authentication.",
    language: "JavaScript",
    updated: "May 2026",
    url: "https://github.com/vvv017/BASS"
  },
  {
    name: "WeatherStationJava",
    description: "Java coursework/project repo focused on weather station logic.",
    language: "Java",
    updated: "Dec 2024",
    url: "https://github.com/vvv017/WeatherStationJava"
  },
  {
    name: "WanderPaw",
    description: "Virtual desktop pet project with a UI/frontend focus.",
    language: "JavaScript",
    updated: "Sep 2024",
    url: "https://github.com/vvv017/WanderPaw"
  },
   {
    name: "POE-Filter-Audio-Manager",
    description: "Local Path of Exile filter audio manager.",
    language: "JavaScript",
    updated: "May 2026",
    url: "https://github.com/vvv017/POE-Filter-Audio-Manager"
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
          <a href="${project.url}" aria-label="Open ${project.title}">Open project</a>
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
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
          </div>
          <div class="repo-meta">
            <span>${repo.language}</span>
            <span>${repo.updated}</span>
          </div>
          <a href="${repo.url}" aria-label="Open ${repo.name} on GitHub">View on GitHub</a>
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
