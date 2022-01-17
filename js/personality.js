let rect = document.documentElement.getBoundingClientRect();
let scrollCount = 0;

window.addEventListener("DOMContentLoaded", (e) => {
  for (let i = 0; i < 30; i++) {
    let snow = document.createElement("div");
    let snow_width = (Math.random() + 4).toFixed(2);
    let snow_shaking = (Math.random()*20 + 7).toFixed(2);
    let body_offsetHeight = document.body.offsetHeight;
    let body_offsetWidth = document.body.offsetWidth;
    let snow_top = (Math.random()*body_offsetHeight).toFixed(2);
    snow.classList.add("snow");
    snow.style.width = `${snow_width}px`;
    snow.style.height = `${snow_width}px`;
    snow.style.top = `${snow_top}px`;
    snow.style.left = `${(Math.random()*window.innerWidth).toFixed(2)}px`;
    document.body.appendChild(snow);

    /*snow.animate([
    // keyframes
    { transform: "translateY(0px) translateX(0px)"},
    { transform: `translateY(${body_offsetHeight/20 + snow_top/20 * 1}px) translateX(${-snow_shaking}px)`},
    { transform: `translateY(${body_offsetHeight/20 * 2 + snow_top/20 * 2}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 3 + snow_top/20 * 3}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 4 + snow_top/20 * 4}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 5 + snow_top/20 * 5}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 6 + snow_top/20 * 6}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 7 + snow_top/20 * 7}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 8 + snow_top/20 * 8}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 9 + snow_top/20 * 9}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 10 + snow_top/20 * 10}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 11 + snow_top/20 * 11}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 12 + snow_top/20 * 12}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 13 + snow_top/20 * 13}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 14 + snow_top/20 * 14}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 15 + snow_top/20 * 15}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 16 + snow_top/20 * 16}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 17 + snow_top/20 * 17}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 18 + snow_top/20 * 18}px) translateX(${snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 19 + snow_top/20 * 19}px) translateX(${-snow_shaking}px)` },
    { transform: `translateY(${body_offsetHeight/20 * 20 + snow_top/20 * 20}px) translateX(${snow_shaking}px)` }
  ], {
    // timing options
    duration: Math.random() * 30000 + 30000,
    iterations: Infinity
  });*/

  snow.animate({
    transform: [
      'translateY(0px)',
      `translateY(${((body_offsetHeight - snow_top)/20 - (snow_top/10 * 20)).toFixed(2)}px) translateX(${-snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 2 - (snow_top/10 * 19)).toFixed(2)}px) translateX(${snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 3 - (snow_top/10 * 18)).toFixed(2)}px) translateX(${-snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 4 - (snow_top/10 * 17)).toFixed(2)}px) translateX(${snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 5 - (snow_top/10 * 16)).toFixed(2)}px) translateX(${-snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 6 - (snow_top/10 * 15)).toFixed(2)}px) translateX(${snow_shaking}px)`,
      `translateY(${((body_offsetHeight - snow_top)/20 * 7 - (snow_top/10 * 14)).toFixed(2)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 8 - (snow_top/10 * 13)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 9 - (snow_top/10 * 12)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 10 - (snow_top/10 * 11)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 11 - (snow_top/10 * 10)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 12 - (snow_top/10 * 9)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 13 - (snow_top/10 * 8)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 14 - (snow_top/10 * 7)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 15 - (snow_top/10 * 6)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 16 - (snow_top/10 * 5)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 17 - (snow_top/10 * 4)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 18 - (snow_top/10 * 3)}px) translateX(${snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 19 - (snow_top/10 * 2)}px) translateX(${-snow_shaking}px)`,
      `translateY(${(body_offsetHeight - snow_top)/20 * 20 - (snow_top/10 * 1)}px) translateX(${snow_shaking}px)`
    ],
    opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  }, {
    duration: Math.random() * 50000 + 30000,
    iterations: Infinity
  })
  }/*반복함수 종료*/

  let sub_img1 = document.getElementsByClassName("sub_img")[0];
  let sub_img2 = document.getElementsByClassName("sub_img")[1];
  let sub_img3 = document.getElementsByClassName("sub_img")[2];
  let main_img = document.getElementsByClassName("main_img_wrap")[0];
  let text = document.getElementsByClassName("text")[0];
  rect = document.documentElement.getBoundingClientRect();

  if(rect.y > -1){
    setTimeout(()=>{
      sub_img1.classList.add("img_on");
    }, 300)
    setTimeout(()=>{
      sub_img2.classList.add("img_on");
    }, 600)
    setTimeout(()=>{
      sub_img3.classList.add("img_on");
    }, 900)
    setTimeout(()=>{
      main_img.classList.add("img_on");
    }, 1200)
    setTimeout(()=>{
      main_img.classList.add("main_img_on");
      text.classList.add("text_on");
    }, 1600)
    setTimeout(() => {
      scrollCount++
    }, 3100)
  }else{
    main_img.style.transition = "all 0s";
    main_img.classList.add("img_on");
    main_img.classList.add("main_img_on");
    text.classList.add("text_on");
    scrollCount++
  }

})

function scrollEvent(evt) {
  if(scrollCount < 1){
    evt.preventDefault();
  }
  rect = document.documentElement.getBoundingClientRect();
}
