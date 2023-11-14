

"use strict";


function preload() {
    
}


function setup() {
createCanvas(windowWidth,windowHeight)

background(0)

// for (let i= 0; i <= height; i += 40) {//Does 144 symmetrical circles
//     for (let j = 0; j <= width; j += 40) {
//             circle(j, i, 40);
//     }
//   }

// for (let i = 0; i <= width; i += 5) {//Another nested loop,creates vertical and horizontal lines
//     for (let j = 0; j <= width; j += 7.5) {//The first loops triggers the inner loop
//         rect(j, i, 5,5);//which continues until completiton. The whole process repeats itself.
//     }
//   }
}

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
lineX=50
lineY=0

let test =0






function draw() {

//     line(lineX, 0, lineX, width);
// lineX+=5

line(width/2, height/2, lineX, height);
lineX-=50

line(width/2, height/2, lineX, test);
height-=50
stroke(250,20,0)
fill(0)
// rect(width,height,10,10)
// rect(p,0,10,10)
// rect(width,a,10,10)
// rect(0, p, 10, 10);
// p+= 10;
// a-=10


// drawEllipse()
mouse()
}

function mouse() {
    if (keyIsPressed === true){
fill(255,0,0)
        ellipse(random(width), random(height), random(0,10), random(0,20));
    }
}
// function drawEllipse(){
//     fill(255)
//     ellipse(222,222,220)
    
// }


// function drawEllipse(){//randomly draws the elliptic shapes onto the background
// fill(255,0,0)
//     ellipse(random(width), random(height), random(0,10), random(0,20));
//     }