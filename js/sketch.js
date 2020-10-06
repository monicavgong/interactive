

function setup() {
  // put setup code here to run once

  //creat canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight);

  background(180, 60, 220);

  print(windowWidth);
}

function draw() {
  // put drawing code here to run in a loop

  //change rectangle x,y coordinates to center
  rectMode(CENTER);

  //point is only x,y coordinate
  strokeWeight(10);
  point(mouseX, mouseY);

  //styles for the ellipse
  noStroke();
  ellipse(300, 500, 150, 150);

  //styles for the rect
  stroke(40,30,100)
  strokeWeight(10);
  fill(50,200,120);
  rect(800, 300, 200, 300);

  //styles for the triangle
  stroke(40,200,300)
  strokeWeight(10);
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  smooth();
  //styles for the point
  fill(120);
  stroke(40,200,100)
  print(mouseX);
}
