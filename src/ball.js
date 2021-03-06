import { detectCollision } from "./collisionDetection.js";

export default class Ball {
    constructor(game) {
        this.image = document.getElementById('img_ball')

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.size = 16;
        this.reset();
    }

    reset() {
        this.position = {x: 50, y: 250}
        this.speed = {x: 5, y: 4}
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size);
    }

    update(deltaTime) {
        console.log(this.game.paddle.position.x)
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //CHECK HIT DETECTION TO THE LEFT OR RIGHT
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        //CHECK HIT DETECTION TO THE TOP OR BOTTOM
        if(this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }

        if (detectCollision(this, this.game.paddle)) {
            //invert y speed
            this.speed.y = -this.speed.y;
            //Ball's y position = the top side of the paddle - the ball size/height
            //this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}