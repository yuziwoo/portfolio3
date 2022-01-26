window.addEventListener("DOMContentLoaded", (e) => {
  let help = document.getElementsByClassName("help")[0];

  help.addEventListener("click", ()=> {
    help.classList.toggle("help_active");
  })
});
