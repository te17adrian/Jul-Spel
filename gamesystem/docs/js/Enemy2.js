class Enemy2
{
    constructor(pos, speed, delta, prevX, prevY)
    {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(2, 2);
        this.delta = delta;
        this.xSpeed = 15;
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new Enemy2(pos.plus(new Vector(0, -1)), new Vector(2, 1), 1);
    }

    get type()
    { 
        return "enemy2";
    }

    collide = function(state)
    {
        return new State(state.level, state.actors, "lost");
    }


    update = function(time, state)
    {
        let currentXSpeed = this.xSpeed * this.delta;
        let pos = this.pos;
        let movedX = pos.plus(new Vector(currentXSpeed * time, 0));

        if (!state.level.touches(movedX, this.size, ["clip", "grass", "ground", "platformC", "platformR", "platformL"])) {
            pos = movedX;
        } else {
            this.delta *= -1;
        }

        let currentYSpeed = this.speed.y + time * gravity;
        let movedY = pos.plus(new Vector(0, currentYSpeed * time));

        if (!state.level.touches(movedY, this.size, ["clip", "grass", "ground", "platformC", "platformR", "platformL"])) {
            pos = movedY;
        } else {
            currentYSpeed = 0;
        }

        return new Enemy2(pos, new Vector(currentXSpeed, currentYSpeed), this.delta, this.prevX, this.prevY);
    }
}