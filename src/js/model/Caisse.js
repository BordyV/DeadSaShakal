class Caisse extends Objet {
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.translate(-10, -10);

        // corps
        ctx.fillStyle = "red";
        ctx.color = "red";
        ctx.fillRect(0, 0, 20, 20);
        // canon


        ctx.restore();
    }

}