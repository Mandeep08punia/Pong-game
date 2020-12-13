// Mandeep Punia

let b_l; //variable for the left bar
let b_r; //variable for the right bar
let ball; //variable for ball 
let score1 = 0; //variable for score of player1
let score2 = 0; //variable for score of player2 

function setup() {
    createCanvas(400, 400); //canvas created
    background(255, 0, 200);
    rectMode(CENTER);
    b_l = new bar(5); //left bar object created with x coordinate of 5
    b_r = new bar(390); //right bar object created with x coordinate of 390
    ball = new Ball(); //ball object created
}

function keyPressed() {
    if (keyCode == UP_ARROW) { //when up_arrow will be pressed right bar will move upward
        b_r.dir(-2);
    }
    if (keyCode == DOWN_ARROW) { //when down_arrow will be pressed right bar will move downward
        b_r.dir(2);
    }
    if (keyCode == 87) { //when "w" will be pressed left bar will move upward
        b_l.dir(-2);
    }
    if (keyCode == 83) { //when "s" will be pressed left bar will move downward
        b_l.dir(2);
    }
}

function draw() {
    background(100); //background color
    fill(255); // all the objects will be having a white color
    line(200, 0, 200, height); //middle line to differentiate between first half and second half
    textSize(15);
    text("player 1:", 30, 30);
    text(score1, 95, 30);
    text("player 2:", 300, 30);
    text(score2, 365, 30);
    b_l.show(); //show left bar
    b_r.show(); //show right bar
    b_l.move(); //move left bar
    b_l.update(); //update left bar
    b_r.move(); //move right bar
    b_r.update(); //update right bar
    ball.show(); //show ball in canvas
    ball.move(); //move ball 
    ball.update(); //update ball
    //logic part of the code goes here
    if (ball.x >= width) { //if ball's x coordinate is greater then the width of the canvas (or let's say field)
        score1++; // then score of the player1 is incremented by 1
        ball.resetBall(); //ball is reset to middle part of the canvas
    }

    if (ball.x <= 0) { //if ball's x coordinate is lesser then 0 
        score2++; // then score of the player2 is incremented by 1
        ball.resetBall(); //ball is reset to middle part of the canvas
    }

    if (ball.x >= 380 && ball.y <= (b_r.y + 45) && ball.y >= (b_r.y - 45)) { // Collision detected with right bar
        ball.vx *= -1;
    }
    if (ball.x <= 20 && ball.y <= (b_l.y + 45) && ball.y >= b_l.y - 45) { // Collision detected with left bar
        ball.vx *= -1;
    }
}