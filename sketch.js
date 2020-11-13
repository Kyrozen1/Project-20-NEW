var car, wall;
var Deformation

function setup() {
  createCanvas(1250,400);
  var speed, weight;
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";
  wall = createSprite(1150, 200, 50, 350);

  Deformation = 0.5*weight*speed*speed/22500;
  
  console.log(Deformation)
  console.log(car.velocityX)
  console.log(weight)
}

function draw() {
  background("black");  
  car.depth=wall.depth;
  car.depth=car.depth+1;
  if(isTouching(car,wall)){
    car.velocityX=0;
    if(Deformation>180){
      car.shapeColor=color(255,0,0);
    }
    else if(Deformation>100 && Deformation<180){
      car.shapeColor=color(230,230,0);
    }
    else if(Deformation<100){
      car.shapeColor=color(23,206,17);
    }
  }
  drawSprites();
}