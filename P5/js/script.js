



// // function setup() {
// //     createCanvas(100, 100, WEBGL);
// //     describe('a square moving closer and then away from the camera.');
// //   }
// //   function draw() {
// //     background(204);
// //     //move the camera away from the plane by a sin wave
// //     camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
// //     plane(10, 10);
// //   }


// //   torus with specular material
// //   specularMaterial example 0




// //   function setup() {
// //     createCanvas(500, 500, WEBGL);
// //     noStroke();
// //     describe('torus with specular material');
// //   }
  
// //   function draw() {
// //     background(0);
  
// //     ambientLight(60);
  
// //     // add point light to showcase specular material
// //     let locX = mouseX - width / 2;
// //     let locY = mouseY - height / 2;
// //     pointLight(255, 255, 255, locX, locY, 50);
  
// //     specularMaterial(250,250,250,250);
// //     shininess(50);
// //     torus(30, 10, 20, 250);
// //   }



// let dominos = [];
// let numDominos = 9;
// function setup() {
//     // createCanvas(500, 500, WEBGL);
//     // perspective(PI / 6.0, width / height, 0.1, 1500);
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     background(0);
  
      
//   for (let i = 0; i < numDominos; i++) {
//     dominos.push(new Domino());
//     dominos[i].styling();
//   }
    
//   }
//   function draw() {
//     // background(200);
//     // orbitControl();
//     // // normalMaterial();
  
//     // translate(0, 0, 150);
//     // rotateX(0);
//     // rotateY(0);
  
//     // push();
//     // translate(-100, 0, 50);
//     // box(30);
//     // pop();
//     // push();
//     // translate(100, sin(frameCount / 30 + PI/2) * 95, sin(frameCount / 30 + PI) * 95);
//     // box(30);
//     // pop();



//     for (let i = 0; i < dominos.length; i++) {
//         // Turning off music from previous effect
//         // ringingMusic.stop();
//         dominos[i].effect();
//         dominos[i].changeDimensions();
//         // dominos[i].keyPressed();
//       }
//   }



// //   function setup() {
// //     createCanvas(500,500,WEBGL);
// //     camera(0,0,300);
// //   }
// //   function draw() {
// //     background(1030);
// //     ambientMaterial(237,34,93); //Pink Material
// //     ambientLight(500,100,100);
// //     //As you move the mouse up to down it changes from no ambient light to full ambient light.
// //     rotateY(millis()/500);
// //     torus(100,80);
// //   }






// // function setup() {
// //     createCanvas(700, 700, WEBGL);
// //     normalMaterial();
// //     describe(
// //       'Camera orbits around a box when mouse is hold-clicked & then moved.'
// //     );
// //   }
// //   function draw() {
// //     background(200);
  
// //     // If you execute the line commented out instead of next line, the direction of rotation
// //     // will be the direction the mouse or touch pointer moves, not around the X or Y axis.
// //     // orbitControl();
// //     orbitControl(1, 1, 1, {freeRotation: true});
  
// //     rotateY(0.5*2);
// //     box(30, 50);
// //   }









// // function setup() {
// //     createCanvas(500, 500, WEBGL);
// //     setAttributes('antialias', true);
// //     fill(0);
// //     strokeWeight(0);
// //   }
  
// //   function draw() {
// //     orbitControl()
// //     background(200);
    
// //     let locX = mouseX - height / 2;
// //     let locY = mouseY - width / 2;
  
// //     ambientLight(60, 60, 60);
// //     pointLight(255, 255, 255, locX, locY, 100);
    
    
// //     //ambientMaterial(250);
// //     specularMaterial(123,111,111);
// //     rotateX(frameCount * 0.01);
// //     rotateY(frameCount * 0.01);
// //     //rotateZ(frameCount * 0.01);
// //     lights();
// //     apple();
// //   }
  
  
// //   function apple() {
  
