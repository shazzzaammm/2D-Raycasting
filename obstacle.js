class Wall {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

class Box {
  constructor(x, y, w, h) {
    this.top = new Wall(x - w / 2, y - h / 2, x + w / 2, y - h / 2);
    this.bottom = new Wall(x - w / 2, y + h / 2, x + w / 2, y + h / 2);
    this.left = new Wall(x - w / 2, y + h / 2, x - w / 2, y - h / 2);
    this.right = new Wall(x + w / 2, y + h / 2, x + w / 2, y - h / 2);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    fill(220, 20, 255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
  getWalls() {
    return [this.top, this.bottom, this.right, this.left];
  }
}
