class PantallaDosBotones {
  constructor(img, btnUnoX, btnUnoY, btnDosX, btnDosY) {
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.botonUno = new Boton(btnUnoX, btnUnoY);
    this.BotonDos = new Boton(btnDosX, btnDosY);
  }

  dibujar() {
    image(this.img, 0, 0, this.ancho, this.alto)
    this.botonUno.dibujar();
    this.BotonDos.dibujar();
  }

  click(btn) {
    this.botonUno.click(btn)
    this.BotonDos.click(btn)
    //console.log(this.boton.click())
  }
}
