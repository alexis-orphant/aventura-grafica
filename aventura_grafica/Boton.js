class Boton {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.w = 50;
    this.h= 50;
  }

  dibujar() {
    rectMode(CENTER);
    fill(255, 0, 0);
    ellipse(this.posX, this.posY, this.w, this.h);
  }

  click(btn) {
    if (dist(this.posX, this.posY, mouseX, mouseY) < 25 && btn == "left") {
      console.log("click boton");
    }
  }
}
