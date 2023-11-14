class Hinder {

    constructor(w, h) {
        this.width = w
        this.height = h
        this.x = random(0, windowWidth)
        this.y =  random(1000, windowHeight)
      

    }

    bounce(ball) {
        if (ball.vy> 0 &&
            ball.y + ball.size/2> this.y - this.height / 2 &&
            ball.y - ball.size/2< this.y + this.height / 2 &&
           ball.x > this.x - this.width / 2 &&
            ball.x  < this.x + this.width / 2) {

            // let dx = this.x - this.x
            // ball.vx = this.vx + map(dx, -this.width/2, this.width/2, -10,10)

            // this.x =this.x + 50
            this.y = this.y +50
            ball.vy =- 10
            ball.vx = random(-5,5)
                ball.fill = random(100,250)
                ball.fill2 = random(0,100)
                ball.fill3 = random(0,50)
        }

    }







    display() {
        push()
        fill(255,0,0)
        stroke(255,0,0)
        rectMode(CENTER)
        rect(this.x, this.y, this.width, this.height)
        pop()
    }
}