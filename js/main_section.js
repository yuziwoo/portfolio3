window.addEventListener("DOMContentLoaded", (e) => {
  let pagey = 0;
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_03 = document.getElementsByClassName("section_03")[0];
  let section_04 = document.getElementsByClassName("section_04")[0];
  let section_02_h1 = [document.getElementsByClassName("section_02_h1")[0], document.getElementsByClassName("section_02_h1")[1], document.getElementsByClassName("section_02_h1")[2]];
  let section_01_height = 0;
  let section_02_h1_x = [window.innerWidth/10*3, window.innerWidth/10*1.5, window.innerWidth/10*3];
  let section_02_content = document.getElementsByClassName("section_02_content")[0];
  let section_02_textWrap = document.getElementsByClassName("text_wrap")[0];
  let section_02_img1 = document.getElementsByClassName("section_02_img1")[0];
  let section_02_img2 = document.getElementsByClassName("section_02_img2")[0];

  let section_03_height = 0;
  let section_03_event = [];
  let section_03_sticky = document.getElementsByClassName("section_03_sticky")[0];
  let section_03_img1 = document.getElementsByClassName("section_03_img1")[0];
  let section_03_headline_wrapper = document.getElementsByClassName("headline_wrapper")[0];
  let section_03_headline1 = document.getElementsByClassName("headline1")[0];
  let section_03_headline2 = document.getElementsByClassName("headline2")[0];
  let section_03_middle = document.getElementsByClassName("middle")[0];
  let section_03_text = document.getElementsByClassName("section_03_text")[0];

  for(let i=0; i<41; i++){
    section_03_event.push(false);
  }

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
        if(section_01_height > 1950){
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

    if(pagey > rect.y){
      if(window.innerWidth >= 560 && rect.y < -section_01.offsetHeight-section_02.offsetHeight){
        section_03_height = - rect.y - section_01.offsetHeight - section_02.offsetHeight;
        if(section_03_height >= 150){
          if(!section_03_event[0]){
            section_03_img1.style.opacity = 0.5;
            section_03_event.splice(0, 1, true);
          }
        }
        if(section_03_height >= 200){
          if(!section_03_event[1]){
            section_03_img1.style.opacity = 0.6;
            section_03_event[1] = true;
          }
        }
        if(section_03_height >= 250){
          if(!section_03_event[2]){
            section_03_img1.style.opacity = 0.7;
            section_03_event[2] = true;
          }
        }
        if(section_03_height >= 300){
          if(!section_03_event[3]){
            section_03_img1.style.opacity = 0.8;
            section_03_event[3] = true;
          }
        }
        if(section_03_height >= 350){
          if(!section_03_event[4]){
            section_03_img1.style.opacity = 0.9;
            section_03_event[4] = true;
          }
        }
        if(section_03_height >= 400){
          if(!section_03_event[5]){
            section_03_img1.style.opacity = 1;
            section_03_event[5] = true;
          }
        }
        if(section_03_height >= 650){
          if(!section_03_event[6]){
            section_03_headline_wrapper.style.opacity = 0.3;
            section_03_event[6] = true;
          }
        }
        if(section_03_height >= 700){
          if(!section_03_event[7]){
            section_03_headline_wrapper.style.opacity = 0.6;
            section_03_headline1.style.transform = "none"
            section_03_headline2.style.transform = "none";
            section_03_event[7] = true;
          }
        }
        if(section_03_height >= 750){
          if(!section_03_event[8]){
            section_03_headline_wrapper.style.opacity = 0.8;
            section_03_headline1.style.transform = "scale(0.8)";
            section_03_headline2.style.transform = "scale(0.8)";
            section_03_event[8] = true;
          }
        }
        if(section_03_height >= 800){
          if(!section_03_event[9]){
            section_03_headline_wrapper.style.opacity = 1;
            section_03_headline1.style.transform = "scale(0.7)";
            section_03_headline2.style.transform = "scale(0.7)";
            section_03_event[9] = true;
          }
        }
        if(section_03_height >= 850){
          if(!section_03_event[10]){
            section_03_headline1.style.transform = "scale(0.6)";
            section_03_headline2.style.transform = "scale(0.6)";
            section_03_event[10] = true;
          }
        }
        if(section_03_height >= 900){
          if(!section_03_event[11]){
            section_03_headline1.style.transform = "scale(0.5)";
            section_03_headline2.style.transform = "scale(0.5)";
            section_03_headline1.style.opacity = 0;
            section_03_headline2.style.opacity = 1;
            section_03_event[11] = true;
          }
        }
        if(section_03_height >= 950){
          if(!section_03_event[12]){
            section_03_headline1.style.transform = "scale(0.4)";
            section_03_headline2.style.transform = "scale(0.4)";
            section_03_img1.style.backgroundImage = "none";
            section_03_img1.style.background = "rgb(0, 0, 0)";
            section_03_event[12] = true;
          }
        }
        if(section_03_height >= 1000){
          if(!section_03_event[13]){
            section_03_headline1.style.transform = "scale(0.35)";
            section_03_headline2.style.transform = "scale(0.35)";
            section_03_event[13] = true;
          }
        }
        if(section_03_height >= 1050){
          if(!section_03_event[14]){
            section_03_headline1.style.transform = "scale(0.3)";
            section_03_headline2.style.transform = "scale(0.3)";
            section_03_event[14] = true;
          }
        }
        if(section_03_height >= 1100){
          if(!section_03_event[15]){
            section_03_headline1.style.transform = "scale(0.25)";
            section_03_headline2.style.transform = "scale(0.25)";
            section_03_event[15] = true;
          }
        }
        if(section_03_height >= 1150){
          if(!section_03_event[16]){
            section_03_headline1.style.transform = "scale(0.22)";
            section_03_headline2.style.transform = "scale(0.22)";
            section_03_event[16] = true;
          }
        }
        if(section_03_height >= 1200){
          if(!section_03_event[17]){
            section_03_headline1.style.transform = "scale(0.2)";
            section_03_headline2.style.transform = "scale(0.2)";
            section_03_event[17] = true;
          }
        }
        if(section_03_height >= 1250){
          if(!section_03_event[18]){
            section_03_headline1.style.transform = "scale(0.18)";
            section_03_headline2.style.transform = "scale(0.18)";
            section_03_event[18] = true;
          }
        }
        if(section_03_height >= 1500){
          if(!section_03_event[19]){
            section_03_middle.style.opacity = "0.3";
            section_03_middle.style.transform = "scale(0.9)";
            section_03_event[19] = true;
          }
        }
        if(section_03_height >= 1550){
          if(!section_03_event[20]){
            section_03_middle.style.opacity = "0.5";
            section_03_middle.style.transform = "scale(0.8)";
            section_03_event[20] = true;
          }
        }
        if(section_03_height >= 1600){
          if(!section_03_event[21]){
            section_03_middle.style.opacity = "0.7";
            section_03_middle.style.transform = "scale(0.7)";
            section_03_event[21] = true;
          }
        }
        if(section_03_height >= 1650){
          if(!section_03_event[22]){
            section_03_middle.style.opacity = "0.9";
            section_03_middle.style.transform = "scale(0.6)";
            section_03_event[22] = true;
          }
        }
        if(section_03_height >= 1700){
          if(!section_03_event[23]){
            section_03_middle.style.opacity = "1";
            section_03_middle.style.transform = "scale(0.5)";
            section_03_event[23] = true;
          }
        }
        if(section_03_height >= 1750){
          if(!section_03_event[24]){
            section_03_middle.style.transform = "scale(0.4)";
            section_03_event[24] = true;
          }
        }
        if(section_03_height >= 1800){
          if(!section_03_event[25]){
            section_03_middle.style.transform = "scale(0.3)";
            section_03_event[25] = true;
          }
        }
        if(section_03_height >= 1850){
          if(!section_03_event[26]){
            section_03_middle.style.transform = "scale(0.25)";
            section_03_event[26] = true;
          }
        }
        if(section_03_height >= 1900){
          if(!section_03_event[27]){
            section_03_middle.style.transform = "scale(0.22)";
            section_03_event[27] = true;
          }
        }
        if(section_03_height >= 1950){
          if(!section_03_event[28]){
            section_03_middle.style.transform = "scale(0.2)";
            section_03_event[28] = true;
          }
        }
        if(section_03_height >= 2000){
          if(!section_03_event[29]){
            section_03_middle.style.transform = "scale(0.18)";
            section_03_event[29] = true;
          }
        }
        if(section_03_height >= 2050){
          if(!section_03_event[30]){
            section_03_middle.style.transform = "scale(0.15)";
            section_03_event[30] = true;
          }
        }
        if(section_03_height >= 2100){
          if(!section_03_event[31]){
            section_03_middle.style.transform = "scale(0.12)";
            section_03_event[31] = true;
          }
        }
        if(section_03_height >= 2450){
          if(!section_03_event[32]){
            section_03_text.style.opacity = 1;
            section_03_event[32] = true;
          }
        }
        if(section_03_height >= 2950){
          if(!section_03_event[33]){
            section_03_headline_wrapper.style.opacity = 0.7;
            section_03_event[33] = true;
          }
        }
        if(section_03_height >= 3000){
          if(!section_03_event[34]){
            section_03_headline_wrapper.style.opacity = 0.6;
            section_03_event[34] = true;
          }
        }
        if(section_03_height >= 3050){
          if(!section_03_event[35]){
            section_03_headline_wrapper.style.opacity = 0.5;
            section_03_event[35] = true;
          }
        }
        if(section_03_height >= 3100){
          if(!section_03_event[36]){
            section_03_headline_wrapper.style.opacity = 0.4;
            section_03_event[36] = true;
          }
        }
        if(section_03_height >= 3150){
          if(!section_03_event[37]){
            section_03_headline_wrapper.style.opacity = 0.3;
            section_03_event[37] = true;
          }
        }
        if(section_03_height >= 3200){
          if(!section_03_event[38]){
            section_03_headline_wrapper.style.opacity = 0.2;
            section_03_event[38] = true;
          }
        }
        if(section_03_height >= 3250){
          if(!section_03_event[39]){
            section_03_headline_wrapper.style.opacity = 0.1;
            section_03_event[39] = true;
          }
        }
        if(section_03_height >= 3300){
          if(!section_03_event[40]){
            section_03_headline_wrapper.style.opacity = 0;
            section_03_event[40] = true;
          }
        }

      }
    }/*(pagey > rect.y)*/

    if(pagey < rect.y){
      if(window.innerWidth >= 560 && rect.y < -section_01.offsetHeight-section_02.offsetHeight){
        section_03_height = - rect.y - section_01.offsetHeight - section_02.offsetHeight;
        if(section_03_height < 150){
          if(section_03_event[0]){
            section_03_img1.style.opacity = 0.4;
            section_03_event.splice(0, 1, false);
          }
        }
        if(section_03_height < 200){
          if(section_03_event[1]){
            section_03_img1.style.opacity = 0.5;
            section_03_event[1] = false;
          }
        }
        if(section_03_height < 250){
          if(section_03_event[2]){
            section_03_img1.style.opacity = 0.6;
            section_03_event[2] = false;
          }
        }
        if(section_03_height < 300){
          if(section_03_event[3]){
            section_03_img1.style.opacity = 0.7;
            section_03_event[3] = false;
          }
        }
        if(section_03_height < 350){
          if(section_03_event[4]){
            section_03_img1.style.opacity = 0.8;
            section_03_event[4] = false;
          }
        }
        if(section_03_height < 400){
          if(section_03_event[5]){
            section_03_img1.style.opacity = 0.9;
            section_03_event[5] = false;
          }
        }
        if(section_03_height < 650){
          if(section_03_event[6]){
            section_03_img1.style.opacity = 1;
            section_03_headline_wrapper.style.opacity = 0;
            section_03_event[6] = false;
          }
        }
        if(section_03_height < 700){
          if(section_03_event[7]){
            section_03_headline_wrapper.style.opacity = 0.3;
            section_03_event[7] = false;
          }
        }
        if(section_03_height < 750){
          if(section_03_event[8]){
            section_03_headline_wrapper.style.opacity = 0.6;
            section_03_headline1.style.transform = "none";
            section_03_event[8] = false;
          }
        }
        if(section_03_height < 800){
          if(section_03_event[9]){
            section_03_headline_wrapper.style.opacity = 0.8;
            section_03_headline1.style.transform = "scale(0.8)";
            section_03_event[9] = false;
          }
        }
        if(section_03_height < 850){
          if(section_03_event[10]){
            section_03_headline_wrapper.style.opacity = 1;
            section_03_headline1.style.transform = "scale(0.7)";
            section_03_headline2.style.transform = "none";
            section_03_event[10] = false;
          }
        }
        if(section_03_height < 900){
          if(section_03_event[11]){
            section_03_headline1.style.transform = "scale(0.6)";
            section_03_headline2.style.transform = "scale(0.6)";
            section_03_headline1.style.opacity = 1;
            section_03_headline2.style.opacity = 0;
            section_03_event[11] = false;
          }
        }
        if(section_03_height < 950){
          if(section_03_event[12]){
            section_03_headline1.style.transform = "scale(0.5)";
            section_03_headline2.style.transform = "scale(0.5)";
            section_03_headline1.style.opacity = 0;
            section_03_headline2.style.opacity = 1;
            section_03_event[12] = false;
          }
        }
        if(section_03_height < 1000){
          if(section_03_event[13]){
            section_03_headline1.style.transform = "scale(0.4)";
            section_03_headline2.style.transform = "scale(0.4)";
            section_03_img1.style.backgroundImage = `url("img/gradient1.jpg")`;
            section_03_img1.style.backgroundRepeat = "no-repeat";
            section_03_img1.style.backgroundSize = "cover";
            section_03_img1.style.backgroundPosition = "center";
            section_03_event[13] = true;
          }
        }
        if(section_03_height < 1050){
          if(section_03_event[14]){
            section_03_headline1.style.transform = "scale(0.35)";
            section_03_headline2.style.transform = "scale(0.35)";
            section_03_event[14] = false;
          }
        }
        if(section_03_height < 1100){
          if(section_03_event[15]){
            section_03_headline1.style.transform = "scale(0.3)";
            section_03_headline2.style.transform = "scale(0.3)";
            section_03_event[15] = false;
          }
        }
        if(section_03_height < 1150){
          if(section_03_event[16]){
            section_03_headline1.style.transform = "scale(0.25)";
            section_03_headline2.style.transform = "scale(0.25)";
            section_03_event[16] = false;
          }
        }
        if(section_03_height < 1200){
          if(section_03_event[17]){
            section_03_headline1.style.transform = "scale(0.22)";
            section_03_headline2.style.transform = "scale(0.22)";
            section_03_event[17] = false;
          }
        }
        if(section_03_height < 1250){
          if(section_03_event[18]){
            section_03_headline1.style.transform = "scale(0.2)";
            section_03_headline2.style.transform = "scale(0.2)";
            section_03_event[18] = false;
          }
        }
        if(section_03_height < 1500){
          if(section_03_event[19]){
            section_03_headline1.style.transform = "scale(0.18)";
            section_03_headline2.style.transform = "scale(0.18)";
            section_03_middle.style.opacity = 0;
            section_03_middle.style.transform = "none";
            section_03_event[19] = false;
          }
        }
        if(section_03_height < 1550){
          if(section_03_event[20]){
            section_03_middle.style.opacity = "0.3";
            section_03_middle.style.transform = "scale(0.9)";
            section_03_event[20] = false;
          }
        }
        if(section_03_height < 1600){
          if(section_03_event[21]){
            section_03_middle.style.opacity = "0.5";
            section_03_middle.style.transform = "scale(0.8)";
            section_03_event[21] = false;
          }
        }
        if(section_03_height < 1650){
          if(section_03_event[22]){
            section_03_middle.style.opacity = "0.7";
            section_03_middle.style.transform = "scale(0.7)";
            section_03_event[22] = false;
          }
        }
        if(section_03_height < 1700){
          if(section_03_event[23]){
            section_03_middle.style.opacity = "0.9";
            section_03_middle.style.transform = "scale(0.6)";
            section_03_event[23] = false;
          }
        }
        if(section_03_height < 1750){
          if(section_03_event[24]){
            section_03_middle.style.opacity = "1";
            section_03_middle.style.transform = "scale(0.5)";
            section_03_event[24] = false;
          }
        }
        if(section_03_height < 1800){
          if(section_03_event[25]){
            section_03_middle.style.transform = "scale(0.4)";
            section_03_event[25] = false;
          }
        }
        if(section_03_height < 1850){
          if(section_03_event[26]){
            section_03_middle.style.transform = "scale(0.3)";
            section_03_event[26] = false;
          }
        }
        if(section_03_height < 1900){
          if(section_03_event[27]){
            section_03_middle.style.transform = "scale(0.25)";
            section_03_event[27] = false;
          }
        }
        if(section_03_height < 1950){
          if(section_03_event[28]){
            section_03_middle.style.transform = "scale(0.22)";
            section_03_event[28] = false;
          }
        }
        if(section_03_height < 2000){
          if(section_03_event[29]){
            section_03_middle.style.transform = "scale(0.2)";
            section_03_event[29] = false;
          }
        }
        if(section_03_height < 2050){
          if(section_03_event[30]){
            section_03_middle.style.transform = "scale(0.18)";
            section_03_event[30] = false;
          }
        }
        if(section_03_height < 2100){
          if(section_03_event[31]){
            section_03_middle.style.transform = "scale(0.15)";
            section_03_event[31] = false;
          }
        }
        if(section_03_height < 2450){
          if(section_03_event[32]){
            section_03_middle.style.transform = "scale(0.12)";
            section_03_text.style.opacity = 0;
            section_03_event[32] = false;
          }
        }
        if(section_03_height < 2950){
          if(section_03_event[33]){
            section_03_text.style.opacity = 1;
            section_03_headline_wrapper.style.opacity = 1;
            section_03_event[33] = false;
          }
        }
        if(section_03_height < 3000){
          if(section_03_event[34]){
            section_03_headline_wrapper.style.opacity = 0.7;
            section_03_event[34] = false;
          }
        }
        if(section_03_height < 3050){
          if(section_03_event[35]){
            section_03_headline_wrapper.style.opacity = 0.6;
            section_03_event[35] = false;
          }
        }
        if(section_03_height < 3100){
          if(section_03_event[36]){
            section_03_headline_wrapper.style.opacity = 0.5;
            section_03_event[36] = false;
          }
        }
        if(section_03_height < 3150){
          if(section_03_event[37]){
            section_03_headline_wrapper.style.opacity = 0.4;
            section_03_event[37] = false;
          }
        }
        if(section_03_height < 3200){
          if(section_03_event[38]){
            section_03_headline_wrapper.style.opacity = 0.3;
            section_03_event[38] = false;
          }
        }
        if(section_03_height < 3250){
          if(section_03_event[39]){
            section_03_headline_wrapper.style.opacity = 0.2;
            section_03_event[39] = false;
          }
        }
        if(section_03_height < 3300){
          if(section_03_event[40]){
            section_03_headline_wrapper.style.opacity = 0.1;
            section_03_event[40] = false;
          }
        }
      }
    }/*(pagey > rect.y)*/

    if(window.innerWidth < 560 && rect.y < -section_01.offsetHeight-section_02.offsetHeight){
        if(!section_03_event[41]){
          section_03.classList.add("section_03_on");
          section_03_event[41] = true;
        }
    }

    if(rect.y <= -section_01.offsetHeight-section_02.offsetHeight-section_03.offsetHeight + 100){
      if(!section_04.classList.contains("section_04_on")){
        section_04.classList.add("section_04_on");
      }
    }

    pagey = rect.y;
  }
  document.addEventListener("scroll", function_02)
  window.addEventListener("resize", function_02)

  function_02


});
