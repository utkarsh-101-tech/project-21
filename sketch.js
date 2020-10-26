var bullet,wall;
var speed,weight;
var thickness,damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,75,25);
  bullet.shapeColor=color(255,223,0);

  wall = createSprite(1200,200,thickness,canvas.height/2);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);

  speed = random(223,321);
  weight = random(30,52);
 bullet.visible=true;
  bullet.velocityX= speed;
}

function draw()
 {
  background(255,255,255);  
 
  if(bullet.isTouching(wall))
  {
   bullet.velocityX=0;
   damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  else
  {
    wall.shapeColor=color(0,255,0);
  } 
  } 
  
  drawSprites();
}