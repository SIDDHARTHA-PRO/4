var lizard,lizardImage,bgImage,lizaImage,liza,eggImage,egg
var slizaI
function preload(){
  lizardImage=loadImage("liza.png")
  bgImage=loadImage("bg.png")
  lizaImage=loadImage("liza.png")
  eggImage=loadImage("egg.png")
  slizaI=loadImage("liza.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);

  lizard=createSprite(displayWidth/2-400,displayHeight/2)
  lizard.addImage("lizard",lizardImage)
  lizard.velocityX=+5

  liza=createSprite(displayWidth/2-400,displayHeight/2)
  liza.addImage("liza",lizaImage)
  liza.scale=0.5
  
  edges=createEdgeSprites()
}

function draw() {
  background(rgb(198,135,103));
      image(bgImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
  
 
  if(keyDown(RIGHT_ARROW)) {
    liza.x=liza.x+5
  }
 

 
  
  drawSprites();
}
