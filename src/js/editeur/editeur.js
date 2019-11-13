var canvas, ctx, width, height;
var char1, arbre;
let objets=[];
let map =[];
let object = new Object(0,0,0);
console.log(object);
let objet = {x:0, y:0, orientation :0, taille : 1, id : 0};
let objetSelectione = 0;
var mousepos = { x: 0, y: 0 };
var inputStates = {};

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    char1 = new Mur(100, 100);
    arbre = new Caisse(100,100);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    window.addEventListener('click', function (evt) {
        // on passe le temps en parametres, en millisecondes

        // NOTE : si tu n'utilises pas inputStates.MOUSEDOWN
        // ici, mais juste l'évébement click au lieu de mousedown
        // tu ne pourras pas tirer plus vite, il te faudra
        // marteler le bouton.
        // compare en gardant space appuyé avec la cadence de
        // tir à zero.
    });

    window.addEventListener('keyup', function(evt) {
       // let key = evt.keyCode;
        if (evt.keyCode === 97) { // 1
            char1 = new Mur(mousepos.x, mousepos.y);
            objetSelectione = 0;
         //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 98) { // 1
            objetSelectione = 1;
            //   console.log("Oui"+evt.keyCode);
        }
    });

    window.addEventListener('keyup', function(evt) {

        inputStates.SPACE = false;
    });

    anime();
}

function anime() {

    // 1) On efface l'Ã©cran
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2) On dessine et on déplace le char 1
    if( objetSelectione ===0)
    {
        char1.draw(ctx);
        char1.move(mousepos);
    }
    if( objetSelectione ===1)
    {
        arbre.draw(ctx);
        arbre.move(mousepos);
    }
    if(inputStates) {
        //char1.addBullet(Date.now());
    }

    // On demande une nouvelle frame d'animation
    window.requestAnimationFrame(anime);

}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}


function getMousePos(canvas, evt) {
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }

    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}

