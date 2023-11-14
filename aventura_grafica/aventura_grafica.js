
let imgs = [];
let lineas;
let aventura;

function preload() {

  for (let i=0; i < 17; i++) { //cargar imagenes
    imgs[i] = loadImage('data/imagen' +(i)+ '.JPEG');
  }

  lineas = loadStrings("data/textos.txt");//cargar archivo de texto
}

function setup() {
  aventura = new Aventura();
  let cnv = createCanvas(600, 400);
  cnv.center();
}


function draw() {
  aventura.dibujar();
}

function mouseClicked() {
  aventura.click(mouseButton);
 //aventura.verPantalla = 1; //tengo que pasar este parametro de la clase a otro objeto para modificarla desde este ultimo
}
