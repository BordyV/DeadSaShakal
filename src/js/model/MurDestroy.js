class MurDestroy extends Mur{

    constructor(id, x,y, height, width, degats) {
      super(id, x,y,height, width);
      this.id=id;
      this.width = width;
      this.height = height;
      this.degats = degats;

      if(this.id == 201)
      {
      this.image = document.getElementById("mur2");
      }
  
    }

    detruit()
    {
        console.log(mapActuelle.lesMursDestroy.indexOf(this));
        mapActuelle.MurDestroy.splice( mapActuelle.lesMursDestroy.indexOf(this), 1);
         console.log("mort");

    }
}
  