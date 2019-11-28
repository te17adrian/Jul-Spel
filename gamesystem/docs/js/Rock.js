class Rock
{
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vector(1, 1);
    }

    get type()
    {
        return "rock";
    }

    static create(pos, color, speed) 
    {
        if (speed ) {
            console.log("s" + speed)
            return new Rock(pos, speed);
        } else {
            return new Rock(pos, new Vector(0, 0));
        }
    }

    collide = function(state, keys)
    {
        if (keys.KeyG) {
            let rocks = state.rocks + 1;
            console.log("GRAB ROCK ZOG ZOG " + rocks);
            let filtered = state.actors.filter(a => a != this);
            return new State(state.level, filtered, state.status, state.score, rocks);
        }
        return state;
    }

    update = function(time, state)
    {
        let newPos = this.pos.plus(this.speed.times(time));
        return new Rock(newPos, this.speed);
    }
    
}