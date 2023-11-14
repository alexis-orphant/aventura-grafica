class PantallaUnBoton {
  constructor(img,  btnX,  btnY, pant) {
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.btnX = btnX;
    this.btnY = btnY;
    this.pS = pant;
    this.boton = new Boton(this.btnX, this.btnY, 1);
  }

  dibujar() {
    image(this.img, 0, 0, this.ancho, this.alto)
    this.boton.dibujar();
  }

  click(btn) {
    this.boton.click(btn)
    //console.log(this.boton.click())
  }
 
}
