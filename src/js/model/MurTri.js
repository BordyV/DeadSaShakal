class MurTri extends Object {
    constructor(id, x,y, height, width) {


      super(id, x,y,height, width);
      this.id=id;
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      if(this.id == 201)
      {
      this.image = document.getElementById("angle1");
      }
  }

    drawObj(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.shadowBlur = 15;
      ctx.shadowColor = "black";
      if(this.surbrillance) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
      }

      ctx.drawImage(this.image, 0, 0,this.width,this.height);

      if(this.id == 201)
      {
        ctx.beginPath();
        ctx.moveTo(this.width, this.height);
        ctx.lineTo(this.height,-this.height);
        ctx.lineTo( this.width,-this.width);
        ctx.fill();
        }
      ctx.restore();

      


  }
}
