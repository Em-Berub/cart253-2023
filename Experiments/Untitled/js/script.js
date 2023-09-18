/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
let a = 50
function setup() {
    createCanvas(500,500)
background(255,0,100)



    for (let a = 0; a < 500; a += 3) {
        line(a, 0, a, height);
      }
      
      for ( let x =-50; x<550;x +=35){
        //   for  (let y = 50; y<550 ; y + = 50){
            ellipse (x,x,   50,50)
            ellipse (x+a,x,50,50)
            ellipse (x-a,x,50,50)
            fill(0,0,0)
}

// ellipse (250,250,50,50)
// ellipse (250,200,50,50)
// ellipse (300,250,50,50)
// ellipse (250,300,50,50)


}


/**
 * Description of draw()
*/
function draw() {

}