async function load() {
  const list = $("#list");
  const { data, error } = await db.from(TABLE)
    .select("id,full_name,email,template,photo_url")
    .order("created_at", { ascending: false });
  if (error) {
    fail(error);
    list.textContent = "Couldn't load portfolios. Check your Supabase URL, key, and table.";
    return;
  }
  if (!data.length) {
    list.innerHTML = `<div class="card-box empty"><h3>Start your first portfolio</h3>
      <p class="sub">Add your details and pick a template.</p><a class="btn" href="create.html">Create portfolio</a></div>`;
    return;
  }
  list.innerHTML = data.map(p => `
    <div class="card-box mrow">${pic(p)}
      <div class="grow"><b>${esc(p.full_name)}</b><div class="sub">${esc(p.email)} · ${esc(p.template)} template</div></div>
      <div class="acts">
        <a class="btn ghost sm" href="preview.html?id=${p.id}">View</a>
        <a class="btn ghost sm" href="create.html?id=${p.id}">Edit</a>
        <button class="btn danger sm" data-del="${p.id}">Delete</button>
      </div>
    </div>`).join("");
  list.querySelectorAll("[data-del]").forEach(b => b.onclick = async () => {
    if (!confirm("Delete this portfolio? This can't be undone.")) return;
    const { error } = await db.from(TABLE).delete().eq("id", b.dataset.del);
    if (error) return fail(error);
    toast("Portfolio deleted");
    load();
  });
}
load();
