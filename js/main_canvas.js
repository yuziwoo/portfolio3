let scrollCount = 0;

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.classList.add("canvas_wave")
    this.ctx = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.isclicked = 0;
    this.bodyCount = 0;

    this.section_01 = document.getElementsByClassName("section_01")[0];
    this.section_02 = document.getElementsByClassName("section_02")[0];
    this.view_01 = document.getElementsByClassName("view_01")[0];
    this.view_02 = document.getElementsByClassName("view_02")[0];
    this.view_02_box2 = document.getElementsByClassName("box2")[0];
    this.wrap = document.getElementsByClassName("wrap")[0];


    if(window.scrollY >= 99){
      if(!this.view_02.classList.contains("view_02_start")){
        this.view_02.classList.add("view_02_start");
        this.canvas.style.display = "none";
        this.section_01.style.display = "block";
        this.section_01.style.position = "relative";
        this.view_01.style.display = "none";
        this.section_01.style.height = `${this.wrap.offsetHeight}px`;
        document.body.style.overflowY = "auto";
        scrollCount += 1;
        this.scrolling();

        document.body.addEventListener("wheel", (e) => {
          this.scrolling(e);
        })
        document.documentElement.addEventListener("touchmove", (e) => {
          this.scrolling(e);
        })
      }

    }


    this.waves = new Waves();

    window.addEventListener("resize", () => {
      this.resize();
      this.section_01.style.height = `${this.wrap.offsetHeight}px`;
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
    this.stageHeight = window.innerHeight;

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
          this.canvas.style.display = "none";
          this.section_01.style.display = "block";
          this.view_01.style.display = "none";
          this.section_01.style.position = "relative";
          this.bodyCount = 1;
          this.section_01.style.height = `${this.wrap.offsetHeight}px`;
          document.body.style.overflowY = "auto";
          scrollCount += 1;
        }
      }
      if(this.isclicked > 170 && this.bodyCount == 1){
        document.body.addEventListener("wheel", (e) => {
          this.scrolling(e);
        })
        document.documentElement.addEventListener("touchmove", (e) => {
          this.scrolling(e);
        })
        this.bodyCount += 1;
      }
    }
  }

  scrolling(e) {
    if(window.innerWidth > 1000){
      if(window.scrollY > this.section_01.offsetHeight - 388){
        this.section_01.style.backgroundColor = "white";
        this.section_02.style.backgroundColor = "white";
      }else{
        this.section_01.style.backgroundColor = "#050505";
        this.section_02.style.backgroundColor = "#050505";
      }
    }
    if(window.innerWidth <= 1000){
      if(window.scrollY > this.section_01.offsetHeight - 150){
        this.section_01.style.backgroundColor = "white";
        this.section_02.style.backgroundColor = "white";
      }else{
        this.section_01.style.backgroundColor = "#050505";
        this.section_02.style.backgroundColor = "#050505";
      }
    }
  } /* scrolling 종료*/
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

/* 스크롤 이벤트 잠시 꺼두기 */
function scrollEvent(evt) {
  if(scrollCount < 1){
    evt.preventDefault();
  }
}




window.addEventListener("DOMContentLoaded", (e) => {
  /*버튼 따라다니기 효과*/
  let button = [];
  let button_text = ["personality", "works", "skill", "contact"];
  for(let i=0; i<document.getElementsByClassName("button").length; i++){
    button.push(document.getElementsByClassName("button")[i]);
    document.getElementsByClassName("button")[i].firstElementChild.addEventListener("mouseenter", (e) => {
      button[i].firstElementChild.innerText = button_text[i];
    })
    document.getElementsByClassName("button")[i].firstElementChild.addEventListener("mouseleave", (e) => {
      button[i].firstElementChild.innerText = "More";
    })
  }

  let wave = new App();

  window.addEventListener("mousedown", (e) => {
    if(e.button == 1){
      e.preventDefault();
      alert("해당 사이트에서 휠 클릭 기능을 사용할 수 없습니다.")
    }
  })
});
