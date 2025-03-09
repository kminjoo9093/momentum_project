const quotes = [
  {
    quoteEn: "The only way to do great work is to love what you do.",
    quoteKr: "위대한 일을 하는 유일한 방법은 네가 하는 일을 사랑하는 것이다." ,
    author: "Steve Jobs"
  },
  {
    quoteEn: "Success is not the key to happiness. Happiness is the key to success.",
    quoteKr: "성공이 행복의 열쇠가 아니다. 행복이 성공의 열쇠이다." ,
    author: "Albert Schweitzer"
  },
  {
    quoteEn: "Believe you can and you're halfway there.",
    quoteKr: "네가 할 수 있다고 믿으면, 이미 반은 이룬 것이다.",
    author: "Theodore Roosevelt"
  },
  {
    quoteEn: "It does not matter how slowly you go as long as you do not stop.",
    quoteKr: "천천히 가는 것은 중요하지 않다, 멈추지 않으면 된다." ,
    author: "Confucius"
  },
  {
    quoteEn: "Your time is limited, so don't waste it living someone else's life.",
    quoteKr: "당신의 시간은 한정되어 있으니, 다른 사람의 삶을 사는 데 낭비하지 마라." ,
    author: "Steve Jobs"
  },
  {
    quoteEn: "The only limit to our realization of tomorrow is our doubts of today.",
    quoteKr: "내일을 실현하는 데 있어서 유일한 한계는 오늘의 의심이다.",
    author: "Franklin D. Roosevelt"
  },
  {
    quoteEn: "Don’t watch the clock; do what it does. Keep going.",
    quoteKr: "시계를 보지 말고, 시계가 하는 대로 해라. 계속 나아가라." ,
    author: "Sam Levenson"
  },
  {
    quoteEn: "The future belongs to those who believe in the beauty of their dreams.",
    quoteKr: "미래는 자신의 꿈의 아름다움을 믿는 사람들의 것이다." ,
    author: "Eleanor Roosevelt"
  },
  {
    quoteEn: "Opportunities don't happen, you create them.",
    quoteKr: "기회는 저절로 오지 않는다, 당신이 그것을 만들어야 한다.",
    author: "Chris Grosser"
  },
];

const quoteEnArea = document.querySelector('.quote-e');
const quoteKrArea = document.querySelector('.quote-k');
const author = document.querySelector('.author');

function showQuotes(){
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEnArea.innerText = `" ${randomQuote.quoteEn} "`;
  quoteKrArea.innerText = randomQuote.quoteKr;
  author.innerText = randomQuote.author;
}

showQuotes();
