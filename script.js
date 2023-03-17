function Add() {
    var addData = manyDAta();
    var readData = readLocal(addData);
    insert(readData);
}

function manyDAta () {
    var Q1 = document.getElementById("q1").value;
     var Q1a = document.getElementById("q1a").value;
      var Q1b = document.getElementById("q1b").value;
       var Q1c = document.getElementById("q1c").value;
        var Q1d = document.getElementById("q1d").value;
    var Q2 = document.getElementById("q2").value;
     var Q2a = document.getElementById("q2a").value;
      var Q2b = document.getElementById("q2b").value;
       var Q2c = document.getElementById("q2c").value;
        var Q2d = document.getElementById("q2d").value;    
     var Q3 = document.getElementById("q3").value;
      var Q3a = document.getElementById("q3a").value;
       var Q3b = document.getElementById("q3b").value;
        var Q3c = document.getElementById("q3c").value;
         var Q3d = document.getElementById("q3d").value;    
     var Q4 = document.getElementById("q4").value;
      var Q4a = document.getElementById("q4a").value;
       var Q4b = document.getElementById("q4b").value;
        var Q4c = document.getElementById("q4c").value;
         var Q4d = document.getElementById("q4d").value;    
     var Q5 = document.getElementById("q5").value;
      var Q5a = document.getElementById("q5a").value;
       var Q5b = document.getElementById("q5b").value;
        var Q5c = document.getElementById("q5c").value;
         var Q5d = document.getElementById("q5d").value;    

    var arr = [Q1,Q1a,Q1b,Q1c,Q1d,Q2,Q2a,Q2b,Q2c,Q2d,Q3,Q3a,Q3b,Q3c,Q3d,Q4,Q4a,Q4b,Q4c,Q4d,Q5,Q5a,Q5b,Q5c,Q5d];

    return arr;
           
}

function readLocal(addData) {
    var a = localStorage.setItem("",addData[0]);
    var b = localStorage.setItem("",addData[1]);
    var c = localStorage.setItem("",addData[2]);
    var d = localStorage.setItem("",addData[3]);
    var e = localStorage.setItem("",addData[4]);
}
// quiz logic...
const htmlquizData = [{
    question: "Q.1 What does HTML stand for?",
    a: "Home text Markup langage",
    b: "Hyper text Markup langage",
    c: "HyperLink text Markup langage",
    d: "Hyper text langage",
    correct: "b",
},
{
    question: "Q.2 Who is making the Web standards?",
    a: "Google",
    b: "the World Wide Web Consortium",
    c: "Mozila",
    d: "Edge",
    correct: "b",
},
{
    question: "Q.3 Choose the correct HTML element for the largest heading:",
    a: "<h1>",
    b: "<h2>",
    c: "<h3>",
    d: "<head>",
    correct: "a",
},
{
    question: "Q.4 What is the correct HTML element for inserting a line break?",
    a: "<br>",
    b: "<break>",
    c: "<bl>",
    d: "braek",
    correct: "a",
},
{
    question: "Q.5 What is the correct HTML for adding a background color?",
    a: "<background>red</background>",
    b: "<background style=	red ></background>",
    c: "<body style=	red></body>",
    d: "color:red",
    correct: "c",
},
{
    question: "Q.6 Choose the correct HTML element to define important text",
    a: "<li>",
    b: "<strong>",
    c: "<sub>",
    d: "<imp>",
    correct: "b",
},
{
    question: "Q.7 Which character is used to indicate an end tag?",
    a: "*",
    b: "/",
    c: "^",
    d: "<",
    correct: "b",
},
{
    question: "Q.8 Which of these elements are all <table> elements?",
    a: "<th><head><tfoot>",
    b: "<th><thead><tfoot>",
    c: "<table><th><td>",
    d: "<tr><td><tt>",
    correct: "c",
},
{
    question: "Q.9 Inline elements are normally displayed without starting a new line.",
    a: "true",
    b: "false",
    correct: "b",
},
{
    question: "Q.10 How can you make a numbered list?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<list>",
    correct: "a",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = htmlquizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === htmlquizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < htmlquizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <center style="margin-top:20%;"><h2>You answered ${score}/${htmlquizData.length} questions correctly</h2> 
                <button onclick="history.go(0)" style="padding:10px; background-color:#020917;border:3px solid white;border-radius:10px;color:white; align-item:center;font-size:18px; ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>&nbsp;&nbsp; Play Again</button> </center>`
        }
    }
});