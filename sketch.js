var left_Boundary, right_Boundary;  
var path, pathImg; 
var Boy, BoyImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  BoyImg = loadAnimation("Runner-1.png" , "Runner-2.png");
}
function setup(){
  createCanvas(400,400);
  //create sprites here

  //moving background
  path = createSprite(200, 200);
  path.addImage("path", pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //creating a boy sprite
Boy = createSprite(180, 335, 10, 10);
Boy.scale = 0.08;
Boy.addAnimation("running",BoyImg);

//create left boundary
left_Boundary = createSprite(0, 300, 100, 600);
left_Boundary.visible = false;

//create right boundary
right_Boundary = createSprite(380, 300, 65, 600);
right_Boundary.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;

  //Boy moving on Xaxis with mouse
  Boy.x = World.mouseX;

  edges = createEdgeSprites();
  Boy.collide(edges[3]);
  Boy.collide(left_Boundary);
  Boy.collide(right_Boundary);

  //code to reset the background
  if(path.y > 400){
    path.y = height/3;
  }
 drawSprites();
}