/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Things work out best for those who make the best of how things work out.",
    source: 'John Wooden',
    citation: 'Inc.',
    year: "unknow"
  },
  {
    quote: "Courage is grace under pressure.",
    source: 'Ernest Hemingway',
    citation: 'Inc.',
    year: "unknow"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    source: 'Walt Disney',
    citation: 'Inc.',
    year: "unknow"
  },
  {
    quote: "It does not matter how slowly you go, so long as you do not stop.",
    source: 'Confucius',
    citation: 'Inc.',
    year: "unknow"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    source: 'Winston Churchill',
    citation: 'Inc.',
    year: "unknow"
  },
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return randomQuote
}


/***
 * `printQuote` function
***/
function printQuote(){
  random = getRandomQuote();
  quote.innerHTML = quotes[random].quote;
  source.innerHTML = quotes[random].source;
  citation.innerHTML = quotes[random].citation;
  year.innerHTML = quotes[random].year;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

const quote = document.querySelector('p.quote');
const source = document.querySelector('p.source');
const citation = document.querySelector('span.citation');
const year = document.querySelector('span.year');

document.getElementById('load-quote').addEventListener("click", printQuote, false);