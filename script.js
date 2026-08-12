// ==========================================
// QUIZZONE 💗
// JAVASCRIPT
// ==========================================
// ==========================================
// QUESTIONS
// ==========================================
const quizData = {
    // ======================================
    // IT
    // ======================================
    it: [
        {
            question: "What does HTML stand for?",
            answers: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Machine Language",
                "Home Tool Markup Language"
            ],
            correct: 0
        },
        {
            question: "What does CSS stand for?",
            answers: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            correct: 1
        },
        {
            question: "What is JavaScript mainly used for?",
            answers: [
                "Making websites interactive",
                "Creating computer hardware",
                "Printing documents",
                "Increasing RAM"
            ],
            correct: 0
        },
        {
            question: "Which HTML tag creates a hyperlink?",
            answers: [
                "<link>",
                "<href>",
                "<a>",
                "<url>"
            ],
            correct: 2
        },
        {
            question: "Which HTML tag displays an image?",
            answers: [
                "<image>",
                "<img>",
                "<src>",
                "<picture>"
            ],
            correct: 1
        },
        {
            question: "What does CPU stand for?",
            answers: [
                "Central Processing Unit",
                "Computer Processing Utility",
                "Central Program Unit",
                "Computer Personal Unit"
            ],
            correct: 0
        },
        {
            question: "What does SQL primarily work with?",
            answers: [
                "Databases",
                "Images",
                "CSS",
                "Computer screens"
            ],
            correct: 0
        },
        {
            question: "Which symbol selects an ID in CSS?",
            answers: [
                ".",
                "#",
                "@",
                "*"
            ],
            correct: 1
        },
        {
            question: "Which symbol selects a class in CSS?",
            answers: [
                "#",
                ".",
                "@",
                "%"
            ],
            correct: 1
        },
        {
            question: "What does API stand for?",
            answers: [
                "Application Programming Interface",
                "Advanced Program Internet",
                "Application Process Instruction",
                "Automated Programming Internet"
            ],
            correct: 0
        }
    ],
    // ======================================
    // GENERAL KNOWLEDGE
    // ======================================
    general: [
        {
            question: "What is the capital of Japan?",
            answers: [
                "Seoul",
                "Tokyo",
                "Beijing",
                "Bangkok"
            ],
            correct: 1
        },
        {
            question: "How many days are there in a week?",
            answers: [
                "5",
                "6",
                "7",
                "8"
            ],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                "Venus",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            correct: 1
        },
        {
            question: "How many continents are there?",
            answers: [
                "5",
                "6",
                "7",
                "8"
            ],
            correct: 2
        },
        {
            question: "What is the largest ocean?",
            answers: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            correct: 2
        },
        {
            question: "What is the fastest land animal?",
            answers: [
                "Lion",
                "Cheetah",
                "Horse",
                "Tiger"
            ],
            correct: 1
        },
        {
            question: "How many colors are in a rainbow?",
            answers: [
                "5",
                "6",
                "7",
                "8"
            ],
            correct: 2
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            answers: [
                "Italy",
                "France",
                "Spain",
                "Germany"
            ],
            correct: 1
        },
        {
            question: "What is the largest planet?",
            answers: [
                "Earth",
                "Mars",
                "Jupiter",
                "Neptune"
            ],
            correct: 2
        },
        {
            question: "Which animal is known as man's best friend?",
            answers: [
                "Cat",
                "Dog",
                "Horse",
                "Rabbit"
            ],
            correct: 1
        }
    ],
    // ======================================
    // SCIENCE
    // ======================================
    science: [
        {
            question: "What gas do humans need to breathe?",
            answers: [
                "Carbon dioxide",
                "Oxygen",
                "Hydrogen",
                "Nitrogen"
            ],
            correct: 1
        },
        {
            question: "What is H2O?",
            answers: [
                "Salt",
                "Water",
                "Oxygen",
                "Hydrogen"
            ],
            correct: 1
        },
        {
            question: "What is the center of an atom called?",
            answers: [
                "Electron",
                "Nucleus",
                "Proton",
                "Neutron"
            ],
            correct: 1
        },
        {
            question: "Which organ pumps blood?",
            answers: [
                "Brain",
                "Lungs",
                "Heart",
                "Liver"
            ],
            correct: 2
        },
        {
            question: "What force keeps us on the ground?",
            answers: [
                "Magnetism",
                "Gravity",
                "Friction",
                "Electricity"
            ],
            correct: 1
        },
        {
            question: "How many bones are in an adult human body?",
            answers: [
                "106",
                "206",
                "306",
                "406"
            ],
            correct: 1
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: [
                "Earth",
                "Venus",
                "Mercury",
                "Mars"
            ],
            correct: 2
        },
        {
            question: "What is the boiling point of water at sea level?",
            answers: [
                "50°C",
                "75°C",
                "100°C",
                "150°C"
            ],
            correct: 2
        },
        {
            question: "Which part of a plant absorbs water?",
            answers: [
                "Flower",
                "Leaf",
                "Root",
                "Stem"
            ],
            correct: 2
        },
        {
            question: "What do plants use to make food?",
            answers: [
                "Photosynthesis",
                "Digestion",
                "Respiration",
                "Evaporation"
            ],
            correct: 0
        }
    ],
    // ======================================
    // ENGLISH
    // ======================================
    english: [
        {
            question: "Which word is spelled correctly?",
            answers: [
                "Beautifull",
                "Beautiful",
                "Beutiful",
                "Beautifal"
            ],
            correct: 1
        },
        {
            question: "What is the opposite of 'hot'?",
            answers: [
                "Warm",
                "Cold",
                "Heat",
                "Boiling"
            ],
            correct: 1
        },
        {
            question: "Which word is a noun?",
            answers: [
                "Run",
                "Beautiful",
                "Happiness",
                "Quickly"
            ],
            correct: 2
        },
        {
            question: "What is the plural of 'child'?",
            answers: [
                "Childs",
                "Childes",
                "Children",
                "Childrens"
            ],
            correct: 2
        },
        {
            question: "Which word is an adjective?",
            answers: [
                "Quickly",
                "Beautiful",
                "Running",
                "Happiness"
            ],
            correct: 1
        },
        {
            question: "Which spelling is correct?",
            answers: [
                "Tomorrow",
                "Tommorow",
                "Tomorow",
                "Tommorrow"
            ],
            correct: 0
        },
        {
            question: "What is the past tense of 'go'?",
            answers: [
                "Goed",
                "Gone",
                "Went",
                "Going"
            ],
            correct: 2
        },
        {
            question: "Which word means the same as 'happy'?",
            answers: [
                "Sad",
                "Angry",
                "Joyful",
                "Tired"
            ],
            correct: 2
        },
        {
            question: "Which spelling is correct?",
            answers: [
                "Necessary",
                "Neccessary",
                "Necesary",
                "Neccesary"
            ],
            correct: 0
        },
        {
            question: "What is the opposite of 'difficult'?",
            answers: [
                "Hard",
                "Easy",
                "Heavy",
                "Strong"
            ],
            correct: 1
        }
    ]
};
// ==========================================
// VARIABLES
// ==========================================
let currentCategory = "";
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = false;
// ==========================================
// ELEMENTS
// ==========================================
const home =
    document.getElementById("home");
