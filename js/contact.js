window.addEventListener("DOMContentLoaded", (e) => {
  let section_04 = document.getElementsByClassName("section_04")[0];

  setTimeout(() => {
    if(!section_04.classList.contains("section_04_on")){
      section_04.classList.add("section_04_on");
    }
  }, 500);
})
