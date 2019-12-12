class Mur extends Objet{

  constructor(id, x,y, height, width) {
    super(id, x,y,height, width);
    this.id=id;
    this.width = width;
    this.height = height;
    if(this.id == -1)
      {this.image = document.getElementById("mur1");}
    if(this.id == 101)
    {
    this.image = document.getElementById("mur1");
    }
    else if (this.id ==102)
    {
        this.image = document.getElementById("plateforme");

    }
    else if (this.id ==103)
    {


    }



  }

  draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.shadowColor = "black";
      ctx.shadowBlur = 15;

      ctx.drawImage(this.image, 0, 0,this.width,this.height);
      


      ctx.restore();
  }
}
