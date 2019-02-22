"use strict";
//Variable declarations for questions
var responseTextForYesNo = "Reply with Yes or No";
var questionOnCoding ="Can you guess if I love coding !";
var questionOnTimeAtWork="Can you guess if I spend most of my time at work";
var questionOnWhatIEnjoyDoing= "Can you guess When not working I spent my time with my 2 year old";
var questionOnCooking="DO you think if I enjoy cooking for my Husband";
var questionOnSeattleweather="Do you think I like Seattle weather";
//variable declarations for yes or no replys to User
var replyyesText = "Yay ! correct";
var replyNotext = "Sorry ! Incorrect ,Try guessing again";
var invalidResponse = "Incorrect entry ,please answer with a yes or No";
var yes = "YES";
var no ="NO";

//varible declarations for Answers received from user
var answerToCoding = prompt(questionOnCoding + " " +responseTextForYesNo);
alert(validateAnswer(answerToCoding,yes,no));
console.log(questionOnCoding + " :" + answerToCoding);

var answerToTimeAtWork = prompt(questionOnTimeAtWork + " " +responseTextForYesNo);
alert(validateAnswer(answerToTimeAtWork,no,yes));
console.log(questionOnTimeAtWork + " :" + answerToTimeAtWork);

var answerToWhatIEnjoyDoing = prompt(questionOnWhatIEnjoyDoing + " " +responseTextForYesNo);
alert(validateAnswer(answerToWhatIEnjoyDoing,yes,no));
console.log(questionOnWhatIEnjoyDoing + " :" + answerToWhatIEnjoyDoing);

var answerToCooking = prompt(questionOnCooking + " " +responseTextForYesNo);
alert(validateAnswer(answerToCooking,yes,no));
console.log(questionOnCooking + " :" + answerToCooking);

var answerToSeattleweather = prompt(questionOnSeattleweather + " " +responseTextForYesNo);
alert(validateAnswer(answerToSeattleweather,no,yes));
console.log(questionOnSeattleweather + " :" + answerToSeattleweather);
//

function validateAnswer(userResponse,correctAnswer,incorrectAnswer){
    if(userResponse.toUpperCase() === correctAnswer ){
        return replyyesText;
    }else if(userResponse.toUpperCase() === incorrectAnswer){
        return replyNotext;
    }else{
        return invalidResponse;
    }
}


