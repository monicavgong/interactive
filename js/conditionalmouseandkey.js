
let ellipseX = 900;
let ellipseY = 500;

let fillR;
let fillG;
let fillB;


function setup(){
createCanvas(windowWidth, windowHeight);

fillR = random(255);
fillG = random(255);
fillB = random(255);

background(180, 49, 100);

}

function draw(){

  // if(mouseIsPressed){
  //   background(180, 49, 100);
  // }
  // else {
  //   background(40, 100, 30);
  // }

  if(mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if(mouseX > windowWidth/2 && mouseY < windowHeight/2){
    ellipseX = 300;
    ellipseY = 200;
  } else {
    ellipseX = 900;
    ellipseY = 500;
  }

    fill(fillR, fillG, fillB);
    textSize(50);
    ellipse(ellipseX, ellipseY, 100, 100);
  if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
    text("I cannot!", 200, 300);
  }

    strokeWeight(20);
    stroke(48, 200, 184);
  if(keyIsPressed == true){
    line(0, 400, 800, 600);
  }
}

function mouseReleased(){
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
}

function keyPressed(){
  if(key == 'f' || key == "F"){
    fillR = random(255);
    fillG = random(255);
    fillB = random(255);
  }

  if(key =='c' || key == 'C'){
    background(180, 49, 100);
  }

  if(key =='s' || key == 'S'){
    save('drawing.png');
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}
