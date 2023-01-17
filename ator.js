//código do ator

//variáveis Ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function drawAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(inBorderLimit())
      yAtor += 3;
  }
}

function inBorderLimit(){
  return yAtor < 366
}

function verCollide(){
  //collideRectCircle(x1, y1, width1, height1, cs, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCars[i], yCars[i],compriCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      respawnAtor();
      soundColisao.play();
      veriPontos();
    }
  }
}

function veriPontos(){
  if (meusPontos > 0){
    meusPontos -= 1;
  }
}

function respawnAtor(){
  yAtor = 366;
}

function drawPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 200, 80));
  text(meusPontos, width / 5, 27);
}

function addPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    soundPonto.play();
    respawnAtor();
}

  
  
}