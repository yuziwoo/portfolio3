window.addEventListener("DOMContentLoaded", (e) => {
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_01_slide = document.getElementsByClassName("section_01_slide")[0];
  let section_01_slide_tab_list = document.getElementsByClassName("slide_tab_list");
  let section_01_left = document.getElementsByClassName("section_01_left")[0];
  let section_01_right = document.getElementsByClassName("section_01_right")[0];
  let section_01_slide_number = 2;
  let section_01_direction = "none";
  let section_01_moving = false;

  let section_01_reset = () => {
    section_01_slide.style.transition = "none";
    section_01_slide.style.transform = "translateX(0px)";

    if (section_01_slide_number == 1) {
      section_01_slide.style.left = "-400vw";
      section_01_slide_number = 5;
      section_01_slide_tab_list[3].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 2) {
      section_01_slide.style.left = "-100vw";
      section_01_slide_tab_list[0].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 3) {
      section_01_slide.style.left = "-200vw";
      section_01_slide_tab_list[1].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 4) {
      section_01_slide.style.left = "-300vw";
      section_01_slide_tab_list[2].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 5) {
      section_01_slide.style.left = "-400vw";
      section_01_slide_tab_list[3].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 6) {
      section_01_slide.style.left = "-100vw";
      section_01_slide_number = 2;
      section_01_slide_tab_list[0].classList.add("slide_tab_active");
    }

    section_01_moving = false;
  }

  let section_01_move = () => {
    if (section_01_direction == "left") {
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
    } else if (section_01_direction == "right") {
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
    }
  }

  let section_01_tab_reset = () => {
    for (let i=0; i<section_01_slide_tab_list.length; i++) {
      section_01_slide_tab_list[i].classList.remove("slide_tab_active");
    }
  }

  let section_01_left_move = () => {
    section_01_direction = "left";
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 1;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  }

  let section_01_right_move = () => {
    section_01_direction = "right";
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 6;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  }

  // 버튼 클릭 이벤트

  section_01_left.addEventListener("click", section_01_left_move) // click 종료
  section_01_right.addEventListener("click", section_01_right_move) // click 종료


  // tab 클릭 이벤트

  section_01_slide_tab_list[0].addEventListener("click", () => {
    if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(300vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[1].addEventListener("click", () => {
    if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[2].addEventListener("click", () => {
    if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[3].addEventListener("click", () => {
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-300vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  let touching = false;
  let touchX = [0, 0];

  section_01.addEventListener("mousedown", (e) => {
    touching = true;
    touchX[0] = e.pageX;
  }, false);

  section_01.addEventListener("mousemove", (e) => {
    if (touching) {
      touchX[1] = e.pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;

      if (touchX[1] > touchX[0] && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]  && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
  });

  section_01.addEventListener("mouseleave", (e) => {
    if (touching) {
      touchX[1] = e.pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });

  section_01.addEventListener("mouseup", (e) => {
    if (touching) {
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] > touchX[0]) {
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]) {
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });


  // touch 버전

  section_01.addEventListener("touchstart", (e) => {
    touching = true;
    touchX[0] = e.targetTouches[0].pageX;
  }, false);

  section_01.addEventListener("touchmove", (e) => {
    if (touching) {
      touchX[1] = e.targetTouches[0].pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;

      if (touchX[1] > touchX[0] && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]  && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
  });

  section_01.addEventListener("touchend", (e) => {
    if (touching) {
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] > touchX[0]) {
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]) {
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });


  // scrolling 이벤트

  let event_turn = [];
  for (let i=0; i<11; i++) {
    event_turn.push(false);
  }
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02_title = document.getElementsByClassName("section_title")[0];
  let section_02_content = document.getElementsByClassName("section_02_content");
  let section_03_title = document.getElementsByClassName("section_title")[1];
  let section_03_category_wrap = document.getElementsByClassName("section_03_category_wrap")[0];
  let section_03_content_wrap = document.getElementsByClassName("section_03_content_wrap")[0];
  let section_04_title = document.getElementsByClassName("section_title")[2];
  let section_05 = document.getElementsByClassName("section_05")[0];
  let section_05_text = document.getElementsByClassName("section_05_text")[0];
  let section_05_button = document.getElementsByClassName("section_05_button")[0];

  let section_03_content = document.getElementsByClassName("section_03_content");
  let section_03_value = ["active_all", "active_entertainment", "active_commerce", "active_media", "active_tv", "active_park", "active_people"];
  let section_03_category_button = document.getElementsByClassName("section_03_category_button");
  let section_03_is_moving = false;
  let section_03_content_reset = () => {
      section_03_content[0].style.transform = "scale(0.001)";
      section_03_content[0].style.opacity = 0;
      section_03_content[1].style.transform = "scale(0.001)";
      section_03_content[1].style.opacity = 0;
      section_03_content[2].style.transform = "scale(0.001)";
      section_03_content[2].style.opacity = 0;
      section_03_content[3].style.transform = "scale(0.001)";
      section_03_content[3].style.opacity = 0;
      section_03_content[4].style.transform = "scale(0.001)";
      section_03_content[4].style.opacity = 0;
      section_03_content[5].style.transform = "scale(0.001)";
      section_03_content[5].style.opacity = 0;
      section_03_content[6].style.transform = "scale(0.001)";
      section_03_content[6].style.opacity = 0;
      section_03_content[7].style.transform = "scale(0.001)";
      section_03_content[7].style.opacity = 0;
  }
  let section_03_content_width = 384;
  let section_03_content_height = [255, 214.281];
  let section_03_mobile = () => {
      section_03_content[0].style.left = 0;
      section_03_content[0].style.top = 0;
      section_03_content[1].style.left = 0;
      section_03_content[1].style.top = 0;
      section_03_content[2].style.left = 0;
      section_03_content[2].style.top = 0;
      section_03_content[3].style.left = 0;
      section_03_content[3].style.top = 0;
      section_03_content[4].style.left = 0;
      section_03_content[4].style.top = 0;
      section_03_content[5].style.left = 0;
      section_03_content[5].style.top = 0;
      section_03_content[6].style.left = 0;
      section_03_content[6].style.top = 0;
      section_03_content[7].style.left = 0;
      section_03_content[7].style.top = 0;
  }
  let section_03_action_01 = () => {
    section_03_content[0].style.left = 0;
    section_03_content[0].style.top = 0;
    section_03_content[0].style.transform = "scale(1)";
    section_03_content[0].style.opacity = 1;

    section_03_content[1].style.left = `calc(${section_03_content_width}px + 9px)`;
    section_03_content[1].style.top = 0;
    section_03_content[1].style.transform = "scale(1)";
    section_03_content[1].style.opacity = 1;

    section_03_content[2].style.left = `calc(${section_03_content_width*2}px + 18px)`;
    section_03_content[2].style.top = 0;
    section_03_content[2].style.transform = "scale(1)";
    section_03_content[2].style.opacity = 1;

    section_03_content[3].style.left = 0;
    section_03_content[3].style.top =  `calc(${section_03_content_height[0]}px + 9px)`;
    section_03_content[3].style.transform = "scale(1)";
    section_03_content[3].style.opacity = 1;

    section_03_content[4].style.left = `calc(${section_03_content_width}px + 9px)`;
    section_03_content[4].style.top = `calc(${section_03_content_height[0]}px + 9px)`;
    section_03_content[4].style.transform = "scale(1)";
    section_03_content[4].style.opacity = 1;

    section_03_content[5].style.left = `calc(${section_03_content_width*2}px + 18px)`;
    section_03_content[5].style.top = `calc(${section_03_content_height[1]}px + 9px)`;
    section_03_content[5].style.transform = "scale(1)";
    section_03_content[5].style.opacity = 1;

    section_03_content[6].style.left = 0;
    section_03_content[6].style.top = `calc(${section_03_content_height[0] * 2}px + 18px)`;
    section_03_content[6].style.transform = "scale(1)";
    section_03_content[6].style.opacity = 1;

    section_03_content[7].style.left = `calc(${section_03_content_width*2}px + 18px)`;
    section_03_content[7].style.top = `calc(${section_03_content_height[0] + section_03_content_height[1]}px + 18px)`;
    section_03_content[7].style.transform = "scale(1)";
    section_03_content[7].style.opacity = 1;

    if(window.innerWidth <= 800) {
      section_03_mobile();
    }
  }
  let section_03_action_02 = () => {
    section_03_content_reset();
    section_03_content[0].style.left = 0;
    section_03_content[0].style.top = 0;
    section_03_content[0].style.transform = "scale(1)";
    section_03_content[0].style.opacity = 1;

    section_03_content[1].style.left = `calc(${section_03_content_width}px + 9px)`;
    section_03_content[1].style.top = 0;
    section_03_content[1].style.transform = "scale(1)";
    section_03_content[1].style.opacity = 1;

    section_03_content[3].style.left = `calc(${section_03_content_width*2}px + 18px)`;
    section_03_content[3].style.top = 0;
    section_03_content[3].style.transform = "scale(1)";
    section_03_content[3].style.opacity = 1;

    section_03_content[4].style.left = 0;
    section_03_content[4].style.top = `calc(${section_03_content_height[0]}px + 9px)`;
    section_03_content[4].style.transform = "scale(1)";
    section_03_content[4].style.opacity = 1;

    section_03_content[5].style.left = `calc(${section_03_content_width}px + 9px)`;
    section_03_content[5].style.top = `calc(${section_03_content_height[0]}px + 9px)`;
    section_03_content[5].style.transform = "scale(1)";
    section_03_content[5].style.opacity = 1;

    section_03_content[6].style.left = `calc(${section_03_content_width*2}px + 18px)`;
    section_03_content[6].style.top = `calc(${section_03_content_height[0]}px + 9px)`;
    section_03_content[6].style.transform = "scale(1)";
    section_03_content[6].style.opacity = 1;

    if(window.innerWidth <= 800) {
      section_03_mobile();
    }
  }
  let section_03_action_03 = () => {
    section_03_content_reset();
    section_03_content[2].style.left = 0;
    section_03_content[2].style.top = 0;
    section_03_content[2].style.transform = "scale(1)";
    section_03_content[2].style.opacity = 1;

    section_03_content[7].style.left = `calc(${section_03_content_width}px + 9px)`;
    section_03_content[7].style.top = 0;
    section_03_content[7].style.transform = "scale(1)";
    section_03_content[7].style.opacity = 1;

    if(window.innerWidth <= 800) {
      section_03_mobile();
    }
  }


  let scrolling_main = (e) => {

    if (window.innerWidth > 1190) {
      if (section_03_content_width != 384) {
        section_03_content_width = 384;
        section_03_content_height = [255, 214.281];
        if (section_03_content_wrap.classList.contains("active_all")) {
          section_03_action_01();
        } else if (section_03_content_wrap.classList.contains("active_entertainment")) {
          section_03_action_02();
        } else if (section_03_content_wrap.classList.contains("active_commerce")) {
          section_03_action_03();
        } else {
          section_03_content_reset();
        }
      }
    } else if (window.innerWidth > 980) {
      if (section_03_content_width != 314) {
        section_03_content_width = 314;
        section_03_content_height = [208.5, 175];
        if (section_03_content_wrap.classList.contains("active_all")) {
          section_03_action_01();
        } else if (section_03_content_wrap.classList.contains("active_entertainment")) {
          section_03_action_02();
        } else if (section_03_content_wrap.classList.contains("active_commerce")) {
          section_03_action_03();
        } else {
          section_03_content_reset();
        }
      }
    } else if (window.innerWidth > 800) {
      if (section_03_content_width != 254) {
        section_03_content_width = 254;
        section_03_content_height = [168.7, 141.5];
        if (section_03_content_wrap.classList.contains("active_all")) {
          section_03_action_01();
        } else if (section_03_content_wrap.classList.contains("active_entertainment")) {
          section_03_action_02();
        } else if (section_03_content_wrap.classList.contains("active_commerce")) {
          section_03_action_03();
        } else {
          section_03_content_reset();
        }
      }
    } else {
      if (section_03_content_wrap.classList.contains("active_all")) {
        section_03_action_01();
      } else if (section_03_content_wrap.classList.contains("active_entertainment")) {
        section_03_action_02();
      } else if (section_03_content_wrap.classList.contains("active_commerce")) {
        section_03_action_03();
      } else {
        section_03_content_reset();
      }
    }


    if (document.documentElement.scrollTop + window.innerHeight - 100 >= section_02.offsetTop && !event_turn[0]) {
      event_turn[0] = true;
      section_02_title.style.opacity = 1;
      section_02_title.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[0].offsetTop && !event_turn[1]) {
      event_turn[1] = true;
      section_02_content[0].style.opacity = 1;
      section_02_content[0].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[1].offsetTop && !event_turn[2]) {
      event_turn[2] = true;
      section_02_content[1].style.opacity = 1;
      section_02_content[1].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[2].offsetTop && !event_turn[3]) {
      event_turn[3] = true;
      section_02_content[2].style.opacity = 1;
      section_02_content[2].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[3].offsetTop && !event_turn[4]) {
      event_turn[4] = true;
      section_02_content[3].style.opacity = 1;
      section_02_content[3].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[4].offsetTop && !event_turn[5]) {
      event_turn[5] = true;
      section_02_content[4].style.opacity = 1;
      section_02_content[4].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_03_title.offsetTop && !event_turn[6]) {
      event_turn[6] = true;
      section_03_title.style.opacity = 1;
      section_03_title.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_04_title.offsetTop && !event_turn[7]) {
      event_turn[7] = true;
      section_04_title.style.opacity = 1;
      section_04_title.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 100 >= section_05.offsetTop && !event_turn[8]) {
      event_turn[8] = true;
      section_05_text.style.opacity = 1;
      section_05_text.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 100 >= section_05.offsetTop && !event_turn[9]) {
      event_turn[9] = true;
      section_05_button.style.opacity = 1;
      section_05_button.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight >= section_03_category_wrap.offsetTop && !event_turn[10]) {
      event_turn[10] = true;
      section_03_content_wrap.classList.remove("active_none");
      section_03_content_wrap.classList.add("active_all");
      document.getElementsByClassName("section_03_category_button")[0].classList.add("section_03_category_button_on");

      section_03_action_01();
    }
  } //scrolling end

  scrolling_main();
  document.addEventListener("scroll", scrolling_main);
  window.addEventListener("resize", scrolling_main);


  // section 03 Latest News 카테고리 클릭 이벤트
  for (let i = 0; i < section_03_category_button.length; i++) {
    section_03_category_button[i].addEventListener("click", () => {

      if (!section_03_is_moving) {
        section_03_is_moving = true;
        section_03_category_button[0].classList.remove("section_03_category_button_on");
        section_03_category_button[1].classList.remove("section_03_category_button_on");
        section_03_category_button[2].classList.remove("section_03_category_button_on");
        section_03_category_button[3].classList.remove("section_03_category_button_on");
        section_03_category_button[4].classList.remove("section_03_category_button_on");
        section_03_category_button[5].classList.remove("section_03_category_button_on");
        section_03_category_button[6].classList.remove("section_03_category_button_on");
        section_03_content_wrap.classList.remove("active_all");
        section_03_content_wrap.classList.remove("active_entertainment");
        section_03_content_wrap.classList.remove("active_commerce");
        section_03_content_wrap.classList.remove("active_media");
        section_03_content_wrap.classList.remove("active_tv");
        section_03_content_wrap.classList.remove("active_park");
        section_03_content_wrap.classList.remove("active_people");


        section_03_category_button[i].classList.add("section_03_category_button_on");
        section_03_content_wrap.classList.add(section_03_value[i]);

        if (i == 0) {
          section_03_content[0].style.display = "block";
          section_03_content[1].style.display = "block";
          section_03_content[2].style.display = "block";
          section_03_content[3].style.display = "block";
          section_03_content[4].style.display = "block";
          section_03_content[5].style.display = "block";
          section_03_content[6].style.display = "block";
          section_03_content[7].style.display = "block";
        } else if (i == 1) {
          section_03_content[0].style.display = "block";
          section_03_content[1].style.display = "block";
          section_03_content[3].style.display = "block";
          section_03_content[4].style.display = "block";
          section_03_content[5].style.display = "block";
          section_03_content[6].style.display = "block";
          setTimeout(() => {
            section_03_content[2].style.display = "none";
            section_03_content[7].style.display = "none";
          },500);
        } else if (i == 2) {
          section_03_content[2].style.display = "block";
          section_03_content[7].style.display = "block";
          setTimeout(() => {
            section_03_content[0].style.display = "none";
            section_03_content[1].style.display = "none";
            section_03_content[3].style.display = "none";
            section_03_content[4].style.display = "none";
            section_03_content[5].style.display = "none";
            section_03_content[6].style.display = "none";
          },500);
        } else if (i > 2) {
          setTimeout(() => {
            section_03_content[0].style.display = "none";
            section_03_content[1].style.display = "none";
            section_03_content[3].style.display = "none";
            section_03_content[4].style.display = "none";
            section_03_content[5].style.display = "none";
            section_03_content[6].style.display = "none";
            section_03_content[2].style.display = "none";
            section_03_content[7].style.display = "none";
          },500);
        }


          if (i == 0) {
            setTimeout(() => {
              section_03_action_01();
            },50);
          } else if (i == 1) {
            setTimeout(() => {
              section_03_action_02();
            },50);
          } else if (i == 2) {
            setTimeout(() => {
              section_03_action_03();
            },50);
          } else if (i > 2) {
              setTimeout(() => {
                section_03_content_reset();
              },50)
          }



        setTimeout(() => {
          section_03_is_moving = false;
        }, 500);
      }
    }) // 클릭 이벤트 종료
  }

}); // 전체 종료
