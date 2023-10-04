// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0, y = 0) {
  // called with two arguments
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {
  let dir = this.getDirection();
  this.y = Math.sin(dir) * mag;
  this.x = Math.cos(dir) * mag;
  return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {
  let dir = this.getDirection();
  this.y = Math.sin(dir);
  this.x = Math.cos(dir);
  return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {
  let c = Math.sqrt(this.x * this.x + this.y * this.y);
  return c;
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (angle) {
  let mag = this.getMagnitude();


  return
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function () {
  let a = Math.atan2(this.y, this.x);
  return a;
}

// Add another vector to this vector
JSVector.prototype.add = function (v2) {
  this.x += v2.x;
  this.y += v2.y;

  return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function (v2) {
  this.x -= v2.x;
  this.y -= v2.y;
  return this;
}


// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function (v1, v2) {
  return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function (v1, v2) {
  return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function (scalar) {
this.x * scalar.x;
this.y * scalar.y;
return this; 
}

// Divide this vector by a scalar
JSVector.prototype.divide = function (scalar) {
this.x/scalar.x;
this.y/scalar.y; 
return this; 
}



// Limit the magnitude of this vector
JSVector.prototype.limit = function (lim) {
  if(this.getMagnitude() > lim){
    this.setMagnitude(lim)
  }
}

// Get the distance between this vector and another one
JSVector.prototype.dist = function (v2) {
   let x = this.x - v2.x;
   let y = this.y - v2.y;
   return Math.sqrt(x*x + y*y);
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function (v2) {
  let dist = this.dist(v2);
  return Math.sqrt(dist);

}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos - sin  |
//                           |  sin + cos  |

JSVector.prototype.rotate = function (angle) {
  let cos = math.cos(angle);
  let sin = math.sin(angle);
  let x = this.x;
  let y = this.y;


 
  return this;
}


// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function (v2) {
  let d1= this.getDirection();
  let d2 = Math.atan2(v2.y, v2.x);
  return Math.abs(d2-d1);
}

// Make a copy of this vector
JSVector.prototype.copy = function () { 
  return new JSVector(this.x, this.y);
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function () {
return this.x + this.y + this.getMagnitude + this.getDirection; 
}
