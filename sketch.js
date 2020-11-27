const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17;
var ground;
var chain;
var polygon;
var SCORE=0;
var bg;
var backgroundImg;

function preload(){

changeBg();

}

function setup() {
  
  engine=Engine.create();
  world= engine.world;
  createCanvas(1400,700);

  polygon=new Polygon(160,50);

  box1=new Box(300,275);
  box3=new Box(330,275);
  box4=new Box(360,275);
  box5=new Box(390,275);
  box6=new Box(420,275);
  box7=new Box(450,275);
  box8=new Box(480,275);

  box9=new Box(330,235);
  box10=new Box(360,235);
  box11=new Box(390,235);
  box12=new Box(420,235);
  box13=new Box(450,235);

  box14=new Box(360,195);
  box15=new Box(390,195);
  box16=new Box(420,195);

  box17=new Box(390,155);

  ground=new Ground(380,310,320,30);

  chain = new SlingShot(polygon.body,{x:175, y:50});



  }

function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  Engine.update(engine);
  text("SCORE:"+SCORE,900,50);
  ground.display();

  box1.display();
  //box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  chain.display(); 

  polygon.display(); 

  box1.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();

}
function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x:350,y:535})
		chain.attach(polygon.body);
	}
}

async function changeBg(){
  var time=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var reply=await time.json();
  var d=reply.datetime;
  var hour=d.slice(11,13);

  if(hour>=06 && hour<=18){
      bg="sprites/yellow.jpg";

  }
  else {
      bg="sprites/dblue.png";


  }
  backgroundImg=loadImage(bg);

}


