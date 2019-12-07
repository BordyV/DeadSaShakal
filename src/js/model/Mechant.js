class Mechant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        }

    draw(ctx) {
      ctx.save();        
      //var image = document.getElementById("mechant");
      ctx.translate(this.x, this.y);
      ctx.fillRect(0, 0, 20, 20);
      //ctx.drawImage(image, 0, 0);
      ctx.restore();
    }
}