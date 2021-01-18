fR
mR

function setup() {
  createCanvas(windowWidth,windowHeight);

  fR=createSprite(width/2,height/2,100,100);
  fR.shapeColor="cyan"
  fR.debug=true

  mR=createSprite(width/2,100,100,100);
  mR.shapeColor="cyan"
  mR.debug=true
}

function draw() {
  background(0);  
  mR.x=mouseX
  mR.y=mouseY

  if (mR.x-fR.x<=fR.width/2+mR.width/2&&fR.x-mR.x<=fR.width/2+mR.width/2&&mR.y-fR.y<=fR.height/2+mR.height/2&&fR.y-mR.y<=fR.height/2+mR.height/2){
    mR.shapeColor="green"
    fR.shapeColor="green"
  }
  else{
    mR.shapeColor="cyan"
    fR.shapeColor="cyan"
  }

  drawSprites();
}