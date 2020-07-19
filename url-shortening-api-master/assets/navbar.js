const headerNavbar = document.querySelector(".navbar");
// header 3-bar click event bind
document.querySelector(".fas").addEventListener("click", function () {
  if (headerNavbar.style.display === "block") headerNavbar.style.display = "none";
  else headerNavbar.style.display = "block";
});

// TO DO LIST - 로직 수정(디바운스 적용)
window.addEventListener("resize", function () {
  if (window.innerWidth >= 800) {
    // PC - 해더 메뉴바 노출
    headerNavbar.style.display = "block";
  } else {
    // MOBILE - 해더 메뉴바 미노출
    headerNavbar.style.display = "none";
  }
});
document.documentElement.style.overflowX = "hidden";
