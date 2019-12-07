class Mur extends Objet{

  constructor(x,y) {
    super(x,y);
  }

  draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.translate(-10, -10);
      
      ctx.fillRect(0, 0, 50, 50);


      ctx.restore();
  }



}
