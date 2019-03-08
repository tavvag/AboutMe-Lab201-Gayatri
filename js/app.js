'use strict';
//Variable declarations for questions
var responseTextForYesNo = '(yes/no)';
var questionOnCoding = 'Can you guess if I love coding !';
var responseOnCoding = 'Yes I love coding !';
var questionOnCar= 'Can you guess if my favourite car is Benz';
var responseOncar = 'Yes correct! My favourite car is not Benz its Porsche';
var questionOnCuisine= 'Can you guess if my favourite cusine is Italian';
var responseOnCuisine= 'You got it !My all time favourite is Indian cuisine and I love Biriyani ';
var questionOnCooking= 'Do you think if I enjoy cooking in my free time';
var responseOnCooking = 'Yes I love trying my hand on different dishes';
var questionOnVacation='Do you think my favourite vacation place is Paris';
var responseOnVacation= 'Yesss! Paris is my favourite Vacation place anytime';
var questionOnFavouriteColor= 'Can you guess my favourite color';
var listOfFavouriteColors = ['BLUE','PINK','MUSTARD','PURPLR','WHITE'];
//variable declarations for yes or no replys to User
var wrongGuess = 'Incorrect entry! lets try one more time buddy';
var yes = 'YES';
var no ='NO';
var questionOnUserName ='Welcome to my Guessing Game Page !Please enter your Name before we begin the Game';

//Array of Questions
var questions =[questionOnCoding,questionOnCar,
  questionOnCuisine,questionOnCooking,
  questionOnVacation];

var correctAnswer = [yes,no,no,yes,yes];
var responseMessage = [responseOnCoding,responseOncar,responseOnCuisine,responseOnCooking,responseOnVacation];

//Begin the Game

var userName = prompt(questionOnUserName);
if(userName){
  console.log(`Welcome! ${userName}`);
  alert(`Welcome! ${userName} ,Lets play a Guessing game to know more about me `);
  validateUserInput(questions);
  validateCorrectResponseForColor(questionOnFavouriteColor,listOfFavouriteColors);
  guessNumberOfYears();
}else{
  alert('Thanks for visiting my Page!Have a wonderful day');
}

//validates User Input by looping into Questions
function validateUserInput(questions) {
  for (var i = 0; i < questions.length; i++) {
    var userGuess=  guessMe(questions[i]);
    console.log(userGuess + ' to ' + questions[i]);
    var isCorrectlyGuessed = validateUserGuess(userGuess, correctAnswer[i]);
    isGuessWorked(isCorrectlyGuessed, questions[i], correctAnswer[i],responseMessage[i]);
  }
}

//Comparing User Guess to Expected Answer
function validateUserGuess(userInput, expected) {
  if(userInput.toUpperCase() === expected){
    return true;
  } else {
    return false;
  }
}

//Prompt the Question to user
function guessMe(puzzle) {
  return prompt(puzzle + ' ' +responseTextForYesNo);
}

//Validates and alerts user whether it's a right guess or providing more chances to guess again
function isGuessWorked(input, puzzle, expected,response) {
  if (input) {
    alert(response);
    console.log('User guess is Correct and response is' + response);
  }
  else {
    alert(wrongGuess);
    console.log('User guess is Incorrect and response is' + wrongGuess);
    var correctAnswer= validateUserGuess(guessMe(puzzle), expected);
    if(correctAnswer){
      alert(response);
    }
  }
}

//Validates user response to find favourite color
function validateCorrectResponseForColor(puzzle,expectedList){
  var numberOfAttempts = 0;
  var incorrectAttempt =0;

  while(numberOfAttempts<= (expectedList.length+1)){
    var response = prompt(puzzle);
    for(var i= 1;i<=expectedList.length;i++ ){
      var correctGuess =validateUserGuess(response,expectedList[i]);
      if(correctGuess){
        alert(`Yes correct one of favourite color is ${response}`);
        numberOfAttempts++;
        return;
      }
    }

    if(!correctGuess){
      alert(`lets try one more time ,your number of attempts remaining are ${expectedList.length-numberOfAttempts}`);
      numberOfAttempts++;
      incorrectAttempt++;
    }
    console.log(`Total attempts ${numberOfAttempts}`);
    console.log(`Total incorrect attempts ${incorrectAttempt}`);
  }
}

//Guess a number
function guessNumberOfYears(){
  var numberOfAttemptsAllowed =4;
  while(numberOfAttemptsAllowed>0){
    console.log('Attempts remaining ' + numberOfAttemptsAllowed);
    var numberOfYearsGuessed = parseInt(prompt('Can you guess for how many years I have been married to my loving Husband Siva'));
    console.log(`Number Guessed by User ${numberOfYearsGuessed}`);
    if(numberOfYearsGuessed){
      if(numberOfYearsGuessed<7 && numberOfYearsGuessed >4){
        alert('You are close!Lets try one more time');
        numberOfAttemptsAllowed--;
      }else if(numberOfYearsGuessed>10){
        alert(`Guess is high!Guess a number less than ${numberOfYearsGuessed}`);
        numberOfAttemptsAllowed--;
      }else if(numberOfYearsGuessed<5){
        alert(`Guess is low!Guess a number greater than ${numberOfYearsGuessed}`);
        numberOfAttemptsAllowed--;
      }else if(numberOfYearsGuessed===7){
        alert(`Yay correct I have been married for ${numberOfYearsGuessed} years`);
        return;
      }

    }else{alert('Enter a number');}
  }
  console.log(`Number of attempts ${4-numberOfAttemptsAllowed}`);
}
