window.addEventListener("DOMContentLoaded", (e) => {
  let main = document.getElementsByClassName("main_content")[0];
  let img = document.getElementsByClassName("works_img");
  let top = document.documentElement.scrollTop;
  let img_top = [];
  let scale = [];

  let intro_content = document.getElementsByClassName("intro_content");

  for (let i=0; i<img.length; i++) {
    img_top[i] = img[i].offsetTop + main.offsetTop;
  }

  for (let i=0; i<intro_content.length; i++) {
    if (intro_content[i].offsetTop - 150 < top + window.innerHeight) {
      if (!intro_content[i].classList.contains("intro_content_on")) {
        intro_content[i].classList.add("intro_content_on")
      }
    }
  }

  console.log (intro_content[2].offsetTop)

  window.addEventListener("resize", (e) => {
    for (let i=0; i<img.length; i++) {
      img_top[i] = img[i].offsetTop + main.offsetTop;
    }
  })

  window.addEventListener("scroll", (e) => {
    top = document.documentElement.scrollTop;

    for (let i=0; i<img.length; i++) {
      if (img_top[i] >= top - 300 ) {
        scale[i] = (img_top[i] - 300 - top) / 10000 * 3 + 1;
        if (scale[i] <= 1.3) {
          if (scale[i] < 1) {
            scale[i] = 1;
          }
          img[i].style.transform = `scale(${scale[i]})`;
        }
      }
    }

     for (let i=0; i<intro_content.length; i++) {
       if (intro_content[i].offsetTop - 150 < top + window.innerHeight) {
         if (!intro_content[i].classList.contains("intro_content_on")) {
           intro_content[i].classList.add("intro_content_on")
         }
       }
     }
  })
});
