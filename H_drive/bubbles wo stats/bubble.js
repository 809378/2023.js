//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.x = x;
  this.y = y;
  this.dx = Math.random()*6-3;
  this.dy = Math.random()*6-3;
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {
  if (this.x > canvas.width) {this.x = 0};
  if (this.x < 0) this.x = canvas.width;
  if (this.y > canvas.height) this.y = 0;
  if (this.y < 0) this.y = canvas.height;
}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  let b = bubbles;
  for (let i = 0; i < b.length; i++) {
    if (this != b[i]) {
      let d = Math.sqrt((this.x - b[i].x) * (this.x - b[i].x) + (this.y - b[i].y) * (this.y - b[i].y));
      if (d < this.diam + b[i].diam) {
        this.isOverlapping = true;
        return
      }
    }
  } 
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {
  let ctx= context;
  if(this.isOverlapping){
    ctx.strokestyle="rgba(0,88,200,255)";
    ctx.fillStyle="rgba(0,88,200,255)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diam, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
  }else{
    ctx.strokestyle="rgba(0,88,200,55)";
    ctx.fillStyle="rgba(0,88,200,55)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diam, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
  }
}


//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.x = this.x + this.dx
  this.y = this.y + this.dy
}

