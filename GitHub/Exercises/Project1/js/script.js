// Project 1 game simulation
// id 40252625 & name Emmanuel Berube
// Thursday class CART253


// The goal is simply to bounce the white ball to the red upper rectangle to win
//  If the ball goes inside the lower rectangle that means you've lost.
// It's similar to air hockey but the ball does not decelerate.
// The gameplay has multiple issues. Sometimes the program works correctly and
// sometimes it doesn't. For instance, the white
// ball is suppose to bounce back everytime it touches the borders of the 
// ellipse surrounding the mouse, but it doesn't necesserily happens!
// 
// ******************************************************

"use strict";

function preload() {
}

//defining state and variables: circle around mouse position, white circle and red top rectangle
let state =`start`
let circle = {
    x:100,
    y:100,
    vx:35,
    vy:10,
    size:1,
    fill:(255,0,255)
}
let ball = {
  x:100,
  y:100,
  vx:3,
  vy:10,
  size:10,
  fill:255
}
let goal = {
  x:225,
  y:0,
  sizex:50,
  sizey:10,
  fill:255
}



// The function setup defines what the start screen looks like
function setup() {
createCanvas(500,500)
// background lines
parallelsb(0,0)
parallelsr(0,250)

// design and text
stroke (255)
line (135,60,360, 60)
fill (255,100,100)
textSize(15);
textAlign(CENTER);
textStyle(BOLDITALIC);
    text('CLICK ON CIRCLE TO START ',250,200)
    textSize(45);
    text('Project 1', 250, 50);

    // Blue circle, middle of screen
fill(0, 4, 255)
ellipse(250,250,50)

// Concentric circle in middle of screen
let size;
size=1
stroke(255,0,0)
for (let i =0 ; i<10; i++) {
size=size+5
fill(0,0,0,0,8)
strokeWeight(0.75)
ellipse(width/2, height/2,size)
  }

}





function draw() {

  if (state==="game" ){
     background(0)

// blue circle with a red stroke around the mouse position
    fill (0,0,150)
    stroke(255,2,0)
    strokeWeight(1);
    ellipse(mouseX,mouseY,50)

    // text in middle of screen
    textSize(25);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text('Push the ball toward the red area', 250, 250);
   
    fill (50,50,150)
    textSize(20);
    text('If the ball falls into the purple rectangle you lose', 250, 300); 
   
    // rectangle filled in purple, bottom of screen; rectangle filled in red upper screen
    rect(100,400,300,100)
    fill(255,0,0)
    rect(goal.x,goal.y,goal.sizex,goal.sizey)
    stroke(0)
    line(200,400,300,400)

// white ball position and movement and fill
    fill(ball.fill)
    ellipse(ball.x,ball.y,ball.size)
    ball.y =ball.y +ball.vy
    ball.x =ball.x +ball.vx

if (ball.y>height||ball.y<0){
  ball.vy=-ball.vy
}
if (ball.x>width||ball.x<0){
  ball.vx=-ball.vx
}

// // when the ball touches the mouse the ball changes direction
let e = dist(mouseX, mouseY, ball.x, ball.y);

if (e < 40) {
  // ball.vx=-ball.vx
ball.vy=-ball.vy
  }
  
  // When the ball touches the edges of the lower rectangle it bounces back and increases in size
  if (ball.y===400&&ball.x>100&&ball.x<200||ball.y===400&&ball.x>300&&ball.x<400||ball.x===100&&ball.y<height&&ball.y>400||ball.x===400&&ball.y<height&&ball.y>400){
    ball.vy=-ball.vy
    ball.vx=-ball.vx
    ball.size=ball.size+1
  }
  

  // This means the ball has entered into the lower rectangle, the state changes
  // and the programs ends
    if(state==="game"&&ball.x > 200 && ball.x< 300 && ball.y > 425){
      state="lost"
      }
      
  // This means the ball has entered into the upper rectangle, the state changes
  // and the programs ends
      if (ball.y===0&&ball.x>goal.x&&ball.x<275&&state=="game"){
        state="end"
      }

      // The program stops and tells you you've lost
   if (state ==="lost"){
    background(150,140,140)
    fill(255,200,100)
    for (let i=0 ; i<500 ; i++){
    ellipse(random(0,500),random(0,500),5)
    stroke(255,2,0)
        strokeWeight(2);
        textSize(10);
        youlost(random(0,550),random(0,550))
        textSize(55);
      textAlign(CENTER);
      textStyle(BOLDITALIC);
      text('You Lost!', 250, 250);
      }
      }
  }

// The programs creates red squares randomly and tells you you've won
if(state==="end"){
  background(255)
  fill(255,0,0)
  rect(random(0,500),random(0,500),100,100)
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  text('You Won!', 250, 250);
}


}   





// changes the state to game
function mousePressed(){
  if(state==="start"&&mouseX>225&&mouseX<275&&mouseY<275&&mouseY>225){
  state="game"
  }
}
  

// function that creates the parallels red and blue lines
function parallelsr(x,y){
  for (let i =0;i<300;i++){
    fill(212,30,30,200)
    rect(x,y,width,2)
    y=y+1.5
  }
}

function parallelsb(x,y){
  for (let i =0;i<300;i++){
    fill(0,0,255)
    rect(x,y,width,2)
    y=y+1.5
  }
}


function youlost(x,y)
{
  text('you lost',x,y)
}
// *****************************************
