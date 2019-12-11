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
    lesMurs.push(new Mur(102,hero1.width/2,hero1.height*2 -21 , 150, 250));
    lesMurs.push(new Mur(101,364.8000030517578, 32.40000009536743, 100, 776));
    lesMurs.push(new Mur(101,1155.8000030517578, 138.40000009536743, 346, 100));
    lesMurs.push(new Mur(101,784.8000030517578, 378.8000030517578, 103, 353));
    lesMurs.push(new Mur(101,476.8000030517578, 502.79999923706055, 218, 100));





    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {

        hero1.addBullet(Date.now()); 
        
    });
    

    anime();
}