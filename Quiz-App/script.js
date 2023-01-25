// console.log("Quiz App");

const quiz = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Rome",
        d: "Berlin",
        correct: "a",
    },

    {
        question: "What is the largest planet in our solar system?",
        a: "Jupiter",
        b: "Saturn",
        c: "Earth",
        d: "Mars",
        correct: "a"
    },

    {
        question: "What is the smallest country in the world?",
        a: "Vatican City",
        b: "Monaco",
        c: "Nauru",
        d: "San Marino",
        correct: "a"
    },

    {
        question: "Which famous scientist discovered the theory of relativity?",
        a: "Albert Einstein",
        b: "Stephen Hawking",
        c: "Isaac Newton",
        d: "Marie Curie",
        correct: "a"
    },

    {
        question: "Which river is the longest in the world?",
        a: "Nile",
        b: "Amazon",
        c: "Mississippi",
        d: "Yangtze",
        correct: "a"
    },

    {
        question: "Which country is home to the Great Barrier Reef?",
        a: "Australia",
        b: "New Zealand",
        c: "USA",
        d: "Canada",
        correct: "a"
    },

    {
        question: "Which famous artist painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Salvador Dali",
        c: "Leonardo da Vinci",
        d: "Pablo Picasso",
        correct: "c"
    },

    {
        question: "Which famous French leader was executed during the French Revolution?",
        a: "Napoleon Bonaparte",
        b: "King Louis XVI",
        c: "Maximilien Robespierre",
        d: "Georges Danton",
        correct: "b"
    },

    {
        question: "What is the highest mountain peak in the world?",
        a: "Mount Everest",
        b: "K2",
        c: "Kangchenjunga",
        d: "Lhotse",
        correct: "a"
    },

    {
        question: "Which famous English playwright wrote Hamlet, Romeo and Juliet, and Macbeth?",
        a: "William Shakespeare",
        b: "Christopher Marlowe",
        c: "Ben Jonson",
        d: "John Milton",
        correct: "a"
    }

]

//Target Elements
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submitButton");

const quizContainer = document.getElementById("quizContainer");
const selectedOption = document.querySelectorAll('.answer');


let currentQuiz = 0;
let score = 0;

loadQuiz();


function deselectOption() {
    selectedOption.forEach((item) => {
        item.checked = false;
    })
}


function loadQuiz() {
    deselectOption();

    const currentQuestion = quiz[currentQuiz];
    questionElement.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;

    // console.log(`Current Question is ${currentQuestion.question}`);
}

function getSelectedOption() {
    let answer = undefined;

    //check which is checked
    selectedOption.forEach((item) => {
        if (item.checked) {
            answer = item.id;
        }
    });

    return answer;
}



submitButton.addEventListener('click', () => {
    const answer = getSelectedOption();
    // console.log(answer);

    if (answer) {
        //check answer is correct
        if (answer === quiz[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        //load all question or else return alert
        if (currentQuiz < quiz.length) {
            // console.log(currentQuiz);
            loadQuiz();
        }

        else {
            //show result
            alert("Done");
            quizContainer.innerHTML = `<h1>You Did great your score is ${score}</h1> <button onclick="location.reload()">Reload</button>`

        }
    }

    deselectOption();
});



