class Caisse extends Objet {
    tailleX =40;
    tailleY = 50;
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
       // ctx.translate(-1*this.tailleX/2, -1*this.tailleY/2);

        // corps
        ctx.fillStyle = "red";
        ctx.color = "red";
        ctx.rotate(157);
        ctx.fillRect(0, 0, this.tailleX, this.tailleY);
        // canon


        ctx.restore();
    }

}