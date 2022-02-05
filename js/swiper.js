class Swiper {
  constructor(swiper, swiper_content_box, swiper_content, swiper_btn, swiper_paging_button) {
    // default
    this.swiper = swiper;
    this.swiper_content_box = swiper_content_box;
    this.swiper_content = swiper_content;
    this.swiper_btn_left = swiper_btn[0];
    this.swiper_btn_right = swiper_btn[1];
    this.swiper_paging_button = swiper_paging_button;

    this.content_number = this.swiper_content.length;
    this.left = 0;
    this.default_position = 0;
    this.width = this.swiper.clientWidth;
    this.is_cicking = false;
    this.is_moving = false;
    this.coordX = [0, 0];

    // css
    this.css();

    // swiper event
    this.swiper.addEventListener("mousedown", (e) => {
      this.is_clicking = true;
      this.coordX[0] = e.screenX;
    })
    window.addEventListener("mousemove", (e) => {
      if (this.is_clicking) {
        this.coordX[1] = e.screenX;
        this.swiper_content_box.style.transitionDuration = "0ms";
        this.left = this.default_position + this.coordX[1] - this.coordX[0];
        this.swiper_content_box.style.left = `${this.left}px`;
      }
    })
    window.addEventListener("mouseup", (e) => {
      if (this.is_clicking) {
        this.is_clicking = false;
        this.positioning();
        this.coordX[0] = 0;
        this.coordX[1] = 0;
        this.classReset();
      }
    })
    this.swiper.addEventListener("touchstart", (e) => {
      this.is_clicking = true;
      this.coordX[0] = e.targetTouches[0].screenX;
    })
    window.addEventListener("touchmove", (e) => {
      if (this.is_clicking) {
        this.coordX[1] = e.targetTouches[0].screenX;
        this.swiper_content_box.style.transitionDuration = "0ms";
        this.left = this.default_position + this.coordX[1] - this.coordX[0];
        this.swiper_content_box.style.left = `${this.left}px`;
      }
    })
    window.addEventListener("touchend", (e) => {
      if (this.is_clicking) {
        this.is_clicking = false;
        this.positioning();
        this.coordX[0] = 0;
        this.coordX[1] = 0;
        this.classReset();
      }
    })


    // click event
    this.swiper_btn_left.addEventListener("click", () => {
      this.swiper_content_box.style.transition = "left 0.5s";

      switch (-this.left) {
        case this.width * 1 : this.left = 0;
        break
        case this.width * 2 : this.left = -this.width * 1;
        break
        case this.width * 3 : this.left = -this.width * 2;
        break
        case this.width * 4 : this.left = -this.width * 3;
        break
        case this.width * 5 : this.left = -this.width * 4;
        break
        case this.width * 6 : this.left = -this.width * 5;
        break
        case this.width * 7 : this.left = -this.width * 6;
        break
        case this.width * 8 : this.left = -this.width * 7;
        break
        case this.width * 9 : this.left = -this.width * 8;
        break
        case this.width * 10 : this.left = -this.width * 9;
        break
        case this.width * 11 : this.left = -this.width * 10;
        break
        case this.width * 12 : this.left = -this.width * 11;
        break
        case this.width * 13 : this.left = -this.width * 12;
        break
        case this.width * 14 : this.left = -this.width * 13;
        break
        case this.width * 15 : this.left = -this.width * 14;
        break
        case this.width * 16 : this.left = -this.width * 15;
        break
        case this.width * 17 : this.left = -this.width * 16;
        break
        case this.width * 18 : this.left = -this.width * 17;
        break
        case this.width * 19 : this.left = -this.width * 18;
        break
        case this.width * 20 : this.left = -this.width * 19;
        break
      }

      this.default_position = this.left;
      this.swiper_content_box.style.left = `${this.left}px`;
      this.classReset();
    });

    this.swiper_btn_right.addEventListener("click", () => {
      this.swiper_content_box.style.transition = "left 0.5s";

      switch (-this.left) {
        case 0 : this.left = -this.width * 1;
        break
        case this.width * 1 : if (this.content_number > 2) {this.left = -this.width * 2}
        break
        case this.width * 2 : if (this.content_number > 3) {this.left = -this.width * 3}
        break
        case this.width * 3 : if (this.content_number > 4) {this.left = -this.width * 4}
        break
        case this.width * 4 : if (this.content_number > 5) {this.left = -this.width * 5}
        break
        case this.width * 5 : if (this.content_number > 6) {this.left = -this.width * 6}
        break
        case this.width * 6 : if (this.content_number > 7) {this.left = -this.width * 7}
        break
        case this.width * 7 : if (this.content_number > 8) {this.left = -this.width * 8}
        break
        case this.width * 8 : if (this.content_number > 9) {this.left = -this.width * 9}
        break
        case this.width * 9 : if (this.content_number > 10) {this.left = -this.width * 10}
        break
        case this.width * 10 : if (this.content_nubver > 11) {this.left = -this.width * 11}
        break
        case this.width * 11 : if (this.content_number > 12) {this.left = -this.width * 12}
        break
        case this.width * 12 : if (this.content_number > 13) {this.left = -this.width * 13}
        break
        case this.width * 13 : if (this.content_number > 14) {this.left = -this.width * 14}
        break
        case this.width * 14 : if (this.content_number > 15) {this.left = -this.width * 15}
        break
        case this.width * 15 : if (this.content_number > 16) {this.left = -this.width * 16}
        break
        case this.width * 16 : if (this.content_number > 17) {this.left = -this.width * 17}
        break
        case this.width * 17 : if (this.content_number > 18) {this.left = -this.width * 18}
        break
        case this.width * 18 : if (this.content_number > 19) {this.left = -this.width * 19}
        break
        case this.width * 19 : if (this.content_number > 20) {this.left = -this.width * 20}
        break
      }

      this.default_position = this.left;
      this.swiper_content_box.style.left = `${this.left}px`;
      this.classReset();
    });

    for (let i=0; i<this.swiper_paging_button.length; i++) {
      this.swiper_paging_button[i].addEventListener("click", () => {
        this.swiper_content_box.style.transition = "left 0.5s";

        this.left = - this.width * i;

        this.default_position = this.left;
        this.swiper_content_box.style.left = `${this.left}px`;
        this.classReset();
      });
    };
  } // constructor end

  css() {
    this.swiper.style.overflow = "hidden";
    this.swiper.style.position = "relative";
    this.swiper.style.userSelect = "none";
    this.swiper_content_box.style.position = "absolute";
    this.swiper_content_box.style.transition = "none";
    this.swiper_content_box.style.left = "0";
    this.swiper_content_box.style.top = "0";
  }

  positioning() {
    this.swiper_content_box.style.transition = "left 0.5s";

    if (this.default_position > this.left) {
      if (-this.left < this.width * 0 + this.width / 5 && this.content_number > 0) {
        this.left = -this.width * 0;
      } else if (-this.left < this.width * 1 + this.width / 5 && this.content_number > 1) {
        this.left = -this.width * 1;
      } else if (-this.left < this.width * 2 + this.width / 5 && this.content_number > 2) {
        this.left = -this.width * 2;
      } else if (-this.left < this.width * 3 + this.width / 5 && this.content_number > 3) {
        this.left = -this.width * 3;
      } else if (-this.left < this.width * 4 + this.width / 5 && this.content_number > 4) {
        this.left = -this.width * 4;
      } else if (-this.left < this.width * 5 + this.width / 5 && this.content_number > 5) {
        this.left = -this.width * 5;
      } else if (-this.left < this.width * 6 + this.width / 5 && this.content_number > 6) {
        this.left = -this.width * 6;
      } else if (-this.left < this.width * 7 + this.width / 5 && this.content_number > 7) {
        this.left = -this.width * 7;
      } else if (-this.left < this.width * 8 + this.width / 5 && this.content_number > 8) {
        this.left = -this.width * 8;
      } else if (-this.left < this.width * 9 + this.width / 5 && this.content_number > 9) {
        this.left = -this.width * 9;
      } else if (-this.left < this.width * 10 + this.width / 5 && this.content_number > 10) {
        this.left = -this.width * 10;
      } else if (-this.left < this.width * 11 + this.width / 5 && this.content_number > 11) {
        this.left = -this.width * 11;
      } else if (-this.left < this.width * 12 + this.width / 5 && this.content_number > 12) {
        this.left = -this.width * 12;
      } else if (-this.left < this.width * 13 + this.width / 5 && this.content_number > 13) {
        this.left = -this.width * 13;
      } else if (-this.left < this.width * 14 + this.width / 5 && this.content_number > 14) {
        this.left = -this.width * 14;
      } else if (-this.left < this.width * 15 + this.width / 5 && this.content_number > 15) {
        this.left = -this.width * 15;
      } else if (-this.left < this.width * 16 + this.width / 5 && this.content_number > 16) {
        this.left = -this.width * 16;
      } else if (-this.left < this.width * 17 + this.width / 5 && this.content_number > 17) {
        this.left = -this.width * 17;
      } else if (-this.left < this.width * 18 + this.width / 5 && this.content_number > 18) {
        this.left = -this.width * 18;
      } else if (-this.left < this.width * 19 + this.width / 5 && this.content_number > 19) {
        this.left = -this.width * 19;
      } else if (-this.left < this.width * 20 + this.width / 5 && this.content_number > 20) {
        this.left = -this.width * 20;
      }

      if (-this.left > this.width * (this.content_number - 1) + this.width / 5) {
        this.left = -this.width * (this.content_number - 1);
      }

    } else if (this.default_position < this.left) {
      if (-this.left < this.width * 0 + this.width / 5 * 4) {
        this.left = -this.width * 0;
      } else if (-this.left < this.width * 1 + this.width / 5 * 4) {
        this.left = -this.width * 1;
      } else if (-this.left < this.width * 2 + this.width / 5 * 4) {
        this.left = -this.width * 2;
      } else if (-this.left < this.width * 3 + this.width / 5 * 4) {
        this.left = -this.width * 3;
      } else if (-this.left < this.width * 4 + this.width / 5 * 4) {
        this.left = -this.width * 4;
      } else if (-this.left < this.width * 5 + this.width / 5 * 4) {
        this.left = -this.width * 5;
      } else if (-this.left < this.width * 6 + this.width / 5 * 4) {
        this.left = -this.width * 6;
      } else if (-this.left < this.width * 7 + this.width / 5 * 4) {
        this.left = -this.width * 7;
      } else if (-this.left < this.width * 8 + this.width / 5 * 4) {
        this.left = -this.width * 8;
      } else if (-this.left < this.width * 9 + this.width / 5 * 4) {
        this.left = -this.width * 9;
      } else if (-this.left < this.width * 10 + this.width / 5 * 4) {
        this.left = -this.width * 10;
      } else if (-this.left < this.width * 11 + this.width / 5 * 4) {
        this.left = -this.width * 11;
      } else if (-this.left < this.width * 12 + this.width / 5 * 4) {
        this.left = -this.width * 12;
      } else if (-this.left < this.width * 13 + this.width / 5 * 4) {
        this.left = -this.width * 13;
      } else if (-this.left < this.width * 14 + this.width / 5 * 4) {
        this.left = -this.width * 14;
      } else if (-this.left < this.width * 15 + this.width / 5 * 4) {
        this.left = -this.width * 15;
      } else if (-this.left < this.width * 16 + this.width / 5 * 4) {
        this.left = -this.width * 16;
      } else if (-this.left < this.width * 17 + this.width / 5 * 4) {
        this.left = -this.width * 17;
      } else if (-this.left < this.width * 18 + this.width / 5 * 4) {
        this.left = -this.width * 18;
      } else if (-this.left < this.width * 19 + this.width / 5 * 4) {
        this.left = -this.width * 19;
      } else if (-this.left < this.width * 20 + this.width / 5 * 4) {
        this.left = -this.width * 20;
      }
    }

    this.default_position = this.left;
    this.swiper_content_box.style.left = `${this.left}px`;
  } // positioning end

  classReset () {
    for (let i=0; i<this.content_number; i++) {
      this.swiper_content[i].classList.remove("swiper_content_active");
      this.swiper_paging_button[i].classList.remove("swiper_paging_button_active");
    }

    switch (-this.left) {
      case this.width * 0 :
      this.swiper_content[0].classList.add("swiper_content_active");
      this.swiper_paging_button[0].classList.add("swiper_paging_button_active");
      break
      case this.width * 1 :
      this.swiper_content[1].classList.add("swiper_content_active");
      this.swiper_paging_button[1].classList.add("swiper_paging_button_active");
      break
      case this.width * 2 :
      this.swiper_content[2].classList.add("swiper_content_active");
      this.swiper_paging_button[2].classList.add("swiper_paging_button_active");
      break
      case this.width * 3 :
      this.swiper_content[3].classList.add("swiper_content_active");
      this.swiper_paging_button[3].classList.add("swiper_paging_button_active");
      break
      case this.width * 4 :
      this.swiper_content[4].classList.add("swiper_content_active");
      this.swiper_paging_button[4].classList.add("swiper_paging_button_active");
      break
      case this.width * 5 :
      this.swiper_content[5].classList.add("swiper_content_active");
      this.swiper_paging_button[5].classList.add("swiper_paging_button_active");
      break
    }
  }
} // app end

window.addEventListener("DOMContentLoaded", (e) => {
  let swiper = new Swiper(
    document.getElementsByClassName("swiper")[0],
    document.getElementsByClassName("swiper_content_box")[0],
    document.getElementsByClassName("swiper_content"),
    document.getElementsByClassName("swiper_btn"),
    document.getElementsByClassName("swiper_paging_button"),
  );
})
