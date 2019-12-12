
class Bullet {
    constructor(hero) {
        this.x = hero.armeX -hero.angle;
        this.y = hero.armeY +hero.angle;
        this.angle = hero.angle;
        this.nbRebond = 9;
        this.dx = 20 * Math.cos(this.angle);
        this.dy = 20 * Math.sin(this.angle);
      }

    draw(ctx) {
      ctx.save();        
      var image = document.getElementById("bullet");
      ctx.translate(this.x, this.y);
      
      //ctx.rotate(this.angle-(Math.PI/2));
      ctx.rotate(this.angle);

     // ctx.translate(-this.width, -this.height);
      //ctx.drawImage(image, 0, 0);
      ctx.fillRect(0, 0, 20, 5);
      ctx.restore();
    }

  
    moveB(maxX, maxY) {
      

    if(this.nbRebond >0)
    {
      lesMurs.forEach(m => {
        
      if(this.testerCollision(m))
          {
            this.GetMurCollision(m);            
      }
        
    });
        mechants.map(c => {
            if(this.testerCollisionMechant(c))
            {

                c.mort();
            }

        });


      // if(this.x < 10 || this.x > canvas.width -10)
      // {
      //   this.nbRebond -= 1;
      //   this.dx *= -1;
      //   this.angle *= -1;
      // }
      // if(this.y < 10 || this.y > canvas.height -10 )
      // {
      //   this.nbRebond -= 1;
      //   this.dy *= -1;
      //   this;this.angle *= -1;
        
      // }

        this.x -= this.dx;
        this.y -= this.dy;
        return true;
    }  
    return false;
  }
  
  testerCollision(mur) {
    if (((this.x < Math.floor(mur.x) + Math.floor(mur.width)
         && this.x > mur.x)) ) {
          if (((this.y < Math.floor(mur.y) + Math.floor(mur.height)
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

            if(Math.floor(mur.x) + Math.floor(mur.width)  - Math.abs(this.dx) < this.x && (Math.floor(mur.x) + Math.floor(mur.width) +Math.abs(this.dx) > this.x ))
            {
              console.log("right");
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(Math.floor(mur.y) + Math.floor(mur.height) - Math.abs(this.dy) < this.y &&  (Math.floor(mur.y) + Math.floor(mur.height) +Math.abs(this.dy) > this.y ))
            {
              console.log("bot");
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }
  }

  testerCollisionMechant(mechant) {

    if ( !(this.x > Math.floor(mechant.x) + Math.floor(mechant.width)
         || this.x < mechant.x
         || this.y > Math.floor(mechant.y) + Math.floor(mechant.height)
         || this.y < mechant.y) ) {

           return true;
    } 
    else {
      return false;
    }
  }
}

