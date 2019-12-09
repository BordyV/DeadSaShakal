
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
      if(this.testerCollision(mur1))
          {
            console.log(mur1.x - this.dx , this.x , mur1.x +this.dx , this.x);
            console.log(this.dx);
            console.log(mur1.x);

            if(mur1.x - Math.abs(this.dx) < this.x && mur1.x +Math.abs(this.dx) > this.x )
            {
                
              this.nbRebond -= 1;
          this.dx *= -1;
          this.angle *= -1;
            }
            if(mur1.y - Math.abs(this.dy) < this.y && mur1.y +Math.abs(this.dy) > this.y )
            {
              this.nbRebond -= 1;
          this.dy *= -1;
          this.angle *= -1;
            }

            if(mur1.x+mur1.width - Math.abs(this.dx) < this.x && mur1.x+mur1.width +Math.abs(this.dx) > this.x )
            {
                
              this.nbRebond -= 1;
          this.dx *= -1;
          this.angle *= -1;
            }
            if(mur1.y+ mur1.height - Math.abs(this.dy) < this.y && mur1.y+ mur1.height +Math.abs(this.dy) > this.y )
            {
              this.nbRebond -= 1;
          this.dy *= -1;
          this.angle *= -1;
            }
            
        }
        
        
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
    if (((this.x < mur.x + mur.width
         && this.x > mur.x)) ) {
          if (((this.y < mur.y + mur.height
            && this.y > mur.y)))
            {
              console.log("testzzzz");
           return true;
              
          }
    } 
      return false;
  }

  testerCollisionX(mur) {
    if (((this.x < mur.x + mur.width
         && this.x > mur.x)) ) {
          if (((this.y < mur.y + mur.height
            && this.y > mur.y)))
            {
              
           return true;
              
          }
    } 
      return false;
  }
  testerCollisionY(mur) {
    if (((this.y < mur.y + mur.height
         && this.y > mur.y)) ) {
          if (((this.x < mur.x + mur.width
            && this.x > mur.x)) )
            {
              if (((this.x < mur.x + mur.width
                && this.x > mur.x) < this.x) )
                {

                   return true;
                }
            }
    } 
      return false;
  }

//   testerCollisionX(mur) {
//     var dist = 10;

//     if ( (this.x < mur.getLeft()+dist &&  this.x > mur.getLeft()-dist) ||  (this.x < mur.getRight()+dist &&  this.x > mur.getRight()-dist))
//   if ((this.x > mur.getLeft() && this.x < mur.getRight()) && (this.y > mur.getTop() && this.y < mur.getBottom()))  {

//          return true;
//   }

//   else {
//     return false;
//   }
// }
// //Test colliosion en Y
// testerCollisionY(mur) {
//     var dist = 10;
//     if ( (this.y < mur.getTop()+dist &&  this.y > mur.getTop()-dist) ||  (this.y < mur.getBottom()+dist &&  this.y > mur.getBottom()-dist))
//   if ( (this.x > mur.getLeft() && this.x < mur.getRight()) && (this.y > mur.getTop() && this.y < mur.getBottom())) {
//          return true;
//   } 
//   else {
//     return false;
//   }
// }

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

