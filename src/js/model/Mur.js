class Mur extends Objet{

  constructor(id, x,y, height, width) {
    super(x,y);
    this.id=id;
    if(this.id == 1)
    {
    this.image = document.getElementById("mur1");
    }
    else if (this.id ==2)
    {
      this.image = document.getElementById("mur2");

    }
    else if (this.id ==3)
    {
      this.image = document.getElementById("plateforme");

    }
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
}
