var x, y, v;

function setup() {
	createCanvas(500, 400);

  x = 0;
  x2 = 50;
  y = 200;
  y2 = 100;
  vx = 5;
  vx2 = 5;
  vy = 10;
  vy2 = 10;
}

function draw() {
	background(225);

  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  ellipse(x2,y2,50,50);
  x2 = x2 + vx2;
  y2 = y2 + vy2;

  if(x > 500 || x <= 0){
    vx = vx * -1;
  } 

  if(y > 400 || y <= 0){
    vy = vy * -1;
  }

  if(x2 > 500 || x2 <= 0){
    vx2 = vx2 * -1;
  } 

  if(y2 > 400 || y2 <= 0){
    vy2 = vy2 * -1;
  }
}