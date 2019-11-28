class Item
{
    constructor(pos, basePos, wobble) {
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
        this.wobbleSpeed = 8;
        this.wobbleDist = 0.08;
        this.size = new Vector(0.8, 0.8);
    }

    get type()
    {
        return "item";
    }

    static create(pos) 
    {
        let basePos = pos.plus(new Vector(0.2, 0.1));
        return new Item(basePos, basePos, Math.random() * Math.PI * 2);
    }

    collide = function(state)
    {
        let filtered = state.actors.filter(a => a != this);
        let status = state.status;
        let score = state.score;
        if (!filtered.some(a => a.type == "item")) status = "won";
        return new State(state.level, filtered, status, ++score, state.rocks);
    }

    update = function(time, state)
    {
        let wobble = this.wobble + time * this.wobbleSpeed;
        let wobblePos = Math.sin(wobble) * this.wobbleDist;
        return new Item(this.basePos.plus(new Vector(0, wobblePos)), this.basePos, wobble);
    }
    
}