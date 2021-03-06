
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ?	", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let answer = 0;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Enter your Name ");
console.log(`Candidate Name: ${candidateName}`);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  
for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question(`${[i + 1]}) ${(questions[i])} ${("\n")}Your Answer: `);

   if ( candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){

     console.log(`Correct Answer: ${correctAnswers[i]}${("\n")}`);
    answer++;

  }else{
  console.log(`Correct Answer: ${correctAnswers[i]}${("\n")}`);     
     
  }
    
  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly /


let grade = answer / questions.length ;
console.log(`>>> Overall Grade: ${grade * 100}% (${answer} of ${questions.length} responses correct) <<<`);
if((grade * 100) >= 80 ){
console.log(">>> Status: PASSED <<<" );
}else if( (grade * 100) < 80 ){
console.log(">>> Status: FAILED <<<");
}
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,                                                runProgram: runProgram
};