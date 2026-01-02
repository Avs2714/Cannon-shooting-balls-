let balls=[];
let count=0;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
  background(220);

  if(frameCount%10===0)
    {
       if(count<3)
         {
          balls.push(new Ball());
          count++;
         } 
      }    
    
  for(let i=0;i<balls.length;i++)
    {      
    let gravity=createVector(0,1);
    balls[i].applyForce(gravity);
    balls[i].update();
    balls[i].checkEdges();
    balls[i].show();
    
    }
}
class Ball{
  constructor()
  {
    this.pos=createVector(350,350);
    this.vel=createVector(map(noise(-1,1),-2,1,15,0),-1);
    this.acc=createVector(0,0);
    this.thrust=createVector(0.5,-4);
    this.applyForce(this.thrust);
    this.vel.mult(-0.8);
    this.r=18;
    this.mass=this.r*2;
  }
 
  applyForce(force)
  {
    let f=p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }
  update()
  {
    this.pos.add(this.vel);
    this.vel.add(this.acc);   
    this.acc.mult(0);
  
  }
  show()
  {
    stroke(0);
    strokeWeight(2);   
    circle(this.pos.x,this.pos.y,this.r);
    push();
    translate(350,350);
    rotate(-PI/4);
    rect(-10,10,20,50);
    pop();
  }
  checkEdges()
  {
    if(this.pos.x>width-this.r || this.pos.x<=this.r)
      {
        this.vel.x*=-0.8;
         if(abs(this.vel.x)<=0.99)
          {
            this.vel.x=0;
          }
      }
    if(this.pos.y>=height-this.r)
      {
        this.vel.y*=-0.8;
        if(abs(this.vel.y)<=0.99)
          {
            this.vel.y=0;
          }
      }
  }
}
