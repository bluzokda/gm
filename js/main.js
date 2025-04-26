function createBackground() {
    const bgAnimation = document.querySelector('.bg-animation');
    const colors = ['rgba(52, 152, 219, 0.1)', 'rgba(155, 89, 182, 0.1)', 'rgba(26, 188, 156, 0.1)'];
    
    // Создаем 20 анимированных кругов
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Случайные параметры для круга
        const size = Math.random() * 200 + 50;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Применяем параметры к кругу
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.animationDelay = `${delay}s`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.background = color;
        
        // Добавляем круг на страницу
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
