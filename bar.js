//Mandeep Punia
class bar {
    constructor(x) {
        this.x = x; //x-coordinate of bar
        this.y = 220; //y-coordinate of bar
        this.w = 20; //width of bar
        this.h = 90; //total height of bar
        this.vy = 2; //velocity of bar along the y-axis
    }
    move() {
        this.y += this.vy; //move bar along the y-axis with velocity vy
    }
    show() {
        rect(this.x, this.y, this.w, this.h); //rectangular bar displayed on the canvas
    }
    update() { //logic when bar touches the bottom and upper part of the canvas
        if (this.y >= height - 45 || this.y <= 45) {
            this.vy = -1 * (this.vy); //velocity of the bar is reversed
        }
    }
    dir(y) {
        this.vy = y;
    }
}