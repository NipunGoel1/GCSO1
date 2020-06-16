var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1600,800);
car = createSprite(100, 400, 50, 50);
wall = createSprite(1500,400,60,height/2);
speed = random(50,114);
weight = random(400,1500);
car.velocityX  = speed/5;
deformation = (weight*speed*speed*0.5)/22500;

}

function draw() {
  background(0,0,0); 
  car.shapeColor = "white";
  wall.shapeColor=(80,80,80);
  
  if(car.x >= 1440){
    car.velocityX = 0;

  if(deformation <=100 ){
  car.shapeColor = "green";
  }else if(deformation<=180){
    car.shapeColor = "yellow";
  }else{
    car.shapeColor = "red";
  }
}
  drawSprites();
}