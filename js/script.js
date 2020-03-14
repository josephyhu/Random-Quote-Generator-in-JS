let red;
let green;
let blue;
class Quote {
  constructor(quote, source, type, citation, year) {
    this.quote = quote;
    this.source = source;
    this.type = type;
    this.citation = citation;
    this.year = year;
  }
}
const quotes = [
  new Quote("Frankly, my dear, I don't give a damn.", "Rhett Butler", "movie", "Gone with the Wind", 1939),
  new Quote("I'm gonna make him an offer her can't refuse.", "Vito Corleone", "movie", "The Godfather", 1972),
  new Quote("You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
            "Terry Malloy", "movie", "On the Waterfront", 1954),
  new Quote("Toto, I've a feeling we're not in Kanas anymore.", "Dorothy Gale", "movie", "The Wizard of Oz", 1939),
  new Quote("Here's looking at you, kid.", "Rick Blaine", "movie", "Casablanca", 1942),
  new Quote("All right, Mr . DeMille, I'm ready for my close-up.", "Norma Desmond", "movie", "Sunset Boulevard", 1950),
  new Quote("May the Force be with you.", "Han Solo", "movie", "Star Wars", 1977),
  new Quote("Fasten your seatbelts. It's going to be a bumpy night.", "Margo Channing", "movie", "All About Eve", 1950),
  new Quote("You talkin' to me?", "Travis Bickle", "movie", "Taxi Driver", 1976),
  new Quote("El Psy Kongroo.", "Okabe Rintaro", "visual novel", "Steins;Gate", 2009),
  new Quote("Deceive the first you. Deceive the world. That is the choice to arrive at the 'Steins Gate.'",
            "Okabe Rintaro", "visual novel", "Steins;Gate", 2009),
  new Quote("I am mad scientist. It's so cool. Son of a bitch.", "Okabe Rintaro", "anime", "Steins;Gate", 2011),
  new Quote("Meruem, King of Ants, you know nothing...of humanity's infinite potential for malice!",
            "Isaac Netero", "anime", "Hunter x Hunter (2011)", 2014),
  new Quote("Explosion!", "Megumin", "anime", "KonoSuba: God's Blessing on This Wonderful World!", 2016),
  new Quote("People die if they are killed...", "Emiya Shirou", "anime", "Fate/stay night", 2006),
  new Quote("WAR IS PEACE. FREEDOM IS SLAVERY. IGNORANCE IS STRENGTH", "George Orwell", "book", "Nineteen Eighty-Four", 1949),
  new Quote("All animals are equal, but some animals are more equal than others.", "George Orwell", "book", "Animal Farm", 1945),
  new Quote("One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
            "J. R. R. Tolkien", "book", "The Lord of the Rings", 1954)
];

const getRandomQuote = array => array[Math.floor(Math.random() * quotes.length)];

const printQuote = () => {
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
  document.getElementById('quote-box').innerHTML = string;
}

const color = () => Math.floor(Math.random() * 89);

const displayColor = () => {
  red = color();
  green = color();
  blue = color();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

document.getElementsByTagName('body')[0].style.background = displayColor();
printQuote();
