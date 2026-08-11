const quotes = [
    {
        text: `Niko: girl fix your fucking feet😭`,
        image: "images/fix-feet-text.png"
    },

    {
        text: `Jelia: hinde
        Jelia: 👏
        Jelia: hinde
        Jelia: hinde
        Jelia: hinde
        Jelia: 👏
        Jelia: hinde
        Vance: ok ka l;n g
        Jelia: hinde`,
        image: "images/hinde.jpg"
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
    },

    {
        text: `Vance: girl im done switching back and forth
        Vance: reply to me myssamege here
        Vance: also why r u awake so earlu
        Jelia: Yeah his penis is Nice
        Jelia: Thought i don't really care about that anymore
        Jelia: he's not a bad person`,
        image: "images/pp.png"
    },

    {
        text: `Niko: say some shit like "OMG SHES SO CUTE" and ill kill you.
        Jelia: but she is
        Vance to Jelia: bye
        *Niko removed Jelia Inchoco from the group.*`,
        image: "images/but-she-is.jpg",
    },

    {
        text: `Jelia: sam i LOVEEE you!!!!! you were so good at directing hamilton!!!!!!!!!!!
        Niko: WOW SAM, YOU'RE READING SIX OF CROWS? I TOO LOVE HOT STEAMY ORGY SEX! ! (this has never happened in the book)`,
        image: "images/sammie-wammie.png",
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
