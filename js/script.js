/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 *  create a quotes array 
***/
const quotes = [
  {quote:'The way to get started is to quit talking and begin doing.', 
   source: 'Walt Disney',
   citation: 'book',
   year:'1956',
   tag:'principle'
  },
  {quote: 'If life were predictable it would cease to be life, and be without flavor.',
   source: 'Eleanor Roosevelt',
   citation: 'Fun of life',
   year: '1936',
   tag: 'life'
  },
  {quote: 'If life were predictable it would cease to be life, and be without flavor.',
   source: 'Eleanor Roosevelt',
   citation: 'meet your goal',
   tag:'life'
  },
  {quote: 'Continue to share your heart with people even if it has been broken.',
   source: 'Amy Poehler',
   year: '1975'},
  {quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    source: 'Thomas A. Edison',
    citation: 'This is real'
  },
  {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    source: 'Mahatma Gandhi'}
];

/***
 * getRandomQuote function
***/
function getRandomQuote(){
  let randomIndex = Math.floor(Math.random()*quotes.length);
  return quotes[randomIndex];
}


/***
 * `printQuote` function
***/

function printQuote(){
 
  // get randomQuote object from function getRandomQuote() function
  let randomQuote = getRandomQuote();

  let html = '';

  // add quote and source to html string
  html += `<p class = "quote"> ${randomQuote.quote} </p>`;
  html += `<p class = "source"> ${randomQuote.source}`;

  // if any of citation or year property in random quote object, add to html string
  if("citation" in randomQuote){
      html += `<span class = "citation"> ${randomQuote.citation}</span>`;
  }

  if("year" in randomQuote){
      html += `<span class = "year"> ${randomQuote.year}</span>`;
  }

  if("tag" in randomQuote){
    html += `<span class = "tag"> ${randomQuote.tag}</span>`;
  }
  html += `</p>`;
  
  // put the html into html element
  document.getElementById('quote-box').innerHTML = html; 

  // change background color
  randomColor();

}

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.backgroundColor = bgColor;
}


/**
 * autoPrint the quote for intervals
 */
function autoPrintQuote(){
   setInterval(printQuote, 10000);
}

autoPrintQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);