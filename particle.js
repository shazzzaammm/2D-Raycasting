class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.rays = [];
    for (let angle = 0; angle < 360; angle += 0.25) {
      this.rays.push(new Ray(this.position, radians(angle)));
    }
  }
  show() {
    fill(255);
    // circle(this.position.x, this.position.y, 20);
  }
  updatePosition(x, y) {
    this.position.set(x, y);
  }
  lookFor(walls) {
    //ok so like look at each ray
    for (const ray of this.rays) {
      let closestPoint = null;
      let closestDistance = Infinity;
      //shoot ray at each wall
      for (const w of walls) {
        const hit = ray.cast(w);
        //if ray hits check if taht ray is closest one
        if (hit) {
          let distance = p5.Vector.dist(this.position, hit);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestPoint = hit;
          }
        }
      }
      //if it hit somethinmg draw the closest one
      if (closestPoint) {
        stroke(255, 100);
        strokeWeight(1);
        line(closestPoint.x, closestPoint.y, this.position.x, this.position.y);
      }
    }
  }
}
