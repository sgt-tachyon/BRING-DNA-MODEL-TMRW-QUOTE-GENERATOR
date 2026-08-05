const quotes = [
    {
    text: `Jelia: who holds in their piss here
    Pat: Hows yall work immersion going.`,
    image: "images/work-immer.png"
    },
    {
        text: `my name is jeff`,
        image: "images/jeff.jpg"
    },
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});
