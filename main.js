const canvas = document.getElementById("mycanvas")
const ctx = canvas.getContext("2d");

canvas.setAttribute("width", 650);
canvas.setAttribute("height", 480); 


let scale = 0.1;
let offsetX = 0, offsetY = 0;
let isDragging = false;
let dragStartX, dragStartY;

const shapes = [
    {x: 50, y: 50, width: 100, height: 100, color: "red"},
    {x: 200, y: 200, width: 100, height: 100, color: "blue"},
]

function draw()
{
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    shapes.forEach(shape => {
        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    })

    ctx.restore();
}

canvas.onmousedown = (e) => {
    isDragging = true;
    dragStartX = e.offsetX - offsetX;
    dragStartY = e.offsetY - offsetY;
    canvas.style.cursor = "grabbing";
}

canvas.onmousemove = (e) => {
    if(isDragging)
    {
        offsetX = e.offsetX - dragStartX;
        offsetY = e.offsetY - dragStartY;
        draw();
    }
}

canvas.onmouseup = () => {
    isDragging = false;
    canvas.style.cursor = "grab";
}

canvas.onwheel = (e) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    const previousScale = scale;
    scale += e.deltaY * -zoomFactor;
    //scale = Math.min(Math.max(0.01, scale), 5);
    if(scale >= 5)
        scale = 5;
    if(scale <= 0.1);
        scale;e = 0.1;

    offsetX -= (mouseX - offsetX) * (scale - previousScale);
    offsetY -= (mouseY - offsetY) * (scale - previousScale);

    draw();
}

draw();
