class Pipe{

    constructor(yParam, srcParam){

        this.x=500//canvas.width;
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

    movePipe = (secondsPassed) => {
        //console.log("pollito bajando");
        console.log("seconds passed: "+secondsPassed)
        this.x=this.x- this.speed*secondsPassed
        console.log("pipe X: "+this.x, "speed: "+this.speed, "seconds: "+secondsPassed)
    }

}