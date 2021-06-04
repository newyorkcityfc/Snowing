var snow, snow2Img, snow4Img, snow5Img;

function setup() {
  createCanvas(800,400);
// createSprite(400, 200, 50, 50);
}

function preload() {
  snow2Img = loadImage ("snow2.jpg");
  snow4Img = loadImage ("snow4.webp");
  snow5Img = loadImage ("snow5.webp");
}

function draw() {
  background(5255,255,25);  
  background(snow2Img);

  if (frameCount%60===0){
    snow4Img.push((random(width/2-30,width/2+30),10,10));
    score++;
  } 
  drawSprites();
} 