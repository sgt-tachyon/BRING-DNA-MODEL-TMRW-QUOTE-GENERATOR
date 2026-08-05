const quotes = [
    `Jelia: krussie
    Vance: asfasfasf
    Nds: sjkf`,
    `my name is jeff`,
    `Vance: no shade i just thought real deep and hard on who ur past crushes were and the only thoughts that came to my head besides fake genshin people were faith and samantha r (the r stands for, rosary time na namen, please go back to your classroom)`,
    `Niko: WATCH TURNING RED BESTIE
    Niko: ITS GOOD
    Niko: ALSO THE SONG NOBODY LIKE US IS A BOP
    Niko: PRIYA AND ABBY ARE A MOOD
    Niko: MIRIAM IS PRETTY
    Niko: TAE YOUNG IS CUTE
    Niko: AND RO FUCKING BAIRE IS FINE
    Niko: Did I mention that Miriam is pretty🤔`,
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});
