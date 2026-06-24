const projects = [
  {title:"AI-Based Career Path Recommendation",desc:"Web app that recommends careers from skills, interests, and academic branch using rule-based matching across CSE, ECE, AIML, Pharmacy and more — with salary ranges, interview prep, and trending careers.",tech:["Python","Flask","HTML/CSS","JavaScript"],github:"https://github.com/tejavathganesh-26/career_path_recomendation_system",demo:"https://career-path-recomendation-system.onrender.com/",img:"assets/proj-career.jpg"},
  {title:"AI Space Explorer Agent",desc:"Conversational agent for space queries — integrates NASA APIs to surface the daily APOD, Mars rover photos, and curated space facts on demand.",tech:["Python","NASA API","JavaScript"],github:"https://github.com/tejavathganesh-26/space-explorer-agent",demo:"https://space-explorer-agent-w8pu.onrender.com/",img:"assets/proj-space.jpg"},
  {title:"TRINITY — Rural Intelligence Platform",desc:"Bilingual (Telugu/English) platform for Telangana farmers. Three modules — Krishi, Arogya, Schemes — with Claude Vision crop disease detection, pregnancy tracker, vaccines, and scheme discovery.",tech:["HTML","CSS","JavaScript","Claude Vision API"],github:"https://github.com/tejavathganesh-26/TRINITY",demo:"https://trinity-ganesh-2604.netlify.app/",img:"assets/proj-trinity.jpg"},
  {title:"MedSense — Medical Report Analyzer",desc:"Extracts text from medical reports via OCR and explains complex terms and numbers in plain language so patients can understand their own health data.",tech:["Flask","OCR","HTML/CSS","JavaScript"],github:"https://github.com/tejavathganesh-26/medical-report-analyzer",img:"assets/proj-medical.jpg"},
  {title:"Personal Portfolio",desc:"Responsive portfolio built with HTML, CSS, JavaScript and Tailwind. Showcases projects, skills, and contact.",tech:["HTML","Tailwind CSS","JavaScript"],img:"assets/proj-portfolio.jpg"},
  {title:"Calculator Web App",desc:"Responsive calculator with arithmetic, clear/reset, real-time evaluation, and full keyboard input support.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/tejavathganesh-26/HorizonTechX_calculator",demo:"https://tejavathganesh-26.github.io/HorizonTechX_calculator/",img:"assets/proj-calc.jpg"},
  {title:"JavaScript Music Player",desc:"Interactive player with play/pause/next/previous, song info, progress tracking, duration, and volume — wrapped in a responsive UI.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/tejavathganesh-26/HorizonTechX_Music-player",demo:"https://tejavathganesh-26.github.io/HorizonTechX_Music-player/",img:"assets/proj-music.jpg"},
];

const skills = {
  Languages:["Python","Java","JavaScript"],
  Web:["HTML","CSS","Tailwind CSS"],
  Tools:["Git","GitHub","VS Code"],
  Core:["Data Structures","Machine Learning","REST APIs"],
};

const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.getElementById("project-grid").innerHTML = projects.map(p => `
  <article class="card">
    <div class="card-img"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy"/></div>
    <div class="card-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
      <div class="card-actions">
        ${p.github?`<a class="btn btn-outline btn-sm" href="${p.github}" target="_blank" rel="noreferrer">🐙 Code</a>`:""}
        ${p.demo?`<a class="btn btn-primary btn-sm" href="${p.demo}" target="_blank" rel="noreferrer">↗ Live Demo</a>`:""}
        ${!p.github&&!p.demo?`<span class="muted" style="font-size:12px">Links coming soon</span>`:""}
      </div>
    </div>
  </article>
`).join("");

document.getElementById("skill-grid").innerHTML = Object.entries(skills).map(([g,items]) => `
  <div class="skill-card">
    <h3>◆ ${g}</h3>
    <div>${items.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
  </div>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
