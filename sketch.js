

function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  drawAtor();
  drawCar();
  movCar();
  movAtor(); 
  respawnCar();
  verCollide();
  addPontos();
  drawPontos();
}

