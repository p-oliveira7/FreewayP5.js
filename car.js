//código carro

//variáveis carros
let yCars = [40, 96, 150, 210, 270, 318];
let xCars = [600, 600, 600, 600, 600, 600];
let velCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let compriCarro = 50;
let alturaCarro = 40;

function drawCar(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCars[i], yCars[i], compriCarro, alturaCarro);
 }
}

function movCar(){
  for (let i = 0; i < imagemCarros.length; i = i + 1)
  {
  xCars[i] -= velCars[i];
  }
}

function respawnCar(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
      if(borderPass(xCars[i])){
        xCars[i] = 600;
      }
  }
 }

function borderPass(xCars){
  return xCars < -50;
}
