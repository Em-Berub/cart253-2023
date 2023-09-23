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



function draw() {
    background(0)
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
if (circle.x>width/2){
    circle.size= map(circle.x, 0,width, 50 ,0 )

}

if (circle.x>width){
    circle.speed = -circle.speed
}

if (circle.x<0){
    circle.speed = -circle.speed
}


ellipse(circle.x, circle.y, circle.size)
}