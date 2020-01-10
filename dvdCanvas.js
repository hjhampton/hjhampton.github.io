var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 200;
var y = 200;
var dx = 15;
var dy = 10;



function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
c.beginPath();
c.fillStyle = "blue";
c.fillRect(x, y, 400, 200);
c.stroke();




if(x > innerWidth || x < 0){
	dx = -dx;
}
	x += dx;
	y += dy;

if(y > innerHeight || y < 0){
	dy = -dy;
}
}

animate();
