var canvas, ctx, width, height;
var hero1;
var mousepos = { x: 0, y: 0 };
var inputStates = {};
const lesMurs = [];


function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
  

    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    hero1 = new Hero(100, 100, 0, 1,5, 100);
    mechant1 = new Mechant(canvas.width - 150, canvas.height - 150);
    lesMurs.push(new Mur(1,500,500, 50, 50));
    lesMurs.push(new Mur(2,800,400, 200, 100));
    lesMurs.push(new Mur(3,hero1.x - hero1.width,hero1.y + hero1.height, 0,0));
    console.log(lesMurs[2].width);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {

        hero1.addBullet(Date.now()); 
        
    });
    

    anime();
}