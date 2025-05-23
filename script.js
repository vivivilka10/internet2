const quizData = [
    {
        question: "Какие меры помогают защитить ваши пароли?",
        options: ["Используйте одинаковые пароли везде", "Создавайте длинные и сложные пароли", "Делитесь своими паролями с друзьями"],
        answer: "Создавайте длинные и сложные пароли"
    },
    {
        question: "Что такое фишинг?",
        options: ["Способ взлома Wi-Fi сетей", "Метод кражи личных данных с помощью поддельных писем и сайтов", "Игровой термин"],
        answer: "Метод кражи личных данных с помощью поддельных писем и сайтов"
    },
    {
        question: "Почему важно обновлять программное обеспечение регулярно?",
        options: ["Это замедляет работу компьютера", "Обновления устраняют уязвимости системы", "Просто совет разработчиков"],
        answer: "Обновления устраняют уязвимости системы"
    },
    {
        question: "Как лучше всего защищать конфиденциальность ваших данных в социальных сетях?",
        options: ["Настройте приватность профиля", "Размещайте личные фотографии открыто", "Никогда не удаляйте старые посты"],
        answer: "Настройте приватность профиля"
    },
    {
        question: "Что означает аббревиатура VPN?",
        options: ["Virtual Private Network", "Very Powerful Notebook", "Virus Protection Net"],
        answer: "Virtual Private Network"
    }
];

let currentQuestionIndex = 0;
let totalCorrect = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('nextBtn');

    questionEl.textContent = quizData[currentQuestionIndex].question;
    optionsEl.innerHTML = "";

    quizData[currentQuestionIndex].options.forEach(option => {
        const radioButton = document.createElement('li');
        radioButton.innerHTML = `<input type="radio" name="option" value="${option}"/> ${option}`;
        optionsEl.appendChild(radioButton);
    });

    nextBtn.disabled = true;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return false;

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        totalCorrect++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= quizData.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    const resultEl = document.getElementById('result');
    const finalScoreEl = document.getElementById('finalScore');
    const totalQuestionsEl = document.getElementById('totalQuestions');

    finalScoreEl.textContent = totalCorrect;
    totalQuestionsEl.textContent = quizData.length;

    document.getElementById('quiz').style.display = 'none';
    resultEl.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    totalCorrect = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

window.onload = () => {
    loadQuestion();
};

document.getElementById('nextBtn').addEventListener('click', checkAnswer);

document.getElementById('options').addEventListener('change', function(){
    document.getElementById('nextBtn').disabled = false;
});