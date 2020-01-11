class Map {

    constructor(map) {

        this.lesMurs = [];
        this.lesMursTri = [];
        this.mapInfo =[];
        this.mechants = [];
        this.leHero;

        for (let i in map) {

            if (map[i].id === 101 || map[i].id === 102) {

                this.mapInfo.push(new Mur(map[i].id, map[i].x, map[i].y, map[i].height, map[i].width));
                this.lesMurs.push(new Mur(map[i].id, map[i].x, map[i].y, map[i].height, map[i].width));

            }
            if (map[i].id === 201) {

                this.mapInfo.push(new MurTri(map[i].id, map[i].x, map[i].y, map[i].height, map[i].width));
                this.lesMurs.push(new MurTri(map[i].id, map[i].x, map[i].y, map[i].height, map[i].width));

            }
            if (map[i].id === 1) {
                console.log(map);
                this.leHero = new Hero(map[i].id, map[i].x, map[i].y, map[i].angle, map[i].v, 5, map[i].height, map[i].width)
            }
            if (map[i].id === 2) {
                  this.mechants.push(new Mechant(map[i].id, map[i].x, map[i].y, map[i].height, map[i].width));
            }

        }


    }


}

