class Mechant extends Objet {
    constructor(id, x, y, height, width) {
      super(id, x, y, height, width);
       this.id = id;
        this.image = document.getElementById("mechant");
        this.height =this.image.height;
        this.width = this.image.width;

        }

    drawObj(ctx) {
      ctx.save();        
      ctx.translate(this.x, this.y);
        if(this.surbrillance) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = "white";

        }

      ctx.drawImage(this.image, 0, 0);

      ctx.restore();
    }
    mort()
    {
        mapActuelle.mechants.splice( mapActuelle.mechants.indexOf(this), 1);
         console.log("mort");

    }
}