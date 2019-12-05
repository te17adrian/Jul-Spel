class MovingPlatform2
{
    constructor(pos, speed, delta, prevX, prevY)
    {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(5, 1);
        this.delta = delta;
        this.xSpeed = 8;
        this.ySpeed = 0
        this.prevX = prevX;
        this.prevY = prevY;
    }

    static create(pos) {
        return new MovingPlatform2(pos.plus(new Vector(0, -1)), new Vector(1, 0), 1);
    }
    collide = function(state)
    {
        
    }
    get type()
    { 
        return "MovingPlatform2";
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

        let currentYSpeed = this.speed.x + time ;
        let movedY = pos.plus(new Vector(0, currentYSpeed * time));

        if (!state.level.touches(movedY, this.size, ["grass","ground"])) {
            pos = movedY;
        } else {
            currentYSpeed = 0;
        }
        if (!state.level.touches(movedX, this.size, ["clip"])) {
            pos = movedY;
        } else {
            currentXSpeed = 14;
        }
        return new MovingPlatform2(pos, new Vector(currentXSpeed, currentYSpeed), this.delta, this.prevX, this.prevY);
    }
}