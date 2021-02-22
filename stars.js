function Star() {

  this.pos = createVector(random(-10000, 10000), random(-10000, 10000), random(-10000, 10000));


  while (dist(0,0,0,this.pos.x,this.pos.y,this.pos.z) < 3000) {
    this.pos.x = random(-10000, 10000);
    this.pos.y = random(-10000, 10000);
    this.pos.z = random(-10000, 10000);
  }
  this.col = color(255);
  this.size = random(15, 20);
  this.sizeChange = random(0.2,0.6);
  // this.size = map(
  //   dist(0, 0, 0, this.pos.x, this.pos.y, this.pos.z),
  //   0,
  //   dist(0, 0, 0, 10000, 10000, 10000),
  //   5,
  //   2,
  //   true);

  //   this.show = function() {
  //     push();
  //     stroke(random(128, 255), random(200, 255), random(200, 255), 255);

  //     strokeWeight(this.size);

  //     beginShape(POINTS);
  //     vertex(this.pos.x, this.pos.y, this.pos.z);
  //     endShape();
  //     pop();
  //   }

  this.showNew = function() {
    if (this.size < 25 & this.size > 15) {
      this.size += this.sizeChange;
    } else {
      this.sizeChange = -this.sizeChange;
      this.size += this.sizeChange;
    }



    push();
    noStroke();
    fill(this.col);
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(this.size);
    pop();
  }

}