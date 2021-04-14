
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  paperballImg = loadImage("pushballpic2.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground1 = new ground(400,680,800,10)

basketpart1 = new basket(600,670,150,10)
basketpart2 = new basket(675,625,10,80)
basketpart3 = new basket(525,625,10,80)

paperball=Bodies.circle(50,410,20)
World.add(world,paperball)



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);

  ground1.display();

  basketpart1.display();
  basketpart2.display();
  basketpart3.display();

  imageMode(CENTER)
  image( paperballImg,paperball.position.x,paperball.position.y,20,20)
  paperball.scale = 2

  drawSprites();

 
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
  }
}



