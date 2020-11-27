class Box{
  constructor(x,y){
    var op={
      isStatic:false,
      restitution:0.8,
      friction:1.0,
      density:1.0

    }

    this.body=Bodies.rectangle(x,y,50,50,op);
    this.width=50;
    this.height=50;

    this.image=loadImage("sprites/square.jpg");
    
    World.add(world,this.body);     
    
    this.visibility=255;
  }

  display(){
      
      
    if(this.body.speed<3){
     imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
    else{
     World.remove(world,this.body);
  
     push();
     this.visibility=this.visibility-10;
     tint(255,this.visibility);
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
    }
  
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      SCORE++;

    }
  }

    
  
}