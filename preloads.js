//imagens e sonsdo jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let trilha;
let soundColisao;
let soundPonto;


function preload(){
  imagemEstrada = loadImage("images/estrada.png");
  imagemAtor = loadImage("images/ator-1.png");
  imagemCarro = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

  trilha = loadSound("sounds/trilha.mp3");
  soundColisao = loadSound("sounds/colidiu.mp3");
  soundPonto = loadSound("sounds/pontos.wav");
}
