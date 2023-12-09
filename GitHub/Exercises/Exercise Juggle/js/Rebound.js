class Gball {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.maxSpeed = 10
        this.size = 30
        this.active = true
        this.growRate = 0.5
        this.maxSize = 100
    }


    gravity(force) {
        this.ay = this.ay + force
    }

    // grown(ball){
        
        
    //         // Calculate the distance between the bee and the flower
    //         let d = dist(this.x, this.y, ball.x, ball.y);
    //         // If they overlap...
    //         if (d < this.size / 2 + ball.size / 2) {
    //           // The bee should grow
    //           // Notice how we can call OTHER METHODS of the Bee by using "this"
    //           // So this.grow() calls the grow() method for THIS bee
    //           this.vy = -this.vy
    //           this.ay = 0
    //           this.grow();
    //           // The flower should react to being pollinated so we call its method
    //           // that handles that!
             
    //         }
    //       }
    
          grow() {
            // Grow by increasing the size by a set amount
            this.size = this.size + this.growRate;
            // Constrain the growth to a maximum
            this.size = constrain(this.size, 0, this.maxSize);
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
            this.y - this.size < paddle.y + paddle.height / 2) {

            let dx = this.x - paddle.x
            this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -10,10)

            this.vy = -this.vy
            this.ay = 0
        }
    }





     
    display() {
        push()
        fill(0, 100, 100)
        stroke(10)
        ellipse(this.x, this.y, this.size)
        pop()
    }

}


