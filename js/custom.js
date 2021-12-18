window.addEventListener("DOMContentLoaded", (e) => {
let header = document.createElement("header");
header.classList.add("header");
header.innerHTML = `
<div class="header_box">
  <ul>
    <li>
      <a href="index.html">
        <svg class="home_default" xmlns="http://www.w3.org/2000/svg" height="511pt" viewBox="0 1 511 511.999" width="511pt" >
          <path class="home" d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/></svg>
        <svg class="home_hover" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt">
          <path class="home" d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"/></svg>
      </a>
    </li>
    <li class="header_text">
      <a href="#">personality</a>
      <a href="#" class="header_clip">personality</a>
    </li>
    <li class="header_text">
      <a href="#">works</a>
      <a href="#" class="header_clip">works</a>
    </li>
    <li class="header_text">
      <a href="#">skill</a>
      <a href="#" class="header_clip">skill</a>
    </li>
    <li class="header_text">
      <a href="#">contact</a>
      <a href="#" class="header_clip">contact</a>
    </li>
  </ul>
</div>`;
document.body.appendChild(header);

/*header text hover효과*/
let header_text = document.getElementsByClassName("header_text");
let header_clip = document.getElementsByClassName("header_clip");
let circle_radius = [];
let header_offsetX = [];
let header_offsetY = [];

for(let i=0; i<header_text.length; i++){
  let header_textX = document.getElementsByClassName("header_text")[i];
  let header_clip = document.getElementsByClassName("header_clip")[i];
  let count = i;
  let ishover = false;
  circle_radius.push(0);
  header_offsetX.push(0);
  header_offsetY.push(0);

  header_textX.addEventListener("mouseenter", (e) => {
    ishover = true;
    header_offsetX[count] = e.offsetX;
    header_offsetY[count] = e.offsetY;
    let header_animation = () => {
      requestAnimationFrame(() => {
        if(circle_radius[count] < 120 && ishover == true){
        header_clip.style.clipPath = `circle(${circle_radius[count]}px at ${header_offsetX[count]}px ${header_offsetY[count]}px)`;
        circle_radius[count] += 4;
        header_animation();
        }
      }) /*requestAnimationFrame END*/
    } /*header_animation END*/
    header_animation();
  })/*mouseenter END*/

  header_textX.addEventListener("mouseleave", (e) => {
    ishover = false;
    header_offsetX[count] = e.offsetX;
    header_offsetY[count] = e.offsetY;
    let header_animation = () => {
      requestAnimationFrame(() => {
        if(circle_radius[count] >= 0 && ishover == false){
        header_clip.style.clipPath = `circle(${circle_radius[count]}px at ${header_offsetX[count]}px ${header_offsetY[count]}px)`;
        circle_radius[count] -= 4;
        header_animation();
        }
      }) /*requestAnimationFrame END*/
    } /*header_animation END*/
    header_animation();
  })/*mouseenter END*/
}/*반복함수 END*/


/* header 나타나고 사라지는 효과*/
/*wheel*/
document.documentElement.addEventListener("wheel", (e) => {
  if(e.deltaY > 0){
    if(!header.classList.contains("header_hide")){
      header.classList.add("header_hide");
    }
  }
  if(e.deltaY < 0){
    if(header.classList.contains("header_hide")){
      header.classList.remove("header_hide");
    }
  }
})

/*scroll*/
  let scroll_pagey = 0;
  window.addEventListener("scroll", (e) => {
    if(window.scrollY > scroll_pagey){
      if(!header.classList.contains("header_hide")){
        header.classList.add("header_hide");
      }
    }else if(window.scrollY < scroll_pagey){
      if(header.classList.contains("header_hide")){
        header.classList.remove("header_hide");
      }
    }
    scroll_pagey = window.scrollY;
  })

  /*touch*/
  let touch_pageY = [0, 0];

  document.documentElement.addEventListener("touchstart", (e) => {
    touch_pageY[0] = e.targetTouches[0].pageY
  })

  document.documentElement.addEventListener("touchmove", (e) => {
    touch_pageY[1] = e.targetTouches[0].pageY

    if(touch_pageY[1] > touch_pageY[0]){
      if(header.classList.contains("header_hide")){
        header.classList.remove("header_hide");
      }

    }else if (touch_pageY[1] <= touch_pageY[0]){
      if(!header.classList.contains("header_hide")){
        header.classList.add("header_hide");
      }
    }
  })


  /*버튼 따라다니기 효과*/
  let button = [];
  for(let i=0; i<document.getElementsByClassName("button").length; i++){
    button.push(document.getElementsByClassName("button")[i]);
    document.getElementsByClassName("button")[i].addEventListener("mousemove", (e) => {
      let scrollWidth = document.getElementsByClassName("button")[i].scrollWidth / 2;
      let scrollHeight = document.getElementsByClassName("button")[i].scrollHeight / 2;
      let moveX = e.offsetX - scrollWidth;
      let moveY = e.offsetY - scrollHeight;
      document.getElementsByClassName("button")[i].children[0].style.transform = `translateX(${moveX / 4}px) translateY(${moveY / 4}px)`;
    })
    document.getElementsByClassName("button")[i].addEventListener("mouseleave", (e) => {
      document.getElementsByClassName("button")[i].children[0].style.transform = `none`;
    })
  }

});
