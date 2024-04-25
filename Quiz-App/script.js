const questions = [
    {
        question: "Who is currently best cricketer in Paksitan?",
        answers: [
            {text: "Shaheen Afridi", correct: false},
            {text: "Babar Azam", correct: true},
            {text: "Mohammad Rizwan", correct: false},
            {text: "Shadab Khan", correct: false}
        ]
    },
    {
        question: "Who is currently best cricketer in World?",
        answers: [
            {text: "Steve Smith", correct: false},
            {text: "Babar Azam", correct: false},
            {text: "Virat Kohli", correct: true},
            {text: "Kane Williamson", correct: false}
        ]
    },
    {
        question: "Which country has won the most cricket World Cup?",
        answers: [
            {text: "Pakistan", correct: false},
            {text: "Australia", correct: true},
            {text: "India", correct: false},
            {text: "Uganda", correct: false}
        ]
    },
    {
        question: "How many World Cup have been won by Pakistan?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: false}
        ]
    },
    {
        question: "Who is currently best Wicketkeeper in Paksitan?",
        answers: [
            {text: "Kamran Akmal", correct: false},
            {text: "Sarfraz Ahmed", correct: false},
            {text: "Azam Khan", correct: false},
            {text: "Mohammad Rizwan", correct: true}
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
