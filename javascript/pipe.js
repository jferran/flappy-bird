class Pipe{

    constructor(yParam, srcParam){

        this.x=canvas.width;
        this.y=yParam;
        this.w=50;
        this.h=250;

        this.img = new Image();
        this.img.src = srcParam
        this.speed=1;


    }

    drawPipe = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    movePipe = () => {
        //console.log("pollito bajando");
        this.x=this.x-this.speed
    }

}