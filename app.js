// ================== Tema (oscuro/claro/auto) ==================
(function setupTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme"); // "dark" | "light" | null => auto
  if (saved === "dark") root.classList.add("dark");
  if (saved === "light") root.classList.add("light");

  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    // ciclo: auto -> dark -> light -> auto
    const isDark = root.classList.contains("dark");
    const isLight = root.classList.contains("light");

    if (!isDark && !isLight) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }
    if (isDark) {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      return;
    }
    // estaba light
    root.classList.remove("light");
    localStorage.removeItem("theme"); // vuelve a auto
  });
})();

// ================== Utilidades ==================
const $ = (id) => document.getElementById(id);
const setText = (id, text) => ($(id).textContent = text);

// Marca de tiempo legible
function stamp() {
  const d = new Date();
  return d.toLocaleString();
}

// Copiar al portapapeles con feedback
function copyText(text, label = "IP") {
  if (!text || text === "—") return;
  navigator.clipboard
    .writeText(text)
    .then(() => notify(`✅ ${label} copiada: ${text}`))
    .catch(() => notify(`⚠️ No se pudo copiar ${label}`));
}

// Estado / notificaciones
let statusTimer = null;
function notify(msg) {
  const el = $("status");
  el.textContent = msg;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => (el.textContent = ""), 3500);
}

// ================== Lógica de IP ==================
async function fetchJSON(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function loadIPs() {
  setText("ipV4", "—");
  setText("ipV6", "—");
  setText("lastUpdate", "actualizando…");

  try {
    // ipify con IPv4 e IPv6
    const [v4, v6] = await Promise.allSettled([
      fetchJSON("https://api.ipify.org?format=json"),     // auto (suele retornar v4)
      fetchJSON("https://api64.ipify.org?format=json"),   // fuerza IPv6 si hay
    ]);

    if (v4.status === "fulfilled" && v4.value?.ip) setText("ipV4", v4.value.ip);
    if (v6.status === "fulfilled" && v6.value?.ip) setText("ipV6", v6.value.ip);

    // si ambas fallaron intenta un fallback sencillo a texto
    if (v4.status === "rejected" && v6.status === "rejected") {
      const txt = await fetch("https://api.ipify.org").then(r => r.text());
      setText("ipV4", txt || "—");
    }

    setText("lastUpdate", stamp());
    notify("IPs actualizadas");
  } catch (e) {
    notify("No se pudieron obtener las IPs");
    setText("lastUpdate", "—");
  }
}

// ================== Eventos UI ==================
$("refreshBtn").addEventListener("click", loadIPs);
$("copyV4").addEventListener("click", () => copyText($("ipV4").textContent, "IPv4"));
$("copyV6").addEventListener("click", () => copyText($("ipV6").textContent, "IPv6"));

// Primera carga
loadIPs();