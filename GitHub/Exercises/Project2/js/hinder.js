class Hinder {
    constructor(w, h) {
        this.width = w
        this.height = h
        this.x = random(0, width)
        this.y =  random(700, 1000)
    }


move(){
    this.y = this.y -0.5
    this.x = constrain (this.x,0 , width-this.width) 
    this.y = constrain(this.y, 0 ,height) 
}

    display() {
        fill(255,0,0)
        rect(this.x, this.y, this.width, this.height)
    }

    bounce(ball) {
        if (ball.vy> 0 &&
            ball.y + ball.size/2> this.y - this.height / 2 &&
            ball.y - ball.size/2< this.y + this.height / 2 &&
           ball.x > this.x - this.width / 2 &&
            ball.x  < this.x + this.width / 2) {

            this.y = this.y +50
            ball.vy =- 10
            ball.vx = random(-5,5)
                ball.fill = random(100,250)
                ball.fill2 = random(100,200)
                ball.fill3 = random(0,50)
        }

    }


}
