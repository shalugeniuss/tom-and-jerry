var tom ,jerry,garden,gardenImg;
var tomImg1,tomImg2,tomImg3,tomImg4;
var jerryImg1,jerryImg2,jerryImg3,jerryImg4;

function preload() {
    gardenImg = loadImage(garden.png);
    tomImg1 = loadImage(tomOne.png);
    tomImg2 = loadAnimation(tomTwo.png,tomThree.png);
    tomImg4 =  loadImage(tomFour.png);
    jerryImg1 = loadImage(jerryOne.png);
    jerryImg2 = loadAnimation(jerryImg2,jerryImg3);
    jerryImg4 = loadImage(jerryFour.png);

}

function setup(){
    createCanvas(1000,800);

    tom = createSprite (800,600,20,20);
    tom.addImage(tomImg1);

    jerry = createSprite(800,200,10,10 );
    jerry.addImage(jerryImg1);
    jerry.velocityX = 4;
    jerry.velocityY = 4;

}

function draw() {

    background(255);
   if(tom.x - jerry.x < (tom.width - jerry.width)/2){
   tom.changeImage(tomImg4);
   jerry.changeImage(jerryImg4);
   }

    drawSprites();
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.addAnimation("cat running",tomImg2);
  tom.changeAnimation("cat running");

  }
  
  if (keyCode === RIGHT_ARROW){
    tom.velocityX = 5;
    tom.addAnimation("cat running",tomImg2);
    tom.changeAnimation("cat running");
  
    }

    if (keyCode === UP_ARROW){
        tom.velocityY = -5;
        tom.addAnimation("cat running",tomImg2);
        tom.changeAnimation("cat running");
      
        }

        if (keyCode === DOWN_ARROW){
            tom.velocityY = 5;
            tom.addAnimation("cat running",tomImg2);
            tom.changeAnimation("cat running");
          
            }
}
