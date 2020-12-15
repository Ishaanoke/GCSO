var car,wall;
var speed,weight,deformation;

function setup(){
    createCanvas(windowWidth,windowHeight);

    car=createSprite(50,50,60,30);
    wall=createSprite(windowWidth/2,50,50,100);

    speed=random(55,90);
    weight=random(400,1500);

car.velocityX=speed;

    deformation=(weight*speed*speed*0.5/22509);
}
function draw(){
background("Black");

if(car.collide(wall)){
    if(deformation<100){
        car.shapeColor=("Green");
    }
    if(deformation>100&&deformation<180){
        car.shapeColor=("Yellow");
    }
    if(deformation>180){
        car.shapeColor=("Red");
    }
}
drawSprites();
}