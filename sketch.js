const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box;
var stand;
var polygon, sling;

var stage, stage1;

var gameState;
	var held = 1;
	var threw = 0;

var bgImg, plygnImg;

function preload(){
	bgImg = loadImage("bg.png");
	plygnImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);

	gameState = held;

	engine = Engine.create();
	world = engine.world;

	box0 = new Box(486, 208, 30, 30);
	box1 = new Box(452, 208, 30, 30);
	box2 = new Box(520, 208, 30, 30);
	box3 = new Box(486, 162, 30, 30);
	
	box0s = new Box(486, 208+240, 30, 30);
	box1s = new Box(452, 208+240, 30, 30);
	box2s = new Box(520, 208+240, 30, 30);
	box3s = new Box(486, 162+240, 30, 30);

	var polygonOp={
		density: 10
	}

	polygon = Matter.Bodies.polygon(138, 310, 6, 20, polygonOp);
	World.add(world, polygon);

	sling = new rope(this.polygon, {x: 138, y: 252});

	// stage = new Ground(491, 232, 250, 20);
	stage = new Ground(491, 260, 250, 20);
	stage1 = new Ground(491, 500, 250, 20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(bgImg);
//  background(255);

  findMousePos();
  
  drawSprites();

  imageMode(CENTER);

  sling.show();
  stage.display();
  stage1.display();
  box0.display();
  box1.display();
  box2.display();
  box3.display();

  box0s.display();
  box1s.display();
  box2s.display();
  box3s.display();

  image(plygnImg, polygon.position.x, polygon.position.y, 100, 100);

  textSize(30);
  fill(0, 68, 194);
  stroke(15, 207, 255);
  strokeWeight(2);
  text("Click and Drag for moving the hexagon around!", 10, 50);
  text("Press Space to reset the hexagon!", 10, 100);
}

function findMousePos(){
	var argument;
	argument = 1;
	if(keyWentDown(32) && argument === 1){
		print("{"+"x: "+ mouseX + ", y: "+ mouseY+"}");
		argument = 0;
		argument = 1;
	}
}

function mouseDragged(){
	if(gameState === held){
		Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
	}
}

function mouseReleased(){
	sling.fly();
	gameState = threw;
}

function keyPressed(){
	if(keyCode === 32 && gameState === threw){
		sling.holdAgain(this.polygon);
		Matter.Body.setPosition(this.polygon, {x: 136, y: 300});
		Matter.Body.setVelocity(this.polygon, {x: 0, y: 0});
		gameState = held;
	}
}