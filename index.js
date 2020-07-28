// get the element
const text = document.querySelector('#main-text');
const text1 = document.querySelector('#supporting-text');
// make a words array
const words = [
"Hello World! || I'm Juan", "I'm a developer.", "I'm well-versed in Mathematics.", "Check out my work."
];
const words1 = [
"<nice to meet you>", "C++, Python, HTML, CSS, JS, MEAN Stack, Ionic, GoLang", "Calculus, Linear Algebra, Systems of Equations, Mathemtical Modeling, Dynamic Systems, Real Analysis, Complex Analysis, Graph Theory, ODE's, PDE's", "Connect with me on LinkedIn: https://www.linkedin.com/in/juancarbajal/"
];

// start typing effect
setTyper(text, words);
setTyper(text1, words1);

function setTyper(element, words) {
    // time delay for each letter
  const LETTER_TYPE_DELAY = 75;
  // how long the phrase stays 
  var WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];
    const wordLength = word.length;
    console.log(word,wordLength);
    // set the time the word sits depending on length
    switch (wordLength){
        case 16:
            WORD_STAY_DELAY = 10000;
            break;
        case 18:
            switch (word){
                case "<nice to meet you>":
                    console.log('nice to meet case');
                    WORD_STAY_DELAY = 6000;
                    break;
                case 'Check out my work.':
                    console.log ('check case');
                    WORD_STAY_DELAY = 18150;
                    break;
                default:
                    console.log('e rg');
            }
            break;
        case 24:
            WORD_STAY_DELAY = 5000;
            break;
        case 31:
            WORD_STAY_DELAY = 12000;
            break;
        case 53:
            WORD_STAY_DELAY = 4000;
            break;
        case 70:
            WORD_STAY_DELAY = 5000;
            break;
        case 146:
            WORD_STAY_DELAY = 500;
            break;
        default:
            console.log('default word stay');
    }

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}
