//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!

//-------------------------------------------------Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//console.log(result);


//-------------------------------------------------Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result1 = unRegex.test(exampleStr);

//console.log(result1);

//-------------------------------------------------Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result2 = quoteSample.match(vowelRegex); // Change this line

//console.log(result2);


//-------------------------------------------------Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result3 = quoteSample1.match(alphabetRegex); // Change this line

//console.log(result3);


//-------------------------------------------------Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result4 = quoteSample2.match(myRegex); // Change this line

//console.log(result4);


//-------------------------------------------------Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex1 =  /[^aeiou^0-9]/gi; // Change this line
let result5 = quoteSample.match(myRegex1); // Change this line
//console.log(result5);



//-------------------------------------------------Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // Change this line
let result6 = difficultSpelling.match(myRegex2);
//console.log(result6);



//-------------------------------------------------Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result7= chewieQuote.match(chewieRegex);

//console.log(result7);


//-------------------------------------------------Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<.*?>/; // Change this line
let result8 = text.match(myRegex3);

//console.log(result8);

//-------------------------------------------------Find One or More Criminals in a Hunt
let try1 = "P1P5P4CCCcP2P6P3";
let reCriminals = /C+/;
let result9 = try1.match(reCriminals);

//console.log(result9);


//-------------------------------------------------Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result10 = calRegex.test(rickyAndCal);

console.log(result10);