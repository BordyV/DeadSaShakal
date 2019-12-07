window.onload = init;

function anime() {
  
    // 1) On efface l'ecran
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2) On dessine et on déplace la direction du hero 1
     hero1.draw(ctx);
     hero1.move(mousepos);
     mechant1.draw(ctx);
    mur1.draw(ctx);
     for(let i = 0; i < lesMurs.length; i++) {
        let lemur = lesMurs[i];
        lemur.draw(ctx);
      }


    if(inputStates.SPACE) {
      hero1.addBullet(Date.now()); 
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

