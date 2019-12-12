class Mechant extends Objet {
    constructor(id, x, y, height, width) {
      super(id, x, y, height, width);
       this.id = id;
        this.image = document.getElementById("mechant");
        this.height =this.image.height;
        this.width = this.image.width;

        }

    draw(ctx) {
      ctx.save();        
      ctx.translate(this.x, this.y);
      ctx.drawImage(this.image, 0, 0);
      ctx.restore();
    }
    mort()
    {
         mechants.splice(mechants.indexOf(this), 1);
         console.log("mort");

    }
}