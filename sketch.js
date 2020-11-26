const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1, mango2, mango3;
var stoneObj;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  stoneObj = new stone(235, 420, 30);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 });
    launcherObject.attach(stoneObj.body);
  }
}
