

function setup() {
  // put setup code here to run once

  //creat canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight);

  background(32, 18, 54);

  print(windowWidth);
}

function draw() {

  //change rectangle x,y coordinates to center
  rectMode(CENTER);

  //point is only x,y coordinate
  strokeWeight(3);
  point(mouseX, mouseY);

  //styles for the ellipse
  noStroke();
  fill(0, 0, 0);
  ellipse(850, 450, 600, 600);

  noStroke();
  fill(32, 18, 54);
  ellipse(850, 450, 500, 500);

  noStroke();
  fill(60, 34, 102);
  ellipse(850, 450, 400, 400);

  noStroke();
  fill(82, 46, 140);
  ellipse(850, 450, 300, 300);

  noStroke();
  fill(106, 60, 181);
  ellipse(850, 450, 200, 200);

  noStroke();
  fill(130, 73, 222);
  ellipse(850, 450, 100, 100);


  smooth();
  //styles for the point
  fill(120);
  stroke(137, 112, 161)
  print(mouseX);

}
