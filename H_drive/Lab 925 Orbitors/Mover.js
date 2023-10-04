//  Mover constructor function +++++++++++++++++++++++++++++
function Mover(x, y, rad) {
  this.diam = rad;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
  this.acc = new JSVector(0, 0);
  this.clr = "rgba(255,255,255,255)";

  let orbitalRad = 55;
  let diam = 8;
  let angle = Math.random() * Math.PI * 2;
  let angVelocity = 0.05;
  let orbiters=[];
  let num=Math.floor(Math.random() * 9 + 3);
//
  for (let j = 0; j < num; j++) {
    orbiters[j]=this.orb = new Orb(this, orbitalRad, diam, angle, angVelocity);
  }
  

}

//  placing methods in the prototype (every ball shares functions)
Mover.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
  this.orb.run();
}



// renders a Mover to the canvas
Mover.prototype.render = function () {
  let ctx = context;
  ctx.strokestyle = "rgba(255,0,0,1)";
  ctx.fillStyle = "rgba(138, 69, 138)";
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

//  update Mover every animation  frame
Mover.prototype.update = function () {
  this.acc = new JSVector(0, 0)
  if (this !== this.orb) {
    // let d = this.loc.dist(this.orb.loc)
    // if (d < 100) {
    //   this.x += this.orb.x;
    //   this.y += this.orb.y;
    //   return this;
    // }
    // if (d < 100) {
    //   this.acc = JSVector.subGetNew(this.loc, orb.loc);
    //   this.acc.normalize();
    //   this.acc.multiply(0.1);
    // }
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.loc.add(this.vel);
  }

}

//  Check to see if mover leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
  if (this.loc.y > canvas.height || this.loc.y < 0) this.vel.y = -this.vel.y;

}



