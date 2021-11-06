const quotes = [
    {
        quote:"뭐",
        author:"라",
    },
    {
        quote:"고",
        author:"쓰",
    },
    {
        quote:"지",
        author:"일",
    },
    {
        quote:"단",
        author:"아무거나",
    },
    {
        quote:"써보자",
        author:"랄랄라",
    },
    {
        quote:"명언",
        author:"입니다",
    },
    {
        quote:"오늘 날씨",
        author:"좋음",
    },
    {
        quote:"나는",
        author:"졸림",
    },
    {
        quote:"공부를",
        author:"하자",
    },
    {
        quote:"디자인",
        author:"파란색",
    },

];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

