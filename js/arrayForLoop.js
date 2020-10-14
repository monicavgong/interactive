
let pinkfolder;
let postX;
let posY;
let squareNums = [25, 36, 59, 64, 82, 100, 121, 144];
let names = ['monica', 'destiny', 'michelle'];
let randName;

function preload(){

  myimage = loadImage("images/pinkfolder.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);

  // for(let i=0; i < 50; i++){
  //   posX = random(windowWidth);
  //   posY = random(windowHeight);
  //   fill(random(255), random(255), random(255));
  //   ellipse(posX, posY, 70, 70);
  //   image(myimage, posX, posY, 39, 50);
  // }

  randName = int(random(names.length));
  stroke(140, 100, 200);
  for(let i=0; i < windowHeight; i++){
    line(0, i*40, windowWidth, i*40);
  }

  for(let i=0; i < windowHeight; i++){
    line(i*40, 0, i*40, windowHeight);
  }

  for(i=0; i < squareNums.length; i++){
    print(squareNums[i]);
    fill(random(255), random(255), random(255));
    rect(random(windowWidth), random(windowHeight), squareNums[i], squareNums[i]);
  }

}

function draw(){

  text(names[randName], 200, 300);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
