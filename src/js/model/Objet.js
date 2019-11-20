class Objet {

  constructor(x,y){
      this.x = x;
      this.y = y;
      this.roation = 0;
      this.tailleX =1;
      this.tailleY=1;
  }

  move(mousepos) {
      let dx = this.x - mousepos.x;
      let dy = this.y - mousepos.y;
      this.x -=  dx;
      this.y -=  dy;

  }

}