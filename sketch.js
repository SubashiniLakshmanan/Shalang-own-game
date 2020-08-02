var canvas
var backgroundimage
var gamestate = "intro"
var goodmissileman, goodrifle, goodsniper, goodtank
var badmissileman, badrifle, badsniper, badtank
var badbullet, badmissile, cannonball, goodbullet, goodmissile
var halfsmileleader, mouthopenleader,notalkleader, smileleader
var backdropimage
var video
var bulletGroup
var lally1, lally2, lally3, lally4
var lobs1, lobs2, lobs3, lobs4
var count = 0
var stage
var lobs1Group, lobs2Group, lobs3Group,lobs4Group
var select_enemy

function preload (){
  lvl1ally1 = loadImage ("goodmissileman.png")
  /*lvl1ally2 = loadImage ("good army/goodrifle.png")  
  lvl1ally3 = loadImage("good army/goodsniper.png")
  lvl1ally4 = loadImage ("good army/goodtank.png")*/

  lvl1obs1 = loadImage ("badmissileman.png")
  lvl1obs2 = loadImage("badrifle.png")
  lvl1obs3 = loadImage("badsniper.png")
  lvl1obs4 = loadImage("badtanker.png")

  goodbulletimg = loadImage("goodbullet.png")

  leadertalking = loadAnimation ("notalkleader.png","notalkleader.png", "mouthopenleader.png", "halfsmileleader.png",)

  backdropimage = loadImage("war image day.png")
 

}

 

function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight-110);
  stage = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  stage.addImage("stage",backdropimage)
  stage.scale = 4
lobs1Group = createGroup();
lobs2Group = createGroup();
lobs3Group = createGroup();
lobs4Group = createGroup();
 
   

  
  bulletGroup = new Group()

lally1 = createSprite(300,700,5,10);
lally1.addImage("good army",lvl1ally1)
lally1.visible = false
lally1.scale = 0.8

}
function draw(){



  background("green")
  stage.velocityX = -3
  drawSprites()
  console.log(count)

    if (stage.x < 0) {
      stage.x = stage.width/2;

    }

  if (gamestate === "intro"){
    intro();

    if(keyDown("space")){
      gamestate = "lvl1"
    }

  }
  
  fill("white")
    text("SCORE" + count, displayWidth/2,displayHeight/2)   

  if (gamestate === "lvl1"){
    
    lally1.visible = true

    if (keyDown("space")) {
      createBullet(lally1.x,lally1.y);
  }

  select_enemy = math.round(random(0,3));
    
  if (frameCount % 300 === 0) {
    if (select_enemy == 0) {
      createlobs1(count);
    } 
    else if (select_enemy == 1) {
      createlobs2(count);
    }
     else if (select_enemy == 2) {
      createlobs3(count);
    }
     else {
      createlobs4(count);
    }
  }


  if (bulletGroup.isTouching(lobs1Group)) {
    lobs1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
  //playSound("sound://category_hits/8bit_splat.mp3", false);
    
  } 
  else if (bulletGroup.isTouching(lobs2Group)) {
    lobs2Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 4;
    //playSound("sound://category_hits/8bit_splat.mp3", false);
    
  } 
  else if (bulletGroup.isTouching(lobs3Group)) {
    lobs3Group.destroyEach();
    bulletGroup.destroyEach(); 
    score = score + 6;
  //playSound("sound://category_hits/8bit_splat.mp3", false);
    
  }
   else if (bulletGroup.isTouching(lobs4Group)) {
    lobs4Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 8;
  // playSound("sound://category_hits/8bit_splat.mp3", false);
  }
  

  
}
//console.log(frameCount)
}



function intro(){
  
  animation(leadertalking, 1200,680)
 
 text("namste bhaisab. kaise ho? hum toh kushal hai. ",100,100)
 var button = createButton('play')
 button.position(400,400 )
 button.mousePressed(function(){
   gameState = "lvl1"
   button.hide();
 })
  
}

function createBullet(x,y) {
  if (frameCount% 60 ===0){

  
  var bullet= createSprite(200, 500, 5, 10);
  bullet.addImage("bullet",goodbulletimg)
  bullet.scale = 0.5;
  bullet.y = y - 35;
  bullet.x = x;                                           
  bullet.shapeColor = "blue";
  bullet.velocityX = 6;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}

}

//creates enemies
function createlobs1(score) {

  lobs1 = createSprite(displayWidth,displayHeight-250,5,10);
  lobs1.addImage("enemy army",lvl1obs1)
  lobs1.scale = 0.8
  lobs1.velocityX = -(0.7+score/10);
  lobs1.lifetime = 1000;
  lobs1Group.add(lobs1);
  
}
//creates enemies
function createlobs2(score) {

  lobs2 = createSprite(displayWidth,displayHeight-250,5,10);
 lobs2.addImage("enemy army",lvl1obs2) 
 lobs2.scale = 0.8
 
 lobs2.velocityX = -(0.8+score/10);
 lobs2.lifetime = 1000;
 lobs2Group.add(lobs2);
 
}
//creates enemies
function createlobs3(score) {
 
  lobs3 = createSprite(displayWidth,displayHeight-250,5,10);
lobs3.addImage("enemy army",lvl1obs3)
lobs3.scale = 0.8
lobs3.velocityX = -(1.0+score/10);
lobs3.lifetime = 1000;
lobs3Group.add(lobs3);
  
}
function createlobs4(score) {

  lobs4 = createSprite(displayWidth,displayHeight-250,5,10);
  lobs4.addImage("enemy  army",lvl1obs4)
  lobs4.scale = 0.8
  lobs4.velocityX = -(0.7+score/10);
  lobs4.lifetime = 1000;
  lobs4Group.add(lobs4);

}