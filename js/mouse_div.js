window.addEventListener("DOMContentLoaded", (e) => {

  let mouse1 = document.getElementsByClassName("mouse1")[0];
  let mouse2 = document.getElementsByClassName("mouse2")[0];

  document.documentElement.addEventListener("mousemove", (e) => {
    mouse1.style.transform = `translate3d(${e.pageX- 5}px, ${e.pageY- 5}px, 0px)`;
    if(!mouse2.classList.contains("hover")){
      mouse2.style.transform = `translate3d(${e.pageX- 17}px, ${e.pageY- 17}px, 0px)`;
    }else{
      mouse2.style.transform = `translate3d(${e.pageX- 42}px, ${e.pageY- 42}px, 0px)`;
    }
  }, true);

  let box = document.getElementsByClassName("box")[0];

  box.addEventListener("mouseenter", (e) => {
    mouse2.classList.add("hover");
  });

  box.addEventListener("mouseleave", (e) => {
    mouse2.classList.remove("hover");
  });

});
