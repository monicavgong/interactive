//variables

let ballX;
let ballY;

let ballXspeed = 2
let ballYspeed = 2

let ballDiameter = 30;

//setup

function setup(){
  createCanvas (windowWidth, windowHeight);

  ballX = random(ballDiameter/2, windowWidth - ballDiameter/2);
  ballY = random(ballDiameter/2, windowHeight - ballDiameter/2);

  background(0);
}

//draw

function draw (){

  stroke(200, 40, 100);
  ellipse(ballX, ballY, ballDiameter, ballDiameter);

  ballX = ballX + ballXspeed;
  ballY = ballY + ballYspeed;

  if(ballX >= windowWidth - ballDiameter/2 || ballX <= 0){
    ballXspeed = ballXspeed * -1;
  }

  if(ballY >= windowHeight - ballDiameter/2 || ballY <=0){
    ballYspeed = ballYspeed * -1;

  }

}
