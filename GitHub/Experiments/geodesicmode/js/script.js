// 253 what is that? geodsic framework casting mold

//Title : GEODESIC SPINAL FRAMEWORK CASTING MOLD
//sitting all day,backpain,decay,workhole

//by: Em 40252625

//Plenty of experimentation went into this one.
//Hope you enjoy
"use strict";
function preload() {
//no songs :(
}

//I wanted to try a geometric design for the background
 function setup() {
   createCanvas(500,500);

  for (let circleY = 30; circleY <= 500; circleY += 40) {//Does 144 symmetrical circles
      for (let circleX = 30; circleX <= 500; circleX += 40) {
              circle(circleX, circleY, 40);
      }
    }

  for (let Y = 0; Y <= 500; Y += 5) {//Another nested loop,creates vertical and horizontal lines
      for (let X = 0; X <= 500; X += 7.5) {//The first loops triggers the inner loop
          rect(X, Y, 5,5);//which continues until completiton. The whole process repeats itself.
      }
    }
 }

 //defining variables
let a;
let p;
let y;
let x;
let z;
let lineX;
let lineY;

a=500
p=0
y=0
x=0
z=0
lineX=0
lineY=500



function draw(){

//generates the bording squares and vertical lines
line(lineX, 0, lineX, 500);
lineX+=10

line(lineY, 0, lineY, 500);
lineY-=10

stroke(220,220,0)
fill(0)
rect(a,490,10,10)
rect(p,0,10,10)
rect(490,a,10,10)
rect(0, p, 10, 10);
p+= 10;
a-=10

//The value of i here changes the height of the central
//ellipse and since it determines the number of iteration
//it also changes the speed at which the figure appears
//I randomly played with the values of x+ and x- to get an interesting result
//here
for(let i = 0 ; i < 50 ; i++) {
    if (x > 1){
  x -= 220;
} else if (x < 1) {
             x += 2.2
     }
stroke(222,180,0)
ellipse(250,250, x, i);
}

for (let i = 0; i < 25; i++) {//generates the elongated middle shape
  if (y > 1){
      y -= 1;
  } else if (y < 1){
      y += 2000;
}
  stroke(222,180,0)
  ellipse(250, 250, y, i);
  stroke(0)
}

drawEllipse();
}


function drawEllipse(){//randomly draws the elliptic shapes onto the background

ellipse(random(width), random(height), random(0,10), random(0,20));
}
//That's all! Thanks
