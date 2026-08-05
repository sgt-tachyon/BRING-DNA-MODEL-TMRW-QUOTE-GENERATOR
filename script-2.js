const quotes = [
    {
        text: `my name is jeff`,
        image: "images/jeff.jpg"
    },
    {
        text: `Jelia: who holds in their piss here
        Pat: Hows yall work immersion going.`,
        image: "images/work-immer.png"
    },
];

const quote = document.querySelector("#quote");
const btn = document.querySelector("#btn");

const popup = document.querySelector("#popup");
const popupImg = document.querySelector("#popup-img");
const viewPhoto = document.querySelector("#viewPhoto");
const close = document.querySelector("#close");

let currentQuote;

btn.addEventListener("click", () => {

    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.textContent = currentQuote.text;

    viewPhoto.style.display = "inline";
});

viewPhoto.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = currentQuote.image;
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});
