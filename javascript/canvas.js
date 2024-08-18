function canvas_map() {
    const canvasmap = document.getElementById('canvas_screen');

    const ctx = canvasmap.getContext("2d");

    ctx.beginPath();
    ctx.rect(20, 20, 160, 100);
    ctx.stroke();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 120);
    ctx.stroke();
    ctx.moveTo(100, 20);
    ctx.lineTo(100, 120);
    ctx.stroke();
    ctx.moveTo(140, 20);
    ctx.lineTo(140, 120);
    ctx.stroke();
}