//static image
let bg;
let instructions;
let tinder;

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
let brushbio5 = false;
let brushbio6 = false;
let brushbio9 = false;
let brushbio10 = false;
let brushbio11 = false;
let brushbio12 = false;
let brushbio13 = false;
let brushbio14 = false;
let brushbio15 = false;
let brushbio16 = false;
let brushbio17 = false;
let brushbio18 = false;
let brushbio19 = false;
let brushbio20 = false;
let brushbio21 = false;
let brushbio22 = false;
let brushbio23 = false;
let brushbio24 = false;
let brushbio25 = false;
let brushbio26 = false;
let brushbio27 = false;
let brushbio28 = false;


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
let bio5;
let bio6;
let bio9;
let bio10;
let bio11;
let bio12;
let bio13;
let bio14;
let bio15;
let bio16;
let bio17;
let bio18;
let bio19;
let bio20;
let bio21;
let bio22;
let bio23;
let bio24;
let bio25;
let bio26;
let bio27;
let bio28;


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
let bio5mouse;
let bio6mouse;
let bio9mouse;
let bio10mouse;
let bio11mouse;
let bio12mouse;
let bio13mouse;
let bio14mouse;
let bio15mouse;
let bio16mouse;
let bio17mouse;
let bio18mouse;
let bio19mouse;
let bio20mouse;
let bio21mouse;
let bio22mouse;
let bio23mouse;
let bio24mouse;
let bio25mouse;
let bio26mouse;
let bio27mouse;
let bio28mouse;

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
let menubio5;
let menubio6;
let menubio9;
let menubio10;
let menubio11;
let menubio12;
let menubio13;
let menubio14;
let menubio15;
let menubio16;
let menubio17;
let menubio18;
let menubio19;
let menubio20;
let menubio21;
let menubio22;
let menubio23;
let menubio24;
let menubio25;
let menubio26;
let menubio27;
let menubio28;

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

let bio5X = [];
let bio5Y = [];

let bio6X = [];
let bio6Y = [];

let bio9X = [];
let bio9Y = [];

let bio10X = [];
let bio10Y = [];

let bio11X = [];
let bio11Y = [];

let bio12X = [];
let bio12Y = [];

let bio13X = [];
let bio13Y = [];

let bio14X = [];
let bio14Y = [];

let bio15X = [];
let bio15Y = [];

let bio16X = [];
let bio16Y = [];

let bio17X = [];
let bio17Y = [];

let bio18X = [];
let bio18Y = [];

let bio19X = [];
let bio19Y = [];

let bio20X = [];
let bio20Y = [];

let bio21X = [];
let bio21Y = [];

let bio22X = [];
let bio22Y = [];

let bio23X = [];
let bio23Y = [];

let bio24X = [];
let bio24Y = [];

let bio25X = [];
let bio25Y = [];

let bio26X = [];
let bio26Y = [];

let bio27X = [];
let bio27Y = [];

let bio28X = [];
let bio28Y = [];


function windowResized(){
	resizeCanvas (windowWidth, windowHeight)
}

