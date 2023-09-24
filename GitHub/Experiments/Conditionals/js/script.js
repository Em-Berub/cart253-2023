  /**
 * Title of Project
 * Author Name

 */

"use strict";


function preload() {

}
let circle = {
    x:0,
    y:250,
    speed:7,
    size:5

}


function setup() {
createCanvas(500,500)

}



// Move your mouse inside the canvas to see the
// change in distance between two points!
function draw() {
    background(200);
    fill(0);
  
    let x1 = 10;
    let y1 = 90;
    let x2 = mouseX;
    let y2 = mouseY;
  
    line(x1, y1, x2, y2);
    ellipse(x1, y1, 7, 7);
    ellipse(x2, y2, 7, 7);
  
    // d is the length of the line
    // the distance from point 1 to point 2.
    let d = dist(x1, y1, x2, y2);
  
    // Let's write d along the line we are drawing!
    push();
    translate((x1 + x2) / 2, (y1 + y2) / 2);
    rotate(atan2(y2 - y1, x2 - x1));
    text(nfc(d, 1), 0, -5);
    pop();
    // Fancy!
  
    describe(`2 ellipses joined by line. 1 ellipse moves with
      mouse X&Y. Distance displayed.`);

    




      
    fill(255,255,255)
circle.x += circle.speed

// if (mouseX > width/2){
//     circle.size= map(circle.x, 0,width, 0 ,25 )
//  }
//  if (mouseX < width/2){
//     circle.x= constrain(circle.x, 100 ,400 )
//  }
 if (circle.x<=width/2){
    circle.size= map(circle.x, 0,width, 0 ,50 )

}
else {
    circle.size= map(circle.x, 0,width, 50 ,0 )

}

if (mouseX < width/2){
    circle.y= map(circle.x,0,width, 100 ,400 )
 }

 if (circle.x < width/2){
    circle.y= map(circle.x,0,width, 225 ,400 )
 }

if (circle.x>width){
    circle.speed = -circle.speed
}

if (circle.x<0){
    circle.speed = -circle.speed
}


ellipse(circle.x, circle.y, circle.size)



  }




// function draw() {


    
//     background(0)
//     fill(255,255,255)
// circle.x += circle.speed

// // if (mouseX > width/2){
// //     circle.size= map(circle.x, 0,width, 0 ,25 )
// //  }
// //  if (mouseX < width/2){
// //     circle.x= constrain(circle.x, 100 ,400 )
// //  }
//  if (circle.x<=width/2){
//     circle.size= map(circle.x, 0,width, 0 ,50 )

// }
// else {
//     circle.size= map(circle.x, 0,width, 50 ,0 )

// }

// if (mouseX < width/2){
//     circle.y= map(circle.x,0,width, 100 ,400 )
//  }

//  if (circle.x < width/2){
//     circle.y= map(circle.x,0,width, 225 ,400 )
//  }

// if (circle.x>width){
//     circle.speed = -circle.speed
// }

// if (circle.x<0){
//     circle.speed = -circle.speed
// }


// ellipse(circle.x, circle.y, circle.size)
// }