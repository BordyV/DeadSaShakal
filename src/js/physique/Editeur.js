var canvas, ctx, width, height;
var objTemp, arbre;
let objets=[];
let mapTemp =[];
let object = new Object(0,0,0);
let objet = {x:0, y:0, orientation :0, tailleX : 1, tailleY : 1, id : 1};
let objetSelectione = 101;
var mousepos = { x: 0, y: 0 };
var inputStates = {};
var touche;
let sliderY;
let sliderX;
var mapLoad;

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

    objTemp = new Mur(101, 100,100,100,100);

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
                case 101:
                    mapTemp.push(new Mur(objTemp.id,objTemp.x, objTemp.y, objTemp.height, objTemp.width));
                    break;
                case 102:
                    mapTemp.push(new Mur(objTemp.id,objTemp.x, objTemp.y, objTemp.height, objTemp.width));
                    break;
                case 1:
                    mapTemp.push(new Hero(objTemp.id,objTemp.x, objTemp.y,objTemp.angle,objTemp.v,objTemp.nbBullet,objTemp.delayMinBetweenBullets, objTemp.height, objTemp.width));
                    break;
                case 2:
                    mapTemp.push(new Mechant(objTemp.id,objTemp.x, objTemp.y, objTemp.height, objTemp.width));


            }
            objTemp= new Mur(101, mousepos.x,mousepos.y,100,100);
            objetSelectione =101;
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

        if (evt.keyCode === 65) { // 1
            objTemp = new Mur(101, mousepos.x,mousepos.y,100,100);
            objetSelectione = 101;

        }

        if (evt.keyCode === 90) { // 1
            objTemp = new Mur(102, mousepos.x,mousepos.y,100,100);
            objetSelectione = 102;
            //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 69) { // 1
            objTemp = new Hero(1,mousepos.x,mousepos.y,0,1,5,100);
            objetSelectione = 1;
            //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 82) { // 1
            objTemp = new Mechant(2,mousepos.x,mousepos.y);
            objetSelectione = 2;
            //   console.log("Oui"+evt.keyCode);
        }
        if (evt.keyCode === 88) {
            download(JSON.stringify(mapTemp), 'map.json', 'text/plain');
        }

        if (evt.keyCode === 87) {

            //


            mapLoad = map2;
            mapTemp =[];
            for (i in mapLoad)
            {
                if (mapLoad[i].id === 101 || mapLoad[i].id === 102 )
                {
                    mapTemp.push(new Mur(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y, mapLoad[i].height, mapLoad[i].width));
                }
                if (mapLoad[i].id === 1)
                {
                    mapTemp.push(new Hero(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y,mapLoad[i].angle,mapLoad[i].v,mapLoad[i].nbBullet,mapLoad[i].delayMinBetweenBullets, mapLoad[i].height, mapLoad[i].width));
                }
                if (mapLoad[i].id === 2)
                {
                    mapTemp.push(new Mechant(mapLoad[i].id,mapLoad[i].x, mapLoad[i].y, mapLoad[i].height,mapLoad[i].width));
                }

                    }
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
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}


