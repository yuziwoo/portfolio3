window.addEventListener("DOMContentLoaded", (e) => {
  let click_count = 0;
  let background_image = document.getElementsByClassName("background_image")[0];
  let content_box = document.getElementsByClassName("content_box")[0];
  let content_list = document.getElementsByClassName("content_list")[0];
  let content = document.getElementsByClassName("content");
  let button_up = document.getElementsByClassName("button_up")[0];
  let button_down = document.getElementsByClassName("button_down")[0];
  let info = document.getElementsByClassName("info")[0];
  let video = document.getElementsByTagName("video")[0];
  let button_box = document.getElementsByClassName("button_box")[0];

  let content_values = [
    ["baobab", "https://yuziwoo.github.io/baobab/"],
    ["", ""]
  ]

  content_list.addEventListener("click", () => {
    if(click_count < 1){
      content_box.classList.add("content_box_on");
      info.classList.add("info_on");
    }
  });

  for(let i=0; i<content.length; i++) {
    content[i].addEventListener("click", (e) => {
      for(let j=0; j<content.length; j++) {
        if(i != j){
          content[j].classList.remove("active");
        }
      }//반복문 J 종료

      e.target.parentElement.classList.add("active");
      content_list.scrollTo(0, e.target.parentElement.offsetTop - 253);

      background_image.src = `img/${content_values[i][0]}.jpg`;
      video.src = `video/${content_values[i][0]}.mp4`;
      button_box.href = content_values[i][1];
    })
  }

  button_up.addEventListener("click", () => {
    content_list.scrollBy(0, -56);
  })
  button_down.addEventListener("click", () => {
    content_list.scrollBy(0, 56);
  })
});