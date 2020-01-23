var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var boxHeight = 200;
var boxWidth = 400;
var x = Math.floor(Math.random() * (innerWidth - boxWidth))
var y = Math.floor(Math.random() * (innerHeight - boxHeight))
var dx = 5;
var dy = 5;

var counter = 0;


//https://www.w3schools.com/js/js_random.asp

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

c.font = "50px Comic Sans MS";
c.fillStyle = "orange";
c.textAlign = "center";
//c.fillText("Corners Hit: " + counter, canvas.width/2, canvas.height/2);

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

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
