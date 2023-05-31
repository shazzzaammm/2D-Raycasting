const walls = [];
const boxes = [];
let particle;
let noiseXOff = 0;
let noiseYOff = 1000;
let x = 0;
let y = -1000;
let randomizeMovement = true;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 0; i++) {
    walls.push(
      new Wall(random(width), random(height), random(width), random(height))
    );
  }
  for (let i = 0; i < 20; i++) {
    const b = new Box(
      random(width),
      random(height),
      random(20, 50),
      random(20, 50)
    );
    boxes.push(b);
    w = b.getWalls();
    for (const wal of w) {
      walls.push(wal);
    }
  }

  walls.push(new Wall(width, 0, 0, 0));
  walls.push(new Wall(width, height, 0, height));
  walls.push(new Wall(width, 0, width, height));
  walls.push(new Wall(0, 0, 0, height));
  particle = new Particle(width / 2, height / 2);
}

function draw() {
  background(0);
  particle.show();
  for (const w of walls) {
    w.show();
  }
  for (const b of boxes) {
    b.show();
  }
  particle.lookFor(walls);
  let newX;
  let newY;
  if (randomizeMovement) {
    newX = noise(noiseXOff) * width;
    newY = noise(noiseYOff) * height;
  } else {
    newX = mouseX;
    newY = mouseY;
  }
  x = lerp(x, newX, 0.25);
  y = lerp(y, newY, 0.25);
  particle.updatePosition(x, y);
  noiseXOff += 0.0025;
  noiseYOff += 0.0025;
}
function mousePressed() {
  randomizeMovement = !randomizeMovement;
}
