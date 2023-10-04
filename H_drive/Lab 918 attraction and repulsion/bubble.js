//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
  this.acc = new JSVector(0, 0);
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
  if (this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
  if (this.loc.y > canvas.height || this.loc.y < 0) this.vel.y = -this.vel.y;

}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  let b = bubbles;
  for (let i = 0; i < b.length; i++) {
    if (this != b[i]) {
      let d = this.loc.dist(b[i].loc);
      if (d < this.diam + b[i].diam) {
        this.isOverlapping = true;
        return
      }
    }
  }
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {
  let ctx = context;
  if (this === attr) {
    ctx.strokestyle = "rgba(0,88,200,1)";
    ctx.fillStyle = "rgba(55, 0, 55)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  } else {
    ctx.strokestyle = "rgba(255,0,0,1)";
    ctx.fillStyle = "rgba(138, 69, 138)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  }

}



//  update bubble every animation  frame
Bubble.prototype.update = function () {
  this.acc = new JSVector(0, 0)

  if (this !== attr) {
    let d = this.loc.dist(attr.loc)
    if (d < 900) {
      this.acc = JSVector.subGetNew(attr.loc, this.loc);
      this.acc.normalize();
      this.acc.multiply(0.01);
    }
    if (d < 100) {
      this.acc = JSVector.subGetNew(this.loc, attr.loc);
      this.acc.normalize();
      this.acc.multiply(0.1);
    }
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.loc.add(this.vel);
  }

}

