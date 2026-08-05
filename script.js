const quotes = [
    {
        text: `Jelia: krussie
        Vance: asfasfasf
        Nds: sjkf`,
        image: "images/bhi.jpg"
    },
    {
        text: `my name is jeff`,
        image: "images/jeff.jpg"
    },
    {
        text: `Vance: no shade i just thought real deep and hard on who ur past crushes were and the only thoughts that came to my head besides fake genshin people were faith and samantha r (the r stands for, rosary time na namen, please go back to your classroom)`,
        image: "images/past-crushes.png"
    },
    {
        text: `Niko: WATCH TURNING RED BESTIE
        Niko: ITS GOOD
        Niko: ALSO THE SONG NOBODY LIKE US IS A BOP
        Niko: PRIYA AND ABBY ARE A MOOD
        Niko: MIRIAM IS PRETTY
        Niko: TAE YOUNG IS CUTE
        Niko: AND RO FUCKING BAIRE IS FINE
        Niko: Did I mention that Miriam is pretty🤔`,
        image: "images/turning-red.jpg"
    },
    {
        text: `Jelia: if i dont get plowed by him at the end of this term im actually shooting someone
        Jelia: I'm lowkey sexy rn
        Jelia: men are actually the ugliest creatures to walk on this planet earth`,
        image: "images/jaeyisna-3sides.jpg"
    },
    {
        text: `Jelia: I'm home
        Mar Jessi: Jelai
        Mar Jessi: Asan ka ?`,
        image: "images/jelai.jpg"
    }
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
