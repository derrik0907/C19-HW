var x = 60;
var y = 480;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.04;

function setup() {
  createCanvas(1200, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background("white");
  var targetX = mouseX;
  x = x + (targetX - x) * easing;
  if (mouseIsPressed) {
    neckHeight = 16;
    BodyHeight = 90;
    fill("black");
    rect(x + 24, neckY - 16, 14, 14);

    rect(x - 14, neckY - 16, 14, 14);

  } else {
    neckHeight = 70;
    bodyHeight = 160;
    fill("white");
    rect(x + 24, neckY - 16, 14, 14);

    rect(x - 14, neckY - 16, 14, 14);

  }
  var neckY = y - bodyHeight - neckHeight - radius;


  stroke(100);
  line(x + 12, y - bodyHeight, x + 12, neckY);

  line(x + 12, neckY, x - 18, neckY - 98);
  line(x + 12, neckY, x + 42, neckY - 99);
  line(x + 12, neckY, x + 88, neckY + 1);
  line(x + 12, neckY, x - 68, neckY);
  line(x + 12, neckY, x - 48, neckY + 61);
  line(x + 12, neckY, x + 65, neckY + 71);
  noStroke();
  fill("blacK");
  ellipse(x, y - 33, 33, 33);
  fill("black");
  rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);

  fill("black");
  ellipse(x + 12, neckY, radius, radius);
  fill("white");
  rect(x + 24, neckY - 16, 14, 14);

  rect(x - 14, neckY - 16, 14, 14);

}
