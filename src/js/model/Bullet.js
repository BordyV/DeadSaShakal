
class Bullet extends Hero{
    constructor() {
        super()
        this.x = hero.x;
        this.y = hero.y;
        this.angle = hero.angle;
        this.nbRebond = 4;
        this.dx = 10 * Math.cos(this.angle);
        this.dy = 10 * Math.sin(this.angle);
      }

    draw(ctx) {
      ctx.save();        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, 10, 2);
      
      ctx.restore();
    }

  
    move(maxX, maxY) {
      if(this.nbRebond >0)
      {
      if(this.x < 10 || this.x > canvas.width -10 )
      {
        this.nbRebond -= 1;
        this.dx *= -1;
        this.angle *=-1;
      }
      if(this.y < 10 || this.y > canvas.height -10)
      {
        this.nbRebond -= 1;
        this.dy *= -1;
        this.angle *= -1;
        
      }
        this.x -= this.dx;
        this.y -= this.dy;
        return true;
    }
    return false;
  }
}

