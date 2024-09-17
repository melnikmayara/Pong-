//variaveis bolinha

let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;

let posicaoHorizontal//x
let posicaoVertical//y

let velocidadexBolinha = 5;
let velocidadeyBolinha = 6;

// variaveis minharaquete 

let xRaqueteJogador = 5;
let yRaqueteJogador = 15;
let larguraRaqueteJogador = 10;
let alturaRaqueteJogador = 90;

// colisao

let colidiu = false; 

// variaveis raquete oponente 

let xRaqueteOponente = 385;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 90;

//


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostreBolinha();
  movimentaBolinha();
  verificaColisao();
  mostreRaqueteJogador(); 
  movimentaRaqueteJogador();
  verificaColisaoRaqueteJogador();
  mostraRaqueteOponente();
  movimentaRaqueteOponente ();
}

function mostreBolinha() {
   fill ("red");
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha (){
  xBolinha+= velocidadexBolinha;
  yBolinha+= velocidadeyBolinha;
}

function verificaColisao (){
  if (xBolinha > width || xBolinha < 0) {
    velocidadexBolinha *= -1 ; 
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeyBolinha *= -1 ; 
  }
}

function mostreRaqueteJogador () {
 fill ("pink") 
  stroke ("red") 
  rect (xRaqueteJogador, yRaqueteJogador, larguraRaqueteJogador, alturaRaqueteJogador);
  
}

function movimentaRaqueteJogador (){
  if (keyIsDown(UP_ARROW)) {
    yRaqueteJogador -= 10; 
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteJogador += 10; 
  }
}

function verificaColisaoRaqueteJogador (){

  colidiu = collideRectCircle (
  xRaqueteJogador,
  yRaqueteJogador,
  larguraRaqueteJogador,
  alturaRaqueteJogador,
  xBolinha,
  yBolinha,
  diametro / 2) ;

  if (colidiu==true) {
    velocidadexBolinha *= -1 ;
  }
}

function mostraRaqueteOponente () {
fill ("blue");
stroke ('pink');
   rect (xRaqueteOponente,
         yRaqueteOponente, 
         larguraRaqueteOponente,
         alturaRaqueteOponente);
}

function movimentaRaqueteOponente() {
  velocidadeyOponente = yBolinha - yRaqueteOponente - alturaRaqueteOponente/2 - 30;
  
  yRaqueteOponente+= velocidadeyOponente;
}
function verificaColisaoRaqueteOponente (){

  colidiu = collideRectCircle (
  xRaqueteJogador,
  yRaqueteJogador,
  larguraRaqueteOponente,
  alturaRaqueteOponente,
  xBolinha,
  yBolinha,
  diametro / 2) ;

  if (colidiu==true) {
    velocidadexBolinha *= -1 ;
  }
}
