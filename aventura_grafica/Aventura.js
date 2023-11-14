class Aventura {
  constructor() {
    this.pantallas = []
      this.cargarPantallas();
    //this.cantPantallas = 16;
    this.verPantalla = 0;
  }

  dibujar() {
    this.pantallas[this.verPantalla].dibujar();
  }

  cargarPantallas() {
    this.pantallas[0] = new PantallaUnBoton(imgs[0], 300, 360);
    this.pantallas[1] = new PantallaUnBoton(imgs[1], 200, 360);
    this.pantallas[2] = new PantallaDosBotones(imgs[2], 200, 360, 300,360);
    this.pantallas[3] = new PantallaUnBoton(imgs[11], 200, 360);//primer final
    this.pantallas[4] = new PantallaUnBoton(imgs[3], 200, 360);
    this.pantallas[5] = new PantallaDosBotones(imgs[4], 200, 360, 300,360);
    this.pantallas[6] = new PantallaUnBoton(imgs[12], 200, 360);//desvio a final 2
    this.pantallas[7] = new PantallaUnBoton(imgs[13], 200, 360);//segundo final
    this.pantallas[8] = new PantallaUnBoton(imgs[5], 200, 360);
    this.pantallas[9] = new PantallaUnBoton(imgs[6], 200, 360);
    this.pantallas[10] = new PantallaUnBoton(imgs[7], 200, 360);
    this.pantallas[11] = new PantallaUnBoton(imgs[16], 200, 360);
    //----JUEGO ---//
    //final despues de perder
    this.pantallas[12] = new PantallaUnBoton(imgs[8], 200, 360);//sigue por aca si gana
    this.pantallas[13] = new PantallaUnBoton(imgs[9], 200, 360);
    this.pantallas[14] = new PantallaUnBoton(imgs[10], 200, 360);// Final
  }
  
  click(btn){
    this.pantallas[this.verPantalla].click(btn)
    //console.log(this.verPantalla);
  }
}
