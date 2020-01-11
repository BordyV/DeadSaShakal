class MurTri extends Object {
    constructor(id, x,y, height, width) {


      super(id, x,y,height, width);
      this.id=id;
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.p1;
      this.p2;
      this.p3;
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


      if(this.id == 201)
      {
        this.p1 = [0, this.height];
        this.p2 = [this.width, this.height];
        this.p3  = [this.width, 0];

        ctx.beginPath();
        ctx.moveTo(0, this.height);
        ctx.lineTo(this.width,this.height);
        ctx.lineTo( this.width,0);
        ctx.fill();
        }

      ctx.drawImage(this.image, 0, 0,this.width,this.height);

        ctx.restore();

      


  }
}
