let width = 1024;
let height = 768;
let scale = 32;

let images = [];

let offCanvas = document.createElement('canvas');
let offCtx = offCanvas.getContext('2d');
let body = document.getElementsByTagName("body")[0];

let arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp", "Space", "KeyW", "KeyA", "KeyD", "KeyG"]);
let gravity = 24;

function loadImages(sources, callback) {
    let loadedImages = 0;
    let numImages = 0;
    for(let src in sources) {
        numImages++;
    }
    for(let src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src].src;
        sources[src].image = images[src];
    }
}

loadImages(sources, function() {
    // double preload profit?
    for(let src in sources) {
        if (sources[src].offsetX || sources[src].offsetY) {
            offCanvas.width = sources[src].srcWidth;
            offCanvas.height = sources[src].srcHeight;
            offCtx.drawImage(sources[src].image, sources[src].offsetX, sources[src].offsetY, sources[src].srcWidth, sources[src].srcHeight, 0, 0, sources[src].srcWidth, sources[src].srcHeight);
            let a = new Image();
            a.src = offCanvas.toDataURL('png');
            sources[src].image = a;
            sources[src].color = getRandomColor();
        }
    }
    runGame(sources.map1.image);
});

async function runGame(plans) {
    
    // let offMapCtx = new OffscreenCanvas(sources.map.image.width, sources.map.image.height).getContext('2d');
    // let status = await runLevel(new Level(plans, offMapCtx, levelKey));
    offCanvas.width = plans.width;
    offCanvas.height = plans.height;
    offCtx.clearRect(0, 0, plans.width, plans.height);
    let status = await runLevel(new Level(plans, offCtx, levelKey));
    if (status == "won") {
        console.log("You won");
    } else if (status == "lost") {
        console.log("Slain by lava");
    }
    window.addEventListener("click", function temp() {
        runGame(sources.map1.image)
        window.removeEventListener("click", temp, false);
    }, false);
}

function runLevel(level) {
    console.log(level)
    let stage = document.getElementById('stage');
    stage.setAttribute("style", "width:" + width + "px;");
    let display = new Canvas(width, height, stage, level);
    let state = State.start(level);
    console.log(state)
    return new Promise(resolve => {
        runAnimation(time => {
            state = state.update(time, arrowKeys);
            display.syncState(state);
            if (state.status == "playing") {
                return true;
            } else {
                display.clear();
                resolve(state.status);
                return false;
            }
        });
    });
}

function runAnimation(frameFunc) {
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            if (frameFunc(timeStep) === false) return;
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function trackKeys(keys) {
    let down = Object.create(null);
    function track(event) {
        
        if (keys.includes(event.code)) {
            down[event.code] = event.type == "keydown";
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    return down;
}

// färgslumpare
function getRandomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}