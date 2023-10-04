
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];
let attr;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(150);
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
    attr = new Bubble(canvas.width/2, canvas.height/2, 20)
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
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

function loadNumbers(a, b, n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        let num = Math.floor(Math.random() * b + a);
        numbers.push(num);
    }
    return numbers;
}

function myBubblesSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }


}

function getMean(arr) {
    let sum = 0;
    let num = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

function getMed(arr) {
    arr = myBubblesSort();
    if (arr.length % 2 === 0) {//even
        let val = arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2)];
        return val / 2;
    }
    else {//odd
        return arr[arr.length / 2];
    }
}

function getMode( arr) {
    temp = [];
    let max = 0;
    for (let i = 0; i <= max; i++) {
        temp.push(0);
    }
    console.log("temp =" + temp);
    for (let i = 0; i < temp.length; i++) {
        if (max < arr[i]) {
             max = arr[i]
        }
    }

    let mode = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === max) { mode.push(i) }
    }
    return mode;
}