function preload(){

	bg = loadImage("images2/pinkbg.png");
	tinder = loadImage("images2/tindertemplate.png");

  //instructions
  instructions = loadImage("images2/instructions.png", "instructions that read press spacebar to clear")

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
  bio2 = loadImage("images2/2bio.jpg")
  bio3 = loadImage("images2/3bio.jpg")
  bio4 = loadImage("images2/4bio.jpg")
	bio5 = loadImage("images2/5bio.jpg")
	bio6 = loadImage("images2/6bio.jpg")
	bio9 = loadImage("images2/9bio.jpg")
	bio10 = loadImage("images2/10bio.jpg")
	bio11 = loadImage("images2/11bio.jpg")
	bio12 = loadImage("images2/12bio.jpg")
	bio13 = loadImage("images2/13bio.jpg")
	bio14 = loadImage("images2/14bio.jpg")
	bio15 = loadImage("images2/15bio.jpg")
	bio16 = loadImage("images2/16bio.jpg")
	bio17 = loadImage("images2/17bio.jpg")
	bio18 = loadImage("images2/18bio.jpg")
	bio19 = loadImage("images2/19bio.jpg")
	bio20 = loadImage("images2/20bio.jpg")
	bio21 = loadImage("images2/21bio.jpg")
	bio22 = loadImage("images2/22bio.jpg")
	bio23 = loadImage("images2/23bio.jpg")
	bio24 = loadImage("images2/24bio.jpg")
	bio25 = loadImage("images2/25bio.jpg")
	bio26 = loadImage("images2/26bio.jpg")
	bio27 = loadImage("images2/27bio.jpg")
	bio28 = loadImage("images2/28bio.jpg")

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
  bio2mouse = loadImage("images2/2bio.jpg")
  bio3mouse = loadImage("images2/3bio.jpg")
  bio4mouse = loadImage("images2/4bio.jpg")
	bio5mouse = loadImage("images2/5bio.jpg")
	bio6mouse = loadImage("images2/6bio.jpg")
	bio9mouse = loadImage("images2/9bio.jpg")
	bio10mouse = loadImage("images2/10bio.jpg")
	bio11mouse = loadImage("images2/11bio.jpg")
	bio12mouse = loadImage("images2/12bio.jpg")
	bio13mouse = loadImage("images2/13bio.jpg")
	bio14mouse = loadImage("images2/14bio.jpg")
	bio15mouse = loadImage("images2/15bio.jpg")
	bio16mouse = loadImage("images2/16bio.jpg")
	bio17mouse = loadImage("images2/17bio.jpg")
	bio18mouse = loadImage("images2/18bio.jpg")
	bio19mouse = loadImage("images2/19bio.jpg")
	bio20mouse = loadImage("images2/20bio.jpg")
	bio21mouse = loadImage("images2/21bio.jpg")
	bio22mouse = loadImage("images2/22bio.jpg")
	bio23mouse = loadImage("images2/23bio.jpg")
	bio24mouse = loadImage("images2/24bio.jpg")
	bio25mouse = loadImage("images2/25bio.jpg")
	bio26mouse = loadImage("images2/26bio.jpg")
	bio27mouse = loadImage("images2/27bio.jpg")
	bio28mouse = loadImage("images2/28bio.jpg")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  imageMode(CENTER);

//menu images
  menueye1 = createImg("images2/menu/eye1menu.png", "image of an eye")
  menueye1.mouseReleased(menueye1Draw);
  menueye1.position (56,270);

  menueye2 = createImg("images2/menu/eye2menu.png", "image of an eye")
  menueye2.mouseReleased(menueye2Draw);
  menueye2.position (50,355);

  menueye3 = createImg("images2/menu/eye3menu.png", "image of an eye")
  menueye3.mouseReleased(menueye3Draw);
  menueye3.position (51,440);

  menueye4 = createImg("images2/menu/eye4menu.png", "image of an eye")
  menueye4.mouseReleased(menueye4Draw);
  menueye4.position (67,525);

	menuear1 = createImg("images2/menu/ear1menu.png", "image of an ear")
  menuear1.mouseReleased(menuear1Draw);
  menuear1.position (203,271);

	menuear2 = createImg("images2/menu/ear2menu.png", "image of an ear")
  menuear2.mouseReleased(menuear2Draw);
  menuear2.position (205, 355);

	menuear3 = createImg("images2/menu/ear3menu.png", "image of an ear")
  menuear3.mouseReleased(menuear3Draw);
  menuear3.position (205, 440);

	menuear4 = createImg("images2/menu/ear4menu.png", "image of an ear")
  menuear4.mouseReleased(menuear4Draw);
  menuear4.position (203, 525);

	menunose1 = createImg("images2/menu/nose1menu.png", "image of a nose")
  menunose1.mouseReleased(menunose1Draw);
  menunose1.position (330, 271);

	menunose2 = createImg("images2/menu/nose2menu.png", "image of a nose")
	menunose2.mouseReleased(menunose2Draw);
	menunose2.position (334, 526);

	menunose3 = createImg("images2/menu/nose3menu.png", "image of a nose")
  menunose3.mouseReleased(menunose3Draw);
  menunose3.position (338, 441);

	menunose4 = createImg("images2/menu/nose4menu.png", "image of a nose")
  menunose4.mouseReleased(menunose4Draw);
  menunose4.position (341, 356);

	menumouth1 = createImg("images2/menu/mouth1menu.png", "image of a mouth")
  menumouth1.mouseReleased(menumouth1Draw);
  menumouth1.position (470, 271);

	menumouth2 = createImg("images2/menu/mouth2menu.png", "image of a mouth")
  menumouth2.mouseReleased(menumouth2Draw);
  menumouth2.position (479, 526);

	menumouth3 = createImg("images2/menu/mouth3menu.png", "image of a mouth")
  menumouth3.mouseReleased(menumouth3Draw);
  menumouth3.position (480, 441);

	menumouth4 = createImg("images2/menu/mouth4menu.png", "image of a mouth")
  menumouth4.mouseReleased(menumouth4Draw);
  menumouth4.position (487, 356);

	menubio1 = createImg("images2/bio1.jpg", "do")
  menubio1.mouseReleased(menubio1Draw);
  menubio1.position (1130, 171);

	menubio2 = createImg("images2/2bio.jpg", "do")
  menubio2.mouseReleased(menubio2Draw);
  menubio2.position (1230, 171);

	menubio3 = createImg("images2/3bio.jpg", "image of a mouth")
  menubio3.mouseReleased(menubio3Draw);
  menubio3.position (1330, 171);

	menubio4 = createImg("images2/4bio.jpg", "image of a mouth")
  menubio4.mouseReleased(menubio4Draw);
  menubio4.position (1430, 171);

	menubio5 = createImg("images2/5bio.jpg", "image of a mouth")
  menubio5.mouseReleased(menubio5Draw);
  menubio5.position (1530, 171);

	menubio6 = createImg("images2/6bio.jpg", "image of a mouth")
  menubio6.mouseReleased(menubio6Draw);
  menubio6.position (1130, 271);

	menubio9 = createImg("images2/9bio.jpg", "image of a mouth")
  menubio9.mouseReleased(menubio9Draw);
  menubio9.position (1220, 271);

	menubio10 = createImg("images2/10bio.jpg", "image of a mouth")
  menubio10.mouseReleased(menubio10Draw);
  menubio10.position (1310, 271);

	menubio11 = createImg("images2/11bio.jpg", "image of a mouth")
  menubio11.mouseReleased(menubio11Draw);
  menubio11.position (1420, 271);

	menubio12 = createImg("images2/12bio.jpg", "image of a mouth")
  menubio12.mouseReleased(menubio12Draw);
  menubio12.position (1550, 271);

	menubio13 = createImg("images2/13bio.jpg", "image of a mouth")
  menubio13.mouseReleased(menubio13Draw);
  menubio13.position (1150, 371);

	menubio14 = createImg("images2/14bio.jpg", "image of a mouth")
  menubio14.mouseReleased(menubio14Draw);
  menubio14.position (1250, 371);

	menubio15 = createImg("images2/15bio.jpg", "image of a mouth")
  menubio15.mouseReleased(menubio15Draw);
  menubio15.position (1480, 371);

	menubio16 = createImg("images2/16bio.jpg", "image of a mouth")
  menubio16.mouseReleased(menubio16Draw);
  menubio16.position (1410, 471);

	menubio17 = createImg("images2/17bio.jpg", "image of a mouth")
  menubio17.mouseReleased(menubio17Draw);
  menubio17.position (1287, 671);

	menubio18 = createImg("images2/18bio.jpg", "image of a mouth")
  menubio18.mouseReleased(menubio18Draw);
  menubio18.position (1130, 471);

	menubio19 = createImg("images2/19bio.jpg", "image of a mouth")
  menubio19.mouseReleased(menubio19Draw);
  menubio19.position (1260, 471);

	menubio20 = createImg("images2/20bio.jpg", "image of a mouth")
  menubio20.mouseReleased(menubio20Draw);
  menubio20.position (1110, 571);

	menubio21 = createImg("images2/21bio.jpg", "image of a mouth")
  menubio21.mouseReleased(menubio21Draw);
  menubio21.position (1230, 571);

	menubio22 = createImg("images2/22bio.jpg", "image of a mouth")
  menubio22.mouseReleased(menubio22Draw);
  menubio22.position (1587, 671);

	menubio23 = createImg("images2/23bio.jpg", "image of a mouth")
  menubio23.mouseReleased(menubio23Draw);
  menubio23.position (1140, 671);

	menubio24 = createImg("images2/24bio.jpg", "image of a mouth")
  menubio24.mouseReleased(menubio24Draw);
  menubio24.position (1487, 671);

	menubio25 = createImg("images2/25bio.jpg", "image of a mouth")
  menubio25.mouseReleased(menubio25Draw);
  menubio25.position (1330, 571);

	menubio26 = createImg("images2/26bio.jpg", "image of a mouth")
  menubio26.mouseReleased(menubio26Draw);
  menubio26.position (1430, 571);

	menubio27 = createImg("images2/27bio.jpg", "image of a mouth")
  menubio27.mouseReleased(menubio27Draw);
  menubio27.position (1580, 571);

	menubio28 = createImg("images2/28bio.jpg", "image of a mouth")
  menubio28.mouseReleased(menubio28Draw);
  menubio28.position (1230, 671);

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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menuear1Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = true;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menuear2Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = true;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menuear3Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = true;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menuear4Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = true;

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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menunose1Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = true;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menunose2Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = true;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menunose3Draw(){

  brusheye1 = false;
  brusheye2 = false;
  brusheye3 = false;
  brusheye4 = false;

  brushear1 = false;
  brushear2 = false;
  brushear3 = false;
  brushear4 = false;

  brushnose1 = false;
  brushnose2 = false;
  brushnose3 = true;
  brushnose4 = false;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menunose4Draw(){

  brusheye1 = false;
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
  brushnose4 = true;

  brushmouth1 = false;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menumouth1Draw(){

  brusheye1 = false;
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

  brushmouth1 = true;
  brushmouth2 = false;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menumouth2Draw(){

  brusheye1 = false;
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
  brushmouth2 = true;
  brushmouth3 = false;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menumouth3Draw(){

  brusheye1 = false;
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
  brushmouth3 = true;
  brushmouth4 = false;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menumouth4Draw(){

  brusheye1 = false;
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
  brushmouth4 = true;

  brushbio1 = false;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio1Draw(){

  brusheye1 = false;
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

  brushbio1 = true;
  brushbio2 = false;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio2Draw(){

  brusheye1 = false;
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
  brushbio2 = true;
  brushbio3 = false;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio3Draw(){

  brusheye1 = false;
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
  brushbio3 = true;
  brushbio4 = false;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio4Draw(){

  brusheye1 = false;
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
  brushbio4 = true;
	brushbio5 = false;
	brushbio6 = false;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio5Draw(){

  brusheye1 = false;
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
	brushbio5 = true;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio6Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = true;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio7Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;
	brushbio7 = true;

	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio8Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;

	brushbio8 = true;
	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio9Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = true;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio10Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = true;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio11Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = true;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio12Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = true;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio13Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = true;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio14Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = true;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio15Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = true;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio16Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = true;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio17Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = true;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio18Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = true;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio19Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = true;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio20Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = true;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio21Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = true;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio22Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = true;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio23Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = true;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio24Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = true;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio25Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = true;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio26Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = true;
	brushbio27 = false;
	brushbio28 = false;
}

function menubio27Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = true;
	brushbio28 = false;
}

function menubio28Draw(){

  brusheye1 = false;
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
	brushbio5 = false;
	brushbio6 = false;


	brushbio9 = false;
	brushbio10 = false;
	brushbio11 = false;
	brushbio12 = false;
	brushbio13 = false;
	brushbio14 = false;
	brushbio15 = false;
	brushbio16 = false;
	brushbio17 = false;
	brushbio18 = false;
	brushbio19 = false;
	brushbio20 = false;
	brushbio21 = false;
	brushbio22 = false;
	brushbio23 = false;
	brushbio24 = false;
	brushbio25 = false;
	brushbio26 = false;
	brushbio27 = false;
	brushbio28 = true;
}


function draw(){

  //bg
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNERS);
	background(bg, windowWidth, windowHeight);
	imageMode(CENTER);
	image(tinder, 820, 446, 1242/2.5, 2208/2.5);
	image(instructions, 820, 386, 1168/3, 314/3);

print(instructions)
  // eye1
	if(brusheye1 == true){
	 image(eye1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < eye1X.length; i++) {
		image(eye1, eye1X[i], eye1Y[i]);
	}

	//eye2
	if(brusheye2 == true){
	 image(eye2mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < eye2X.length; i++) {
		image(eye2, eye2X[i], eye2Y[i]);
	}

	// eye3
	if(brusheye3 == true){
	 image(eye3mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < eye3X.length; i++) {
		image(eye3, eye3X[i], eye3Y[i]);
	}

	// eye4
	if(brusheye4 == true){
	 image(eye4mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < eye4X.length; i++) {
		image(eye4, eye4X[i], eye4Y[i]);
	}

	// ear1
	if(brushear1 == true){
	 image(ear1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < ear1X.length; i++) {
		image(ear1, ear1X[i], ear1Y[i]);
	}

	// ear2
	if(brushear2 == true){
	 image(ear2mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < ear2X.length; i++) {
		image(ear2, ear2X[i], ear2Y[i]);
	}

	// ear3
	if(brushear3 == true){
	 image(ear3mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < ear3X.length; i++) {
		image(ear3, ear3X[i], ear3Y[i]);
	}

	// ear4
	if(brushear4 == true){
	 image(ear4mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < ear4X.length; i++) {
		image(ear4, ear4X[i], ear4Y[i]);
	}

	// nose1
	if(brushnose1 == true){
	 image(nose1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < nose1X.length; i++) {
		image(nose1, nose1X[i], nose1Y[i]);
	}

	// nose2
	if(brushnose2 == true){
	 image(nose2mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < nose2X.length; i++) {
		image(nose2, nose2X[i], nose2Y[i]);
	}

	// nose3
	if(brushnose3 == true){
	 image(nose3mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < nose3X.length; i++) {
		image(nose3, nose3X[i], nose3Y[i]);
	}

	// nose4
	if(brushnose4 == true){
	 image(nose4mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < nose4X.length; i++) {
		image(nose4, nose4X[i], nose4Y[i]);
	}

	// mouth1
	if(brushmouth1 == true){
	 image(mouth1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < mouth1X.length; i++) {
		image(mouth1, mouth1X[i], mouth1Y[i]);
	}

	// mouth2
	if(brushmouth2 == true){
	 image(mouth2mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < mouth2X.length; i++) {
		image(mouth2, mouth2X[i], mouth2Y[i]);
	}

	// mouth3
	if(brushmouth3 == true){
	 image(mouth3mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < mouth3X.length; i++) {
		image(mouth3, mouth3X[i], mouth3Y[i]);
	}

	// mouth4
	if(brushmouth4 == true){
	 image(mouth4mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < mouth4X.length; i++) {
		image(mouth4, mouth4X[i], mouth4Y[i]);
	}

	// bio1
	if(brushbio1 == true){
	 image(bio1mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio1X.length; i++) {
		image(bio1, bio1X[i], bio1Y[i]);
	}

	// bio2
	if(brushbio2 == true){
	 image(bio2mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio2X.length; i++) {
		image(bio2, bio2X[i], bio2Y[i]);
	}

	// bio3
	if(brushbio3 == true){
	 image(bio3mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio3X.length; i++) {
		image(bio3, bio3X[i], bio3Y[i]);
	}

	// bio4
	if(brushbio4 == true){
	 image(bio4mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio4X.length; i++) {
		image(bio4, bio4X[i], bio4Y[i]);
	}

	// bio5
	if(brushbio5 == true){
	 image(bio5mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio5X.length; i++) {
		image(bio5, bio5X[i], bio5Y[i]);
	}

	// bio6
	if(brushbio6 == true){
	 image(bio6mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio6X.length; i++) {
		image(bio6, bio6X[i], bio6Y[i]);
	}

	// bio9
	if(brushbio9 == true){
	 image(bio9mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio9X.length; i++) {
		image(bio9, bio9X[i], bio9Y[i]);
	}

	// bio10
	if(brushbio10 == true){
	 image(bio10mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio10X.length; i++) {
		image(bio10, bio10X[i], bio10Y[i]);
	}

	// bio11
	if(brushbio11 == true){
	 image(bio11mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio11X.length; i++) {
		image(bio11, bio11X[i], bio11Y[i]);
	}

	// bio12
	if(brushbio12 == true){
	 image(bio12mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio12X.length; i++) {
		image(bio12, bio12X[i], bio12Y[i]);
	}

	// bio13
	if(brushbio13 == true){
	 image(bio13mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio13X.length; i++) {
		image(bio13, bio13X[i], bio13Y[i]);
	}

	// bio14
	if(brushbio14 == true){
	 image(bio14mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio14X.length; i++) {
		image(bio14, bio14X[i], bio14Y[i]);
	}

	// bio15
	if(brushbio15 == true){
	 image(bio15mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio15X.length; i++) {
		image(bio15, bio15X[i], bio15Y[i]);
	}

	// bio16
	if(brushbio16 == true){
	 image(bio16mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio16X.length; i++) {
		image(bio16, bio16X[i], bio16Y[i]);
	}

	// bio17
	if(brushbio17 == true){
	 image(bio17mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio17X.length; i++) {
		image(bio17, bio17X[i], bio17Y[i]);
	}

	// bio18
	if(brushbio18 == true){
	 image(bio18mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio18X.length; i++) {
		image(bio18, bio18X[i], bio18Y[i]);
	}

	// bio19
	if(brushbio19 == true){
	 image(bio19mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio19X.length; i++) {
		image(bio19, bio19X[i], bio19Y[i]);
	}

	// bio20
	if(brushbio20 == true){
	 image(bio20mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio20X.length; i++) {
		image(bio20, bio20X[i], bio20Y[i]);
	}

	// bio21
	if(brushbio21 == true){
	 image(bio21mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio21X.length; i++) {
		image(bio21, bio21X[i], bio21Y[i]);
	}

	// bio22
	if(brushbio22 == true){
	 image(bio22mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio22X.length; i++) {
		image(bio22, bio22X[i], bio22Y[i]);
	}

	// bio23
	if(brushbio23 == true){
	 image(bio23mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio23X.length; i++) {
		image(bio23, bio23X[i], bio23Y[i]);
	}

	// bio24
	if(brushbio24 == true){
	 image(bio24mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio24X.length; i++) {
		image(bio24, bio24X[i], bio24Y[i]);
	}

	// bio25
	if(brushbio25 == true){
	 image(bio25mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio25X.length; i++) {
		image(bio25, bio25X[i], bio25Y[i]);
	}

	// bio26
	if(brushbio26 == true){
	 image(bio26mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio26X.length; i++) {
		image(bio26, bio26X[i], bio26Y[i]);
	}

	// bio27
	if(brushbio27 == true){
	 image(bio27mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio27X.length; i++) {
		image(bio27, bio27X[i], bio27Y[i]);
	}

	// bio28
	if(brushbio28 == true){
	 image(bio28mouse, mouseX, mouseY);
	 noCursor()
	}

	for (let i = 0; i < bio28X.length; i++) {
		image(bio28, bio28X[i], bio28Y[i]);
	}
}

function mousePressed(){

	//eye1
  if(brusheye1 == true && mouseX > 100){
			eye1X.push(mouseX);
		  eye1Y.push(mouseY);
  }

	//eye2
  if(brusheye2 == true && mouseX > 100){
			eye2X.push(mouseX);
		  eye2Y.push(mouseY);
  }

	//eye3
  if(brusheye3 == true && mouseX > 100){
			eye3X.push(mouseX);
		  eye3Y.push(mouseY);
  }

	//eye4
  if(brusheye4 == true && mouseX > 100){
			eye4X.push(mouseX);
		  eye4Y.push(mouseY);
  }

	//ear1
  if(brushear1 == true && mouseX > 100){
			ear1X.push(mouseX);
		  ear1Y.push(mouseY);
  }

	//ear2
  if(brushear2 == true && mouseX > 100){
			ear2X.push(mouseX);
		  ear2Y.push(mouseY);
  }

	//ear3
  if(brushear3 == true && mouseX > 100){
			ear3X.push(mouseX);
		  ear3Y.push(mouseY);
  }

	//ear4
  if(brushear4 == true && mouseX > 100){
			ear4X.push(mouseX);
		  ear4Y.push(mouseY);
  }

	//nose1
  if(brushnose1 == true && mouseX > 100){
			nose1X.push(mouseX);
		  nose1Y.push(mouseY);
  }

	//nose2
  if(brushnose2 == true && mouseX > 100){
			nose2X.push(mouseX);
		  nose2Y.push(mouseY);
  }

	//nose3
  if(brushnose3 == true && mouseX > 100){
			nose3X.push(mouseX);
		  nose3Y.push(mouseY);
  }

	//nose4
  if(brushnose4 == true && mouseX > 100){
			nose4X.push(mouseX);
		  nose4Y.push(mouseY);
  }

	//mouth1
  if(brushmouth1 == true && mouseX > 100){
			mouth1X.push(mouseX);
		  mouth1Y.push(mouseY);
  }

	//mouth2
  if(brushmouth2 == true && mouseX > 100){
			mouth2X.push(mouseX);
		  mouth2Y.push(mouseY);
  }

	//mouth3
  if(brushmouth3 == true && mouseX > 100){
			mouth3X.push(mouseX);
		  mouth3Y.push(mouseY);
  }

	//mouth4
  if(brushmouth4 == true && mouseX > 100){
			mouth4X.push(mouseX);
		  mouth4Y.push(mouseY);
  }

	//bio1
  if(brushbio1 == true && mouseX > 100){
			bio1X.push(mouseX);
		  bio1Y.push(mouseY);
  }

	//bio2
  if(brushbio2 == true && mouseX > 100){
			bio2X.push(mouseX);
		  bio2Y.push(mouseY);
  }

	//bio3
  if(brushbio3 == true && mouseX > 100){
			bio3X.push(mouseX);
		  bio3Y.push(mouseY);
  }

	//bio4
  if(brushbio4 == true && mouseX > 100){
			bio4X.push(mouseX);
		  bio4Y.push(mouseY);
  }

	//bio5
  if(brushbio5 == true && mouseX > 100){
			bio5X.push(mouseX);
		  bio5Y.push(mouseY);
  }

	//bio6
  if(brushbio6 == true && mouseX > 100){
			bio6X.push(mouseX);
		  bio6Y.push(mouseY);
  }

	//bio9
  if(brushbio9 == true && mouseX > 100){
			bio9X.push(mouseX);
		  bio9Y.push(mouseY);
  }

	//bio10
  if(brushbio10 == true && mouseX > 100){
			bio10X.push(mouseX);
		  bio10Y.push(mouseY);
  }

	//bio11
  if(brushbio11 == true && mouseX > 100){
			bio11X.push(mouseX);
		  bio11Y.push(mouseY);
  }

	//bio12
  if(brushbio12 == true && mouseX > 100){
			bio12X.push(mouseX);
		  bio12Y.push(mouseY);
  }

	//bio13
  if(brushbio13 == true && mouseX > 100){
			bio13X.push(mouseX);
		  bio13Y.push(mouseY);
  }

	//bio14
  if(brushbio14 == true && mouseX > 100){
			bio14X.push(mouseX);
		  bio14Y.push(mouseY);
  }

	//bio15
  if(brushbio15 == true && mouseX > 100){
			bio15X.push(mouseX);
		  bio15Y.push(mouseY);
  }

	//bio16
  if(brushbio16 == true && mouseX > 100){
			bio16X.push(mouseX);
		  bio16Y.push(mouseY);
  }

	//bio17
  if(brushbio17 == true && mouseX > 100){
			bio17X.push(mouseX);
		  bio17Y.push(mouseY);
  }

	//bio18
  if(brushbio18 == true && mouseX > 100){
			bio18X.push(mouseX);
		  bio18Y.push(mouseY);
  }

	//bio19
  if(brushbio19 == true && mouseX > 100){
			bio19X.push(mouseX);
		  bio19Y.push(mouseY);
  }

	//bio20
  if(brushbio20 == true && mouseX > 100){
			bio20X.push(mouseX);
		  bio20Y.push(mouseY);
  }

	//bio21
  if(brushbio21 == true && mouseX > 100){
			bio21X.push(mouseX);
		  bio21Y.push(mouseY);
  }

	//bio22
  if(brushbio22 == true && mouseX > 100){
			bio22X.push(mouseX);
		  bio22Y.push(mouseY);
  }

	//bio23
  if(brushbio23 == true && mouseX > 100){
			bio23X.push(mouseX);
		  bio23Y.push(mouseY);
  }

	//bio24
  if(brushbio24 == true && mouseX > 100){
			bio24X.push(mouseX);
		  bio24Y.push(mouseY);
  }

	//bio25
  if(brushbio25 == true && mouseX > 100){
			bio25X.push(mouseX);
		  bio25.push(mouseY);
  }

	//bio26
  if(brushbio26 == true && mouseX > 100){
			bio26X.push(mouseX);
		  bio26Y.push(mouseY);
  }

	//bio27
  if(brushbio27 == true && mouseX > 100){
			bio27X.push(mouseX);
		  bio27Y.push(mouseY);
  }

	//bio28
  if(brushbio28 == true && mouseX > 100){
			bio28X.push(mouseX);
		  bio28Y.push(mouseY);
  }
}

function keyPressed(){

//clear

if (event.code === 'Space') {
	console.log('Space pressed')

		eye1X.splice(0, eye1X.length);
		eye1Y.splice(0, eye1Y.length);

		eye2X.splice(0, eye2X.length);
		eye2Y.splice(0, eye2Y.length);

		eye3X.splice(0, eye3X.length);
		eye3Y.splice(0, eye3Y.length);

		eye4X.splice(0, eye4X.length);
		eye4Y.splice(0, eye4Y.length);

		ear1X.splice(0, ear1X.length);
		ear1Y.splice(0, ear1Y.length);

		ear2X.splice(0, ear2X.length);
		ear2Y.splice(0, ear2Y.length);

		ear3X.splice(0, ear3X.length);
		ear3Y.splice(0, ear3Y.length);

		ear4X.splice(0, ear4X.length);
		ear4Y.splice(0, ear4Y.length);

		nose1X.splice(0, nose1X.length);
		nose1Y.splice(0, nose1Y.length);

		nose2X.splice(0, nose2X.length);
		nose2Y.splice(0, nose2Y.length);

		nose3X.splice(0, nose3X.length);
		nose3Y.splice(0, nose3Y.length);

		nose4X.splice(0, nose4X.length);
		nose4Y.splice(0, nose4Y.length);

		mouth1X.splice(0, mouth1X.length);
		mouth1Y.splice(0, mouth1Y.length);

		mouth2X.splice(0, mouth2X.length);
		mouth2Y.splice(0, mouth2Y.length);

		mouth3X.splice(0, mouth3X.length);
		mouth3Y.splice(0, mouth3Y.length);

		mouth4X.splice(0, mouth4X.length);
		mouth4Y.splice(0, mouth4Y.length);

		bio1X.splice(0, bio1X.length);
		bio1Y.splice(0, bio1Y.length);

		bio2X.splice(0, bio2X.length);
		bio2Y.splice(0, bio2Y.length);

		bio3X.splice(0, bio3X.length);
		bio3Y.splice(0, bio3Y.length);

		bio4X.splice(0, bio4X.length);
		bio4Y.splice(0, bio4Y.length);

		bio5X.splice(0, bio5X.length);
		bio5Y.splice(0, bio5Y.length);

		bio6X.splice(0, bio6X.length);
		bio6Y.splice(0, bio6Y.length);

		bio7X.splice(0, bio7X.length);
		bio7Y.splice(0, bio7Y.length);

		bio8X.splice(0, bio8X.length);
		bio8Y.splice(0, bio8Y.length);

		bio9X.splice(0, bio9X.length);
		bio9Y.splice(0, bio9Y.length);

		bio10X.splice(0, bio10X.length);
		bio10Y.splice(0, bio10Y.length);

		bio11X.splice(0, bio11X.length);
		bio11.splice(0, bio11Y.length);

		bio12X.splice(0, bio12X.length);
		bio12Y.splice(0, bio12Y.length);

		bio13X.splice(0, bio13X.length);
		bio13Y.splice(0, bio13Y.length);

		bio14X.splice(0, bio14X.length);
		bio14Y.splice(0, bio14Y.length);

		bio15X.splice(0, bio15X.length);
		bio15Y.splice(0, bio15Y.length);

		bio16X.splice(0, bio16X.length);
		bio16Y.splice(0, bio16Y.length);

		bio17X.splice(0, bio17X.length);
		bio17Y.splice(0, bio17Y.length);

		bio18X.splice(0, bio18X.length);
		bio18Y.splice(0, bio18Y.length);

		bio19X.splice(0, bio19X.length);
		bio19Y.splice(0, bio19Y.length);

		bio20X.splice(0, bio20X.length);
		bio20Y.splice(0, bio20Y.length);

		bio21X.splice(0, bio21X.length);
		bio21Y.splice(0, bio21Y.length);

		bio22X.splice(0, bio22X.length);
		bio22Y.splice(0, bio22Y.length);

		bio23X.splice(0, bio23X.length);
		bio23Y.splice(0, bio23Y.length);

		bio24X.splice(0, bio24X.length);
		bio24Y.splice(0, bio24Y.length);

		bio25X.splice(0, bio25X.length);
		bio25Y.splice(0, bio25Y.length);

		bio26X.splice(0, bio26X.length);
		bio26Y.splice(0, bio26Y.length);

		bio27X.splice(0, bio27X.length);
		bio27Y.splice(0, bio27Y.length);

		bio28X.splice(0, bio28X.length);
		bio28Y.splice(0, bio28Y.length);
	}

//clear cursor

	if(key == 'Escape') {
		cursor()

		brusheye1 = false;
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
		brushbio5 = false;
		brushbio6 = false;


		brushbio9 = false;
		brushbio10 = false;
		brushbio11 = false;
		brushbio12 = false;
		brushbio13 = false;
		brushbio14 = false;
		brushbio15 = false;
		brushbio16 = false;
		brushbio17 = false;
		brushbio18 = false;
		brushbio19 = false;
		brushbio20 = false;
		brushbio21 = false;
		brushbio22 = false;
		brushbio23 = false;
		brushbio24 = false;
		brushbio25 = false;
		brushbio26 = false;
		brushbio27 = false;
		brushbio28 = false;
}
}
