
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let movers = [];
let attr;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMovers(3);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runMovers();   // run movers
    requestAnimationFrame(animate); // next cycle
}

function loadMovers(n) {
    attr = new Mover(canvas.width / 2, canvas.height / 2, 20)
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 5 + 5;
        movers[i] = new Mover(x, y, r);
    }
}


function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}