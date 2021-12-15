class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.classList.add("canvas_wave")
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.isclicked = 0;

    this.view_02 = document.getElementsByClassName("view_02")[0];


    this.waves = new Waves();

    window.addEventListener("resize", () => {
      this.resize();
    });

    document.documentElement.addEventListener("click", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("touch", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("wheel", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("scroll", () => {
      this.isclicked += 1;
    })

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;


    this.waves.resize(this.stageWidth,this.stageHeight);

    if(this.isclicked >= 200){
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  animate(t) {
    this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);

    this.waves.draw(this.ctx);

    if(this.isclicked < 200){
      requestAnimationFrame(this.animate.bind(this));
      if(this.isclicked > 0){
        this.isclicked += 1;
      }
      if(this.isclicked > 150 && this.isclicked < 152){
        if(!this.view_02.classList.contains("view_02_start")){
          this.view_02.classList.add("view_02_start");
        }
      }
    }

  }
} /* class App 종료*/

class Waves {
  constructor(){
    this.waves = [];
   for(let i =0; i < 3; i++){
     const wave = new Wave(i)
     this.waves[i] = wave
   }
  }

  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    for(let i = 0; i < 3; i++){
      this.waves[i].resize(this.stageWidth , this.stageHeight);
    }
  }

  draw(ctx){
    for(let i = 0; i< 3; i++){
      this.waves[i].draw(ctx);
    }
  }
} /* class Waves 종료*/

class Wave {
  constructor(index){
    this.index = index;
    this.waveup = 80;
    this.waveupPoint = 0.1;
    this.curve = index + 0.01;
    this.offsetY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.count = 0;
    this.bounce = 30;
    this.isclicked = 0;
    this.opacity = 0.5;
    this.dark = 150;
    this.color = `rgba(${this.dark}, ${this.dark}, ${this.dark}, ${this.opacity})`; /*68,173,246*/

    document.documentElement.addEventListener("click", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("touch", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("wheel", () => {
      this.isclicked += 1;
    })
    document.documentElement.addEventListener("scroll", () => {
      this.isclicked += 1;
    })
  }

  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.pointGap = [-this.stageWidth / 10,
      0,
      this.stageWidth / 10,
      this.stageWidth / 5,
      this.stageWidth / 10 * 3,
      this.stageWidth / 5 * 2,
      this.stageWidth / 2,
      this.stageWidth / 5 * 3,
      this.stageWidth / 10 * 7,
      this.stageWidth / 10 * 8,
      this.stageWidth / 10 * 9,
      this.stageWidth,
      this.stageWidth + this.stageWidth /10
    ];
  }

  draw(ctx){

    if(this.isclicked > 0){
      this.count += 1;
      if(this.count > 0 && this.count < 30){
        this.waveupPoint += 0.28
        this.bounce += 0.8
        this.opacity += 0.015;
      }
      if(this.count < 150){
        this.dark -= 1;
        this.color = `rgba(${this.dark}, ${this.dark}, ${this.dark}, ${this.opacity})`;
      }
      this.waveup += this.waveupPoint
    }

    this.curve += 0.04;
    for(let i=0; i<this.offsetY.length; i++){
      let point = Math.PI / 8 * i;
      this.offsetY[i] = this.stageHeight - this.waveup + (Math.sin(this.curve + point) * this.bounce)
    }

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.lineTo(this.pointGap[0], this.offsetY[0]);
    ctx.quadraticCurveTo(this.pointGap[1], this.offsetY[1], this.pointGap[2], this.offsetY[2]);
    ctx.quadraticCurveTo(this.pointGap[3], this.offsetY[3], this.pointGap[4], this.offsetY[4]);
    ctx.quadraticCurveTo(this.pointGap[5], this.offsetY[5], this.pointGap[6], this.offsetY[6]);
    ctx.quadraticCurveTo(this.pointGap[7], this.offsetY[7], this.pointGap[8], this.offsetY[8]);
    ctx.quadraticCurveTo(this.pointGap[9], this.offsetY[9], this.pointGap[10], this.offsetY[10]);
    ctx.quadraticCurveTo(this.pointGap[11], this.offsetY[10], this.stageWidth, this.offsetY[10]);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.pointGap[0], this.stageHeight);
    ctx.fill();
    ctx.closePath()

  }
}

window.addEventListener("DOMContentLoaded", (e) => {
  let wave = new App();
});
