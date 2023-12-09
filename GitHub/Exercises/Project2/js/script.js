// PROJECT 2 
// 
// Emmanuel Berube_ 40252625 CART253
// 
// Unfortunately, this is incomplete.
// My intial idea was to create multiple rooms with a level of difficulty increasing
// entering every new room. I couldn't get through the first one.
// Ideally, the "thing" or white sphere would be able to jump from one hinder to the other.
// (red rectangles) to reach the top while being bombarded by dots. The sphere can embark.
// on one of these red rectangles, but only at the beginning. Also, if it tries
// to jump using the up arrow, it falls down completely. The idea would be to reach
// the sphere at the top using the arrow keys, jumping from one hinder to the other, and
// then entering a new challenge.

// *************************************************************

"use strict";

let state = 'start'


let x;
let y;
let w
let a;
let p;
let thing
let paddle
let gravityForce = 0.0005
let balls = []
let hinders = []
let numBalls = 2
let numHin = 5

w = 1000
a = 240
p = 0
x = 0
y = 0

function preload() {
  // no songs :(
}


function setup() {
  createCanvas(240, 900)

  // this function generates the background lines
  intro()

  // introduction text
  texts()


  thing = new Thing(120, 880)
  paddle = new Paddle(120, 20)


  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width)
    let y = random(-200, 0)
    let ball = new Ball(x, y)
    balls.push(ball)
  }

  for (let i = 0; i < numHin; i++) {
    let hinder = new Hinder(75, 10)
    hinders.push(hinder)
  }

}


// blue top sphere with a gradient
let sphere = {
  x: 120,
  y: 20,
  size: 25
}






function draw() {

  // creates the bording squares at the beginning of the program
  push()
  stroke(220, 200, 0)
  strokeWeight(2)
  fill(0)
  rect(a, height - 10, 10, 10)
  rect(p, 0, 10, 10)
  rect(230, w, 10, 10)
  rect(0, p, 10, 10);
  p += 10;
  a -= 10
  w -= 10
  pop()

  // this function creates the small black patches at the beggining
  drawEllipse()

  // this function is for the strange shape at the beginning
  shape()

  // this function creates the transition between state start and state game
  keyPressed()


  if (state === "game") {
    background(0)
    stroke(220, 220, 220)

    // function shows the spehere with gradient
    topsphere()

    paddle.display()
    thing.display()
    thing.move()
    thing.addGravity();
    thing.update();
    thing.collidesWith(paddle)


    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i]

      if (ball.active) {
        ball.gravity(gravityForce)
        ball.move()
        ball.bounce()
        ball.display()
        ball.stop()
        ball.under()
      }

      for (let j = 0; j < hinders.length; j++) {
        let hinder = hinders[j];
        thing.checkSupport(hinder);
        hinder.bounce(ball)
        hinder.display()
        hinder.move()

      }
    }
  }


  if (state === "end") {
    background(112, 49, 64)
    stroke(250)
    textSize(24)
    text('End of simulation', 120, 400)
  }

}



function texts() {
  textSize(25);
  fill(255, 0, 0)
  strokeWeight(5)
  stroke(0)
  textAlign(CENTER, CENTER);
  textStyle(BOLDITALIC);
  text('YOU MAY ENTER ', width / 2, 350);
  text('THE DUNGEON', width / 2, 380);
  textSize(15);
  fill(255, 250, 0)
  text('Press Enter', width / 2, 420);

}


function drawEllipse() {//randomly draws the elliptic shapes onto the background
  fill(0)
  ellipse(random(width), random(0, 320), random(0, 10), random(0, 20));
  ellipse(random(width), random(450, height), random(0, 10), random(0, 20));
}

function keyPressed() {
  if (keyCode === 13 && state === "start") {
    state = "game";
  }
}

function topsphere() {
  for (let size = sphere.size; size > 0; size--) {
    noStroke();
    let currentFill = map(size, 0, sphere.size, 0, 250);
    fill(currentFill, 200, 200);
    ellipse(sphere.x, sphere.y, size);
  }
}




function intro() {
  // Background motifs ; diagonal lines

  for (let i = 0; i <= height; i += 10) {
    let k = 0
    for (let j = 0; j <= 1800; j += 10) {
      line(i, j, k, i);
      k += 10
    }

  }

  // Background motifs ; vertical + horizontal lines

  for (let Y = 0; Y <= windowHeight; Y += 5) {

    for (let X = 0; X <= windowWidth; X += 7.5) {
      rect(X, Y, 5, 5);
    }
  }

}

// the shape at the beginning, just copy pasted from experiments, out of curiosity this weird pattern
// got generated.
function shape() {

  strokeWeight(2)
  // the stroboscopic shape
  for (let i = 0; i < 50; i++) {
    if (x > 1) {
      x -= 220;
    } else if (x < 1) {
      x += 2.2
    }
    stroke(222, 180, 0)
    ellipse(120, 150, x, i);
  }

  for (let i = 0; i < 25; i++) {//generates the elongated middle shape
    if (y > 1) {
      y -= 1;
    } else if (y < 1) {
      y += 4500;
    }
    stroke(222, 180, 0)
    ellipse(120, 150, y, i);
    stroke(0)
  }

}

function keyReleased() {
  // Stops horizontal movement when arrow key is released
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    thing.stopMoving();
  }
}

