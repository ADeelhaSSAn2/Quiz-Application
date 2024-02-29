function next(){
    Swal.fire({
        title: "Welcome to SMIT Web and Mobile Hybrid App Development Quiz",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
next();

// quiz code
 const questions=[
  {
    question:" HTML stands for what?",
    choices:["Hypertrophic Management Language","Hyperbaric Tertiary Logarithm"," Hypertext Markup Language","Hyperresonant Marginal Logarithm"],
    correctAnswer:2,
  },
  {
   question:"Which tag begins a new paragraph?",
   choices:["<pg>","<pp>","<li>","<p>"],
   correctAnswer:3,
  },
  {
    question:"Choose the correct HTML element for the largest heading?",
    choices:["<h1>","<heading>","<h6>","<head>"],
    correctAnswer:0,
   },
   {
    question:"What does CSS stand for?",
    choices:["Colorful style sheet","Computer style sheet","Cascading style sheet","Car style sheet"],
    correctAnswer:2,
   },
   {
    question:"Which HTML tag is used to define an internal style sheet?",
    choices:["<style>","<css>","<script>","<title>"],
    correctAnswer:0,
   },
   {
    question:"Which property is used to change the background color?",
    choices:["box-shadow","color","bgcolor","background-color"],
    correctAnswer:3,
   },
   {
    question:"Inside which HTML element do we put the JavaScript?",
    choices:["<js>","<script>","<javaScript","<scripting>"],
    correctAnswer:1,
   },
   {
    question:'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices:['<script href="xxx.js">','<script src="xxx.js">','<script class="xxx.js">','<script name="xxx.js">'],
    correctAnswer:1,
   },
   {
    question:"How do you create a function in JavaScript?",
    choices:["function myFunction()","function:myFunction()","function; myFunction()","function=myFunction"],
    correctAnswer:0,
   },
   {
    question:"Which event occurs when the user clicks on an HTML element?",
    choices:["onchange","onmouceclick","onclick","onmouceover"],
    correctAnswer:2,
   },
 ]

 const container = document.querySelector(".container");
 const questionElement = document.getElementById("question");
 const choicesElement = document.getElementById("choices");
 const submitButton = document.getElementById("submit-btn");
 const scoreElement = document.getElementById("score");
 const restartButton = document.getElementById("restart-btn");
 const timerElement = document.getElementById("time");


 var currentQuestion = 0;
 var score = 0;
 var timeLeft = 180;

 function loadQuestion(){
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  choicesElement.innerHTML = "";
  for(var i = 0; i<question.choices.length; i++){
    const li = document.createElement("li");
    const radio = document.createElement("input");
   radio.type = "radio";
   radio.name = "choice";
   radio.value = i;
   li.appendChild(radio);
   li.appendChild(document.createTextNode(question.choices[i]));
   choicesElement.appendChild(li);
  }
 }
loadQuestion();

 function checkAnswer(){
  const selectOption = document.querySelector("input[name = 'choice']:checked");
  if(selectOption){
    const selectedAnswer = parseInt(selectOption.value);
    if(selectedAnswer === questions[currentQuestion].correctAnswer){
      score++;
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
      loadQuestion();
    }else{
      showScore();
    }
  }
 }
checkAnswer();


 function showScore(){

  clearInterval(timerIntervel);
  questionElement.style.display ="none";
  choicesElement.style.display ="none";
  submitButton.style.display ="none";
  scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
  scoreElement.style.display ="block";
  restartButton.style.display ="block";
 }
showScore();

 function restartQuiz(){
  currentQuestion = 0;
  score = 0 ;
  timeLeft = 180;
  loadQuestion()
  restartButton.style.display ="none";
  questionElement.style.display ="block";
  choicesElement.style.display ="block";
  submitButton.style.display ="block";
  scoreElement.style.display ="none";
  timerIntervel = setInterval(updateTimer,1000);
 }
restartQuiz();

 function updateTimer(){
  const minutes = Math.floor(timeLeft/60);
  var seconds = timeLeft%60;
  seconds = seconds<10 ?"0"+ seconds:seconds;
  timerElement.textContent = `${minutes} : ${seconds}`;

  if(timeLeft===0){
    showScore();
  }else{
    timeLeft--;
  }
 }
 updateTimer();

 var timerIntervel = setInterval(updateTimer,1000);

 submitButton.addEventListener("click" , checkAnswer);
 restartButton.addEventListener("click" , restartQuiz);

 loadQuestion();
 restartButton.style.display ="none";
