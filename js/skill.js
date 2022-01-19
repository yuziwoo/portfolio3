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

  let content_index = 10000;
  let clickCount = 2;

  category1.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    content_index = 10000;
    for(let i=0; i<skill_contents.length; i++){
      skill_contents[i].classList.remove("hide_content")
    }

    category1.classList.add("title_active");
    category2.classList.remove("title_active");
    category3.classList.remove("title_active");
    category4.classList.remove("title_active");
  })

  category2.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    content_index = 10000;
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("develop")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }

    category2.classList.add("title_active");
    category1.classList.remove("title_active");
    category3.classList.remove("title_active");
    category4.classList.remove("title_active");
  })

  category3.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    content_index = 10000;
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("base")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }

    category3.classList.add("title_active");
    category2.classList.remove("title_active");
    category1.classList.remove("title_active");
    category4.classList.remove("title_active");
  })

  category4.addEventListener("click", () => {
    skill_content_value_box.classList.add("skill_content_values_hide");
    content_index = 10000;
    for(let i=0; i<skill_contents.length; i++){
      if(skill_contents[i].classList.contains("interactive")){
        skill_contents[i].classList.remove("hide_content")
      }else {
        skill_contents[i].classList.add("hide_content")
      }
    }

    category4.classList.add("title_active");
    category2.classList.remove("title_active");
    category3.classList.remove("title_active");
    category1.classList.remove("title_active");
  })

  // 리스트 클릭시 값 변환 (아코디언)
  let skill_content_values = [`<a href="img/note.xlsx" class="display_flex_start">정리 노트 엑셀 다운로드<img class="margin_left_10" src="img/download.png"></a>`,
  `<iframe src="web_accessibility.html" height="400px"></iframe>`,
  `<iframe src="header_response.html" height="400px"></iframe>`,
  `<iframe src="snow.html" height="400px"></iframe>`,
  `<a href="mouse_div.html" target="_blank" class="display_flex_start">마우스 커서 효과 확인하러 이동하기<img class="margin_left_10" src="img/right.png"></a>`,
  `<iframe src="circle.html" height="400px"></iframe>`
  ];

  for(let i=0; i<skill_contents.length; i++){
    skill_contents[i].addEventListener("click", (e) => {
      e.preventDefault();

      if(content_index == i){
        clickCount += 1;
      }else {
        clickCount = 2;
      }

      skill_content_value_box.innerHTML = skill_content_values[i];
      skill_content_value_box.classList.remove("skill_content_values_hide");
      skill_contents[i].parentElement.insertBefore(skill_content_value_box, skill_contents[i+1]);

      if(!skill_content_value_box.classList.contains("skill_content_values_hide") && content_index == i && clickCount % 2 == 1){
        skill_content_value_box.classList.add("skill_content_values_hide");
      }

      window.scrollTo(0, skill_contents[i].offsetTop - 200);

      content_index = i;
    })
  }

  let top = document.getElementsByClassName("top")[0];
  top.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  })
})
