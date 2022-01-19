window.addEventListener("DOMContentLoaded", (e) => {
  for (let i = 0; i < 30; i++) {
    let snow = document.createElement("div");
    let snow_width = (Math.random() + 4).toFixed(2);
    let snow_shaking = (Math.random()*10 + 4).toFixed(2);
    let body_offsetHeight = 400; //document.body.offsetHeight;
    let body_offsetWidth = 800; //document.body.offsetWidth;
    let snow_top = (Math.random()*body_offsetHeight).toFixed(2);
    snow.classList.add("snow");
    snow.style.width = `${snow_width}px`;
    snow.style.height = `${snow_width}px`;
    snow.style.top = `${snow_top}px`;
    snow.style.left = `${(Math.random()*800/*window.innerWidth*/).toFixed(2)}px`;
    document.body.appendChild(snow);

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
    duration: Math.random() * 30000 + 10000,
    iterations: Infinity
  })
  }/*반복함수 종료*/
});
