function canvas_painel() {
    const c = document.getElementById("painel_administrativo");
    const ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
}