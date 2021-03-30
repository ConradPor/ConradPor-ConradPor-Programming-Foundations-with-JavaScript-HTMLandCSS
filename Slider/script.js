function doColor() {
  var canvas = document.getElementById("can");
  var colorinput = document.getElementById("clr");
  canvas.style.backgroundColor = colorinput.value;  
}

function doSquare() {
  var sliderinput = document.getElementById("slr");
  var len = sliderinput.value;
  var canvas = document.getElementById("can");
  var context = canvas.getContext("2d");
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "blue";
  context.fillRect(parseInt(len),10,len,len);
  context.fillRect(parseInt(len)+20,10,len,len);
  context.fillRect(parseInt(len)*2+30,10,len,len);
}