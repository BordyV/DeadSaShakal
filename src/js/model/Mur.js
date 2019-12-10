class Mur extends Objet{

  constructor(x,y, height, width) {
    super(x,y);
    this.image = document.getElementById("mur1");

    this.height =this.image.height;
    this.width = this.image.width;


  }

  draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.translate(-10, -10);
      // ctx.fillRect(-1, -1, this.height+3, this.width+3);
      ctx.shadowColor = "black";
      ctx.shadowBlur = 15;
      
      ctx.drawImage(this.image, 0, 0);
      


      ctx.restore();
  }
  
  getLeft() { return this.y + this.height; }
  getTop() { return this.x + this.width; }
  getBottom() { return this.x + this.width ; }
  getRight() { return this.y + this.height; }



}
