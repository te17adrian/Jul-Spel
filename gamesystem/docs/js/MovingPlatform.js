class MovingPlatform
{
    constructor(pos, speed, delta, prevX, prevY)
    {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(5, 1);
        this.delta = delta;
        this.xSpeed = 0;
        this.ySpeed = 2
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new MovingPlatform(pos.plus(new Vector(0, -1)), new Vector(1, 0), 1);
    }
    collide = function(state)
    {
        return new State(state.level, state.actors, "lost");
    }

    get type()
    { 
        return "MovingPlatform";
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

        if (!state.level.touches(movedY, this.size, ["clip2","grass","ground"])) {
            pos = movedY;
        } else {
            currentYSpeed = -4;
        }
        if (!state.level.touches(movedY, this.size, ["clip",])) {
            pos = movedY;
        } else {
            currentYSpeed = 16;
        }
        return new MovingPlatform(pos, new Vector(currentXSpeed, currentYSpeed), this.delta, this.prevX, this.prevY);
    }
}