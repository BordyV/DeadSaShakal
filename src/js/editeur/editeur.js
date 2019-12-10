var canvas, ctx, width, height;
var objTemp, arbre;
let objets=[];
let mapTemp =[];
let object = new Object(0,0,0);
let objet = {x:0, y:0, orientation :0, tailleX : 1, tailleY : 1, id : 0};
let objetSelectione = 0;
var mousepos = { x: 0, y: 0 };
var inputStates = {};

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;


    objTemp = new Mur(100, 100);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    window.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        return false;
    }, false);
    window.addEventListener('click', function (evt) {
        if(evt.button === 0) {
            objet.id = objetSelectione;
            objet.orientation = 0;
            objet.taille = 1;
            objet.x = mousepos.x;
            objet.y = mousepos.y;
            switch (objetSelectione) {
                case 0:
                    mapTemp.push(new Mur(mousepos.x, mousepos.y));
                    break;
                case 1:
                    mapTemp.push(new Caisse(mousepos.x, mousepos.y));
                    break;
            }
            //mapTemp.push(Mur(mousepos.x,mousepos.y));
            console.log("objet: " + mapTemp);
        }
    });

    window.addEventListener('keyup', function(evt) {
       // let key = evt.keyCode;
        if (evt.keyCode === 65) { // 1
            objTemp = new Mur(mousepos.x, mousepos.y);
            objetSelectione = 0;
         //   console.log("Oui"+evt.keyCode);
        }

        if (evt.keyCode === 90) { // 1
            objTemp = new Caisse(mousepos.x, mousepos.y);
            objetSelectione = 1;
            //   console.log("Oui"+evt.keyCode);
        }

        switch (evt.keyCode) {
            case 65:
                // to do
                break;
            case 98:
                // tp dp
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
        objTemp.draw(ctx);
        objTemp.move(mousepos);
    mapTemp.map(c => {
        c.draw(ctx);
    });


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