// //     size = 20;
// //     increment = 0.1;
// //     for (let u = 0; u < TWO_PI; u += increment) {
// //       beginShape(TRIANGLE_STRIP);
// //       for (let v = -PI; v < PI; v += increment) {
// //         x = cos(u) * (4 + 3.8 * cos(v))
// //         y = sin(u) * (4 + 3.8 * cos(v))
// //         z = (cos(v) + sin(v) - 1) * (1 + sin(v)) * log(1 - PI * v / 10) + 7.5 * sin(v)
// //         vertex(size * x, size * y, size * z);
  
// //         x = cos(u + 0.1) * (4 + 3.8 * cos(v))
// //         y = sin(u + 0.1) * (4 + 3.8 * cos(v))
// //         vertex(size * x, size * y, size * z);
// //       }
// //       endShape(CLOSE);
// //     }
// //   }





// ***************************************************************************


//I wanted to try a geometric design for the background

function setup() {
  createCanvas(100, 100, WEBGL);
  // normalMaterial();

}
function draw() {
  background(0);
  camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
      plane(10, 10);

  // If you execute the line commented out instead of next line, the direction of rotation
  // will be the direction the mouse or touch pointer moves, not around the X or Y axis.
  // orbitControl();
  // orbitControl(1, 1, 1, {freeRotation: true});

  rotateY(100);
  box(30, 50);
}
//   function setup() {
//   createCanvas(500,500);

//  for (let circleY = 30; circleY <= 500; circleY += 40) {//Does 144 symmetrical circles
//      for (let circleX = 30; circleX <= 500; circleX += 40) {
//              circle(circleX, circleY, 40);
//      }
//    }

//  for (let Y = 0; Y <= 500; Y += 5) {//Another nested loop,creates vertical and horizontal lines
//      for (let X = 0; X <= 500; X += 7.5) {//The first loops triggers the inner loop
//          rect(X, Y, 5,5);//which continues until completiton. The whole process repeats itself.
//      }
//    }
// }

// //defining variables
// let a;
// let p;
// let y;
// let x;
// let z;
// let lineX;
// let lineY;

// a=500
// p=0
// y=0
// x=0
// z=0
// lineX=0
// lineY=490

// let i 
// i=0
// let k
// k=0
// function draw(){
//  // line(lineX, 10, lineX, 490);
//  // if (lineX<500){
//  // lineX+=10
//  // }
// //generates the bording squares and vertical lines
// // for(i=0 ; i<25 ; i++){
// // line(lineX, 0, lineX, 500);
// // lineX+=10
// // }
// // for(k=0 ; k<25 ; k++){
// //   line(lineY, 0, lineY, 500);
// //   lineY-=10
// //   }


// line(lineX, 10, lineX, 490);
// lineX+=10
// line(lineY, 10, lineY, 490);
// lineY-=10

// stroke(220,220,0)
// fill(0)
// rect(a,490,10,10)
// rect(p,0,10,10)
// rect(490,a,10,10)
// rect(0, p, 10, 10);
// p+= 10;
// a-=10

// //The value of i here changes the height of the central
// //ellipse and since it determines the number of iteration
// //it also changes the speed at which the figure appears
// //I randomly played with the values of x+ and x- to get an interesting result
// //here
// for(let i = 0 ; i < 50 ; i++) {
//    if (x > 1){
//  x -= 220;
// } else if (x < 1) {
//             x += 2.2
//     }

// stroke(222,180,0)
// ellipse(250,250, x, i);
// }

// for (let i = 0; i < 25; i++) {//generates the elongated middle shape
//  if (y > 1){
//      y -= 1;
//  } else if (y < 1){
//      y += 2000;
// }
//  stroke(222,180,0)
//  ellipse(250, 250, y, i);
//  stroke(0)
// }

// drawEllipse();
// }


// function drawEllipse(){//randomly draws the elliptic shapes onto the background

// ellipse(random(width), random(height), random(0,10), random(0,20));
// }