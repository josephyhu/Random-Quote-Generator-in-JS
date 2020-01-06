let red;
let green;
let blue;
let quotes = [
  {quote: "Frankly, my dear, I don't give a damn.",
   source: "Rhett Butler",
   type: "movie",
   citation: "Gone with the Wind",
   year: 1939
 },
 {quote: "I'm gonna make him an offer he can't refuse.",
  source: "Vito Corleone",
  type: "movie",
  citation: "The Godfather",
  year: 1972
 },
 {quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  source: "Terry Malloy",
  type: "movie",
  citation: "On the Waterfront",
  year: 1954
 },
 {quote: "Toto, I've a feeling we're not in Kansas anymore.",
  source: "Dorothy Gale",
  type: "movie",
  citation: "The Wizard of Oz",
  year: 1939
 },
 {quote: "Here's looking at you, kid.",
  source: "Rick Blaine",
  type: "movie",
  citation: "Casablanca",
  year: 1942
 },
 {quote: "El Psy Kongroo.",
  source: "Okabe Rintaro",
  type: "visual novel",
  citation: "Steins;Gate",
  year: 2009
 },
 {quote: "Deceive the first you. Deceive the world. That is the choice to arrive at the 'Steins Gate.'",
  source: "Okabe Rintaro",
  type: "visual novel",
  citation: "Steins;Gate",
  year: 2009
 },
 {quote: "I am mad scientist. It's so cool. Son of a bitch.",
  source: "Okabe Rintaro",
  type: "anime",
  citation: "Steins;Gate",
  year: 2011
 },
 {quote: "Explosion!",
  source: "Megumin",
  type: "anime",
  citation: "KonoSuba: God's Blessing on This Wonderful World!",
  year: 2016
 },
 {quote: "War is peace. Freedom is slavery. Ignorance is strength.",
  source: "George Orwell",
  type: "book",
  citation: "Nineteen Eighty-Four",
  year: 1949
 },
 {quote: "All animals are equal, but some animals are more equal than others.",
  source: "George Orwell",
  type: "book",
  citation: "Animal Farm",
  year: 1945
 },
 {quote: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
  source: "J. R. R. Tolkien",
  type: "book",
  citation: "The Lord of the Rings",
  year: 1954
 }
];

function getRandomQuote(array) {
  return array[Math.floor(Math.random() * quotes.length)];
}

function formatQuote() {
  let quoteObj = getRandomQuote(quotes);
  let string = "";
  string += "<p class='quote'>" + quoteObj.quote + "</p>";
  string += "<p class='source'>" + quoteObj.source;
  if (quoteObj.type) {
    string += "<span class='type'>" + quoteObj.type + "</span>";
  }
  if (quoteObj.citation) {
    string += "<span class='citation'>" + quoteObj.citation + "</span>";
  }
  if (quoteObj.year) {
    string += "<span class='year'>" + quoteObj.year + "</span>";
  }
  string += "</p>";
  return string;
}

function printQuote(quote) {
  let div = document.getElementById('quote-box');
  div.innerHTML = quote;
}

function color() {
  return Math.floor(Math.random() * 89);
}

function displayColor() {
  red = color();
  green = color();
  blue = color();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

document.getElementsByTagName('body')[0].style.background = displayColor();
printQuote(formatQuote());
