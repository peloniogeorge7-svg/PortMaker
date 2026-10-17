const id = getId();
if (!id) location.href = "create.html";

document.querySelectorAll("[data-t]").forEach(b => b.onclick = async () => {
  const { error } = await db.from(TABLE).update({ template: b.dataset.t }).eq("id", id);
  if (error) return fail(error);
  location.href = "preview.html?id=" + id;
});
