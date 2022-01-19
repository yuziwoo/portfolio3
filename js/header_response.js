window.addEventListener("DOMContentLoaded", (e) => {
  let header = document.getElementsByTagName("header")[0];
  let recty = 0;

  let function_header = (e) => {
    let rect = document.documentElement.getBoundingClientRect();

    if(rect.y < recty){
      header.classList.add("hide");
    }else if(rect.y > recty){
      header.classList.remove("hide");
    }

    recty = rect.y;

  }

  document.addEventListener("scroll", function_header);
});
