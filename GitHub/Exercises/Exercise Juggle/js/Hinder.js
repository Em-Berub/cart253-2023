class Hinder {

    constructor(w, h) {
        this.width = w
        this.height = h
        this.x = random(0, windowWidth)
        this.y =  random(600, windowHeight)
      

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




    // bouncetwo() {
    //     if (this.x > hinder.x - hinder.width / 2 &&
    //         this.x < hinder.x + hinder.width / 2 &&
    //         this.y + this.size / 2 > hinder.y - hinder.height / 2 &&
    //         this.y - this.size < hinder.y + hinder.height / 2) {

    //         // let dx = this.x - hinder.x
    //         // this.vx = this.vx + map(dx, -hinder.width/2, hinder.width/2, -10,10)

    //         this.vy = -this.vy
    //         this.ay = 0
    //     }
    // }



    display() {
        
        fill(255,0,0)
        stroke(255,0,0)
        rectMode(CENTER)
        rect(this.x, this.y, this.width, this.height)
        
    }
}