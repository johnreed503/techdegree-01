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
    quote : 'Give me six hours to chop down a tree and I will spend the first four sharpening the ax',
    source : 'Abraham Lincoln',
  },
  {
    quote : 'These things cannot be explained in detail. From one thing, know ten thousand things.',
    source : 'Miyamoto Musashi',
    citation : 'A Book of Five Rings',
    year : '1965'
  },
  {
    quote : 'All that you touch you change. All that you change changes you',
    source : 'Octavia Butler',
    citation : 'Parable of the Sower',
    year : '1993'
  },
  {
    quote : 'Do not lose time on daily trivialities. Do not dwell on petty detail. For all of these things melt away and drift apart within the obscure traffic of time. Live well and live broadly.',
    source : 'Don Hertzfeldt',
    citation : 'World of Tomorrow',
    year : '2015'
  },
  {
    quote : 'Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic',
    source : 'Frank Herbert',
    citation : 'Dune',
    year : '1965'
  }
];



/***
 * `getRandomInt` to use in getRandomQuote
***/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

/***
 * `getRandomQuote` function to select random quote from quotes array
***/
function getRandomQuote(arr) {
  let randomQuote = arr[getRandomInt(0, arr.length)]
  return randomQuote
};


/***
 * `printQuote` function
***/
function printQuote(arr) {
  let html = ''
  let quote = getRandomQuote(arr)

    //to display if theres a citation and year
  if (quote.citation !== undefined && quote.year !== undefined) {
    html += `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
    <span class="citation"> ${quote.citation} </span>
    <span class="year"> ${quote.year} </span>
    </p>
    `
  }
  //to display if theres a citation but no year
  else if (quote.citation !== undefined && quote.year === undefined) {
    html += `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
    <span class="citation"> ${quote.citation} </span>
    </p>
    `
  }
  //to display if theres a year but no citation
  else if (quote.citation === undefined && quote.year !== undefined) {
    html += `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
    <span class="year"> ${quote.year} </span>
    </p>
    `
  }
  //to display if theres no citation or year
  else {
    html += `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
    </p>
    `
  }
  return html
  //document.getElementById('quote-box').innerHTML = html;
};

let test = printQuote(quotes)
console.log(test)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
