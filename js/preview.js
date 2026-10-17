const id = getId();
const sec = (t, html) => html ? `<section><h2>${t}</h2>${html}</section>` : "";
const H = {
  contact: p => [p.email, p.phone, p.address].filter(Boolean).map(x => `<span>${esc(x)}</span>`).join(""),
  tags: p => (p.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join(""),
  links: p => (p.links || []).filter(l => l.url).map(l =>
    `<a class="lnk" href="${esc(url(l.url))}" target="_blank" rel="noopener">${esc(l.label || l.url)}</a>`).join(""),
  edu: p => (p.education || []).map(e =>
    `<div class="item"><b>${esc(e.degree)}</b><span>${esc(e.school)}</span><em>${esc(e.years)}</em></div>`).join(""),
  exp: p => (p.experience || []).map(e =>
    `<div class="item"><b>${esc(e.role)}</b><span>${esc(e.company)}</span><em>${esc(e.years)}</em><p>${esc(e.description)}</p></div>`).join(""),
  projs: p => (p.projects || []).map(x =>
    `<div class="item pj"><b>${esc(x.title)}</b><p>${esc(x.description)}</p>${x.link ? `<a class="lnk" href="${esc(url(x.link))}" target="_blank" rel="noopener">View project</a>` : ""}</div>`)
};

const TEMPLATES = {
  simple: p => `
    <article class="t-simple">
      <header>${pic(p)}<h1>${esc(p.full_name)}</h1><div class="meta">${H.contact(p)}</div></header>
      ${sec("About", p.about && `<p>${esc(p.about)}</p>`)}
      ${sec("Education", H.edu(p))}
      ${sec("Experience", H.exp(p))}
      ${sec("Skills", (p.skills || []).length ? `<p>${p.skills.map(esc).join(", ")}</p>` : "")}
      ${sec("Projects", H.projs(p).join(""))}
      ${sec("Links", H.links(p))}
    </article>`,

  modern: p => `
    <article class="t-modern">
      <div class="mhero">${pic(p)}
        <div><h1>${esc(p.full_name)}</h1><div class="meta">${H.contact(p)}</div>
        ${p.email ? `<a class="btn" href="mailto:${esc(p.email)}">Contact me</a>` : ""}</div>
      </div>
      <div class="mgrid">
        ${p.about ? `<div class="card wide"><h2>About me</h2><p>${esc(p.about)}</p></div>` : ""}
        ${H.tags(p) ? `<div class="card"><h2>Skills</h2>${H.tags(p)}</div>` : ""}
        ${H.edu(p) ? `<div class="card tl"><h2>Education</h2>${H.edu(p)}</div>` : ""}
        ${H.exp(p) ? `<div class="card tl"><h2>Experience</h2>${H.exp(p)}</div>` : ""}
        ${H.projs(p).map(x => `<div class="card">${x}</div>`).join("")}
        ${H.links(p) ? `<div class="card wide"><h2>Find me online</h2>${H.links(p)}</div>` : ""}
      </div>
    </article>`,

  creative: p => `
    <article class="t-creative">
      <aside>${pic(p)}<h1>${esc(p.full_name)}</h1><div class="meta">${H.contact(p)}</div><div class="alinks">${H.links(p)}</div></aside>
      <div class="cmain">
        ${sec("Hello", p.about && `<p class="big">${esc(p.about)}</p>`)}
        ${sec("What I use", H.tags(p) && `<div class="cloud">${H.tags(p)}</div>`)}
        ${sec("Things I've built", H.projs(p).join(""))}
        ${sec("Experience", H.exp(p))}
        ${sec("Education", H.edu(p))}
      </div>
    </article>`
};

async function render() {
  const app = $("#app");
  if (!id) { location.href = "manage.html"; return; }
  try {
    const p = await getOne(id);
    document.title = p.full_name + " | Portfolio";
    document.body.dataset.t = TEMPLATES[p.template] ? p.template : "simple";
    app.innerHTML = `
      <div class="bar">
        <a class="btn ghost sm" href="create.html?id=${id}">Edit information</a>
        <a class="btn ghost sm" href="templates.html?id=${id}">Change template</a>
        <a class="btn sm" href="manage.html">Manage portfolios</a>
      </div>
      ${(TEMPLATES[p.template] || TEMPLATES.simple)(p)}`;
  } catch (e) {
    fail(e);
    app.innerHTML = `<section class="wrap"><p>We couldn't find that portfolio. It may have been deleted.</p><a class="btn" href="manage.html">Back to manage</a></section>`;
  }
}
render();
