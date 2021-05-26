class Superhero{
    constructor(X,Y,width,height){
        var option ={
            isStatic:false,
            restitution:0.5,
            friction:1.0,
            density:1.2
    
        }
        this.body=Bodies.rectangle(x.y.width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("image/Superhero-01.png");
        World.add(world,this.body);
    }
    display(){
 var angle=this.body.angle;
    var pos=this.body.position;
    push();
    Translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    Pop();
    } 
    }