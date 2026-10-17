const SUPABASE_URL = "https://nbejmracwggebllsfbsq.supabase.co";
const SUPABASE_KEY = "sb_publishable_EFMsOVsxR7ktoQNl2y7-aA_1s55UJY_";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const TABLE = "portfolios";


const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const url = u => !u ? "#" : /^https?:\/\//i.test(u) ? u : "https://" + u;
const getId = () => new URLSearchParams(location.search).get("id");

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}
function fail(e) { console.error(e); toast("Couldn't complete that. " + (e.message || e)); }

async function getOne(id) {
  const { data, error } = await db.from(TABLE).select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}
const pic = p => p.photo_url
  ? `<img class="ph" src="${esc(p.photo_url)}" alt="${esc(p.full_name)}">`
  : `<div class="ph ph0">${esc((p.full_name || "?")[0])}</div>`;
