class Level
{
    constructor(image, ctx, key)
    {
        this.image = image;
        this.key = key;
        this.ctx = ctx;
        this.width = this.image.width;
        this.height = this.image.height;
        this.layout = this.makeArray(this.height, this.width);
        this.startActors = [];
        
        this.ctx.drawImage(this.image, 0, 0);

        for(let y = 0; y < this.height; y++) {
            for(let x = 0; x < this.width; x++) {
                let pixel = this.ctx.getImageData(x, y, 1, 1).data;
                let color = pixel[0] + "," + pixel[1] + "," + pixel[2];
                let type = this.key[color];
                if (typeof type == "string") {
                    this.layout[y][x] = type;
                } else {
                    this.startActors.push(type.create(new Vector(x, y), color));
                }
            }
        }
    }

    makeArray(a, b)
    {
        let arr = new Array(a)
        for(var i = 0;i<a;i++)
            arr[i] = new Array(b)
        return arr;
    }

    touches = function(pos, size, types)
    {
        var xStart = Math.floor(pos.x);
        var xEnd = Math.ceil(pos.x + size.x);
        var yStart = Math.floor(pos.y);
        var yEnd = Math.ceil(pos.y + size.y);

        for(let i = 0; i < types.length; i++) {
            for (var y = yStart; y < yEnd; y++) {
                for (var x = xStart; x < xEnd; x++) {
                    let isOutside = x < 0 || x >= this.width ||
                                    y < 0 || y >= this.height;
                    let here = isOutside ? "grass" : this.layout[y][x];
                    if (here == types[i]) return true;
                }
            }    
        }
        return false;
    }
}
