var object2, movingRect;

var rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);

  object2 = createSprite(600, 400, 50, 80);
  object2.shapeColor = "green";
  object2.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(700, 400, 75, 50);
  rect2 = createSprite(800, 400, 75, 50);
  rect3 = createSprite(900, 400, 75, 50);

  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  

  
  if (isTouching(rect2, rect1)){
    rect2.shapeColor = "yellow";
    rect1.shapeColor = "red";
  }
  
  else {
    rect2.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  
  if (isTouching(movingRect, rect2)) {
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "green";
  }

  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  drawSprites();
}