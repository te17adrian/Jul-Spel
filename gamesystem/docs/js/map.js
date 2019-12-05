const levelKey = {
    "0,0,0": "empty",
    "255,15,255": "clip2",
    "255,0,255": "clip",
    "0,0,255": "platformC",
    "100,0,255": "platformL",
    "0,100,255": "platformR",
    "255,255,0": "grass",
    "0,155,100": "mountain",
    "255,255,255": "cloud",
    "155,55,0": "ground",
    "100,100,100": Rock,
    "255,255,100": Lava,
    "255,255,155": Lava, 
    "0,255,0": Player,
    "255,0,100": Item,
    "255,100,255": Enemy,
    "255,50,255": Enemy2,
    "255,200,255": Enemy3,
    "255,50,100": Enemy4,
    "255,75,255": MovingPlatform,
    "255,25,255": MovingPlatform2,
};

const groundTypes = ["grass", "ground", "platformC", "platformR", "platformL","MovingPlatform","MovingPlatform2"];

let sources = {
    bg: {
        src: 'img/bak.png',
        srcWidth: 1024,
        srcHeight: 768,
    },

    player: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 1248,
        srcHeight: 186,
        width: 96,
        height: 96,
        offsetX: 0,
        offsetY: 512
    },
    enemy: {
        src: 'img/sprites/player.png',
        srcWidth: 128,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 0
    },
    enemy2: {
        src: 'img/sprites/player2.png',
        srcWidth: 128,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 0
    },
    enemy3: {
        src: 'img/sprites/player3.png',
        srcWidth: 128,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 0
    },
    enemy4: {
        src: 'img/sprites/player4.png',
        srcWidth: 128,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 0
    },
    item: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 96,
        height: 96,
        offsetX: 192,
        offsetY: 480
    },
    grass: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 64,
        offsetY: 0
    },
    lava: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 96,
        offsetY: 0
    },
    ground: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 0
    },
    platformC: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 480
    },
    MovingPlatform: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 480
    },
    MovingPlatform2: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 480
    },
    platformL: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 480
    },
    platformR: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 128,
        offsetY: 480
    },
    rock: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 320,
        offsetY: 480
    },
    mountains: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 352,
        srcHeight: 288,
        width: 352,
        height: 288,
        offsetX: 0,
        offsetY: 32,
        repeat: "repeat-x"
    },
    mountain: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 160,
        srcHeight: 320,
        width: 160,
        height: 320,
        offsetX: 384,
        offsetY: 0
    },
    cloud: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 224,
        srcHeight: 96,
        width: 224,
        height: 96,
        offsetX: 0,
        offsetY: 320
    },
    cloud2: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 128,
        srcHeight: 64,
        width: 128,
        height: 64,
        offsetX: 224,
        offsetY: 320
    },
    cloud3: {
        src: 'img/sprites/cavedude_side2.png',
        srcWidth: 384,
        srcHeight: 128,
        width: 384,
        height: 128,
        offsetX: 352,
        offsetY: 320
    },
    map1: {src: 'img/maps/debugmap.png'}
};
