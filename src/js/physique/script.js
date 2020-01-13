window.onload = menu;
var storage = {};
var mapActuelle;
let nbMechant = 1;
var quitter =false;
function anime(callback) {


    // console.log(mapActuelle.leHero.nbBullet);
    // 1) On efface l'ecran
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2) On dessine et on déplace la direction du hero 1
    mapActuelle.leHero.drawObj(ctx);
    mapActuelle.leHero.moveM(mousepos);
    mapActuelle.mapInfo.map(c => {
        c.drawObj(ctx);

    });

    if (!quitter) {
        if (nbMechant > 0) {
            nbMechant = 0;
            mapActuelle.mechants.map(c => {
                c.drawObj(ctx);
                nbMechant++;
            });
            if (mapActuelle.leHero.bullets == 0 && mapActuelle.leHero.nbBullet == 0) {
                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = ' #e60000';
                ctx.font = "900 24px Charcoal";
                ctx.fillText("Balles :" + mapActuelle.leHero.nbBullet, 600, 40);
                ctx.font = "900 40px Charcoal";
                ctx.fillText("Bon, il serait temps d'apprendre à viser bro", 200, 300);
                ctx.restore();
                setTimeout(lose, 3000);
            } else
                window.requestAnimationFrame(anime);
        } else {
            mapActuelle.leHero.removeAllBullets();
            //window.requestAnimationFrame(anime);
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = ' #e60000';
            ctx.font = "900 24px Charcoal";
            ctx.fillText("Balles :" + mapActuelle.leHero.nbBullet, 600, 40);
            ctx.font = "900 80px Charcoal";
            ctx.fillText("TA DEAD SA SHAKAL", 200, 300);
            ctx.restore();

            setTimeout(win, 3000);
        }


        // On demande une nouvelle frame d'animation
        ctx.save();
        ctx.fillStyle = '#00001a';
        ctx.globalAlpha = 0.6;
        ctx.fillRect(5, 5, 100, 60);
        ctx.fillRect(580, 5, 130, 60);
        ctx.globalAlpha = 1;
        ctx.font = "900 24px Charcoal";
        ctx.fillStyle = ' #e60000';
        ctx.fillText("Menu", 30, 40);
        ctx.fillText("Balles :" + mapActuelle.leHero.nbBullet, 600, 40);
        ctx.restore();
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        menu();
    }
}

function animeEditor(callback) {
    if(test) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        // 2) On dessine et on déplace la direction du hero 1
        mapActuelle.leHero.drawObj(ctx);
        mapActuelle.leHero.moveM(mousepos);
        mapActuelle.mapInfo.map(c => {
            c.drawObj(ctx);

        });


        mapActuelle.mechants.map(c => {
            c.drawObj(ctx);
            nbMechant++;
        });
        window.requestAnimationFrame(animeEditor);
    }

}
function buttonMenu()
{
    if (((mousepos.x < (Math.floor(5) + Math.floor(100))
        && mousepos.x > 5) )) {

        if (((mousepos.y < Math.floor(5) + Math.floor(60)
            && mousepos.y > 5))) {

            quitter = true;

        }
    }
}

function lose(){
    mapActuelle = new Map(mapname);
    anime();
}
function win(){

    mapActuelle.leHero.removeAllBullets()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MenuJouer();
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

