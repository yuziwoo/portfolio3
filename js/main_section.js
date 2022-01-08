window.addEventListener("DOMContentLoaded", (e) => {
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02_h1 = [document.getElementsByClassName("section_02_h1")[0], document.getElementsByClassName("section_02_h1")[1], document.getElementsByClassName("section_02_h1")[2]];
  let section_01_height = 0;
  let section_02_h1_x = [window.innerWidth/10*3, window.innerWidth/10*1.5, window.innerWidth/10*3];
  let section_02_content = document.getElementsByClassName("section_02_content")[0];

  let rect = document.documentElement.getBoundingClientRect();
  document.addEventListener("scroll", (e) => {
    rect = document.documentElement.getBoundingClientRect();
    section_01_height = - rect.y + section_01.offsetHeight;

    if(section_01_height > 0 && section_01_height < 2500){
      section_02_h1[0].style.transform = `translateX(${-window.innerWidth/10*3/2500*section_01_height + section_02_h1_x[0] + 40}px)`;
      section_02_h1[1].style.transform = `translateX(${window.innerWidth/10*3/2500*section_01_height/2 + section_02_h1_x[1]}px)`;
      section_02_h1[2].style.transform = `translateX(${window.innerWidth/10*3/2500*section_01_height + section_02_h1_x[2]}px)`;
    }else if(section_01_height >= 2500){
      if(!section_02_content.classList.contains("on")){
        section_02_content.classList.add("on");
      }
    }
  })

  window.addEventListener("resize", (e) => {
    rect = document.documentElement.getBoundingClientRect();
    section_02_h1_x = [window.innerWidth/10*3, window.innerWidth/10*1.5, window.innerWidth/10*3];

    if(section_01_height > 0 && section_01_height < 2500){
      section_02_h1[0].style.transform = `translateX(${-window.innerWidth/10*3/2500*section_01_height + section_02_h1_x[0] + 40}px)`;
      section_02_h1[1].style.transform = `translateX(${window.innerWidth/10*3/2500*section_01_height/2 + section_02_h1_x[1]}px)`;
      section_02_h1[2].style.transform = `translateX(${window.innerWidth/10*3/2500*section_01_height + section_02_h1_x[2]}px)`;
    }else if(section_01_height >= 2500){
      if(!section_02_content.classList.contains("on")){
        section_02_content.classList.add("on");
      }
    }
  })
});
