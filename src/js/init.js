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
    hero1 = new Hero(1, 100, 100, 0, 1,5, 100, 50, 50);
    mechant1 = new Mechant(2, canvas.width - 150, canvas.height - 150, 50, 50);
    lesMurs.push(new Mur(102,500,500, 100, 100));
    lesMurs.push(new Mur(101,800,400, 150, 250));

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {

        hero1.addBullet(Date.now()); 
        
    });
    

    anime();
}