
let images;

function preload(){

  myimage = loadImage("images/images.jpeg");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  frameRate(5);

print(windowHeight);
}

function draw(){

  background(173, 213, 255);

  // for(let i=0; i < 50; i++){
  //   posX = random(windowWidth);
  //   posY = random(windowHeight);
  //   fill(random(255), random(255), random(255));
  //   image(myimage, posX, posY, 39, 50);
  // }

  if(keyIsPressed){
    for(let i=0; i < 100; i++){
      posX = random(windowWidth);
      posY = random(windowHeight);
      image(myimage, posX, posY, 350, 90);
    }
  } else {
    fill(0, 0, 0);
    textFont('Times New Roman');
    textSize(12);
    text("press any key", 780, 400);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
