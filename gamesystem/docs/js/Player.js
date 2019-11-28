class Player
{
    constructor(pos, speed, prevX, prevY)
    {
        this.pos = pos;
        this.size = new Vector(2, 2);
        this.speed = speed;
        this.xOverlap = 4;
        this.xSpeed = 8;
        this.ySpeed = 16;
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new Player(pos.plus(new Vector(0, -1)), new Vector(0, 0));
    }

    get type()
    { 
        return "player";
    }

    update = function(time, state, keys)
    {
        let currentXSpeed = 0;
        if (keys.ArrowLeft || keys.KeyA) currentXSpeed -= this.xSpeed;
        if (keys.ArrowRight || keys.KeyD) currentXSpeed += this.xSpeed;
        let pos = this.pos;
        let movedX = pos.plus(new Vector(currentXSpeed * time, 0));

        if (!state.level.touches(movedX, this.size, groundTypes)) {
            pos = movedX;
        }

        let currentYSpeed = this.speed.y + time * gravity;
        let movedY = pos.plus(new Vector(0, currentYSpeed * time));

        if (!state.level.touches(movedY, this.size, groundTypes)) {
            pos = movedY;
        } else if ( (keys.ArrowUp || keys.KeyW) && currentYSpeed > 0) {
            if (currentYSpeed > 25) {
                console.log("ouch cant dodge by uparrow"); // call on function for taking damage                
            }
            currentYSpeed = -this.ySpeed;
        } else {
            if (currentYSpeed > 25) {
                console.log("ouch"); // call on function for taking damage                
            }
            currentYSpeed = 0;
        }

        return new Player(pos, new Vector(currentXSpeed, currentYSpeed), this.prevX, this.prevY);
    }
}