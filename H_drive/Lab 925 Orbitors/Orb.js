function Orb(parent, or, d, a, av ){
    this.mover = parent;
    this.loc = parent.loc.copy(); 
    this.orbRad = or;
    this.diam = d;
    this.angle = a;
    this.angularVelocity = av;
    this.clr = "rgba(255,255,255,255)";
    
}

Orb.prototype.run=function(){
    this.render();
    this.update(); 
}

Orb.prototype.update=function(){
 this.loc.x = this.mover.loc.x + Math.cos(this.angle)*this.orbRad;
 this.loc.y = this.mover.loc.y + Math.sin(this.angle)*this.orbRad;
 this.angle += this.angularVelocity;
}

Orb.prototype.render=function(){
    let ctx = context;
    ctx.strokestyle = "rgba(255,0,0,1)";
    ctx.fillStyle = "rgba(255, 255, 255)";
    ctx.beginPath();
    //ctx.arc(this.loc.x, this.loc.y);
    ctx.arc(this.loc.x, this.loc.y, 5, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();

}