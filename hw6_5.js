var no1 = 0;
var no2 = 0;
var no3 = 0;
var no4 = 0;
var no5 = 0;

function storeNumbers() {

  no1 = document.getElementById("num1").value;
  no2 = document.getElementById("num2").value;
  no3 = document.getElementById("num3").value;
  no4 = document.getElementById("num4").value;
  no5 = document.getElementById("num5").value;
}
function sortNumbers(){
  storeNumbers();
  var groupOfNo = [no1, no2, no3, no4, no5]
  groupOfNo.sort(function(a, b){return a-b});
  //used https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort2
  var noWithSpace = groupOfNo.join(', ');
  document.getElementById("list").innerHTML = noWithSpace;

//used https://stackoverflow.com/questions/13939573/how-to-add-spaces-between-array-items-javascript/13939632
//to add spaces between array
}

function medianNumbers(){
  storeNumbers();
  var groupOfNo = [no1, no2, no3, no4, no5]
  groupOfNo.sort(function(a, b){return a-b});
  //used https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort2
  document.getElementById("list").innerHTML = groupOfNo[2];

}
 function sortDescending(){
   storeNumbers();
   var groupOfNo = [no1, no2, no3, no4, no5]
   groupOfNo.sort(function(a, b){return b-a});
   //used https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort2

   var noWithSpace = groupOfNo.join(', ');
   document.getElementById("list").innerHTML = noWithSpace;

 }
