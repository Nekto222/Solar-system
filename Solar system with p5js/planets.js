function Planet(radius, color, speedAround, orbit, speedSelf, NAME) {
  this.radius = radius;
  this.color = color;
  this.rotateSelf = speedSelf;
  this.rotateAround = speedAround + random(360);
  this.orbit = 2 * orbit;

  this.show = function() {
    fill(`${this.color}`);
    this.rotateSelf += speedSelf;
    this.rotateAround += speedAround;

    push();
    rotateX(90);
    noFill();
    stroke(255, 255, 255, 120);
    for (let i = 0; i < 360; i += 10) {
      arc(0, 0, this.orbit * 2, this.orbit * 2, i - 5, i);
    }
    rotateX(-90);
    pop();

    rotateY(this.rotateAround);
    translate(this.orbit, 0, 0);
    rotateY(-this.rotateAround);
    rotateY(this.rotateSelf);

    texture(NAME);

    sphere(this.radius, 25);
    rotateY(-this.rotateSelf);
  }



}