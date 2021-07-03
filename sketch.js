var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
}

function draw() 
{
  if(keyIsDown(DOWN_ARROW))
  {
    background('turquiose');
  }
  if(keyIsDown(UP_ARROW))
  {
    background('maroon');
  }
  if(keyIsDown( LEFT_ARROW))
  {
    background('purple');
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    background('black');
  }

  
  drawSprites();
}
