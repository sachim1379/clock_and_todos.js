const quotes = [
    {
        quote:" 내기는 탐욕의 아들이며, 부정의 형제이며, 불행의 아버지이다.",
        authoer: "워싱턴"
    },
    {
        quote:" 항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이된다.",
        authoer: "스페인 속담"
    },
    {
        quote:" 인생에서 가장 슬픈 세가지. 할수있었는데, 해야했는데, 해야만했는데",
        authoer: "루이스E.분"
    },
    {
        quote:" 같은 실수를 두려워하되 새로운 실수를 두려워하지마라. 실수는 곧 경험이다.",
        authoer: "아리스토텔레스"
    },
    {
        quote:" 인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
        authoer: "나카무라 미츠루"
    },
    {
        quote:"훌륭한 충고보다 값진 선물은 없다.",
        authoer:"에라스무스"
    },
    {
        quote:"양심은 어떠한 과학의 힘보다도 강하고 현명하다.",
        authoer:"라데이러"
    },
    {
        quote:"우리의 인내가 우리의 힘보다 더 많은 것을 성취할 것이다.",
        authoer:"버크"
    },
    {
        quote:"성공은 매일 반복한 작은 노력들의 합이다.",
        authoer:"로버트 콜리어"
    },
   
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const RAND_NUM = Math.random();


const todaysQuotes = quotes[Math.floor(RAND_NUM*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText= todaysQuotes.authoer;