const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var pop1,pop2,pop3,pop4,pop5;
var bc;





function preload() {
  backgroundImg = loadImage("bc.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  bc = createImg('bc.jpg');
  bc.position(20,30);
  bc.size(910,900);
 
  pop1=new ball(10,10,55,66)
  
}

function draw() {
  Engine.update(engine);
  pop1.display();


  background();  
  drawSprites();
}