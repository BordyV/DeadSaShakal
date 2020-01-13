class MurDestroy extends Mur{

    constructor(id, x,y, height, width, degats) {
      super(id, x,y,height, width);
      this.id=id;
      this.width = width;
      this.height = height;
      this.degats = 1;

      if(this.id == 201)
      {
      this.image = document.getElementById("mur2");
      }
  
    }

    detruit()
    {

        mapActuelle.mapInfo.map(c => {
           if(c.degats == 1)
                mapActuelle.mapInfo.splice( mapActuelle.mapInfo.indexOf(c),1);
        });
        
        mapActuelle.lesMursDestroy.splice( mapActuelle.lesMursDestroy.indexOf(this), 1);
        
         console.log("detruit");

    }
}
  