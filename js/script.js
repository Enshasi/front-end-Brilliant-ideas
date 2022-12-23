//change navbar styles on scroll
//لما انزل ب السكرول في الصفحة
//  بدي اخلي ال 
// header ينزل معي 

window.addEventListener("scroll", () => {
  document
    .querySelector(".header")
    .classList.toggle("window-scroll", window.scrollY > 50);
});



//scroll The Link in section
//
let linkes = document.querySelectorAll(".header  ul li a");
linkes.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    linkes.forEach(es => {
      es.classList.remove("active");
    });
    e.target.classList.add("active");

    document.querySelector(`#${e.target.dataset.scroll}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//button  move top
// لما  انزل ب 
//  السكرول وأصل لرقم 1000  بدي يظهر الزر يلي بطلعني لفوق

let span = document.querySelector('.btn-up');
window.onscroll = function () {
  // console.log(this.scrollY)
  if (window.scrollY >= 1000) {
    span.classList.add("dis");
    span.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    span.classList.remove("dis");
  }
};
