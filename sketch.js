const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options = 
  {
    isStatic : true
  }
  ground=Bodies.rectangle(400, height, 800, 20, ground_options);
  World.add(world, ground);

  
  var ball_options = 
  {
    restitution : 1 
  }

  ball=Bodies.circle(200, 200, 40, ball_options);
  World.add(world, ball);

  console.log(ground);
  console.log(ground.position);
  console.log(ground.position.x);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  fill("brown")
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 800, 20);
  
  fill("turquoise")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40)
  
}