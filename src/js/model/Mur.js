class Mur extends Objet{

  constructor(x,y, height, width) {
    super(x,y);
    this.height = height;
    this.width = width;
  }

  draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.translate(-10, -10);
      
      ctx.fillRect(0, 0, this.height, this.width);


      ctx.restore();
  }
  
  getBottom() { return this.y + this.height; }
  getLeft() { return this.x; }
  getRight() { return this.x + this.width; }
  getTop() { return this.y; }



}
