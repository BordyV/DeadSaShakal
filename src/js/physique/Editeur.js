var canvas, ctx, width, height;
var objTemp, arbre;
let objets=[];
let mapTemp =[];
let object = new Object(0,0,0);
let objet = {x:0, y:0, orientation :0, tailleX : 1, tailleY : 1, id : 1};
let objetSelectione = 1;
var mousepos = { x: 0, y: 0 };
var inputStates = {};
var touche;
let sliderY;
let sliderX;

window.onloadend = Loii();

function Loii() {


}

function init() {

    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    sliderY = document.getElementById("sliderY");
    sliderX = document.getElementById("sliderX");

    objTemp = new Mur(1, 100,100,100,100);

    canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
    }, false);

    window.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        return false;
    }, false);
    window.addEventListener('mouseup', function (evt) {

        if(evt.button === 0) {
            touche = false;
            objet.id = objetSelectione;
            objet.orientation = 0;
            objet.taille = 1;
            objet.x = mousepos.x;
            objet.y = mousepos.y;
            mapTemp.forEach(m => {

                if (this.GetCollision(m)) {
                    touche = true;
                    objTemp = new Mur(-1, 0,0,0,0);
                    sliderY.value = m.height;
                    sliderX.value = m.width;
                    ModifTaille(m);

                }
            })
            if(mousepos.x>1275 || mousepos.y>710)
                touche = true;
            if(!touche)
            switch (objetSelectione) {
                case 1:
                    mapTemp.push(new Mur(objTemp.id,objTemp.x, objTemp.y, objTemp.height, objTemp.width));
                    break;
                case 2:
                    mapTemp.push(new Mur(objTemp.id,objTemp.x, objTemp.y, objTemp.height, objTemp.width));
                    break;
                case 3:
                    mapTemp.push(new Hero(objTemp.x, objTemp.y,objTemp.angle,objTemp.v,objTemp.nbBullet,objTemp.delayMinBetweenBullets));
                case 4:
                    mapTemp.push(new Mechant(objTemp.x, objTemp.y));


            }
            objTemp= new Mur(1, mousepos.x,mousepos.y,100,100);
            objetSelectione =1;
            console.log("objet: " + mapTemp);
        }

       else if(evt.button ===2)
        {
            mapTemp.forEach(m => {

                if (this.GetCollision(m)) {
                    mapTemp.splice(mapTemp.indexOf(m),1);
                }
            })
        }
    });
    window.addEventListener('mousedown', function (evt) {
        if(touche)
        if (evt.button === 0) {
            let selection = false;
            if (!selection)
            mapTemp.forEach(m => {

                if (this.GetCollision(m)) {
                    selection = true;
                    mapTemp.splice(mapTemp.indexOf(m),1);
                    objTemp = m;
                    objetSelectione = m.id;

                }


            })
        }
    });

    window.addEventListener('keyup', function(evt) {
        // let key = evt.keyCode;

        if (evt.keyCode === 97) { // 1
            objTemp = new Mur(1, mousepos.x,mousepos.y,100,100);
            objetSelectione = 1;

        }

        if (evt.keyCode === 98) { // 1
            objTemp = new Mur(2, mousepos.x,mousepos.y,100,100);
            objetSelectione = 2;
            //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 99) { // 1
            objTemp = new Hero(mousepos.x,mousepos.y,0,1,5,100);
            objetSelectione = 3;
            //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 100) { // 1
            objTemp = new Mechant(mousepos.x,mousepos.y);
            objetSelectione = 4;
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


    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };




}
function GetCollision(mur){


    if (((mousepos.x < (Math.floor(mur.x) + Math.floor(mur.width))
        && mousepos.x > mur.x)) ) {
        if (((mousepos.y < Math.floor(mur.y) + Math.floor(mur.height)
            && mousepos.y > mur.y)))
        {
            return true;

        }
    }
    return false;
}
function ModifTaille(mur) {

    sliderY.oninput = function () {
        mur.height = sliderY.value;

    }
    sliderX.oninput = function () {
        mur.width = sliderX.value;
    }
}

