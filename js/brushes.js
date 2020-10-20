
let faceshop;

let sprayPaintBool = false;
let faceshopBrushBool = false;

function preload(){
  faceshop = loadImage("images/faceshop.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);

  background(255);

  imageMode(CENTER);
}


function draw(){
  if(sprayPaintBool == true){
    sprayPaint();
  }

  if(faceshopBrushBool == true){
    faceshopBrush();
  }


}

function keyPressed(){
  if(key == 's'){
    sprayPaintBool = true;
    faceshopBrushBool = false;
  }

  if(key == 'f'){
    sprayPaintBool = false;
    faceshopBrushBool = true;
  }

  if(key == 'o'){
    sprayPaintBool = false;
    faceshopBrushBool = false;
  }

}


//custom functions below!!!
function sprayPaint(){
  frameRate(20);
  fill(30, 120, 200);
  noStroke();
  for(let i=0; i < 50; i++){
    ellipse(random(mouseX -30, mouseX +30),random(mouseY -30, mouseY +30), 2, 2);
  }
}


function faceshopBrush(){
  image(faceshop, mouseX, mouseY, 30, 30);

}
