class Objet {

  constructor(id, x,y, height, width){
    this.id = id;
      this.x = x;
      this.y = y;
      this.roation = 0;
      this.surbrillance = false;
  }

  move(mousepos) {
      let dx = this.x - mousepos.x;
      let dy = this.y - mousepos.y;
      this.x -=  dx;
      this.y -=  dy;

  }

}
