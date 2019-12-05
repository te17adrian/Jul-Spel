class Enemy4
{
    constructor(pos, speed, delta, prevX, prevY)
    {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(2, 2);
        this.delta = delta;
        this.xSpeed = 8;
        this.ySpeed = 16;
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new Enemy4(pos.plus(new Vector(0, -1)), new Vector(1, 0), 1);
    }
    get type()
    { 
        return "enemy4";
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

        let currentYSpeed = this.speed.y + time ;
        let movedY = pos.plus(new Vector(0, currentYSpeed * time));

        if (!state.level.touches(movedY, this.size, ["clip", "grass", "ground", "platformC", "platformR", "platformL"])) {
            pos = movedY;
        } else {
            currentYSpeed = -40 - 8
            currentXSpeed =  -40 - 8;
        }
        if (!state.level.touches(movedY, this.size, ["clip"])) {
            pos = movedY;
        } else {
            currentYSpeed = 70 + 8;
            currentXSpeed = 20 + 8;
        }

        return new Enemy4(pos, new Vector(currentXSpeed, currentYSpeed), this.delta, this.prevX, this.prevY);
    }
}