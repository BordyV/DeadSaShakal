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
  
  getLeft() { return this.y + this.height; }
  getTop() { return this.x + this.width; }
  getBottom() { return this.x + this.width ; }
  getRight() { return this.y + this.height; }



}
