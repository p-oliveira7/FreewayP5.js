//código do ator

//variáveis Ator
let yAtor = 366
let xAtor = 100

function drawAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verCollide(){
  //collideRectCircle(x1, y1, width1, height1, cs, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i +1) {
    colisao = collideRectCircle(xCars[i], yCars[i],compriCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
}