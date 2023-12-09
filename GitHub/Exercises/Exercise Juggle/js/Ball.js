class Ball {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.maxSpeed = 10
        this.size = 40
        this.active = true
        this.maxSize = 75
        this.fill= 255
        this.fill2= 150
        this.fill3= 50
        

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

        if (this.x > width  ) {
            this.vx = -this.vx
        }
        if (this.x < 0  ) {
            this.vx = -this.vx
        }
    }

        
    bounce() {
        if (this.x > paddle.x - paddle.width / 2 &&
            this.x < paddle.x + paddle.width / 2 &&
            this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
            this.y - this.size/2 < paddle.y + paddle.height / 2) {

            let dx = this.x - paddle.x
            this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -10,10)

            this.vy = -this.vy
            this.ay = 0
        }

    }


   

    touch() {
        // // Choose a random amount to grow
        // let growth = 0.5
        // // Increase the petal thickness (divide by 10 to make it less rapid)
        // this.size = this.size + growth 
        // // Increase the centre of the flower
        // this.vy = -this.vy
        // // Constrain the elements
        // this.size = constrain(this.size, 0, this.maxSize);




    

        let d = dist(this.x, this.y, gball.x, gball.y);
        // If they overlap...
        if (d < this.size / 2 + gball.size / 2) {
        // Choose a random amount to grow
        let growth = 0.5
        // Increase the petal thickness (divide by 10 to make it less rapid)
        this.size = this.size + growth 
        // Increase the centre of the flower
        this.vy = -this.vy
        // Constrain the elements
        this.size = constrain(this.size, 0, this.maxSize);

          gball.grow()
        }
      }




    display() {
        push()
        fill(this.fill,this.fill2,this.fill3)
        stroke(10)
        ellipse(this.x, this.y, this.size)
        pop()
    }

}