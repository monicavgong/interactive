let ellipseX = 0;
let ellipseY = 0;

let pointX = 400;
let pointY = 200;

let myimage;
let pinkfolder;

function preload() {
  //preload() runs once

  myimage = loadImage("images/myimage.png");
  pinkfolder = loadImage("images/pinkfolder.png")

}

function setup() {
  // put setup code here to run once

  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight);

  print(windowWidth);
  print(ellipseX);

  //change rectangle x,y coordinates to center
  rectMode(CENTER);
  imageMode(CENTER);

  ellipseX = random(ellipseX, windowWidth);
  ellipseY = random(ellipseY, windowHeight);

  noCursor();
}

function draw() {
  //background color
  background(255, 255, 255);

  image(myimage, windowWidth/2, windowHeight/2, 400, mouseY);

  //point is only x,y coordinate
  strokeWeight(3);
  point(mouseX, mouseY);
  point(pointX, pointY);

  //styles for the ellipse
  noStroke();
  fill(random (255), random(255), random (255));
  ellipse(250, 250, 600, 600);

  noStroke();
  fill(32, 18, 54);
  ellipse(random(300, windowWidth), 450, 500, 500);

  noStroke();
  fill(60, 34, 102);
  ellipse(ellipseX, ellipseY, 400, 400);

  noStroke();
  fill(82, 46, 140);
  ellipse(250, 250, 300, 300);

  noStroke();
  fill(106, 60, 181);
  ellipse(250, 250, 200, 200);

  noStroke();
  fill(130, 73, 222);
  ellipse(250, 250, 100, 100);


  smooth();
  //styles for the point
  fill(120);
  strokeWeight (30);
  stroke(137, 112, 161);
  print(mouseX);

  strokeWeight(10);
  line(pointX, pointY, 700, 500);

  image(pinkfolder, mouseX, mouseY, 30, 40);

}
