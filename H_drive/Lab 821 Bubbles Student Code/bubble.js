//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
  this.acc = new JSVector(0,0.1);
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
  if (this.loc.x > canvas.width || this.loc.x < 0 ) this.vel.x = -this.vel.x;
  if (this.loc.y > canvas.height || this.loc.y < 0 ) this.vel.y = -this.vel.y;
  
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
  let ctx= context;
  if(this.isOverlapping){
    ctx.strokestyle="rgba(0,88,200,255)";
    ctx.fillStyle="rgba(0,88,200,255)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
  }else{
    ctx.strokestyle="rgba(0,88,200,55)";
    ctx.fillStyle="rgba(0,88,200,55)";
    ctx.beginPath();
    //ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI*2,0,false);
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI*2,0,false);

    ctx.stroke();
    ctx.fill();
  }
}


//  update bubble every animation frame
Bubble.prototype.update = function () {
  //this.vel.add(this.acc)
  if(this !== attr){
    this.loc.add(this.vel);
  }
  
}

