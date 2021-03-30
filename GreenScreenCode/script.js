var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;

function loadForegroundImage(){
var cv = document.getElementById("fgcan");
var seco = document.getElementById("fgfile");
fgImage = new SimpleImage(seco);
fgImage.drawTo(cv);
}
function loadBackgroundImage(){
var cv = document.getElementById("bgcan");
var seco = document.getElementById("bgfile");
bgImage = new SimpleImage(seco);
bgImage.drawTo(cv);
}
function Compose(){
if(fgImage == null || !fgImage.complete())
  alert("Uploadfimage");
if(bgImage == null || !bgImage.complete())
  alert("Uploadfimage");
var finalimage = new SimpleImage(fgImage);
for(var pixel of fgImage.values()){
  if(pixel.getGreen() > pixel.getRed()+pixel.getBlue()){
fgImage.setPixel(pixel.getX(),pixel.getY(),bgImage.getPixel(pixel.getX(),pixel.getY())) 
  }
}
var cv = document.getElementById("fgcan");
Clear();
fgImage.drawTo(cv);
}

function Clear(){
var cv = document.getElementById("fgcan");
var cv2 = document.getElementById("bgcan");
var ctx1 = cv.getContext("2d");
var ctx2 = cv2.getContext("2d");
ctx1.clearRect(0,0,cv.width,cv.height);
ctx2.clearRect(0,0,cv2.width,cv2.height);
fimage = null;
bimage = null;
}