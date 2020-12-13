//Mandeep Punia
class Ball {
    constructor() {
        this.x = 200; //x coordinate of ball
        this.y = 200; //y coordinate of ball
        this.w = 20; //width of ball
        this.h = 20; //height of ball
        this.vx = 2; //velocity along x-axis
        this.vy = 1; //velocity along y-axis
    }
    move() {
        this.x += this.vx; //x-coordinate of ball is incremented by vx
        this.y += this.vy; //y-coordinate of ball is incremented by vy
    }
    show() {
        circle(this.x, this.y, this.w); //circular ball displayed at respective parameters
    }
    resetBall() { //ball is reset to center of canvas
        this.x = 200;
        this.y = 200;
    }
    update() { //logic when ball collides with bottom part of the canvas
        if (this.y >= height - 6 || this.y <= 8) {
            this.vy *= -1; //velocity along y-axis is reversed
        }
    }
}