const slideNameNodes = document.querySelectorAll(".slide-name");
const cardNodes = document.querySelectorAll(".card");
const dotNodes = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const imgNodes = document.querySelector(".slider-right").querySelectorAll(".img")

const changeSlide = (slide) => {
    for (let i = 0; i < cardNodes.length; i++) {
        if (i == slide-1) {
            cardNodes[i].classList.remove("hidden");
            imgNodes[i].classList.remove("hidden");
            slideNameNodes[i].classList.add("active");
            dotNodes[i].classList.add("active");
        } else {
            cardNodes[i].classList.add("hidden");
            imgNodes[i].classList.add("hidden");
            slideNameNodes[i].classList.remove("active");
            dotNodes[i].classList.remove("active");
        }
    }
}

const getCurrentSlide = () => {
    for (let i = 0; i < cardNodes.length; i++) {
        if (!cardNodes[i].classList.contains("hidden")) {
            return i + 1;
        }
    }
}

const getPrevSlide = (slide) => slide == 1 ? cardNodes.length : slide - 1;
const getNextSlide = (slide) => slide == cardNodes.length ? 1 : slide + 1;


for (let i = 0; i < slideNameNodes.length; i++) {
    slideNameNodes[i].addEventListener("click", () => changeSlide(i+1));
}

for (let i = 0; i < dotNodes.length; i++) {
    dotNodes[i].addEventListener("click", () => changeSlide(i+1));
}

prevButton.addEventListener("click", () => changeSlide(getPrevSlide(getCurrentSlide())));
nextButton.addEventListener("click", () => changeSlide(getNextSlide(getCurrentSlide())));


