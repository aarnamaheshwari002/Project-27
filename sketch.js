
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300, 600, 30/2);
	bobObject2 = new Bob(330, 600, 30/2);
	bobObject3 = new Bob(360, 600, 30/2);
	bobObject4 = new Bob(390, 600, 30/2);
	bobObject5 = new Bob(420, 600, 30/2);

	roof1 = new roof(370, 400, 170, 20);

	rope1 = new rope(bobObject1.body, roof.body, -bobObject1.diameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

roof1.display();

  drawSprites();
 
}



