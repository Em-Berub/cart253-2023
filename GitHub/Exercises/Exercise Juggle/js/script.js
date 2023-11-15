

"use strict";

let rebound
// let hinder
let paddle
let gravityForce = 0.0010
let balls = []
let hinders = []
let numBalls = 1
let numHin= 3

function preload() {
}

let state = 'start'
function setup() {
    createCanvas(windowWidth, windowHeight)

    rebound = new Rebound(250,250)
    paddle = new Paddle(300, 20)
    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width)
        let y = random(-500, 0)
        let ball = new Ball(x, y)
        balls.push(ball)
    }

    for (let i = 0; i < numHin  ; i++) {
        
        let hinder = new Hinder(300, 20)
        hinders.push(hinder)
    }
    
    

}

// createCanvas(windowWidth, windowHeight,WEBGL)
function draw() {

   
    background(0)
    paddle.move()
    paddle.display()
   
    rebound.display()
    rebound.move()
    rebound.bounce()
    // rebound.collide()
    rebound.gravity(gravityForce)

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]

        if (ball.active) {
            ball.gravity(gravityForce)
            ball.move()
            ball.bounce()
            ball.display()
            rebound.grown (ball)
        }
        for (let j = 0; j < hinders.length; j++) {
            let hinder = hinders[j];
            hinder.bounce(ball)
    
            hinder.display()
            
          }

          
        
       
    }

    let aboveBalls = true
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
    
        if (ball.y < windowHeight) {
            aboveBalls = false;
            break;
        }
    }
    
    if (aboveBalls) {
        // state = 'end';
        background(255, 0, 0);
        fill(255)
        textSize(60)
        // textAlign(CENTER, CENTER)
    
       
        textStyle(BOLD)
        text('END',windowWidth/2, windowHeight/2)
    }

    let afterWindow = true;

for (let i = 0; i < hinders.length; i++) {
    let hinder = hinders[i];

    if (hinder.y < windowHeight) {
        afterWindow = false;
        break;
    }
}

if (afterWindow) {
    // state = 'end';
    background(255, 0, 0);
    fill(255)
    textSize(40)
    textAlign(CENTER, CENTER)

   

    text('End of simulation',250,250)
}
    // let colorChanged = false;
    // for (let i = 0; i < hinders.length  ; i++) {
    //     let hinder = hinders[i];
    //     if (state === 'start' && hinder.y> windowHeight){
    //         state = 'end'
    //         colorChanged = true
    //     }
    //     else if (state ==='end' && !colorChanged){
    //         background(255,0,0)
    //         colorChanged = true;
    //     }
    // }
  
    // for (let i = 0; i < hinders.length; i++) {
    //     let hinder = hinders[i]
       
    // }
}




