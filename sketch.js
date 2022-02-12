
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var plane;
var block1;
var block2;
var block3;

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = Engine.world;

	//Crie os Corpos Aqui.

	var block1_options = {
       restitution : 0.5,
	   friction : 0.02,
       frictionAir : 0.1
	};

	var block2_options={
       restitution : 0.7,
	   friction : 0.01,
	   frictionAir : 0.1
	};

	var block3_options={
       restitution : 0.01,
	   friction : 1,
	   frictionAir : 0.3
	};

    var plane_options={
		isStatic: true
	};



	plane = Bodies.rectangle(200,250,400,20,plane_options);
    World.add(world,plane); 

	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	Engine.run(Engine);
  



	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {

  Engine.update(Engine);

  background("green");

  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,50);
  rect(block3.position.x,block3.position.y,20);
  rect(plane.position.x,plane.position.y,400,20)
 
}



