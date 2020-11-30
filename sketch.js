var wall,bullet;

function setup(){
     createCanvas(1600,400)

     speed=random(55,90)
     weight=random(400,1500)

     wall = createSprite(1300,200,30,200);
     wall.shapeColor=color(255);

     bullet = createSprite(200,200,50,20);
     bullet.shapeColor=color(255);
     bullet.velocityX = speed;

}

function draw(){
     background(0)

     if (bullet.isTouching(wall)){
     bullet.velocityX = 0;
     }

     bullet.depth = 2.0;

     if(wall.x-bullet.x < (bullet.width+wall.width)/2)
     {
     bullet.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22509;
     if(deformation>180)
     {
          bullet.shapeColor=color(255,0,0);
     }

     if(deformation<180 && deformation>100)
     {
          bullet.shapeColor=color(255,0,0)
     }

     if(deformation<100)
     {
          bullet.shapeColor=color(0,255,0)
     }
     }

     drawSprites();
}