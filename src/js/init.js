var canvas, ctx, width, height;
var hero1;
var mousepos = { x: 0, y: 0 };
var inputStates = {};
const lesMurs = [];
var map =[];
var mechants = [];
var mapload;
var mechant1
function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    mapLoad = map2;
    map =[];
    for (i in mapLoad)
    {
        if (mapLoad[i].id === 101 || mapLoad[i].id === 102 )
        {
            map.push(new Mur(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y, mapLoad[i].height, mapLoad[i].width));
            lesMurs.push(new Mur(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y, mapLoad[i].height, mapLoad[i].width));
        }
        if (mapLoad[i].id === 1)
        {
            hero1 = new Hero(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y,mapLoad[i].angle,mapLoad[i].v,mapLoad[i].nbBullet,mapLoad[i].delayMinBetweenBullets, mapLoad[i].height, mapLoad[i].width);
        }
        if (mapLoad[i].id === 2)
        {
            mechants.push( new Mechant(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y, mapLoad[i].height,mapLoad[i].width));
        }

    }
    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde


    


//"[{"id":101,"x":492.8000030517578,"y":704.8000030517578,"roation":0,"width":"800","height":100,"image":{}}]"



    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {

        hero1.addBullet(Date.now()); 
        
    });
    

    anime();
}