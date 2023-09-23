/**
 * I like to move it Exercise
 * Em 
 * 
 */

"use strict";


function preload() {

}

// I'm defining the variables and the properties I will be using
// to create the shapes, movement, color and position
// One circle, 4 lines created with white circles, two lines moving on the y axis 
// g
// g
// .



let circle = {
    x: 250,
    y:250,
    fill:0,
    size:200,
    fill1:250,
    fill2:250,
    fill3:250
}


// Those shapes are the white circles controled by the mouseX and mouseY function
// on each side of the canvas
let shape1 = {
x: 250,
y: 0,
size:5,
speed:3,
fill:(255,255,255)
}
let shape12 = {
    x: 250,
    y: 0,
    size:5,
    speed:3,
    fill:(255,255,255)
    }
    let shape13 = {
        x: 0,
        y: 0,
        size:5,
        speed:3,
        fill:(255,255,255)
        }
        let shape14 = {
            x: 0,
            y: 490,
            size:5,
            speed:3,
            fill:(255,255,255)
            }
    


// Those shapes correspond to the vertical red circles changing size on the left and right sides

    let shape3 = {
        x: 0,
        y: 0,
        size:5,
        speed:3,
        fill1:222,
        fill2:216,
        fill3:16
        }
        let shape4 = {
            x: 200,
            y: 0,
            size:5,
            speed:3,
            fill1:250,
            fill2:0,
            fill3:0
            }
            
        
   
/**
Setting the background color and canvas size
*/
function setup() {
createCanvas(500,500)
background(0)
}


/**
 
*/
function draw() {

// Creating a circle without fill that changes color as well

stroke(255, 204, 0)
strokeWeight(0.2)
noFill()
circle.fill1 = random(0,200)
circle.fill2= random(0,200)
circle.fill3= random(0)
stroke(circle.fill1,circle.fill2,circle.fill3)
ellipse(circle.x,circle.y,circle.size)




// These four shapes(1;12;13;14) are all controlled by the mouseX and mouseY function
// Shape1 and shape12 are drawn on the left and right sides
// Shape13 and shape14 are drawn on the upper and lower sides
// The map function is used limit the movement on specific areas
stroke(0, 0, 0)
   shape1.x = map(mouseX, 0, 500, 5, 25)
   fill(shape1.fill) 
  
   shape1.y += shape1.speed
shape1.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape1.x, shape1.y, shape1.size)



shape12.x = map(mouseX, 0, 500, 475, 495)
   fill(shape12.fill) 
    shape12.y += shape12.speed
shape12.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape12.x, shape12.y, shape12.size)



shape13.y = map(mouseY, 0, 500, 5, 25)
  fill(shape13.fill) 
   shape13.fill += 2
    shape13.x += shape13.speed
shape13.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape13.x, shape13.y, shape13.size)



shape14.y = map(mouseY, 0, 500, 475, 490)
   fill(shape14.fill) 
    shape14.x += shape14.speed
shape14.size= map(mouseY, 0 , height, 3 , 5)

ellipse(shape14.x, shape14.y, shape14.size)





// These shapes correspond to the left and right red circles being drawn
// repeatedly. Their size change according to mouse Y
// The function constrain is used to limit these shapes on the y axis
// They eventually stop instead of going indefinitely

shape3.size= map(mouseY, 0 , height, 10 , 25)
fill(255,0,0)
shape3.x= 25
shape3.y += shape3.speed
shape3.y = constrain(shape3.y,50, 470)

ellipse(shape3.x, shape3.y, shape3.size)


shape4.size= map(mouseY, 0 , height, 10 , 25)
fill(255,0,0)
shape4.x = 480
shape4.y += shape4.speed
shape4.y = constrain(shape4.y, 50, 470)

ellipse(shape4.x, shape4.y, shape4.size)



// Four squares on each corner of the canvas and two triangles in the middle

fill(242, 180, 15,10)
rect(20,20,30,30)
rect(460,20,30,30)
rect(20,460,30,30)
rect(460,460,30,30)
triangle(223, 250, 250, 220, 277, 250)
triangle(223, 250, 250, 280, 277, 250)
} 