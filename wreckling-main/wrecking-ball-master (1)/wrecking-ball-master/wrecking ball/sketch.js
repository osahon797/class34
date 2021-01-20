const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
box1=new Box(600,500,100,100)
box2=new Box(600,400,100,100)
box3=new Box(700,500,100,100)
box4=new Box(700,400,100,100)
box5=new Box(600,300,100,100)
box6=new Box(700,300,100,100)

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  
  

  ball.display();
  rope.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
}



function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


