console.log('Connected!');

// Set the wins variable
let intWins = 0;
document.getElementById('wins').innerHTML = intWins;

// Set the losses variable
let intLosses = 0;
document.getElementById('losses').innerHTML = intLosses;

// Set the guesses remaining variable
let intGuesses = 9;
document.getElementById('guessesLeft').innerHTML = intGuesses;

// Random letter generator
function randLetter() {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}

// Call the random letter generator and set the winning letter
let newLetter = randLetter();
console.log(newLetter);

// Create array to hold the guesses
let arrGuesses = [];

// Function that resets all
function reset() {
  // Call the random letter generator
  newLetter = randLetter();
  console.log(newLetter);

  // Set the guesses remaining variable
  intGuesses = 9;
  document.getElementById('guessesLeft').innerHTML = intGuesses;

  // Clear the array
  arrGuesses = [];
  console.log(arrGuesses);
  document.getElementById('dispGuesses').innerHTML = '';
}

// Function that gets the pressed key
// document.onkeyup = function(event)
// function keyPressed(event) {
document.onkeyup = function keyPressed(event) {
  const x = event.key;

  // add to array if not already in the array
  const arrCheck = arrGuesses.indexOf(x);
  console.log(arrCheck);
  if (arrCheck === -1) {
    arrGuesses.push(x);
    console.log(arrGuesses);

    // Display the remaining guesses
    // Decrement by one
    intGuesses -= 1;
    document.getElementById('guessesLeft').innerHTML = intGuesses;

    // Display the guesses so far
    document.getElementById('dispGuesses').innerHTML = arrGuesses;
  }

  // Compare pressed key to random key
  // If there is a match
  if (x === newLetter) {
    console.log('Match');

    // Increment the win and display
    intWins += 1;
    document.getElementById('wins').innerHTML = intWins;

    // Reset All
    reset();
  }

  // IF guesses gets to 0, user losses
  // Increment losses by 1 and display
  if (intGuesses === 0) {
    console.log('You Lose');
    console.log(intLosses);
    intLosses += 1;
    document.getElementById('losses').innerHTML = intLosses;

    // Reset All
    reset();
  }
}; // End function keyPressed
