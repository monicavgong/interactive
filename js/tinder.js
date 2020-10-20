//static image
let tinder;
let instructions;

//booleans
let brusheye1 = false;
let brusheye2 = false;
let brusheye3 = false;
let brusheye4 = false;

let brushear1 = false;
let brushear2 = false;
let brushear3 = false;
let brushear4 = false;

let brushnose1 = false;
let brushnose2 = false;
let brushnose3 = false;
let brushnose4 = false;

let brushmouth1 = false;
let brushmouth2 = false;
let brushmouth3 = false;
let brushmouth4 = false;

let brushbio1 = false;
let brushbio2 = false;
let brushbio3 = false;
let brushbio4 = false;

//main images
let eye1;
let eye2;
let eye3;
let eye4;

let ear1;
let ear2;
let ear3;
let ear4;

let nose1;
let nose2;
let nose3;
let nose4;

let mouth1;
let mouth2;
let mouth3;
let mouth4;

let bio1;
let bio2;
let bio3;
let bio4;

//mouse
let eye1mouse;
let eye2mouse;
let eye3mouse;
let eye4mouse;

let ear1mouse;
let ear2mouse;
let ear3mouse;
let ear4mouse;

let nose1mouse;
let nose2mouse;
let nose3mouse;
let nose4mouse;

let mouth1mouse;
let mouth2mouse;
let mouth3mouse;
let mouth4mouse;

let bio1mouse;
let bio2mouse;
let bio3mouse;
let bio4mouse;

//menu
let menueye1;
let menueye2;
let menueye3;
let menueye4;

let menuear1;
let menuear2;
let menuear3;
let menuear4;

let menunose1;
let menunose2;
let menunose3;
let menunose4;

let menumouth1;
let menumouth2;
let menumouth3;
let menumouth4;

let menubio1;
let menubio2;
let menubio3;
let menubio4;

//XY
let eye1X = [];
let eye1Y = [];

let eye2X = [];
let eye2Y = [];

let eye3X = [];
let eye3Y = [];

let eye4X = [];
let eye4Y = [];

let ear1X = [];
let ear1Y = [];

let ear2X = [];
let ear2Y = [];

let ear3X = [];
let ear3Y = [];

let ear4X = [];
let ear4Y = [];

let nose1X = [];
let nose1Y = [];

let nose2X = [];
let nose2Y = [];

let nose3X = [];
let nose3Y = [];

let nose4X = [];
let nose4Y = [];

let mouth1X = [];
let mouth1Y = [];

let mouth2X = [];
let mouth2Y = [];

let mouth3X = [];
let mouth3Y = [];

let mouth4X = [];
let mouth4Y = [];

let bio1X = [];
let bio1Y = [];

let bio2X = [];
let bio2Y = [];

let bio3X = [];
let bio3Y = [];

let bio4X = [];
let bio4Y = [];


function windowResized(){
	resizeCanvas (windowWidth, windowHeight)
}

function preload(){
  //instructions
  instructions = createImg("images2/instructions.png", "instructions that read press spacebar to clear")
  instructions.position(1292,6);
	instructions.size(370, 90);

//main images
  eye1 = loadImage("images/eyes/eye1.png");
  eye2 = loadImage("images/eyes/eye2.png");
  eye3 = loadImage("images/eyes/eye3.png");
  eye4 = loadImage("images/eyes/eye4.png");

  ear1 = loadImage("images/ear/ear1.png");
  ear2 = loadImage("images/ear/ear2.png");
  ear3 = loadImage("images/ear/ear3.png");
  ear4 = loadImage("images/ear/ear4.png");

  nose1 = loadImage("images/nose/nose1.png");
  nose2 = loadImage("images/nose/nose2.png");
  nose3 = loadImage("images/nose/nose3.png");
  nose4 = loadImage("images/nose/nose4.png");

  mouth1 = loadImage("images/mouth/mouth1.png");
  mouth2 = loadImage("images/mouth/mouth2.png");
  mouth3 = loadImage("images/mouth/mouth3.png");
  mouth4 = loadImage("images/mouth/mouth4.png");

  bio1 = loadImage("images2/bio1.jpg")
  bio2 = loadImage("images2/bio2.jpg")
  bio3 = loadImage("images2/bio3.jpg")
  bio4 = loadImage("images2/bio4.jpg")

//mouse images

  eye1mouse = loadImage("images/eyes/eye1.png");
  eye2mouse = loadImage("images/eyes/eye2.png");
  eye3mouse = loadImage("images/eyes/eye3.png");
  eye4mouse = loadImage("images/eyes/eye4.png");

  ear1mouse = loadImage("images/ear/ear1.png");
  ear2mouse = loadImage("images/ear/ear2.png");
  ear3mouse = loadImage("images/ear/ear3.png");
  ear4mouse = loadImage("images/ear/ear4.png");

  nose1mouse = loadImage("images/nose/nose1.png");
  nose2mouse = loadImage("images/nose/nose2.png");
  nose3mouse = loadImage("images/nose/nose3.png");
  nose4mouse = loadImage("images/nose/nose4.png");

  mouth1mouse = loadImage("images/mouth/mouth1.png");
  mouth2mouse = loadImage("images/mouth/mouth2.png");
  mouth3mouse = loadImage("images/mouth/mouth3.png");
  mouth4mouse = loadImage("images/mouth/mouth4.png");

  bio1mouse = loadImage("images2/bio1.jpg")
  bio2mouse = loadImage("images2/bio2.jpg")
  bio3mouse = loadImage("images2/bio3.jpg")
  bio4mouse = loadImage("images2/bio4.jpg")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  imageMode(CENTER);

//menu images
  menueye1 = createImg("images2/menu/eye1menu.png", "image of an eye")
  menueye1.mouseReleased(menueye1Draw);
  menueye1.position (20,160);

  menueye2 = createImg("images2/menu/eye2menu.png", "image of an eye")
  menueye2.mouseReleased(menueye2Draw);
  menueye2.position (20,245);

  menueye3 = createImg("images2/menu/eye3menu.png", "image of an eye")
  menueye3.mouseReleased(menueye3Draw);
  menueye3.position (20,330);

  menueye4 = createImg("images2/menu/eye4menu.png", "image of an eye")
  menueye4.mouseReleased(menueye4Draw);
  menueye4.position (20,415);

}

function menueye1Draw(){

  brusheye1 = true;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = false;
  brushnose3 = false;
  brushnose4 = false;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;

}

function menueye2Draw(){

  brusheye1 = false;
  brusheye2 = true;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = false;
  brushnose3 = false;
  brushnose4 = false;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;

}

function menueye3Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = true;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = false;
  brushnose3 = false;
  brushnose4 = false;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;

}

function menueye4Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = true;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = false;
  brushnose3 = false;
  brushnose4 = false;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;

}

function draw(){

  //background
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNERS);
  tinder = createImg("images2/tindertemplate.png", "image of tinder profile")
  tinder.position (600,25);
  tinder.size (480,840);
	background (255, 189, 237);

  // eye1
	if(brusheye1 == true){
	 image(eye1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < eye1X.length; i++) {
		image(eye1, eye1X[i], eye1Y[i]);

	}
}

function mousePressed(){
  if(brusheye1 == true){
	if(mouseX > 100){
			eye1X.push(mouseX);
		  eye1Y.push(mouseY);
		}
  }
}
