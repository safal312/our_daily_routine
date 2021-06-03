document.getElementById("year").innerText = (new Date()).getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    let mainTitle = document.getElementById("title");
    let words = ["Our", " Daily", " Routine"];
    let count = 0;
    let timer = setInterval(() => {
        if (count === 2) clearInterval(timer);
        mainTitle.innerText += words[count];
        count++;
    }, 1000);
})

let duck = new Audio("sounds/duck.mp3");
duck.volume = 0.1;

let images = Array.from(document.querySelectorAll(".img-container"));

for (let i = 0; i < images.length; i++) {
    images[i].parentElement.addEventListener("mouseenter", () => {
        images[i].parentElement.style.transform = "translate(0.4em, -0.4em)";
    })
    images[i].parentElement.addEventListener("mouseleave", () => {
        images[i].parentElement.style.transform = "translate(-0.4em, 0.2em)";
    })
}

document.querySelectorAll(".navbar li a").forEach(link => {
    link.addEventListener("click", () => {
        duck.play();
    })
})