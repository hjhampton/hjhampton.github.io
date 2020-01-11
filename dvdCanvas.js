var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 200;
var y = 200;
var dx = 5;
var dy = 20;
var boxHeight = 200;
var boxWidth = 400;



function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
c.beginPath();
c.fillStyle = "blue";
c.fillRect(x, y, boxWidth, boxHeight);
c.stroke();




if(x > innerWidth - boxWidth || x < 0){
	dx = -dx;
}
	x += dx;
	y += dy;

if(y > innerHeight - boxHeight || y < 0){
	dy = -dy;
}
}

animate();
