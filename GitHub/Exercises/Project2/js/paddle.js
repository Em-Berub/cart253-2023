class Paddle {

    constructor(w, h) {
        this.width = w
        this.height = h
        this.x = 30
        this.y = height - this.height 
        this.arrow =20
    }


    display() {
        push()
        fill(255,200,220)
        noStroke()
        rect(this.x, this.y, this.width, this.height)
        pop()
    }
}
