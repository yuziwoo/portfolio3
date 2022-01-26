window.addEventListener("DOMContentLoaded", (e) => {
  let header = document.getElementsByTagName("header")[0];
  let header_background = document.getElementsByClassName("header_background")[0];
  let header_gnb_list = document.getElementsByClassName("header_gnb_list");
  let header_list_hover = document.getElementsByClassName("header_list_hover");
  let header_search_form = document.getElementsByClassName("header_search_form")[0];
  let header_search_input = document.getElementsByClassName("header_search_input")[0];
  let header_search_button = document.getElementsByClassName("header_search_button")[0];
  let is_search_on = false;

  let header_hamb = document.getElementsByClassName("header_hamb")[0];
  let header_hamb_clone = document.getElementsByClassName("header_hamb_clone")[0];
  let header_hamb_menu = document.getElementsByClassName("header_hamb_menu")[0];

  header_search_button.addEventListener("click", () => {
    if(!is_search_on){
      header_search_form.classList.add("header_search_form_on");
      header_search_form.classList.remove("header_search_form_off");
      is_search_on = true;
    }
  })

  document.body.addEventListener("click", () => {
    if(is_search_on && event.target != header_search_input && event.target != header_search_button){
      header_search_form.classList.add("header_search_form_off");
      header_search_form.classList.remove("header_search_form_on");
      is_search_on = false;
    }
  })

  let scrolling = (e) => {
    if (document.documentElement.scrollTop >= 100) {
      header.classList.remove("header_top");
      header_background.style.opacity = 1;
    } else if (!header.classList.contains("header_top") && document.documentElement.scrollTop < 100) {
      header.classList.add("header_top");
      header_background.style.opacity = 0;
    }
  } //scrolling end

  scrolling();
  document.addEventListener("scroll", scrolling);
  window.addEventListener("resize", scrolling);

  header_hamb_clone.addEventListener("click", () => {
    if(header_hamb.classList.contains("header_hamb_off")){
      header_hamb.classList.remove("header_hamb_off");
      header_hamb.classList.add("header_hamb_on");
      header_hamb_clone.classList.remove("header_hamb_off");
      header_hamb_clone.classList.add("header_hamb_on");
      header_hamb_menu.classList.remove("header_hamb_menu_off");
      header_hamb_menu.classList.add("header_hamb_menu_on");
      header_search_button.style.display = "none";
      header.classList.remove("header_top");
    }else if(!header_hamb.classList.contains("header_hamb_off")){
      header_hamb.classList.add("header_hamb_off");
      header_hamb.classList.remove("header_hamb_on");
      header_hamb_clone.classList.add("header_hamb_off");
      header_hamb_clone.classList.remove("header_hamb_on");
      header_hamb_menu.classList.add("header_hamb_menu_off");
      header_hamb_menu.classList.remove("header_hamb_menu_on");
      header_search_button.style.display = "block";
      scrolling();
    }
  })
});
