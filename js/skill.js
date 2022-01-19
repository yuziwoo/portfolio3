window.addEventListener("DOMContentLoaded", (e) => {
  let category1 = document.getElementById("show_all");
  let category2 = document.getElementById("develop");
  let category3 = document.getElementById("base");
  let category4 = document.getElementById("interactive");

  let skill_list = document.getElementsByClassName("skill_list");
  let skill_contents = document.getElementsByClassName("skill_content");
  let skill_content_value_box = document.createElement("li");
  skill_content_value_box.classList.add("skill_content_values");
  skill_content_value_box.classList.add("skill_content_values_hide");
  document.body.appendChild(skill_content_value_box);

  category1.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    for(let i=0; i<skill_contents.length; i++){
      skill_contents[i].classList.remove("hide_content")
    }
  })

  category2.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("develop")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }
  })

  category3.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("base")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }
  })

  category4.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("interactive")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }
  })

  // 리스트 클릭시 값 변환 (아코디언)
  let skill_content_values = [`<a href="img/note.xlsx" class="display_flex_start">정리 노트 엑셀 다운로드<img class="margin_left_10" src="img/download.png"></a>`,
  "hi2"];

  for(let i=0; i<skill_contents.length; i++){
    skill_contents[i].addEventListener("click", (e) => {
      e.preventDefault();
      skill_content_value_box.innerHTML = skill_content_values[i];
      skill_content_value_box.classList.remove("skill_content_values_hide");
      skill_contents[i].parentElement.insertBefore(skill_content_value_box, skill_contents[i+1]);
    })
  }

})
