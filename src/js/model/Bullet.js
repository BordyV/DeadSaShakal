
class Bullet {
    constructor(hero) {
        this.x = hero.x*2;
        this.y = hero.y*1.5;
        this.angle = hero.angle;
        this.nbRebond = 9;
        this.dx = 10 * Math.cos(this.angle);
        this.dy = 10 * Math.sin(this.angle);
      }

    draw(ctx) {
      ctx.save();        
      var image = document.getElementById("bullet");
      ctx.translate(this.x, this.y);
      
      //ctx.rotate(this.angle-(Math.PI/2));
      ctx.rotate(this.angle);

      ctx.translate(-this.width, -this.height);
      //ctx.drawImage(image, 0, 0);
      ctx.fillRect(0, 0, 20, 5);
      ctx.restore();
    }

  
    move(maxX, maxY) {
      

    if(this.nbRebond >0)
    {
      lesMurs.forEach(m => {
        
      if(this.testerCollision(m))
          {
            this.GetMurCollision(m);            
      }
        
    }); 
        if(this.testerCollisionMechant(mechant1))
        {

          mechant1.mort(ctx);
        }

      if(this.x < 10 || this.x > canvas.width -10)
      {
        this.nbRebond -= 1;
        this.dx *= -1;
        this.angle *= -1;
        ///ctx.rotate(thi.angle* this.angle-1)
      }
      if(this.y < 10 || this.y > canvas.height -10 )
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
  
  testerCollision(mur) {
    if (((this.x < mur.x + mur.height
         && this.x > mur.x)) ) {
          if (((this.y < mur.y + mur.width
            && this.y > mur.y)))
            {
           return true;
              
          }
    } 
      return false;
  }
  GetMurCollision(mur){

    if(mur.x - Math.abs(this.dx) < this.x && mur.x +Math.abs(this.dx) > this.x )
            {
              console.log("left");
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(mur.y - Math.abs(this.dy) < this.y && mur.y +Math.abs(this.dy) > this.y )
            {
              console.log("top");
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }

            if(mur.x+mur.width - Math.abs(this.dx) < this.x && mur.x+mur.width +Math.abs(this.dx) > this.x )
            {
              console.log("right");
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(mur.y+ mur.height - Math.abs(this.dy) < this.y && mur.y+ mur.height +Math.abs(this.dy) > this.y )
            {
              console.log("bot");
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }
  }

  testerCollisionMechant(mechant) {
    if ( !(this.x > mechant.x + mechant.width
         || this.x < mechant.x
         || this.y > mechant.y + mechant.height
         || this.y < mechant.y) ) {
           return true;
    } 
    else {
      return false;
    }
  }
}

