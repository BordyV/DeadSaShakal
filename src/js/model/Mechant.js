class Mechant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        }

    draw(ctx) {
      ctx.save();        
      var image = document.getElementById("mechant");
      ctx.translate(this.x, this.y);
      ctx.drawImage(image, 0, 0);
      ctx.restore();
    }
}