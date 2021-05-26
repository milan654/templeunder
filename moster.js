class Moster{
    constructor(X,Y,width,height){
        var option ={
            isStatic:true,
            restitution:0.5,
            friction:1.0,
    
        }
        this.body=Bodies.rectangle(x.y.width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("image/moster-01.png");
        World.add(world,this.body);
    }
    display(){
    push();
    Translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    Pop();
    } 
    }