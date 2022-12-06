var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Hello " + userName + "! Welcome to ARE YOU ARE POTTERHEAD! ");

function quiz(question , answers){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answers.toUpperCase()){
    score++;
    console.log("Your are correct " + userName + "!  and your score is: " + score);
    console.log("-------")
  }

  else{
    console.log("Sorry wrong answer :( Your score is " + score);
    console.log("-------")
  }
}

var questions = [
  {question: "What is Harry Potter's pet name ", answer: "Hedwig" },
  {question: "What is Snape's patronus charm ", answer: "doe"},
  {question: "Name Ron's pet rat ", answer: "scabbers"},
  {question: "Name Luna Lovergood's father ", answer:"xenophillius lovegood"}, {question: "Who killed Dobby by throwing a knife at him? ",answer:"bellatrixlestrange" }, 
  {question: "What was the name of Lord Voldemort's loyal snake? ", answer: "nagini" }, {question: "Name the killing curse. ", answer: "Avada kedavra" },
  {question: "What spell would you use to light the tip of your wand? ", answer: "Lumos"},
  {question: "What position did Harry Potter play at Quidditch? ", answer: "Seeker" }, {question: "What relation was Sirius Black to Harry? ", answer: "Godfather" }]

var ans = readlineSync.question("If you wish to play this game you must show that you are a true griffindor So, PASSWORD? ");

var i;

if (ans.toUpperCase() === "CAPUT DRACONIS"){
  for (i = 0; i < questions.length; i++) {
    quiz(questions[i].question , questions[i].answer)
    if ((questions.length - 1) === i){
      console.log("Thank you for playing the game! \n" + "Your final score is: " + score);
    }
  }
}
else{
  console.log("Cound'nt be more wrong! Google it and come back");
  if ((questions.length - 1) === i){
      console.log("Thank you for playing the game! \n" + "Your final score is: " + score);
    }
}










