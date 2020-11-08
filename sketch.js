let x = 1;
let y = 1;
let easing = 0.1;

class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.5,0.5);
  }

  createParticle() {
    noStroke();
    fill(0,100,300);
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
  
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    
     
  let targetX = mouseX;
  let dx = targetX - this.x;
  this.x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - this.y;
  this.y += dy * easing;

  }
}

let particles = [];

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i<width/2 ;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background(237, 34, 93);
 

   for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }
  
 // ellipse(x, y, 66, 66);
}
