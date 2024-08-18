function canvas_map() {
    const canvasmap = document.getElementById('canvas_screen');

    const ctx = canvasmap.getContext("2d");

    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 120);
    ctx.stroke();
}