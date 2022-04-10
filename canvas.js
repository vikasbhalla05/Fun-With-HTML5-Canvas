// select the canvas
let canvas = document.querySelector('#draw');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d'); // get the context of the canvas

ctx.strokeStyle = "#FF0000";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 40;

let strokeColor = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;


function Draw(e){
	if(!isDrawing) return;
	console.log(e);

	// drawing part
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	ctx.strokeStyle = `hsl(${strokeColor}, 100%, 50%)`;

	[lastX, lastY] = [e.offsetX, e.offsetY];
	strokeColor++;

	if(strokeColor>=360){
		strokeColor = 0;
	}
}

canvas.addEventListener('mousemove', (e) => {
	Draw(e);
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);