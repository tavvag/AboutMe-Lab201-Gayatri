"use strict"
//Variable declarations for questions
var responseTextForYesNo = "(yes/no)";
var questionOnCoding ="Can you guess if I love coding !";
var questionOnTimeAtWork="Can you guess if I spend most of my time at work";
var questionOnWhatIEnjoyDoing= "Can you guess When not working I spent my time with my 2 year old";
var questionOnCooking="Do you think if I enjoy cooking for my Husband";
var questionOnSeattleweather="Do you think I like Seattle weather";
//variable declarations for yes or no replys to User
var correctGuess = "Yay ! correct";
var wrongGuess = "Incorrect entry and guess again buddy";
var yes = "YES";
var no ="NO";

//Array of Questions 
var questions =[questionOnCoding,questionOnTimeAtWork,
    questionOnWhatIEnjoyDoing,questionOnCooking,
    questionOnSeattleweather];
 
    var correctAnswer = [yes,no,yes,no,no];
    validateUserInput(questions);

    //validates User Input by looping into Questions
    function validateUserInput(questions) {
        for (var i = 0; i < questions.length; i++) { 
          var userGuess=  guessMe(questions[i]);
          console.log(userGuess + " to " + questions[i]);
          var isCorrectlyGuessed = validateUserGuess(userGuess, correctAnswer[i]);
          isGuessWorked(isCorrectlyGuessed, questions[i], correctAnswer[i]);
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
      return prompt(puzzle + " " +responseTextForYesNo);
    }

    //Validates and alerts user whether it's a right guess or providing more chances to guess again
    function isGuessWorked(input, puzzle, expected) {
        if (input) {
            alert(correctGuess);
        }
        else {
            alert(wrongGuess);
            var correctAnswer= validateUserGuess(guessMe(puzzle), expected);
            if(correctAnswer){
                alert(correctGuess);
            }
        }
    }

