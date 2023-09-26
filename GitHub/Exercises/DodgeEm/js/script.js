

"use strict";
let img;
function preload() {
  img = loadImage('assets/images/FireEmoji.png');


}

let circle = {
    x:0,
    y:200,
    vx:30,
    size:50

}

let sha = {
  x:0,
  y:200,
  vx:20,
  size:50

}

function setup() {
createCanvas(500, windowHeight- 100)





 



}



function draw() {
  background(140,132,132)
  push()
strokeWeight(2)
stroke(0)
fill(43, 153, 142)
ellipse(mouseX,mouseY,20,20)
cursor(`cell`)
pop()
fill (255,100,100)
stroke(255)
strokeWeight(6);

  textSize(35);
textAlign(CENTER);
textStyle(BOLDITALIC);
text('DODGE THE PARTICULES', 250, 50);
textAlign(CENTER);
stroke (0)
line (35,60,470, 60)



push ();

  for (let i = 0; i < 5000; i++) {
          let x = random(0, width);
          let y = random(0, height);
          stroke(255);
          strokeWeight(1)
          point(x,y)
        }

pop ();
  
// image(img, 0, 0,50,50);

 

// }



if (circle.y > height){
  // circle.y = -circle.y - 10 
  circle.vx = -circle.vx
  // circle.y = random(0,height)
  circle.x =random(0,width)  
}
 if  (circle.y < 0){
  circle.vx =-circle.vx
  circle.x=random(0,width)
  // circle.y = random(0,height)
}


circle.y = circle.y + circle.vx
// circle.x = circle.x + circle.vx

// for( let i = 0 ; i<1; i++){
  sha.x = sha.x + sha.vx
  ellipse(sha.x,sha.y,sha.size)
  // sha.x = sha.x+ random(0,5)
  // sha.y = sha.y + random(0,5)
  if (sha.x > width){
    sha.vx = -sha.vx
    // circle.y = -circle.y - 10 
    
    sha.y = random(0,height)
    // sha.x =random(0,width)  
  }
   if  (sha.x < 0){
    
    sha.vx =-sha.vx
    // sha.x=random(0,width)
    sha.y = random(0,height)
    // circle.y = random(0,height)
  }



ellipse(circle.x,circle.y,circle.size)
// frameRate(10)



// ********************





if (mouseX > width || mouseX < 0 || mouseY > height ||mouseY < 0){
  noLoop()
}


let d = dist(mouseX, mouseY, circle.x, circle.y);
if (d < 20) {
  print(d)
// stroke(0)
// strokeWeight(2)
// line(mouseX,mouseY,circle.x, circle.y)
noLoop()
}



let dis = dist(mouseX, mouseY, sha.x, sha.y);
if (dis < 20) {
  print(dis)
// stroke(0)
// strokeWeight(2)
// line(mouseX,mouseY,sha.x, sha.y)
  noLoop()
}





}


// *************************

function mousePressed() {
  loop();
}
function keyPressed() {
  loop();
}



// if (circle.x > width/3){
//   // circle.y = -circle.y - 10 
//   circle.vx = -circle.vx
//   circle.x =random(0,width)  
// }
// if   (circle.x < width/3){
//   circle.vx =-circle.vx
//   circle.y=random(0,height)
// }






// else if (mouseX >250) {

//     circle.x =random (150,width) 
    
//   circle.y = random(150,height)
//   // frameRate(5)
// }







// for(let i=0; i < 2; i++){

//   fill(0)s
//   // ellipse(circle.x,circle.y,circle.size)

//   // circle.x = circle.x + 10
//   // circle.y = circle.y + 10
// if (circle.x > 500){
//     circle.y = -circle.y - 10    
// }
// if   (circle.x < 0){
//     circle.y =circle.y + 100
// }


// // circle.x = circle.x + circle.speed
// // ellipse(circle.x,circle.y,circle.size)
//   // circle.x=random(0,500)
//   // circle.y=random(70,height)
//   // noLoop()
// }
















// for (let i = 0 ; i< 10; i++){
    
//     circle.y = circle.y +20
//     circle.x = circle.x +50
//     if (circle.x > 500){
//         circle.speed = -circle.speed
//     }
//     if  (circle.x < 0){
//         circle.speed =-circle.speed
//     }
// }

















  // background(120,122,122)

  

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






// push()

// pop()
// if ( mouseY = circle.y+20){
//   fill(0)
//   // rect(100,100,100,100)
  
// }

// push()
// strokeWeight(2)
// frameRate(60); 

// pop()




    // let d = dist(circle.x, circle.y, 500, 700);



    // drawEllipse();
 

// function drawEllipse(){//randomly draws the elliptic shapes onto the background

//     ellipse(random(width), random(90,height), random(3,10), random(0,20));
//     }





























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
  // }