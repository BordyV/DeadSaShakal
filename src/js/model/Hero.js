class Hero {
    constructor(x, y, angle, vitesse,nbBullet, tempsMinEntreTirsEnMillisecondes) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.v = vitesse;
      this.bullets = [];
      this.nbBullet = nbBullet;    
      this.soldeBullet = nbBullet;
      // cadenceTir en millisecondes = temps min entre tirs
      this.delayMinBetweenBullets = tempsMinEntreTirsEnMillisecondes;
    }
    
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.translate(-10, -10);
      
      // corps
      ctx.fillRect(0, 0, 20, 20);
      // canon
      ctx.fillRect(-10, 9, 10, 2);
      
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
          // 2) On dÃ©place la balle 
      let dx = this.x - mousepos.x;
      let dy = this.y - mousepos.y;
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
  