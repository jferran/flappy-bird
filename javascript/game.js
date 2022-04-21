console.log("desde el js Game")
class Game {
    
    constructor(){
        //todas nuestras propiedades del juego
        //1. el fondo

        this.bg = new Image()
        this.bg.src = "./images/bg.png" //quizas lo modifiquemos luego

        this.pollo = new Pollo();
        //this.pipe = new Pipe();
        this.pipeArr = [new Pipe(0, "./images/obstacle_top.png")]
        this.pipesSpace=canvas.width/2
        this.isGameOn=true
        this.score=0;
    }

    gameOverCollision = () => {

        
        this.pipeArr.forEach((pipe) =>{
            this.pollo


       


        if (this.pollo.x < pipe.x + pipe.w &&
            this.pollo.x + this.pollo.w > pipe.x &&
            this.pollo.y < pipe.y + pipe.h &&
            this.pollo.h + this.pollo.y > pipe.y) {
            // collision detected!
            //console.log("collision")

            //1game stop, 2 canvas disappears, 3 end screen appears


            this.isGameOn=false
            canvas.style.display='none';
            gameOverScreen.style.display="flex"
        }

        })

    }

    addNewPipes = () =>{
        if(this.pipeArr[this.pipeArr.length-1].x===this.pipesSpace) {

            let randomPositionChange = Math.random() * -100



            let newPipe = new Pipe(randomPositionChange, "./images/obstacle_top.png")
            this.pipeArr.push(newPipe)

            let newPipeDown = new Pipe(randomPositionChange+400, "./images/obstacle_bottom.png")
            this.pipeArr.push(newPipeDown)
        }

        //se podria hacer con setInterval cada tantos segundos, pero se tendria que invocar fuera del bucle
    }
    deletePipes = () =>{
        if(this.pipeArr[0].x+this.pipeArr[0].w<0) this.pipeArr.shift()
    }

    //todos los metodos que regulan nuestro juego, loop, colisiones, etc

    gameLoop = () => {
        //console.log("juego andando")
        
        // 1. borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // 2. acciones o movimiento de los elementos
        //metodo del pollito
        this.pollo.gravityPollo();
        //this.pipe.movePipe()
        this.addNewPipes();
        //check if pollito colides
        this.gameOverCollision()
        this.score=this.score+1/60
        scoreDOM.innerText=Math.floor(this.score)

        this.pipeArr.forEach((pipe) => {
            pipe.movePipe()
        })
        this.deletePipes()

        

        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        this.pollo.drawPollo()


        
        //this.pipe.drawPipe()
        this.pipeArr.forEach(pipe => pipe.drawPipe())

        // 4. control y recursion
        if(this.isGameOn) requestAnimationFrame(this.gameLoop)
    }




}