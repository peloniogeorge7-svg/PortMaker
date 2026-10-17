const id = getId();
const GROUPS = {
  education: [["school", "School"], ["degree", "Degree or course"], ["years", "Years"]],
  projects: [["title", "Project title"], ["description", "Short description"], ["link", "Link (optional)"]],
  experience: [["role", "Role"], ["company", "Company"], ["years", "Years"], ["description", "What you did"]],
  links: [["label", "Label (e.g. GitHub)"], ["url", "URL"]]
};
const row = (g, v = {}) => `<div class="row">${GROUPS[g].map(([k, l]) =>
  `<input data-k="${k}" placeholder="${l}" aria-label="${l}" value="${esc(v[k])}">`).join("")}
  <button type="button" class="x" aria-label="Remove" onclick="this.parentElement.remove()">×</button></div>`;
const fillGroup = (g, items) => {
  $("#g-" + g).innerHTML = ((items && items.length) ? items : [{}]).map(v => row(g, v)).join("");
};
const collect = g => [...document.querySelectorAll(`#g-${g} .row`)]
  .map(r => Object.fromEntries([...r.querySelectorAll("input")].map(i => [i.dataset.k, i.value.trim()])))
  .filter(o => Object.values(o).some(Boolean));

let photo = "";

document.querySelectorAll("[data-add]").forEach(b => b.onclick = () =>
  $("#g-" + b.dataset.add).insertAdjacentHTML("beforeend", row(b.dataset.add)));

/* Resize the picture in the browser and keep it as a small data URL in the table */
$("#photo").onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const img = new Image();
  img.onload = () => {
    const s = Math.min(1, 320 / Math.max(img.width, img.height));
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * s);
    c.height = Math.round(img.height * s);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    photo = c.toDataURL("image/jpeg", 0.8);
    $("#pv").src = photo;
    $("#pv").hidden = false;
    URL.revokeObjectURL(img.src);
  };
  img.src = URL.createObjectURL(file);
};

async function init() {
  Object.keys(GROUPS).forEach(g => fillGroup(g, []));
  if (!id) return;
  $("#title").textContent = "Edit portfolio";
  try {
    const p = await getOne(id);
    ["full_name", "email", "phone", "address", "about"].forEach(k => $("#" + k).value = p[k] || "");
    $("#skills").value = (p.skills || []).join(", ");
    photo = p.photo_url || "";
    if (photo) { $("#pv").src = photo; $("#pv").hidden = false; }
    Object.keys(GROUPS).forEach(g => fillGroup(g, p[g]));
  } catch (e) { fail(e); }
}
init();

$("#f").onsubmit = async e => {
  e.preventDefault();
  const rec = {
    full_name: $("#full_name").value.trim(),
    email: $("#email").value.trim(),
    phone: $("#phone").value.trim(),
    address: $("#address").value.trim(),
    about: $("#about").value.trim(),
    photo_url: photo,
    skills: $("#skills").value.split(",").map(s => s.trim()).filter(Boolean),
    education: collect("education"),
    projects: collect("projects"),
    experience: collect("experience"),
    links: collect("links")
  };
  try {
    const q = id ? db.from(TABLE).update(rec).eq("id", id) : db.from(TABLE).insert(rec);
    const { data, error } = await q.select().single();
    if (error) throw error;
    toast("Portfolio saved");
    setTimeout(() => location.href = "templates.html?id=" + data.id, 600);
  } catch (err) { fail(err); }
};
