/**
 * I like to move it
 * Em 
 * 
 * Create a program full of shapes that move, change size and color, and anything else you want to experiment with. Feel free to begin with the code you built in activity 3.

Your program should at a minimum

Include three shapes
Include movement
Include size changes
Include color changes
Use map() and constrain()
Respond to the mouse position using mouseX and mouseY
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let shape1 = {
x: 250,
y: 0,
size:5,
speed:3,
fill:250
}
let shape2 = {
    x: 0,
    y: 250,
    size:5,
    speed:3,
    fill:250
    }
/**
 * Description of setup
*/
function setup() {
createCanvas(500,500)
background(0)
}


/**
 * Description of draw()
*/
function draw() {
    
    shape1.y += shape1.speed
    // shape1.size += 0.5
ellipse(shape1.x, shape1.y, shape1.size)

shape2.x += shape2.speed
shape2.size += 0.5
ellipse(shape2.x, shape2.y, shape2.size)
}