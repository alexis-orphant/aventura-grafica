class PantallaUnBoton {
  constructor(img,  btnX,  btnY, obj) {
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.btnX = btnX;
    this.btnY = btnY;
    this.Objeto = obj;
    this.boton = new Boton(this.btnX, this.btnY, 1);
  }

  dibujar() {
    image(this.img, 0, 0, this.ancho, this.alto)
    this.boton.dibujar();
  }

  click(btn) {
    this.boton.click(btn)
  }
 
}
