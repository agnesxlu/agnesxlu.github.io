const PROJECTS = [
  {
    t: "2026 San Francisco Voter Guide", o: "Mission Local", d: "Oct. 2026", k: "tool", img: "voter-guide", url: "https://missionlocal.github.io/2026-election-dashboard/voter-guide/",
    s: "Enter your address to see your own ballot, with candidate background and stances, propositions and endorsements.", tools: ["HTML/CSS", "JavaScript", "Mapbox"]
  },
  {
    t: "S.F. neighborhoods in data", o: "Mission Local", d: "June 2025", k: "tool", img: "neighborhood-data", url: "https://missionlocal.org/2025/06/explore-san-francisco-neighborhoods-in-data/",
    s: "Explore demographics in each S.F. neighborhood and census tract.", tools: ["Python/Pandas", "HTML/CSS", "JavaScript", "Bootstrap"]
  },
  {
    t: "2026 supervisor races map", o: "Mission Local", d: "2026", k: "tool", img: "supe-map", url: "https://missionlocal.github.io/2026-election-dashboard/supe-map/",
    s: "An interactive map of the San Francisco supervisor races on the November 2026 ballot.", tools: ["HTML/CSS", "JavaScript"]
  },
  {
    t: "Tracking Daniel Lurie's administration", o: "Mission Local", d: "Feb. 2025", k: "visual", img: "lurie", url: "https://missionlocal.org/2025/02/live-updates-daniel-luries-administration-whos-in-whos-out/",
    s: "A live-updating chart of the comings and goings at San Francisco City Hall.", tools: ["HTML/CSS", "Illustrator"]
  },
  {
    t: "Cost per vote calculator", o: "Mission Local", d: "Nov. 2024", k: "tool", img: "vote-cost", url: "https://missionlocal.org/2024/11/explore-how-much-did-your-vote-cost-in-the-s-f-november-election-use-our-tool-to-find-out/",
    s: "See how much your ballot cost in the November 2024 election.", tools: ["Python/Pandas", "HTML/CSS", "JavaScript"]
  },
  {
    t: "2026 San Francisco Election Dashboard", o: "Mission Local", d: "2026", k: "dash", img: "2026-election-dashboard", url: "https://missionlocal.org/2026-elections/",
    s: "An interactive dashboard tracking the 2026 San Francisco elections and coverage.", tools: ["WordPress", "HTML/CSS", "JavaScript"]
  },
  {
    t: "Mission Street vending ban, week one", o: "Mission Local", d: "Nov. 2023", k: "visual", img: "vending-ban", url: "https://missionlocal.org/2023/11/update-three-days-into-street-vending-ban/",
    s: "Documenting vendors, police and city inspectors in the first week of the vending ban.", tools: ["HTML/CSS", "JavaScript", "Illustrator"]
  },
  {
    t: "The Mission's street teams, explained", o: "Mission Local", d: "Jan. 2026", k: "visual", img: "street-teams", url: "https://missionlocal.org/2026/01/sf-mission-district-street-teams/",
    s: "Meet the five groups that make up the Mission's street team and who does what.", tools: ["Illustrator", "ai2html"]
  },
  {
    t: "Lurie, the small business influencer", o: "Mission Local", d: "Feb. 2026", k: "visual", img: "lurie-social-media", url: "https://missionlocal.org/2026/02/sf-mayor-daniel-lurie-influencer-instagram-small-business-social-media/",
    s: "Tracking the mayor's small-business Instagram visits and asking those businesses how they felt.", tools: ["Datawrapper", "Canva"]
  },
  {
    t: "Microplastics plague Monterey Bay", o: "UC Berkeley J-School", d: "May 2023", k: "visual", img: "microplastics", url: "https://media.journalism.berkeley.edu/projects/2023/20230501_microplastics/",
    s: "An illustrated explainer on how better washing machines could curb microplastic pollution.", tools: ["Procreate", "Figma", "Readymag"]
  },
  {
    t: "At-home water conservation tips", o: "San Francisco Chronicle", d: "2022", k: "visual", img: "water-conservation", url: "https://www.sfchronicle.com/projects/2022/water-conservation-california/",
    s: "An illustrated guide to saving water in the bathroom, kitchen, laundry room and yard.", tools: ["React", "HTML/CSS"]
  },
  {
    t: "Vending ban timeline", o: "Mission Local", d: "Mar. 2025", k: "visual", img: "vending-scrolly", url: "https://missionlocal.org/2025/03/san-francisco-mission-street-vending-ban-timeline/",
    s: "A visual chronology of two years of attempts to curb unpermitted vending on Mission Street.", tools: ["HTML/CSS", "JavaScript", "Photoshop", "geojson.io"]
  },
  {
    t: "The Mission's 2,000 planters", o: "Mission Local", d: "Jan. 2024", k: "visual", img: "planters", url: "https://missionlocal.org/2024/01/one-sf-neighborhoods-response-to-homelessness-2000-plus-planters/",
    s: "Maps and a scrolly archive documenting sidewalk planters and the stories behind them.", tools: ["Mapbox", "geojson.io", "HTML/CSS", "JavaScript"]
  },
  {
    t: "Supervisor lookup tool", o: "Mission Local", d: "Mar. 2025", k: "tool", img: "supervisor-lookup", url: "https://missionlocal.org/2025/03/sf-district-supervisor-tool-who-they-are-what-they-do/",
    s: "A one-stop shop to get to know the supervisors, their aides, and how to reach them.", tools: ["HTML/CSS", "JavaScript", "Illustrator"]
  },
  {
    t: "Inside S.F.'s charter reform group", o: "Mission Local", d: "Jan. 2026", k: "visual", img: "charter-reform-working-group", url: "https://missionlocal.org/2026/01/sf-charter-reform-working-group/",
    s: "A visual guide to the 31-person working group rewriting S.F.'s charter.", tools: ["HTML/CSS", "Illustrator"]
  },
  {
    t: "Autonomous vehicle sites in S.F.", o: "Mission Local", d: "Sept. 2026", k: "visual", img: "av-locations", url: "https://missionlocal.github.io/2026-graphics/av-locations/",
    s: "A map of where autonomous-vehicle operators have proposed or run charging and staging sites across the city.", tools: ["HTML/CSS", "JavaScript"]
  },
  {
    t: "Lurie's 1,500 shelter bed promise", o: "Mission Local", d: "May 2025", k: "visual", img: "lurie-shelter-beds", url: "https://missionlocal.org/2025/05/daniel-lurie-1500-shelter-treatment-bed-goal/",
    s: "Tallying the mayor's progress toward his goal of 1,500 new shelter and treatment beds.", tools: []
  },
    {
    t: "San Francisco Election Dashboard 2024", o: "Mission Local", d: "2024", k: "dash", img: "election-dashboard", url: "https://missionlocal.org/election2024/",
    s: "A hub for information and coverage on local races and campaign finance.", tools: ["WordPress", "HTML/CSS", "JavaScript", "Illustrator"]
  }
];
const KINDS = { all: "All", tool: "Tools", dash: "Dashboards", visual: "Visual explainers" };
const KIND_LABEL = { tool: "Tool", dash: "Dashboard", visual: "Visual explainer" };

