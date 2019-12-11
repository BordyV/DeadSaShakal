class Hero extends Objet {

    constructor(id, x, y, angle, vitesse,nbBullet, tempsMinEntreTirsEnMillisecondes, height, width) {
      
      super(id, x, y, height, width);
      this.angle = angle;
      this.x = x;
      this.y = y;
    
      this.v = vitesse;
      this.id =1;
      this.bullets = [];
      this.nbBullet = nbBullet;    
      this.soldeBullet = nbBullet;
      // cadenceTir en millisecondes = temps min entre tirs
      this.delayMinBetweenBullets = tempsMinEntreTirsEnMillisecondes;

      this.corps = document.getElementById("hero");
      this.arme = document.getElementById("arme");
      this.height =this.corps.height;
      this.width =this.corps.width;

      this.armeX = this.arme.height/2;
      this.armeY = this.arme.width/2;
    }
    
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      // ctx.rotate(this.angle);
     
      
      // corps
      ctx.drawImage(this.corps, 0, 0);
      // ctx.fillRect(0, 0, 20, 20);
      
      // canon
      ctx.translate(this.x- this.armeX-20 , this.y-this.armeY+5);
      ctx.rotate(this.angle);
      ctx.drawImage(this.arme, -50, -0);      
      ctx.restore();
      
      this.drawBullets(ctx);
  
    }
    
    drawBullets(ctx) {
      for(let i = 0; i < this.bullets.length; i++) {
        let b = this.bullets[i]; 
        b.draw(ctx);
        //if ((b.x < 0) || (b.y < 0) || (b.x > width) || (b.y > height))
        if (false == b.move())
        {
          this.removeBullet(b)
        }
      }
    }
    
    move(mousepos) {
          // 2) On deplace la balle 
      let dx = this.corps.height - mousepos.x;
      let dy = this.corps.width +75 - mousepos.y;
      this.angle = Math.atan2(dy, dx);

    }
    
     addBullet(time) {
         //si le nombre de balle est different de 0 on autorise le tir
         if(this.nbBullet != 0 )
          {
       // si le temps écoulé depuis le dernier tir est > temps max alors on tire
       var tempEcoule=0;
  
       if(this.lastBulletTime !== undefined) {
         tempEcoule = time - this.lastBulletTime;
         //console.log("temps écoulé = " + tempEcoule);
       }
       
       if((this.lastBulletTime === undefined) || (tempEcoule> this.delayMinBetweenBullets)) {
          this.bullets.push(new Bullet(this));
          // on mémorise le dernier temps.
          this.lastBulletTime = time;
       }
       this.nbBullet -= 1;
      }
      else
      {
          alert("Plus de balles");
  
      }
     }
  
     removeBullet(bullet) {
          let position = this.bullets.indexOf(bullet);
          this.bullets.splice(position, 1);
      }
  }
  