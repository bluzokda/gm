function createBackground() {
    console.log("Creating background animation..."); // Проверить в консоли
    const bgAnimation = document.querySelector('.bg-animation');
    console.log("Background element:", bgAnimation); // Должен вывести элемент
    
    const colors = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 215, 0, 0.2)',
        'rgba(0, 191, 255, 0.2)'
    ];
    
    for (let i = 0; i < 15; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Случайные параметры
        const size = Math.random() * 300 + 100;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * -20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Динамическое направление движения
        const angle = Math.random() * Math.PI * 2;
        const distance = 500 + Math.random() * 500;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        circle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}px;
            top: ${posY}px;
            background: ${color};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;
        
        bgAnimation.appendChild(circle);
    }
}        
        // Случайные параметры
        const size = Math.random() * 300 + 100;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * -20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Динамическое направление движения
        const angle = Math.random() * Math.PI * 2;
        const distance = 500 + Math.random() * 500;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        circle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}px;
            top: ${posY}px;
            background: ${color};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;
        
        bgAnimation.appendChild(circle);
    }
}
// Глобальные переменные
let currentDepositTask = {};
let currentAnnuityTask = {};
let currentDiffTask = {};
let currentEgeTask = {};
let score = 0;
let totalTasks = 0;
let answeredDeposit = false;
let answeredAnnuity = false;
let answeredDiff = false;
let answeredEge = false;

// Глобальные переменные для хранения ответов
let userAnswers = {
    deposit: null,
    annuity: null,
    diff: null,
    ege: null
};

// Функции проверки ответов
function checkDepositAnswer() {
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    // Если ответ уже был отправлен
    if (userAnswers.deposit !== null) {
        resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Следующая задача"';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'bg-red-100');
        resultDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }
    
    const userInput = answerInput.value;
    const sanitizedInput = sanitizeInput(userInput);
    const userAnswer = validateNumber(sanitizedInput);
    
    if (isNaN(userAnswer)) {
        resultDiv.textContent = 'Пожалуйста, введите корректное число';
        resultDiv.classList.remove('hidden', 'bg-green-100');
        resultDiv.classList.add('bg-red-100', 'text-red-800');
        return;
    }
    
    // Фиксируем ответ
    userAnswers.deposit = userAnswer;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentDepositTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.classList.remove('bg-red-100', 'text-red-800');
        resultDiv.classList.add('bg-green-100', 'text-green-800');
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.classList.remove('bg-green-100', 'text-green-800');
        resultDiv.classList.add('bg-red-100', 'text-red-800');
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    updateProgress();
}

// Аналогичные изменения для других функций проверки
function checkDepositAnswer() {
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (userAnswers.deposit !== null) {
        resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Следующая задача"';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'bg-red-100');
        resultDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }
function checkAnnuityAnswer() {
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (userAnswers.annuity !== null) {
        resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Следующая задача"';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'bg-red-100');
        resultDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }
function checkDiffAnswer() {
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (userAnswers.diff !== null) {
        resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Следующая задача"';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'bg-red-100');
        resultDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }
function checkEgeAnswer() {
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (userAnswers.ege !== null) {
        resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Следующая задача"';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'bg-red-100');
        resultDiv.classList.add('bg-yellow-100', 'text-yellow-800');
        return;
    }

// Функция для создания анимированного фона
function createBackground() {
    const bgAnimation = document.querySelector('.bg-animation');
    const colors = ['rgba(52, 152, 219, 0.1)', 'rgba(155, 89, 182, 0.1)', 'rgba(26, 188, 156, 0.1)'];
    
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        const size = Math.random() * 200 + 50;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.animationDelay = `${delay}s`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.background = color;
        
        bgAnimation.appendChild(circle);
    }
}

// Функции безопасности
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function validateNumber(input) {
    if (typeof input !== 'string' && typeof input !== 'number') return NaN;
    const num = parseFloat(input);
    return isNaN(num) ? NaN : num;
}

// Функция для переключения вкладок
function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add('hidden');
        tabContents[i].classList.remove('active');
    }
    
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('bg-blue-600', 'text-white');
        tabButtons[i].classList.add('bg-gray-200', 'hover:bg-gray-300');
    }
    
    document.getElementById(tabName).classList.remove('hidden');
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.remove('bg-gray-200', 'hover:bg-gray-300');
    event.currentTarget.classList.add('bg-blue-600', 'text-white');
    
    // Генерация задач при переключении вкладок
    if (tabName === 'deposit') generateDepositTask();
    if (tabName === 'annuity') generateAnnuityTask();
    if (tabName === 'diff') generateDiffTask();
    if (tabName === 'ege') generateEgeTask();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createBackground();
    generateDepositTask(); // Стартовая вкладка
});
