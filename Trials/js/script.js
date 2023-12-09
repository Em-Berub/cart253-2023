// Em
// Title:Dodge the Particules
// 
// The program reloads everytime the key or mouse are pressed
// 

"use strict";
let img;
function preload() {
//   img = loadImage('assets/images/sky.jpg');
}

let circle = {
    x:0,
    y:200,
    vx:35,
    size:60,
    fill:0
}

let c2 = {
  x:0,
  y:200,
  vx:35,
  size:100,
  fill:0
}

function setup() {
createCanvas(500, windowHeight- 100)
}



function draw() {
  background(140,132,132)
  
  // concentric circles
  let size;
  size=100
  stroke(0)
for (let i =0 ; i<50; i++) {
size=size+30
fill(0,0,0,0,8)
strokeWeight(10)
ellipse(width/2, height/2,size)
    }

// the program stops and the background is black if the distance between 
// one of the circles and the mouse is less than 40
// an image appears
    stroke(4, 164, 179)
  let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < 40) {
      
      circle.fill= fill(0)
      noStroke()
      background(0)
      image(img, 125, height-200,250,250);
      print(d)
      noLoop()
    }else {
      fill(255,100,100)
    }    
      
// vertical movement of the circle 1
    circle.y = circle.y + circle.vx
    ellipse(circle.x,circle.y,circle.size)
    if (circle.y > height){
      // circle.y = -circle.y - 10 
      circle.vx = -circle.vx
      // circle.y = random(0,height)
      circle.x =random(0,width)  
    }
     else if  (circle.y < 0){
      circle.vx =-circle.vx
      circle.x=random(0,width)
      // circle.y = random(0,height)
    }

   // the program stops and the background is black if the distance between 
// one of the circles and the mouse is less than 40
// an image appears
  let e = dist(mouseX, mouseY, c2.x, c2.y);
  if (e < 40) {
    c2.fill =fill(0)
   
    noStroke()
    background(0)
    image(img, 125, height-200,250,250);
    print(e)
    noLoop()
  }

  // horizontal movement of the circle 2
  c2.x = c2.x + c2.vx
  ellipse(c2.x,c2.y,c2.size)
  if (c2.x > width){
    c2.vx = -c2.vx
    c2.y = random(0,height)
  }
  else if (c2.x < 0){
    c2.vx =-c2.vx
    c2.y = random(0,height)
  }
  

  // if the mouse exits the canvas, the program stops
  if (mouseX > width || mouseX < 0 || mouseY > height ||mouseY < 0){
    background(0)
    noLoop()
  }

 

// code taken from example for exercise! background effect
  for (let i = 0; i < 5000; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    strokeWeight(1)
    point(x,y)
  }

// cursor cell shape, blue ellipse underneath
// strokeWeight(2)
// stroke(0)
// fill(21, 214, 232)
// ellipse(mouseX,mouseY,20,20)
// cursor(`cell`)
ellipse(mouseX,mouseY,20)

// text properties
fill (255,100,100)
stroke(255)
strokeWeight(6);
textSize(35);
textAlign(CENTER);
textStyle(BOLDITALIC);
text('DODGE THE PARTICULES', 250, 50);

// line properties
stroke (255)
line (35,60,470, 60)




  


}


// *************************


// allows to restart the program if it stopped
function mousePressed() {
  loop();
}
function keyPressed() {
  loop();
}






