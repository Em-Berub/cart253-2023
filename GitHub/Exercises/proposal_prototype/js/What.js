class Board {

    constructor(w, h) {
        this.width = w
        this.height = h
        this.x = 325
        this.y = height - this.height / 2
        this.arrow =2
    }

   //The paddle is now controlled with the left and right arrows

    move() {
        
            if (keyIsDown (RIGHT_ARROW)) {
              this.x = this.x + this.arrow ;
            } else if (keyIsDown (LEFT_ARROW)) {
                this.x = this.x -this.arrow ;
            }
          
    }


    display() {
        push()
        fill(0)
        noStroke()
        rectMode(CENTER)
        rect(this.x, this.y, this.width, this.height)
        pop()
    }
}

