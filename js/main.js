// Scroll --------------------------------------------
ScrollOut({
    targets: '.r,h1,a,div,p,img'
});
window.addEventListener("scroll", () => {
    if (pageYOffset > 500) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-100%";
    }
});

let cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", () => {
        card.classList.toggle("expand");
        card.classList.toggle("card")
        let met = card.parentElement.parentElement.parentElement;
        met.classList.toggle("mett");
    });
};

let clickHam = document.querySelector(".wholeHam");
let ham = document.querySelector(".ham");
let side = document.querySelector(".side");

clickHam.addEventListener("click", () => {
    ham.classList.toggle("hamActive");
    side.classList.toggle("sideActive")
});