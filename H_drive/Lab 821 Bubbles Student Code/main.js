
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];
let attr;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(200);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadBubbles(n) {
    attr = new Bubble(canvas.width/2, canvas.height/2, 40)
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 200;
        let r = Math.random() * 5 + 5;
        bubbles[i] = new Bubble(x, y, r);
    }
}

// move the circle to a new location
function runBubbles() {
    attr.run();
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}

