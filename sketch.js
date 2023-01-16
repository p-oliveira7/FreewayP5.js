

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  drawAtor();
  drawCar();
  movCar();
  movAtor(); 
  respawnCar();
  verCollide();
}

