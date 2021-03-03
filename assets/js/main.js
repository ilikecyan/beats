// 스크롤이 내려갈 때 Nav Bar 사라짐 / 스크롤이 올라갈때 나타남
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("global-header").style.top = "0";
  } else {
    document.getElementById("global-header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}