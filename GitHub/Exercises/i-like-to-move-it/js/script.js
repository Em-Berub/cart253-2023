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
fill:(0,0,0)
}
let shape12 = {
    x: 250,
    y: 0,
    size:5,
    speed:3,
    fill:(0,0,0)
    }
    let shape13 = {
        x: 0,
        y: 0,
        size:5,
        speed:3,
        fill:(0,0,0)
        }
        let shape14 = {
            x: 0,
            y: 490,
            size:5,
            speed:3,
            fill:(0,0,0)
            }
    




let shape2 = {
    x: 0,
    y: 250,
    size:5,
    speed:3,
    fill1:250,
    fill2:250,
    fill3:250
    }
    let shape3 = {
        x: 200,
        y: 250,
        size:5,
        speed:3,
        fill1:250,
        fill2:250,
        fill3:250
        }
        let shape4 = {
            x: 200,
            y: 250,
            size:5,
            speed:3,
            fill1:250,
            fill2:250,
            fill3:250
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
// shape2.size += 0.3
// frameRate(2)
// shape2.x = map(mouseX, 0, 500, 0, 200)
    // frameRate(60)
    // shape1.x = constrain(shape1.x,0, 20)
    // shape1.y = mouseY

   shape1.x = map(mouseX, 0, 500, 5, 25)
    shape1.fill = random(0,255)
   fill(shape1.fill) 
   shape1.fill += 2
    shape1.y += shape1.speed
shape1.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape1.x, shape1.y, shape1.size)


shape12.x = map(mouseX, 0, 500, 475, 495)
shape12.fill = random(0,255)
   fill(shape12.fill) 
   shape12.fill += 2
    shape12.y += shape2.speed
shape12.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape12.x, shape12.y, shape12.size)


shape13.y = map(mouseY, 0, 500, 5, 25)
    shape13.fill = random(0,255)
  fill(shape13.fill) 
   shape13.fill += 2
    shape13.x += shape13.speed
shape13.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape13.x, shape13.y, shape13.size)

shape14.y = map(mouseY, 0, 500, 475, 490)
    shape14.fill = random(0,255)
   fill(shape14.fill) 
   shape14.fill += 2
    shape14.x += shape14.speed
shape14.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape14.x, shape14.y, shape14.size)







shape2.x += shape2.speed
shape2.x = constrain(shape2.x,0, 400)
shape2.fill1 = random(0,200)
shape2.fill2= random(0,150)
shape2.fill3= random(0,150)
fill(shape2.fill1,shape2.fill2,shape2.fill3)


// shape2.size= map(mouseY, 0 , height, 10 , 50)
ellipse(shape2.x, shape2.y, shape2.size)



shape3.x += shape3.speed
shape3.x = constrain(shape3.x,100, 400)
shape3.y += shape3.speed
shape3.y = constrain(shape3.y,100, 400)
shape3.fill1 = random(0,200)
shape3.fill2= random(0,150)
shape3.fill3= random(0,150)
fill(shape3.fill1,shape3.fill3,shape3.fill3)


// shape3.size= map(mouseY, 0 , height, 10 , 50)
ellipse(shape3.x, shape3.y, shape3.size)


shape4.x += shape4.speed
shape4.x = 400
shape4.y += shape4.speed
shape4.y = constrain(shape3.x,200, 400)
shape4.fill1 = random(0,200)
shape4.fill2= random(0,150)
shape4.fill3= random(0,150)
fill(shape4.fill1,shape4.fill2,shape4.fill3)


// shape3.size= map(mouseY, 0 , height, 10 , 50)
ellipse(shape4.x, shape4.y, shape4.size)





} 