//help from https://www.youtube.com/watch?v=EO6OkltgudE
//https://www.youtube.com/watch?v=83L6B13ixQ0
//https://www.youtube.com/watch?v=3GqUM4mEYKA

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//c means context
//c.fillRect(distance from x edge, distance from y edge, width of rect, hight of rect)
//table
c.fillRect(350, 100, 10, 500);
c.fillRect(550, 100, 10, 500);
c.fillRect(100, 250, 700, 10);
c.fillRect(100, 425, 700, 10);
//end table

//on click draw 2 lines in an x shape
function drawX(event) {
  //https://www.w3schools.com/js/js_htmldom_events.asp
  //https://www.w3schools.com/js/js_booleans.asp
console.log("X");
var x = event.clientX;
var y = event.clientY;
console.log(x);
console.log(y);

c.beginPath();
c.moveTo(x, y);
c.lineTo(x+50, y+100);
//c.strokeStyle = "#3474CF";
c.stroke();

c.beginPath();
c.moveTo(x+50, y);
c.lineTo(x, y+100);
//c.strokeStyle = "#3474CF";
c.stroke();


}

function drawO(){
  console.log('O');
  var x = event.clientX;
  var y = event.clientY;
  console.log(x);
  console.log(y);

  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);

  c.stroke();
}
