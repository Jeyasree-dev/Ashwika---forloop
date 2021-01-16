const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes=[]




function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1000,20);
    
/* for(var i=50;i<600;i=i+50){

    box.push(new Box(700,i,70,70))
 }*/

 for (var k = 0; k<= 200; k=k+20) {
  boxes.push(new Box(700, k, 70, 70));
}
 /*box1= new Box(700,100,70,70)
 box2= new Box(700,100,70,70)
 box3= new Box(700,100,70,70)
 box4= new Box(700,100,70,70)
 box5= new Box(700,100,70,70)
 box6= new Box(700,100,70,70)
 box7= new Box(700,100,70,70)
 box8= new Box(700,100,70,70)*/
 ball= new Ball(100,500,70,70)
rope= new Slingshot(ball.body,{x:500,y:50})
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    strokeWeight(4);
    ground.display()
    for( var i=0;i<boxes.length;i++){

        boxes[i].display()
    }
  
 /* box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()*/
  ball.display()
  rope.display()
 
   
}

function mouseDragged(){

   



}

function mouseReleased(){




}
