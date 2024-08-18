function canvas_map() {
    const canvasmap = document.getElementById('canvas_screen');

    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}