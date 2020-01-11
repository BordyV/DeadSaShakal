
class Bullet {
    constructor(hero) {
        this.x = hero.armeX -hero.angle;
        this.y = hero.armeY +hero.angle;
        this.angle = hero.angle;
        this.nbRebond = 9;
        this.dx = 4* Math.cos(this.angle);
        this.dy = 4 * Math.sin(this.angle);
        setInterval(pos, 1,this);
      }

    drawObj(ctx) {
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
            {//left
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(mur.y - Math.abs(this.dy) < this.y && mur.y +Math.abs(this.dy) > this.y )
            {//top
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }

            if(Math.floor(mur.x) + Math.floor(mur.width)  - Math.abs(this.dx) < this.x && (Math.floor(mur.x) + Math.floor(mur.width) +Math.abs(this.dx) > this.x ))
            {//right
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(Math.floor(mur.y) + Math.floor(mur.height) - Math.abs(this.dy) < this.y &&  (Math.floor(mur.y) + Math.floor(mur.height) +Math.abs(this.dy) > this.y ))
            {//bottom
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }
  }

  // testerCollisionTri(murTri) {
  //   if (((this.x < 0
  //        && this.x >this.width)) ) {
  //         if (((this.y < Math.floor(murTri.y) + Math.floor(murTri.height)
  //           && this.y > murTri.y)))
  //           {
  //          return true;
              
  //         }
  //   } 
  //     return false;
  // }

  GetMurTriCollision(murTri){

    if(murTri.x - Math.abs(this.dx) < this.x && murTri.x +Math.abs(this.dx) > this.x )
            {//left
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(murTri.y - Math.abs(this.dy) < this.y && murTri.y +Math.abs(this.dy) > this.y )
            {//top
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }

            if(Math.floor(murTri.x) + Math.floor(murTri.width)  - Math.abs(this.dx) < this.x && (Math.floor(murTri.x) + Math.floor(murTri.width) +Math.abs(this.dx) > this.x ))
            {//right
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(Math.floor(murTri.y) + Math.floor(murTri.height) - Math.abs(this.dy) < this.y &&  (Math.floor(murTri.y) + Math.floor(murTri.height) +Math.abs(this.dy) > this.y ))
            {//bottom
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
function pos(balle){
    if(balle.nbRebond >0)
    {
        mapActuelle.lesMurs.forEach(m => {

            if(balle.testerCollision(m))
            {
                balle.GetMurCollision(m);
            }

        });

        mapActuelle.lesMursTri.forEach(mt => {

          if(balle.testerCollision(mt))
          {
              balle.GetMurTriCollision(mt);
          }

      });

        mapActuelle.mechants.map(c => {
            if(balle.testerCollisionMechant(c))
            {

                c.mort();
            }

        });



        balle.x -= balle.dx;
        balle.y -= balle.dy;

    }

}

