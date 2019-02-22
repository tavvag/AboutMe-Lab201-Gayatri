"use strict";
//Variable declarations for questions
var responseTextForYesNo = " Reply with Yes or No";
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

var questions =[ questionOnCoding,questionOnTimeAtWork,
    questionOnWhatIEnjoyDoing,questionOnCooking,
    questionOnSeattleweather];
 
    var correctAnswer =[yes,no,yes,yes,no];
    var wrongAnswer =[no,yes,no,no,yes];
    var i;

    for (i = 0; i < questions.length; i++) { 
        var answerToQuestion = prompt(questions[i] + " " +responseTextForYesNo);
        if(answerToQuestion.toUpperCase() === correctAnswer[i] ){
            alert(replyyesText);
        }else if(answerToQuestion.toUpperCase() === wrongAnswer[i]){
            alert(replyNotext);
        }else{
            alert(invalidResponse);
        }
       
    }



