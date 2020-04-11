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
let quotes = [];
quotes.push(
  {
    quote: 'Power means nothing without control.',
    source: 'Anonymous',
    citation: 'Quarantine thoughts',
    year: 2020
  },
  {
    quote: 'I should probably stay inside.',
    source: 'An extrovert'
  },
  {
    quote: 'In a time of Destruction, create something.',
    source: 'Woocares',
    citation: 'Instagram',
    year: 2020
  },
  {
    quote: 'If you can\'t go outside, Go inside.',
    source: 'Spiritsnacks',
    citation: 'Instagram',
    year: 2020
  },
  {
    quote: 'Control is an Illusion',
    source: 'Elliot Alderson',
    citation: 'Mr.Robot'
  }
);
console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);