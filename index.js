const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function () {
  return tutorials.map(capFirstLetters);
}

function capFirstLetters (stringList) {
  //const finalArray = [];
  for (const string of stringList) {

    // split stringList into arrays of sentences
    const newStr = stringList.split();
  
    // split newString[0] into arrays of words
    const words = newStr[0].split(" ");
  
    // capitalize first letter of each word
    for (let i=0; i < words.length; ++i) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // join corrected word arrays back into strings
    const finalString = words.join(" ");

    // return strings
    return finalString;
 
  }

}

//console.log(titleCased());