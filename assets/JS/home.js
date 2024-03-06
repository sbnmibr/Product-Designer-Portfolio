//  Header scroll & to Top

let header=document.querySelector("header")
let toTop=document.querySelector(".toTop")
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
    toTop.classList.add("top")
  } else {
    header.classList.remove("header-scroll");
    toTop.classList.remove("top")
  }
});
