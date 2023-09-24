

"use strict";
let img;
function preload() {
  img = loadImage('assets/images/FireEmoji.png');


}

let circle = {
    x:25,
    y:250,
    speed:2,
    size:2

}


function setup() {
createCanvas(500, windowHeight)
 
background(120,122,122)
fill (255,100,100)
  textSize(40);
textAlign(CENTER);
textStyle(BOLDITALIC);
text('DODGE THE C', 250, 50);
textAlign(CENTER);
strokeWeight(0);

image(img, 0, 200,50,50);
}



function draw() {


  // background(120,122,122)

  cursor(`cell`)
stroke (255)
// let x;
// let y;
// x=200
// y =200
// for (let i = 0; i < 1000; i++) {
//         let x = random(0, width);
//         let y = random(0, height);
//         stroke(255);
//         point(x, y);
// }

    fill(255,200,200)
    push() 
strokeWeight(4)
line (50,60,450, 60)
pop ()
push()
strokeWeight(1)
// circle.x+=circle.speed
fill(0)
ellipse(mouseX,mouseY,circle.size)
pop()

for(let i=0; i< 100; i++){
  ellipse(circle.x,circle.y,circle.size)
  circle.x=random(0,500)
  circle.y=random(0,height)
  // noLoop()
}
if (mouseX = circle.x + 20){
  fill(0)
  rect(100,100,100,100)
  
}

// push()
// strokeWeight(2)
// frameRate(30); 
// drawEllipse();
// pop()


// if (circle.x > 500){
//     circle.speed = -circle.speed
// }
// if  (circle.x < 0){
//     circle.speed =-circle.speed
// }


// for (let i = 0 ; i< 10; i++){
//     
//     circle.y = circle.y +20
//     circle.x = circle.x +50
//     if (circle.x > 500){
//         circle.speed = -circle.speed
//     }
//     if  (circle.x < 0){
//         circle.speed =-circle.speed
//     }
// }
}

function drawEllipse(){//randomly draws the elliptic shapes onto the background

    ellipse(random(width), random(90,height), random(3,10), random(0,20));
    }





























// let covid19 = {
//     x: 0,
//     y: 250,
//     size: 100,
//     vx: 0,
//     vy: 0,
//     speed: 5,
//     fill: {
//       r: 255,
//       g: 0,
//       b: 0
//     }
//   };
  
//   let user = {
//     x: 250,
//     y: 250,
//     size: 100,
//     fill: 255
//   };
  
//   let numStatic = 5000;
  
//   function setup() {
//     createCanvas(windowWidth, windowHeight);
  
//     covid19.y = random(0, height);
//     covid19.vx = covid19.speed;
  
//     noCursor();
//   }
  
//   function draw() {
//     background(0);
  
//     // Display static
//     for (let i = 0; i < numStatic; i++) {
//       let x = random(0, width);
//       let y = random(0, height);
//       stroke(255);
//       point(x, y);
//     }
  
//     // Covid 19 movement
//     covid19.x = covid19.x + covid19.vx;
//     covid19.y = covid19.y + covid19.vy;
  
//     if (covid19.x > width) {
//       covid19.x = 0;
//       covid19.y = random(0, height);
//     }
  
//     // User movement
//     user.x = mouseX;
//     user.y = mouseY;
  
//     // Check for catching covid19
//     let d = dist(user.x, user.y, covid19.x, covid19.y);
//     if (d < covid19.size / 2 + user.size / 2) {
//       noLoop();
//     }
  
//     // Display covid 19
//     fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
//     ellipse(covid19.x, covid19.y, covid19.size);
  
//     // Display user
//     fill(user.fill);
//     ellipse(user.x, user.y, user.size);
//   }