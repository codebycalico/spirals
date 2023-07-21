let circles = [];
let numberOfCircles = 3000;
let whichStartingCircle = 0;
let clicked = false;
let average;
let shade; //alpha of circles
let wallColor; //when circles hit wall
let randomF; //random(50)
let level = 0;
let size;
let sound;
let amplitude;
amplitude = new p5.Amplitude();
// let xSpiral;
// let ySpiral;
// let radius;
// let angle;

function preload(){
  sound = loadSound('assets/bottle.wav');
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < numberOfCircles; i++){
    circles[i] = new Circle();
  }
}

function draw() {
  background(0);

  // if (sound.isPlaying()){
  //   level = amplitude.getLevel();
  // }

  for (let i = 0; i < numberOfCircles; i++){
    if(circles[i].visible){
      circles[i].display();
      circles[i].move();
    }
  }
}



function keyPressed(){
  if (keyCode===ENTER){
    whichStartingCircle+=10;
    for (let i = 0; i < 10; i++){
       circles[whichStartingCircle+i].visible = true;
    } 
  }

  if (keyCode===80){
    if (sound.isPlaying()){
        sound.stop();
    }else{
        sound.play();
    }
  }
}

class Circle {
  constructor(){
    this.x=width/2;
    this.y=height/2;

  // if (sound.isPlaying()){
  //   level = amplitude.getLevel();
  // }

  //   if (sound.isPlaying()){
  //     this.smallness=map(level, 0, 1, 0, 150);
  //   }else{
  //     this.smallness=random(50);
  //   }

    this.smallness=random(50);
    this.xSpeed=random(-5,5);
    this.ySpeed=random(-5,5);
    this.visible=false;
    this.white=false;
  }

  display(){
    shade=random(255);
    if (shade<100){
      shade=shade+100;
    }
    wallColor=0;
    if (this.white===true || this.x<=0 || this.x>=width || this.y<=0 || this.y>=height){
      wallColor=255;
    }
 
  if (sound.isPlaying()){
    level = amplitude.getLevel();
  }

    if (sound.isPlaying()){
      this.smallness=map(level, 0, 1, 10, 300);
     }
    else{
      this.smallness=random(50);
    }
    ellipseMode(CENTER);
    noStroke();
    fill(wallColor,wallColor,255,shade);
    ellipse(this.x-4,this.y-4,this.smallness,this.smallness);
    noStroke();
    fill(255,wallColor,wallColor,shade);
    ellipse(this.x, this.y, this.smallness, this.smallness);
  }

  move(){
    if (mouseIsPressed){
      this.x = (this.x*20+mouseX)/21;
      this.y = (this.y*20+mouseY)/21;
      }else{
       this.x = this.x + this.xSpeed;
       this.y = this.y + this.ySpeed;
      }

    if (this.x>=width || this.y>=height || this.x<=0 || this.y<=0){
      this.x = this.x-this.xSpeed;
      this.y = this.y-this.ySpeed;
      this.white=true;
        }else{
         this.white = false;
        }
  }
    // if (sound.isPlaying()&&mouseIsPressed){
    //   this.x = ;
    // }
}

// function setStart(x,y) {
//   translate(width / 2, height / 2);
//     angle += 0.02;
//     radius -= 0.1;
//     if(radius < 0)
//       radius = 0;
//       xSpiral = sin(angle) * radius;
//       ySpiral = cos(angle) * radius;
//       this.x = xSpiral;
//       this.y = ySpiral;
//     }
//     angle = atan2(x - width / 2, y - height / 2);
//     radius = dist(width / 2, height / 2, xSpiral, ySpiral);
// }