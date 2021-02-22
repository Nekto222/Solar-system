var stars = [];

let SUN;
let SUN8K;
let MERCURY;
let VENUS;
let EARTH;
let MARS;
let JUPITER;
let SATURN;
let URANUS;
let NEPTUNE;
let PLUTO;
let MOON;



function preload() {  //preload start
  SUN8K = loadImage('img/sun8k.jpg');
  MERCURY = loadImage('img/mercury.jpg');
  VENUS = loadImage('img/venus.jpg');
  EARTH = loadImage('img/earth.jpg');
  MARS = loadImage('img/mars.jpg');
  JUPITER = loadImage('img/jupiter.jpg');
  SATURN = loadImage('img/saturn.jpg');
  URANUS = loadImage('img/uranus.jpg');
  NEPTUNE = loadImage('img/neptune.jpg');
  PLUTO = loadImage('img/pluto.jpg');
  MOON = loadImage('img/moon.jpg');

} //preload end


/*function keyPressed() {   //keyPressed start
  if (key == "F") {   //if start
    let fs = fullscreen();
    fullscreen(!fs);
  }  //if end
}  //keyPressed end
*/






function setup() {  //setup start
  angleMode(DEGREES);
  createCanvas(900 , 700, WEBGL);
  
  camera(0, -200, 1000, 0, 0, 0, 0, 1, 0);
  
perspective(60, width / height, 1, 50000);
  
  for (let i = 0; i<200; i++) {  //for start
    stars[i] = new Star();
  }  //for end

  sun = new Planet(55, 'yellow',                0, 0, 0.2, SUN8K);
  mercury = new Planet(10, 'gray',              0.48, 50, 0.7,MERCURY);
  venus = new Planet(15, 'brown',               0.35, 75, 0.5,VENUS);
  earth = new Planet(20, 'cyan',                0.29, 100, 0.5,EARTH);
  mars = new Planet(18, 'orange',               0.24, 125, 0.5,MARS);
  jupiter = new Planet(30, 'lightGray',         0.13, 160, 0.3,JUPITER);
  saturn = new Planet(20, color(120, 50, 120),  0.096, 190, 0.3,SATURN);
  uranus = new Planet(18, 'blue',               0.07, 220, 0.5,URANUS);
  neptune = new Planet(16, 'lightBlue',         0.054, 240, 0.5,NEPTUNE);
  pluto = new Planet(10, 'brown',               0.047, 260, 0.5,PLUTO);
  moon = new Planet(7, 'white',                 1, 20, 0.3,MOON);
  io = new Planet(6, 'white',                   0.8, 20, 1, SUN);
  europe = new Planet(5, 'white',                   0.4, 25, 0.8, SUN);
  ganimed = new Planet(10, 'white',                   0.2, 30, 0.25, SUN);
  calisto = new Planet(8, 'white',                   0.1, 40, 0.12, SUN);
  
}  //setup end





function draw() { //draw start
  background(0);
  
  for (let i = 0; i<200; i++) {  //for
    stars[i].showNew();
  }  //for end

  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);
  directionalLight(128, 128, 128, 0, 0, -1);

  orbitControl(4, 4);
  push();
  push();
  push();
  push();
  push();
  push();
  push();
  push();
  push();
  push();

  directionalLight(255, 255, 255, 0, 0, -1);
  
  sun.show();
  pop();
  mercury.show();
  pop();
  venus.show();
  pop();
  earth.show();
  moon.show();
  pop();
  mars.show();
  pop();
  
  jupiter.show();
  push(); push(); push();
  rotateZ(-7);
  io.show();
  pop();
  rotateZ(18);
  europe.show();
  pop();
  rotateZ(35);
  ganimed.show();
  pop();
  rotateZ(50);
  calisto.show();
  
  pop();
  saturn.show();
  push();
  rotateX(60);
  torus(26, 2, 25, 25);
  torus(28, 2, 25, 25);
  torus(30, 2, 25, 25);
  pop();
  
  pop();
  uranus.show();
  pop();
  neptune.show();
  pop();
  rotateZ(7);
  pluto.show();
  pop();

}  //draw end