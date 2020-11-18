var rect,movingRect;

function setup() {
  createCanvas(800,400);
rect = createSprite(200, 200, 50, 50);
movingRect = createSprite(400,200,80,30);
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  rect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";

  if(movingRect.x - rect.x < movingRect.width/2 + rect.width/2 && rect.x - movingRect.x < movingRect.width/2 + rect.width/2 && rect.y - movingRect.y < movingRect.height/2 + rect.height/2 && movingRect.y - rect.y < movingRect.height/2 + rect.height/2){
    rect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    rect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  drawSprites();
}