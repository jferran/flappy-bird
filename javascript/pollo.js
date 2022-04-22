class Pollo {
    constructor() {

        this.x=40;
        this.y=40;
        this.w=50;
        this.h=40;

        this.img = new Image();
        this.img.src = "./images/flappy.png"
        this.speed=100;
        this.jumpSpeed=30
    }

    drawPollo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    //metodo para hacer que el pollo se mueva hacia abajo
    gravityPollo = (secondsPassed) => {
        //console.log("pollito bajando");
        if((this.y+ this.speed*secondsPassed )<canvas.height-this.h) {
            this.y=this.y+ this.speed*secondsPassed
        }
        else {
            this.y=canvas.height-this.h
        }
    }

    jumpPollo = () => {
        if(this.y-this.jumpSpeed>0) this.y=this.y-this.jumpSpeed
        else this.y=0
        console.log("pollo")
    }
}