class Ball{
 constructor(x,y,w,h,vx,vy,_color){
   this.x = x;
   this.y = y;
   this.width= w;
   this.height = h;
   this.vx = vx;
   this.vy = vy;
   this.color = _color;
 }
 
 draw(){
  fill(this.color)
  ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x > 500 || this.x <= 0){
      this.vx = this.vx * -1;
    } 

    if(this.y > 400 || this.y <= 0){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3;

function setup() {
	createCanvas(500, 400);
  ball1 = new Ball(300,200,50,50,5,5,"lightblue");
  ball2 = new Ball(30,200,50,50,15,5,"lightyellow");
  ball3 = new Ball(30,200,50,50,5,5,"lightgreen");
}

function draw() {
	background(224, 187, 228)
  ball1.draw();
  ball2.draw();
  ball3.draw();
}