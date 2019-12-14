var canvas, ctx;
const rects = [];

window.onload = menu;

class Rectangle {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dy = 1;
    this.dx = 1;
    this.ctx = ctx;
    this.ctx.fillStyle = this.color;  
    this.ctx.lineWith = 10;
  }

  draw() {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}

// Collisions between rectangle and circle
function bullRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
  var testX=cx;
  var testY=cy;
  if (testX < x0) testX=x0;
  if (testX > (x0+w0)) testX=(x0+w0);
  if (testY < y0) testY=y0;
  if (testY > (y0+h0)) testY=(y0+h0);
  return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
}

function testeCollisionsSourisAutresRectangles() {
  // on parcourt les cercles
  rects.forEach(r => {
    if(bullRectsOverlap(r.x, r.y, r.width, r.height, mousePos.x, mousePos.y, 10)) {
      console.log("collision");
      r.color = "green";
      //rects.splice(rects.indexOf(r), 1);
    } 
    else {
      r.color = "red";
    }
  });
}

