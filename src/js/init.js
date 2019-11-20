var canvas, ctx, width, height;
var hero1;
var mousepos = { x: 0, y: 0 };
var inputStates = {};


function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
  
    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    hero1 = new Hero(100, 100, 0, 1,5, 100);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {
        // on passe le temps en parametres, en millisecondes
        hero1.addBullet(Date.now()); 
        // NOTE : si tu n'utilises pas inputStates.MOUSEDOWN
        // ici, mais juste l'évébement click au lieu de mousedown
        // tu ne pourras pas tirer plus vite, il te faudra
        // marteler le bouton.
        // compare en gardant space appuyé avec la cadence de
        // tir à zero.
    });

    anime();
}