const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Mtter.Bodies;
const Body=Matter.Body

  function setup() {
createCanvas(400,400);
Engine=Engine.create();
world=engine.world; 
var ball_options={
restitution:0.95,
frictionAir:0.01
}

var ground_options={
isStatic:true
};

ball=Bodies.circle(200, 10, 20, ball_options);
World.add(world, ball);
ground=Bodies.rectangle(200, 350, 400, 20, ground_options);
rectMode(CENTER);
ellipseMode(RADIOUS);



}

   function draw() {
background("green");
Engine.update(engine);

ellipse(ball.position.x, ball.position,y, 20);
rect(ground,position.x, ground.position.y, 400, 20);
  
  
}

