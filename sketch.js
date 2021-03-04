var car,wall;
var speed,weight;
var deform;

function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;


}

function draw() {
  background(255,255,255); 
  

  if(wall.x - car.x < car.width/2 + wall.width/2 && 
    car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.y - car.y < car.height/2 + wall.height/2 &&
    car.y - wall.y < car.height/2+wall.height/2){

      car.collide(wall);
      car.velocityX = 0;
      deform=0.5*weight*speed*speed/22500;

      if(deform<100){
        car.shapeColor = "green";
      }
      if(deform>100 && deform<180){
        car.shapeColor = "yellow";
      }
      if(deform>180){
        car.shapeColor = "red";
      }
    }
  
  drawSprites();
}