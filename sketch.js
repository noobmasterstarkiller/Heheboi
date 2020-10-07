var object2, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  someRect1 = createSprite(100,350,20,100)
  someRect1.shapeColor = "blue"
  someRect1.debug = true;
  someRect2 = createSprite(700,350,20,100)
  someRect2.shapeColor = "yellow"
  someRect2.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  someRect1.velocityX = +5
  someRect2.velocityX = -5
}

function draw() {
  background(0,0,0);  

  text(mouseX+","+mouseY,mouseX,mouseY);
  bounceup (someRect1, someRect2)
  bounceup (someRect1, movingRect)
  bounceup (movingRect, someRect2)



  bounceup (movingRect, fixedRect)
  drawSprites();
} 
 function bounceup(object1, object2) {
 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
 
  }

 }
