
let imgs = [];
let imagenesJuego = [];
let imgPng = [];
let lineas;
let aventura;

function preload() {

  for (let i=0; i < 17; i++) { //cargar imagenes Pantallas aventura
    imgs[i] = loadImage('data/imagen' +(i)+ '.JPEG');
  }
  
  for (let i=0; i < 4; i++) {// Pantallas Juego
    imagenesJuego[i] = loadImage('data/img' +(i)+ '.jpg');
  }

  for (let i=0; i < 3; i++) {// Pngs juegos
    imgPng[i] = loadImage('data/png' +(i)+ '.png');
  }

  lineas = loadStrings("data/textos.txt");//cargar archivo de texto
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.center();
  aventura = new Aventura();
}


function draw() {
  keyPressed();
  aventura.dibujar();
}

function mouseClicked() {
  aventura.click(mouseButton);
 //aventura.verPantalla = 1; //tengo que pasar este parametro de la clase a otro objeto para modificarla desde este ultimo
}
//CORREGIR ESTO PARA ABAJO. TIENE QUE PASAR POR AVENTURA PRIMERO
function keyPressed() {
  aventura.btnApretado(keyCode)
}

function keyTyped() {
  aventura.btnTipeado(keyCode)
}

/*function mousePressed() {
  if (aventura.pantallaActual == 0) {
    aventura.pantallaActual = 1;
  }
}*/
