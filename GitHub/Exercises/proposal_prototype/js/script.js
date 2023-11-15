

"use strict";


function preload() {
    
}

let board

function setup() {
createCanvas(750,750)

// background(0)





board = new Board(300, 20)
}


push()
function bg1(){
    for (let i= 0; i <= height; i += 40) {//Does 144 symmetrical circles
        for (let j = 0; j <= width; j += 40) {
                circle(j, i, 40);
        }
      }
    
    for (let i = 0; i <= width; i += 5) {//Another nested loop,creates vertical and horizontal lines
        for (let j = 0; j <= width; j += 7.5) {//The first loops triggers the inner loop
            rect(j, i, 5,5);//which continues until completiton. The whole process repeats itself.
        }
      }
}
pop()

// let a;
// let x;
// a=0
// x=0



function draw() {
    bg1()
  
// bg()
// drawEllipse ()

board.display()
board.move()


}

// function drawEllipse() {
//     if (keyIsPressed === true){
// fill(255,0,0)
//         ellipse(random(width), random(height), random(0,10), random(0,20));
//     }
// }






// function bg(){
//     for(let i=0; i<30;i++){
//         stroke(255,150,150,50)
//         line(width/2+a, 0, width/2 + a, height);
        
//         a+=1
//     }
    
//     for(let i=0; i<30;i++){
//         stroke(255,150,150,50)
//         line(width/2+x, 0, width/2 + x, height);
        
//         x-=1
//     }
// }
