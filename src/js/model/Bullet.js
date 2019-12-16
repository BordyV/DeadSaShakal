
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
function pos(balle){
    if(balle.nbRebond >0)
    {
        mapActuelle.lesMurs.forEach(m => {

            if(balle.testerCollision(m))
            {
                balle.GetMurCollision(m);
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

