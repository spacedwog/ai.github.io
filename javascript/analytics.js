// Função para salvar cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expiração em dias
    document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()};`;
}

// Função para recuperar cookies
function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const prefix = `${name}=`;
    const cookie = cookies.find(cookie => cookie.startsWith(prefix));
    return cookie ? decodeURIComponent(cookie.substring(prefix.length)) : null;
}

// Função para registrar eventos no cookie
function trackEvent(eventType, details = {}) {
    const analytics = JSON.parse(getCookie("analytics") || "{}");

    // Adicionar o evento ao log
    if (!analytics.events) analytics.events = [];
    analytics.events.push({
        type: eventType,
        details: details,
        timestamp: new Date().toISOString(),
    });
    // Atualizar o cookie
    setCookie("analytics", JSON.stringify(analytics), 7); // Expira em 7 dias
}

  // Registrar uma visita
function trackVisit() {

    let visits = parseInt(getCookie("visits") || "0", 10);
    visits++;
    setCookie("visits", visits, 365); // Expira em 1 ano
    console.log(`Visitas totais: ${visits}`);

    // Registrar no analytics
    trackEvent("page_view", { url: window.location.href });

}

// Registrar tempo de permanência
let sessionStart = Date.now();
window.addEventListener("beforeunload", () => {
    const duration = Math.floor((Date.now() - sessionStart) / 1000); // Duração em segundos
    trackEvent("session_duration", { duration });
});

// Inicializar o analytics
trackVisit();
console.log(document.cookie);
console.log(JSON.parse(getCookie("analytics")));