let videoSection = document.querySelector(".video-section");
function showHideVideo(){
  isShow = !isShow;
 videoSection.classList.toggle("hide", isShow);
}
