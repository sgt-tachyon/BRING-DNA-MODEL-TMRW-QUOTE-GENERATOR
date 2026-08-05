const quotes = [
    `0pATLINHGt
    ttyyj`,
    `my name is jeff`,
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});
