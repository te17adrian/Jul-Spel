class MovingPlatform2
{
    constructor(pos, speed, delta, prevX, prevY)
    {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(3, 1);
        this.delta = delta;
        this.xSpeed = 16;
        this.ySpeed = 8
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new MovingPlatform2(pos.plus(new Vector(0, -1)), new Vector(1, 0), 1);
    }
    collide = function(state)
    {
        return new State(state.level, state.actors, "lost");
    }
    get type()
    { 
        return "MovingPlatform2";
    }
    update = function(time, state)
    {
        let currentYSpeed = this.ySpeed * this.delta;
        let pos = this.pos;
        let movedY = pos.plus(new Vector(currentYSpeed * time, 0));

        if (!state.level.touches(movedY, this.size, ["clip", "grass", "ground", "platformC", "platformR", "platformL"])) {
            pos = movedY;
        } else {
            this.delta *= -1;
        }

        let currentXSpeed = this.speed.x;
        let movedX = pos.plus(new Vector(0, currentXSpeed * time));

        if (!state.level.touches(movedX, this.size, ["clip2"])) {
            pos = movedX;
        } else {
            currentYSpeed = -14;
        }
        if (!state.level.touches(movedX, this.size, ["clip","clip2"])) {
            pos = movedY;
        } else {
            currentYSpeed = 14;
        }
        return new MovingPlatform2(pos, new Vector(currentXSpeed, currentYSpeed), this.delta, this.prevX, this.prevY);
    }
}