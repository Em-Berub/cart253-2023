

"use strict";

let gball
let paddle
let gravityForce = 0.0020
let balls = []
let hinders = []
let numBalls = 30
let numHin= 5

function preload() {
}

let state = 'start'


function setup() {

    createCanvas(windowWidth, windowHeight)

    gball = new Gball(50,15)
    paddle = new Paddle(300, 20)

    for (let i = 0; i < numBalls; i++) {
        let x = random(0,700)
        let y = random(-200,0)
        let ball = new Ball(x,y)
        balls.push(ball)
    }

    for (let i = 0; i < numHin  ; i++) {
        
        let hinder = new Hinder(75, 10)
        hinders.push(hinder)
    }
    
    

}

// createCanvas(windowWidth, windowHeight,WEBGL)
function draw() {

   
    background(250)
    paddle.move()
    paddle.display()
   gball.display()
   gball.move()
    // rebound.display()
    // rebound.move()
    gball.bounce()
    gball.gravity(gravityForce)

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]

        if (ball.active) {
            ball.gravity(gravityForce)
            ball.move()
            ball.bounce()
            // ball.bouncetwo()
            ball.display()
            // rebound.grown(ball)
            ball.touch()
            // ball.bouncetwo(hinder)
        }
    

        for (let j = 0; j < hinders.length; j++) {
            let hinder = hinders[j];
            // hinder.bounce(balls)
    hinder.bounce(ball)
            hinder.display()
            
          }
        }


          
            // for (let j = 0; j < hinders.length; j++) {
            //     let hinder = hinders[j];
            //     hinder.bounce(ball)
        
            //     hinder.display()
                
            //   }




        //     let aboveBalls = true
        //     for (let i = 0; i < balls.length; i++) {
        //         let ball = balls[i];
            
        //         if (ball.y < windowHeight) {
        //             aboveBalls = false;
        //             break;
        //         }
        //   if (aboveBalls) {
        //         // state = 'end';
        //         background(255, 0, 0)
        //         fill(255)
        //         textSize(60)
        //         // textAlign(CENTER, CENTER)
            
               
        //         textStyle(BOLD)
        //         text('END',windowWidth/2, windowHeight/2)
        //     }
        
        //     }
            
          
        
        
    //         let afterWindow = true;
        
    //     for (let i = 0; i < hinders.length; i++) {
    //         let hinder = hinders[i];
        
    //         if (hinder.y -200< windowHeight) {
    //             afterWindow = false;
    //             break;
    //         }
    //     }
        
    //     if (afterWindow) {
    //         // state = 'end';
    //         background(255, 0, 0)
    //         fill(255)
    //         textSize(40)
    //         textAlign(CENTER, TOP)
        
    //         text('End of simulation',500,12)
    //     }
        
        
       
    // }



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
        background(255, 0, 0)
        fill(255)
        textSize(60)
        // textAlign(CENTER, CENTER)
    
       
        textStyle(BOLD)
        text('END',windowWidth/2, windowHeight/2)
    }


    let afterWindow = true;

for (let i = 0; i < hinders.length; i++) {
    let hinder = hinders[i];

    if (hinder.y - 25 < windowHeight) {
        afterWindow = false;
        break;
    }
}

if (afterWindow) {
    // state = 'end';
    background(255, 0, 0)
    fill(0)
    textSize(40)
    textAlign(CENTER, TOP)

    text('End of simulation',500,120)
}



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





