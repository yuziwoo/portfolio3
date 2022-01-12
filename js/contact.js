class Sea {
  constructor(){
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.clickCount = 0; //마우스 클릭시 색상 전환 이벤트

    this.waves = new Waves();
    this.rains = new Rains();

    this.resize();

    window.addEventListener("resize", this.resize());

    requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waves.resize();
    this.rains.resize();
  }

  animate(t){
    this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);

    this.waves.draw(this.ctx);
    this.rains.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));// animate 반복
  }
}

class Waves {
  constructor() {
    this.waves = [];
    for(let i =0; i < 3; i++){
      const wave = new Wave(i)
      this.waves[i] = wave;
    }
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    for(let i = 0; i < 3; i++){
      const wave = this.waves[i];
      wave.resize();
    }
  }

  draw(ctx){
    this.waves[0].draw(ctx);
    this.waves[1].draw(ctx);
    this.waves[2].draw(ctx);
  }
}

class Wave {
  constructor(index){
    this.index = index;
    this.waveup = 0;
    this.waveupPoint = 0.2;
    this.curve = index;
    this.y = 0;
    this.counter = 0;
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.pointGap = this.stageWidth / 5;
  }

  draw(ctx){
    if(this.counter <= 100){
      this.counter += 1;
    }
    if(this.waveup < this.stageHeight / 15 && this.counter > 100){
      this.waveup += this.waveupPoint
    }
    this.curve += 0.04;
    this.y1 = this.stageHeight - this.waveup + (Math.sin(this.curve) *10)
    this.y2 = this.stageHeight - this.waveup + (Math.sin(this.curve + 1.57) *10)
    this.y3 = this.stageHeight - this.waveup + (Math.sin(this.curve + 3.14) *10)

    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.moveTo(-10 + this.index*5, this.stageHeight - this.waveup)
    ctx.quadraticCurveTo(this.pointGap,this.y1,this.pointGap*2,this.y2);
    ctx.quadraticCurveTo(this.pointGap*3,this.y3,this.pointGap*4,this.y2);
    ctx.quadraticCurveTo(this.pointGap*5,this.y1,this.pointGap*6,this.y2);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(-10 + this.index*5, this.stageHeight);
    ctx.fill();
    ctx.closePath()
  }
}

class Rains {
  constructor(){
    this.rains = [];
    for(let i = 0; i < 50; i++){
      const rain = new Rain( -i * 10 , i)
      this.rains[i] = rain
    }
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    for(let i = 0; i < this.rains.length; i++){
      this.rains[i].resize();
    }
  }

  draw(ctx){
    this.ctx = ctx
    for(let i = 0; i < this.rains.length; i++){
      const rain = this.rains[i];
      rain.draw(this.ctx);
    }
  }
}

class Rain {
  constructor(rainY, rainIndex){
    this.rainIndex = rainIndex;
    this.rainHeight = rainIndex/20 +8;
    this.rainY = rainY;
    this.newRainY = 0;
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.counter = 0;
    this.waveup = 0
    this.waveupPoint = 0.2
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.rainX = Math.random() * this.stageWidth;
  }

  draw(ctx){
    this.newRainY += 10;
    if(this.counter <= 100){
      this.counter += 1;
    }
    if(this.waveup < this.stageHeight / 15 && this.counter > 100){
      this.waveup += this.waveupPoint
    }

       if(this.rainY + this.newRainY >= (this.stageHeight - this.waveup)){
         ctx.beginPath();
         ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
         ctx.lineCap = "round";
         ctx.lineWidth = 2;
         ctx.moveTo(this.rainX , this.rainY + this.newRainY)
         ctx.lineTo(this.rainX - 10 , this.rainY + this.newRainY - 5)
         ctx.stroke();
         ctx.beginPath();
         ctx.moveTo(this.rainX , this.rainY + this.newRainY)
         ctx.lineTo(this.rainX + 10 , this.rainY + this.newRainY - 5)
         ctx.stroke();
         this.newRainY = 0;
       }else if(this.rainY + this.newRainY <= this.stageHeight){
         ctx.beginPath();
         ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
         ctx.lineCap = "round";
         ctx.lineWidth = 2;
         ctx.moveTo(this.rainX , this.rainY + this.newRainY - this.rainHeight);
         ctx.lineTo(this.rainX , this.rainY + this.newRainY );
         ctx.stroke();
       }
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
  let section_04 = document.getElementsByClassName("section_04")[0];
  let section_04_tittle = document.getElementsByClassName("section_04_tittle")[0];

  setTimeout(() => {
    if(!section_04.classList.contains("section_04_on")){
      section_04.classList.add("section_04_on");
    }
  }, 500);

  setTimeout(() => {
    if(!section_04_tittle.classList.contains("tittle_on")){
      section_04_tittle.classList.add("tittle_on");
    }
    let canvas = new Sea();
  }, 3000);
})
