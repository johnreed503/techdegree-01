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
    'quote' : 'Give me six hours to chop down a tree and I will spend the first four sharpening the ax',
    'source' : 'Abraham Lincoln'
  },
  {
    'quote' : 'These things cannot be explained in detail. From one thing, know ten thousand things.',
    'source' : 'Miyamoto Musashi',
    'citation' : 'A Book of Five Rings',
    'year' : '1965'
  },
  {
    'quote' : 'All that you touch you change. All that you change changes you',
    'source' : 'Octavia Butler',
    'citation' : 'Parable of the Sower',
    'year' : '1993'
  },
  {
    'quote' : 'Do not lose time on daily trivialities. Do not dwell on petty detail. For all of these things melt away and drift apart within the obscure traffic of time. Live well and live broadly.',
    'source' : 'Don Hertzfeldt',
    'citation' : 'World of Tomorrow',
    'year' : '2015'
  },
  {
    'quote' : 'Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic',
    'souce' : 'Frank Herbert',
    'citation' : 'Dune',
    'year' : '1965'
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function getRandomQuote(array) {
  let randomQuote = array(getRandomInt(0, array.length))
  return randomQuote
};

console.log(getRandomInt(0, quotes.length))
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
