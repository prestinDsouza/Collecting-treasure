var PLAY=0;
var END=1;
var gameState=0;
var path,boy,cash,diamonds,jwellery,sword,end;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.setCollider("circle",5,0,500);
end=createSprite(200,100);
end.addImage("Itisallover",endImg);
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
}

function draw() {

  background(0);
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
 
  
    

   
if(gameState===PLAY)
{
end.visible=false;
 if (cashG.isTouching(boy)) {
      cashG.destroyEach();
treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;

    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;

    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState=END 
}
  }
createCash();
    createDiamonds();
    createJwellery();
    createSword();
boy.x = World.mouseX

 if(path.y > 400 ){
    path.y = height/2;
  }
}

if(gameState===END)
{
end.visible=true;
boy.visible=false;
path.velocityY=0;
cashG.setLifetimeEach(-1);
diamondsG.setLifetimeEach(-1);
jwelleryG.setLifetimeEach(-1);
swordGroup.setLifetimeEach(-1);
}
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 130;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 130;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 130;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 130;
  swordGroup.add(sword);
  }
}