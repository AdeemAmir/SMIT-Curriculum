const quizData = {
    html: './files/data_quiz_html.json',
    css: './files/data_quiz_css.json',
    js: './files/data_quiz_js.json',
};

let allQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let viewingAll = false;

let totalTime = 0;
let timerInterval;

const quizColors = {
    html: ['#D32F2F', '#FF6A13'], // Enhanced Orange theme (warm and rich)
    css: ['#4682B4', '#B0E0E6'], // Deep and vibrant Blue theme
    js: ['#FF6347', '#FFA500'], // Rich yellow, gold theme
};

function getQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('quiz');
}

async function fetchQuizData(quizType) {
    try {
        const response = await fetch(quizData[quizType]);
        if (!response.ok) {
            throw new Error('Failed to load quiz data');
        }
        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error(error);
        alert('An error occurred while loading quiz data.');
    }
}

function randomizeQuestions(questions) {
    return [...questions].sort(() => Math.random() - 0.5);
}

function updateAnswerSelection() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
}

function generateSingleQuestionUI(questions) {
    const quizContainer = document.getElementById('quiz-content');
    quizContainer.innerHTML = ''; // Clear any existing content

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    quizContainer.appendChild(questionContainer);

    const backButton = document.createElement('button');
    backButton.textContent = 'Previous Question';
    backButton.classList.add('back-btn');
    backButton.disabled = currentQuestionIndex === 0;
    backButton.onclick = previousQuestion;
    quizContainer.appendChild(backButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit Answers' : 'Next Question';
    nextButton.classList.add('next-btn');
    quizContainer.appendChild(nextButton);

    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="question-number">Question ${currentQuestionIndex + 1} of ${questions.length}</div>
            <ul class="options">
                ${question.options.map((option, index) => `
                    <li class="option">
                        <input type="radio" name="question${currentQuestionIndex}" id="option${index}" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
                        <label for="option${index}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;

        document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`).forEach(input => {
            input.addEventListener('change', (event) => {
                const selectedOption = parseInt(event.target.value);
                userAnswers[currentQuestionIndex] = selectedOption; // Update user answer
            });
        });
    }

    function nextQuestion() {
        updateAnswerSelection(); // Update the selection for the current question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            renderQuestion();
            backButton.disabled = false;
            nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit Answers' : 'Next Question';
        }
        if (currentQuestionIndex == questions.length) {
            toggleViewMode();
        }
    }

    function previousQuestion() {
        updateAnswerSelection(); // Update the selection for the current question
        currentQuestionIndex--;
        if (currentQuestionIndex >= 0) {
            renderQuestion();
            backButton.disabled = currentQuestionIndex === 0;
        }
    }

    nextButton.onclick = nextQuestion;
    
    renderQuestion();
}

function generateAllQuestionsUI(questions) {
    const quizContainer = document.getElementById('quiz-content');
    quizContainer.innerHTML = '';

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    quizContainer.appendChild(questionContainer);

    questions.forEach((question, index) => {
        questionContainer.innerHTML += `
            <div class="question">${question.question}</div>
            <ul class="options">
                ${question.options.map((option, i) => `
                    <li class="option">
                        <input type="radio" name="question${index}" value="${i}" id="option${index}-${i}" ${userAnswers[index] === i ? 'checked' : ''}>
                        <label for="option${index}-${i}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answers';
    submitButton.classList.add('next-btn');
    submitButton.onclick = () => submitAnswers();
    quizContainer.appendChild(submitButton);
}

function submitAnswers() {
    let score = 0;
    allQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.Answer) {
            score++;
        }
    });
    const percentage = (score / allQuestions.length) * 100;
    localStorage.setItem('quizResult', JSON.stringify({ score, total: allQuestions.length, percentage }));
    window.location.href = 'result.html';
}

function toggleViewMode() {
    viewingAll = !viewingAll;

    if (viewingAll) {
        generateAllQuestionsUI(allQuestions);
    } else {
        generateSingleQuestionUI(allQuestions);
    }
}

function startGlobalTimer() {
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    timerElement.id = 'quiz-timer';
    document.getElementById('quiz-container').appendChild(timerElement);

    function updateTimer() {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            window.location.href = 'result.html';
            return;
        }

        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        if (totalTime <= 30) timerElement.classList.add('danger');
        else if (totalTime <= 60) timerElement.classList.add('warning');

        totalTime--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopGlobalTimer() {
    clearInterval(timerInterval);
    const timerElement = document.getElementById('quiz-timer');
    if (timerElement) timerElement.remove();
}

function updateBackground(optionIndex) {
    const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e59c'];
    const newColor = colors[optionIndex % colors.length] || '#fff';
    document.body.style.background = `linear-gradient(135deg, ${newColor}, #ffffff)`;
}

function setInitialBackground(quizType) {
    const colors = quizColors[quizType] || ['#ffffff', '#eeeeee'];
    document.body.style.background = `linear-gradient(110deg, ${colors[0]}, ${colors[1]})`;
}

function updateBackgroundForAllQuestions() {
    document.querySelectorAll('.options input').forEach((input) => {
        input.addEventListener('change', (event) => {
            const selectedOption = parseInt(event.target.value);
            const colors = ['#FF6347', '#FFA500', '#4682B4', '#B0E0E6', '#FFDD00', '#FFCC00'];
            const newColor = colors[selectedOption % colors.length] || '#fff';
            document.body.style.background = `linear-gradient(135deg, ${newColor}, #ffffff)`;
        });
    });
}

async function loadQuiz() {
    const quizType = getQueryParam();
    if (!quizType || !quizData[quizType]) {
        alert('Invalid quiz type!');
        return;
    }

    setInitialBackground(quizType);

    document.getElementById('loading').style.display = 'block';

    allQuestions = await fetchQuizData(quizType);
    allQuestions = randomizeQuestions(allQuestions);
    totalTime = allQuestions.length * 60;

    const savedAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    if (savedAnswers) {
        userAnswers = savedAnswers;
    }

    document.getElementById('loading').style.display = 'none';
    generateSingleQuestionUI(allQuestions);

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Question View';
    toggleBtn.classList.add('toggle-btn');
    toggleBtn.onclick = toggleViewMode;
    document.getElementById('quiz-container').appendChild(toggleBtn);

    startGlobalTimer();
}

window.onload = loadQuiz;
