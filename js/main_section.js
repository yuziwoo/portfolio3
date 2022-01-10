window.addEventListener("DOMContentLoaded", (e) => {
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02_h1 = [document.getElementsByClassName("section_02_h1")[0], document.getElementsByClassName("section_02_h1")[1], document.getElementsByClassName("section_02_h1")[2]];
  let section_01_height = 0;
  let section_02_h1_x = [window.innerWidth/10*3, window.innerWidth/10*1.5, window.innerWidth/10*3];
  let section_02_content = document.getElementsByClassName("section_02_content")[0];
  let section_02_textWrap = document.getElementsByClassName("text_wrap")[0];
  let section_02_img1 = document.getElementsByClassName("section_02_img1")[0];
  let section_02_img2 = document.getElementsByClassName("section_02_img2")[0];

  let rect = document.documentElement.getBoundingClientRect();

  let function_02 = (e) => {
    rect = document.documentElement.getBoundingClientRect();
    section_02_h1_x = [window.innerWidth/10*3, window.innerWidth/10*1.5, window.innerWidth/10*3];
    section_01_height = - rect.y - section_01.offsetHeight;

    if(window.innerWidth > 673){
      if(section_01_height > 0){
        if(section_01_height > 1350){
          if(!section_02_img1.classList.contains("section_02_img_on")){
            section_02_img1.classList.add("section_02_img_on");
          }
        }
        if(section_01_height > 1750){
          if(!section_02_img2.classList.contains("section_02_img_on")){
            section_02_img2.classList.add("section_02_img_on");
          }
        }
        if(section_01_height > 500){
          section_01_height = 500;
        }
        section_02_textWrap.style.opacity = 1;
        section_02_h1[0].style.transform = `translateX(${-window.innerWidth/10*3/500*section_01_height + section_02_h1_x[0] + 40}px)`;
        section_02_h1[1].style.transform = `translateX(${window.innerWidth/10*3/500*section_01_height/2 + section_02_h1_x[1]}px)`;
        section_02_h1[2].style.transform = `translateX(${window.innerWidth/10*3/500*section_01_height + section_02_h1_x[2]}px)`;
      }
    }else if(window.innerWidth <= 673){
      section_02_h1[0].style.transform = "translateX(0vw)";
      section_02_h1[1].style.transform = "translateX(25vw)";
      section_02_h1[2].style.transform = "translateX(46vw)";
      section_02_content.classList.add("on");
      if(section_01_height > 300){
        if(!section_02_img1.classList.contains("section_02_img_on")){
          section_02_img1.classList.add("section_02_img_on");
        }
      }
      if(section_01_height > 800){
        if(!section_02_img2.classList.contains("section_02_img_on")){
          section_02_img2.classList.add("section_02_img_on");
        }
      }
    }
    if(section_01_height >= 500){
      if(!section_02_content.classList.contains("on")){
        section_02_content.classList.add("on");
      }
  }
  }
  document.addEventListener("scroll", function_02)
  window.addEventListener("resize", function_02)

  function_02


});