const quiz =
    document.getElementById("quiz");
const result =
    document.getElementById("result");
const question =
    document.getElementById("question");
const answers =
    document.getElementById("answers");
const questionNumber =
    document.getElementById("questionNumber");
const totalQuestions =
    document.getElementById("totalQuestions");
const scoreElement =
    document.getElementById("score");
const progressBar =
    document.getElementById("progressBar");
const nextButton =
    document.getElementById("nextButton");
const finalScore =
    document.getElementById("finalScore");
const finalTotal =
    document.getElementById("finalTotal");
const resultMessage =
    document.getElementById("resultMessage");
const winnerPopup =
    document.getElementById("winnerPopup");
const popupTitle =
    document.getElementById("popupTitle");
const popupMessage =
    document.getElementById("popupMessage");
// ==========================================
// START QUIZ
// ==========================================
function startQuiz(category) {
    currentCategory = category;
    currentQuestions =
        [...quizData[category]];
    currentQuestion = 0;
    score = 0;
    selectedAnswer = false;
    home.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");
    totalQuestions.textContent =
        currentQuestions.length;
    scoreElement.textContent =
        score;
    showQuestion();
}
// ==========================================
// SHOW QUESTION
// ==========================================
function showQuestion() {
    selectedAnswer = false;
    if (nextButton) {
        nextButton.disabled = true;
    }
    answers.innerHTML = "";
    const current =
        currentQuestions[currentQuestion];
    questionNumber.textContent =
        currentQuestion + 1;
    question.textContent =
        current.question;
    const progress =
        (currentQuestion /
        currentQuestions.length) * 100;
    progressBar.style.width =
        progress + "%";
    current.answers.forEach(
        function(answer, index) {
            const button =
                document.createElement("button");
            button.type = "button";
            button.textContent =
                answer;
            button.onclick =
                function() {
                    selectAnswer(
                        button,
                        index
                    );
                };
            answers.appendChild(button);
        }
    );
}
// ==========================================
// SELECT ANSWER
// AUTOMATIC NEXT QUESTION
// ==========================================
function selectAnswer(button, index) {
    if (selectedAnswer) {
        return;
    }
    selectedAnswer = true;
    const correct =
        currentQuestions[currentQuestion]
            .correct;
    const allButtons =
        answers.querySelectorAll("button");
    // Disable all answer buttons
    allButtons.forEach(
        function(btn) {
            btn.disabled = true;
        }
    );
    // ======================================
    // CORRECT
    // ======================================
    if (index === correct) {
        score++;
        scoreElement.textContent =
            score;
        button.classList.add(
            "correct"
        );
        showPopup(
            "🎉 CORRECT!",
            "Nice job! 💗"
        );
    }
    // ======================================
    // WRONG
    // ======================================
    else {
        button.classList.add(
            "wrong"
        );
        if (allButtons[correct]) {
            allButtons[correct]
                .classList.add(
                    "correct"
                );
        }
        showPopup(
            "❌ WRONG!",
            "Keep trying! 💗"
        );
    }
    // ======================================
    // AUTOMATIC NEXT
    // ======================================
    setTimeout(
        function() {
            closePopup();
            currentQuestion++;
            if (
                currentQuestion >=
                currentQuestions.length
            ) {
                finishQuiz();
                return;
            }
            showQuestion();
        },
        900
    );
}
// ==========================================
// NEXT QUESTION
// ==========================================
// Hindi na kailangan gamitin.
// Automatic na ang next question.
// Iniwan lang ito para hindi masira
// ang HTML kung may next button pa.
function nextQuestion() {
    if (!selectedAnswer) {
        return;
    }
    currentQuestion++;
    if (
        currentQuestion >=
        currentQuestions.length
    ) {
        finishQuiz();
        return;
    }
    showQuestion();
}
// ==========================================
// FINISH QUIZ
// ==========================================
function finishQuiz() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    finalScore.textContent =
        score;
    finalTotal.textContent =
        currentQuestions.length;
    const percentage =
        (score /
        currentQuestions.length) * 100;
    if (percentage >= 90) {
        resultMessage.textContent =
            "🏆 AMAZING! You're a quiz master!";
    }
    else if (percentage >= 70) {
        resultMessage.textContent =
            "🎉 GREAT JOB! Keep it up!";
    }
    else if (percentage >= 50) {
        resultMessage.textContent =
            "💗 Not bad! Try again!";
    }
    else {
        resultMessage.textContent =
            "🌸 Keep practicing! You can do it!";
    }
    progressBar.style.width =
        "100%";
}
// ==========================================
// RESTART
// ==========================================
function restartQuiz() {
    startQuiz(
        currentCategory
    );
}
// ==========================================
// BACK HOME
// ==========================================
function backHome() {
    home.classList.remove(
        "hidden"
    );
    quiz.classList.add(
        "hidden"
    );
    result.classList.add(
        "hidden"
    );
}
// ==========================================
// POPUP
// ==========================================
function showPopup(
    title,
    message
) {
    popupTitle.textContent =
        title;
    popupMessage.textContent =
        message;
    winnerPopup.classList.remove(
        "hidden"
    );
}
// ==========================================
// CLOSE POPUP
// ==========================================
function closePopup() {
    winnerPopup.classList.add(
        "hidden"
    );
}