
class Bullet {
    constructor(hero) {
        this.x = hero.armeX -hero.angle;
        this.y = hero.armeY +hero.angle;
        this.angle = hero.angle;
        this.nbRebond = 9;
        this.dx = 4* Math.cos(this.angle);
        this.dy = 4 * Math.sin(this.angle);

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
  testerCollisionDes(mur) {
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
  GetMurCollisionDes(murDes){

    if(murDes.x - Math.abs(this.dx) < this.x && murDes.x +Math.abs(this.dx) > this.x )
            {//left
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(murDes.y - Math.abs(this.dy) < this.y && murDes.y +Math.abs(this.dy) > this.y )
            {//top
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }

            if(Math.floor(murDes.x) + Math.floor(murDes.width)  - Math.abs(this.dx) < this.x && (Math.floor(murDes.x) + Math.floor(murDes.width) +Math.abs(this.dx) > this.x ))
            {//right
              this.nbRebond -= 1;
              this.dx *= -1;
              this.angle *= -1;
            }
            if(Math.floor(murDes.y) + Math.floor(murDes.height) - Math.abs(this.dy) < this.y &&  (Math.floor(murDes.y) + Math.floor(murDes.height) +Math.abs(this.dy) > this.y ))
            {//bottom
              this.nbRebond -= 1;
              this.dy *= -1;
              this.angle *= -1;
            }
  }

    pos(){

        if(this.nbRebond >0)
        {
            mapActuelle.lesMurs.forEach(m => {

                if(this.testerCollision(m))
                {
                    this.GetMurCollision(m);
                }

            });

            mapActuelle.lesMursDestroy.forEach(md => {

                if(this.testerCollisionDes(md))
                {
                    this.GetMurCollisionDes(md);
                    md.detruit();
                }

            });

            mapActuelle.mechants.map(c => {
                if(this.testerCollisionMechant(c))
                {

                    c.mort();
                }

            });



            this.x -= this.dx;
            this.y -= this.dy;

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
