class Mechant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vivant=1;
        this.image = document.getElementById("mechant");  
        this.height =this.image.height;
        this.width = this.image.width;

        }
    move(mousepos) {
        let dx = this.x - mousepos.x;
        let dy = this.y - mousepos.y;
        this.x -=  dx;
        this.y -=  dy;

    }
    draw(ctx) {
      ctx.save();        
      ctx.translate(this.x, this.y);
      ctx.drawImage(this.image, 0, 0);
      ctx.restore();
    }
    mort(ctx)
    {
      this.vivant=0;
    }
}