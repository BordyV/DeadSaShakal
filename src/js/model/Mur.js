class Mur extends Objet{
  draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.translate(-10, -10);
      
      ctx.fillRect(0, 0, 20, 20);


      ctx.restore();
  }



}
