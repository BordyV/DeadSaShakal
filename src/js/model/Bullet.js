
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
      //test collision en X des murs
      if(this.testerCollisionX(mur1))
          {
            this.nbRebond -= 1;
          this.dx *= -1;
          this.angle *= -1;
          }
          //test collision en Y des murs
          if(this.testerCollisionX(mur1))
          {
            this.nbRebond -= 1;
          this.dy *= -1;
          this.angle *= -1;
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
  
  // // // bullRectsOverlap(mur) {
  // // //   var BulletX=this.x;
  // // //   var BulletY=this.y;
  // // //   if (BulletX < mur.x) 
  // // //     BulletX=mur.x;
  // // //   if (BulletX > (mur.x + mur.width)) 
  // // //     BulletX=(mur.x + mur.width);
  // // //   if (BulletY < mur.y) 
  // // //     BulletY=mur.y;
  // // //   if (BulletY > (mur.y + mur.height)) 
  // // //     BulletY= (mur.y + mur.height);
  // // //   return (((this.x-BulletX)*(this.x-BulletX)+(this.y-BulletY)*(this.y-BulletY))< 10*10 );
  // // // }

  //ANCIENNE FONCTION EN DESSOUS

  // testerCollisionX(mur) {
  //   if ( !(this.x > mur.getRight()
  //        || this.x < mur.getLeft()
  //        || this.y > mur.getBottom()
  //        || this.y < mur.getTop()) ) {
  //          return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // }

  //Test collision en X
  testerCollisionX(mur) {
    if ( !(this.x > mur.getRight()
         || this.x < mur.getLeft()
    )) {
           return true;
    } 
    else {
      return false;
    }
  }
  //Test colliosion en Y
  testerCollisionY(mur) {
    if ( !(this.y > mur.getBottom()
         || this.y < mur.getTop()) ) {
           return true;
    } 
    else {
      return false;
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

