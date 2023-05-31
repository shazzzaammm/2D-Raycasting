class Ray {
  constructor(position, angle) {
    this.position = position;
    //make vector stare at angle
    this.dir = p5.Vector.fromAngle(angle);
  }

  show() {
    stroke(255);
    push();
    translate(this.position.x, this.position.y);
    line(0, 0, this.dir.x * 20, this.dir.y * 20);
    pop();
  }
  //omg just like the unity Physics2D.raycast!!!!!!1!!1!!
  cast(wall) {
    const x1 = wall.a.x;
    const x2 = wall.b.x;
    const y1 = wall.a.y;
    const y2 = wall.b.y;

    const x3 = this.position.x;
    const x4 = this.position.x + this.dir.x;
    const y3 = this.position.y;
    const y4 = this.position.y + this.dir.y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    // 0 means parallel line which is L
    if (denominator === 0) {
      return;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u =
      (-1 * ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3))) / denominator;
    if (t > 0 && t < 1 && u > 0) {
      //return hit.point (yes i use unity alot shut up <3)
      let v = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
      return v;
    } else {
      return;
    }
  }
  setDirection(x, y) {
    this.dir.x = x - this.position.x;
    this.dir.y = y - this.position.y;
    this.dir.normalize();
  }
}
