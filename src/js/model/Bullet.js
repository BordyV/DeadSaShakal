
class Bullet {
    constructor(hero) {
        this.x = hero.x;
        this.y = hero.y;
        this.angle = hero.angle;
        this.nbRebond = 4;
        this.dx = 10 * Math.cos(this.angle);
        this.dy = 10 * Math.sin(this.angle);
      }

    draw(ctx) {
      ctx.save();        
      var image = document.getElementById("bullet");
      ctx.translate(this.x, this.y);
      
      ctx.rotate(this.angle-(Math.PI/2));
      console.log(this.angle-(Math.PI/2));


      ctx.translate(-this.width, -this.height);
      ctx.drawImage(image, 0, 0);
      ctx.restore();
    }

  
    move(maxX, maxY) {
      if(this.nbRebond >0)
      {
      if(this.x < 10 || this.x > canvas.width -10 )
      {
        this.nbRebond -= 1;
        this.dx *= -1;
        this.angle *= -1;
        ///ctx.rotate(thi.angle* this.angle-1)
      }
      if(this.y < 10 || this.y > canvas.height -10)
      {
        this.nbRebond -= 1;
        this.dy *= -1;
        this;this.angle *= -1;
        
      }
        this.x -= this.dx;
        this.y -= this.dy;
        return true;
    }
    
    return false;
  }
}

