let img;

function preload()
{
  img = loadImage("Tex.png");
}

function setup() {
  createCanvas(500,500, WEBGL);
}

let deltaTime = 0;

function draw() {
  background(0);
  
  rotateY(-mouseX * 0.01 + deltaTime);
  rotateZ(mouseY * 0.01 + deltaTime);
  texture(img);
  box(100);
  
  deltaTime += 0.01;
}