let state = { kind: "all", tool: null };
try { const saved = JSON.parse(localStorage.getItem("xl-filter") || "null"); if (saved && KINDS[saved.kind]) state = { kind: saved.kind, tool: null }; } catch (e) { }

const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function save() { try { localStorage.setItem("xl-filter", JSON.stringify(state)); } catch (e) { } }

function renderFilters() {
  $("filters").innerHTML = Object.entries(KINDS).map(([k, label]) => {
    const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.k === k).length;
    return `<button type="button" class="chip" id="f-${k}" data-k="${k}" aria-pressed="${state.kind === k}">${label}<span class="n">${n}</span></button>`;
  }).join("") + `<span class="status" id="status"></span>`;
}

function renderGrid() {
  const list = PROJECTS.filter((p) => (state.kind === "all" || p.k === state.kind) && (!state.tool || p.tools.includes(state.tool)));
  $("grid").innerHTML = list.length ? list.map((p) => `
    <a class="card" href="${p.url}">
      ${p.img ? `<div class="thumb"><img src="img/${p.img}.jpg" alt="" loading="lazy"></div>` : `<div class="thumb ph" aria-hidden="true"><span>${esc(p.t)}</span></div>`}
      <div class="meta">
        <span class="kind">${KIND_LABEL[p.k]}</span>
        <h3>${esc(p.t)}</h3>
        <span class="byline">${esc(p.o)} · ${p.d}</span>
        <p>${esc(p.s)}</p>
        <ul class="tags">${p.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>
    </a>`).join("") : `<div class="empty">No ${KINDS[state.kind].toLowerCase()} use ${esc(state.tool)} yet. Try another format.</div>`;
  const parts = [`Showing ${list.length} of ${PROJECTS.length}`];
  $("status").innerHTML = esc(parts.join("")) + (state.tool ? ` · built with <b>${esc(state.tool)}</b> <button type="button" id="clear-tool">Clear tool</button>` : "");
}

function renderBars() {
  const counts = {};
  PROJECTS.forEach((p) => p.tools.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const max = rows[0][1];
  $("bars").innerHTML = rows.map(([t, n]) => `
    <li><button type="button" data-tool="${esc(t)}" aria-pressed="${state.tool === t}" aria-label="${esc(t)}: ${n} projects. Filter index">
      <span>${esc(t)}</span><span class="track"><span class="fill" style="display:block;width:${(n / max) * 100}%"></span></span><span class="v">${n}</span>
    </button></li>`).join("");
}

function update() { renderFilters(); renderGrid(); save(); }

document.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) { state.kind = chip.dataset.k; update(); return; }
  const bar = e.target.closest("#bars button");
  if (bar) {
    const t = bar.dataset.tool;
    state.tool = state.tool === t ? null : t;
    if (state.tool) state.kind = "all";
    update();
    if (state.tool) $("work").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    return;
  }
  if (e.target.id === "clear-tool") { state.tool = null; update(); }
});

$("copy-email").addEventListener("click", () => {
  const btn = $("copy-email");
  const text = $("email-text").textContent;
  const done = () => { btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy"), 1600); };
  const fallback = () => { const r = document.createRange(); r.selectNodeContents($("email-text")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Selected"; };
  try { navigator.clipboard.writeText(text).then(done, fallback); } catch (err) { fallback(); }
});

update();
