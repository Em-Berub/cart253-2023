class Ball {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0
    this.maxSpeed = 7
    this.size = 10
    this.active = true
    this.maxSize = 75
    this.fill = 255
    this.fill2 = 255
    this.fill3 = 0
  }

  gravity(force) {
    this.ay = this.ay + force
  }


  //Now the balls come back with the opposite velocity when they hit a side of the canvas
  move() {
    this.vx = this.vx + this.ax
    this.vy = this.vy + this.ay

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed)
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed)
    this.x = this.x + this.vx
    this.y = this.y + this.vy

    if (this.y - this.size / 2 > height) {
      this.active = false
    }

    if (this.x > width) {
      this.vx = -this.vx
    }
    if (this.x < 0) {
      this.vx = -this.vx
    }
  }


  bounce() {
    if (this.x > paddle.x &&
      this.x < paddle.x + paddle.width &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2) {



      this.vy = -this.vy
      this.vx = random(-1, 1)
      this.ay = 0
    }

  }

  stop() {
    let d = dist(this.x, this.y, thing.pos.x, thing.pos.y);
    if (d < this.size / 2 + thing.size / 2) {
      state = "end"

    }
  }



  under() {
    let aboveBall = false;
    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];

      if (ball.active) {
        if (ball.y < 900) {
          aboveBall = true;
        }
      }
    }

    if (!aboveBall) {
      state = "end";
    }

  }



  display() {
    push()
    fill(this.fill, this.fill2, this.fill3)
    stroke(0)
    ellipse(this.x, this.y, this.size)
    pop()
  }

}
