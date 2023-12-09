class Thing {

  constructor(x, y) {
   
    this.size = 30
    this.active = true
    this.growRate = 0.5
    this.pos = createVector(x, y);
    this.v = createVector(0, 0);
    this.a = createVector(0, 0);
    this.gravity = createVector(0, 1);
    this.horizontalSpeed = 5
    this.jumpStrength = -15;
    this.canJump = false;
    this.onHinder = false
  }


  addGravity() {
    // Apply gravity 
    this.a.add(this.gravity);
  }


// jump only once, automatically stops after one keypressed
  jump() {
    if (this.canJump) {
      this.v.y = this.jumpStrength
      this.canJump = false
    }
  }
  
  allowJump() {
    this.canJump = true;
  }

  collidesWith(paddle) {
    if (this.pos.y + this.size / 2 === height - paddle.height && this.pos.x < paddle.x + paddle.width && this.pos.x > paddle.x) {
      this.allowJump();
    }
  }

  // allows to get on hinder
  checkSupport(hinder) {
    if (
      this.pos.y + this.size / 2 === hinder.y &&
      this.pos.x > hinder.x &&
      this.pos.x < hinder.x + hinder.width
    ) {
      this.pos.y = hinder.y - hinder.height / 2 - this.size / 2;
      this.v.y = 0;
      this.onHinder = true;
      return;
    }
    this.onHinder = false;
  }



  right() {
    this.v.x = this.horizontalSpeed;
  }
  left() {
    this.v.x = -this.horizontalSpeed;
  }
  update() {

    this.v.add(this.a);
    this.pos.add(this.v);
    this.a.set(0, 0);


// thing remain on canvas
    this.pos.y = constrain(this.pos.y, 0, height - 35);
    this.pos.x = constrain(this.pos.x, this.size / 2, width - this.size / 2);


    for (let i = 0; i < hinders.length; i++) {
      let hinder = hinders[i];
   
   
      this.checkSupport(hinder);
    }

    // If not on the Hinder, reset the onHinder flag
    if (!this.onHinder) {
      this.onHinder = false;
    }
  }
  stopMoving() {
    this.a.x = 0;
    this.v.x = 0
  }



  move() {
    // this.x = constrain(this.x + this.arrow, 0 ,width) ;


    if (keyIsDown(UP_ARROW)) {

      this.jump();


    } if (keyIsDown(RIGHT_ARROW)) {
      this.right()
    } else if (keyIsDown(LEFT_ARROW)) {
      this.left()

    }


  }

  display() {
    push()
    fill(250)
    ellipse(this.pos.x, this.pos.y, 30, 30);
    pop()
  }

}
