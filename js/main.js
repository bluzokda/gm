// Глобальные переменные
let currentDepositTask = {};
let currentAnnuityTask = {};
let currentDiffTask = {};
let currentInvestTask = {};
let currentEgeTask = {};
let score = 0;
let totalTasks = 0;
let answeredDeposit = false;
let answeredAnnuity = false;
let answeredDiff = false;
let answeredInvest = false;
let answeredEge = false;

// Создание анимированного фона
function createBackground() {
    const bgAnimation = document.querySelector('.bg-animation');
    if (!bgAnimation) return;
    
    bgAnimation.innerHTML = '';
    const colors = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(200, 230, 255, 0.3)',
        'rgba(150, 200, 255, 0.25)'
    ];
    
    for (let i = 0; i < 15; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        const size = Math.random() * 300 + 100;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * -20;
        const color = colors[Math.floor(Math.random() * colors.length)];
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

// Управление табами
function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add('hidden');
        tabContents[i].classList.remove('active');
    }
    
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('bg-blue-600', 'text-white');
        tabButtons[i].classList.add('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
    }
    
    document.getElementById(tabName).classList.remove('hidden');
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.remove('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
    event.currentTarget.classList.add('bg-blue-600', 'text-white');
    
    // Генерация задач при переключении вкладок
    if (tabName === 'deposit') generateDepositTask();
    if (tabName === 'annuity') generateAnnuityTask();
    if (tabName === 'diff') generateDiffTask();
    if (tabName === 'invest') generateInvestTask();
    if (tabName === 'ege') generateEgeTask();
    // Для теории не генерируем задачи
}

// Обновление прогресса
function updateProgress() {
    let totalCorrect = 0;
    let totalTasks = 0;
    
    ['deposit', 'annuity', 'diff', 'invest', 'ege'].forEach(type => {
        totalCorrect += parseInt(document.getElementById(`${type}-score`).textContent);
        totalTasks += parseInt(document.getElementById(`${type}-total`).textContent);
    });
    
    const progress = totalTasks > 0 ? Math.round((totalCorrect / totalTasks) * 100) : 0;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('total-score').textContent = progress;
    
    const progressBar = document.getElementById('progress-bar');
    if (progress < 30) {
        progressBar.className = 'bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full progress-bar';
    } else if (progress < 70) {
        progressBar.className = 'bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full progress-bar';
    } else {
        progressBar.className = 'bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full progress-bar';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createBackground();
    generateDepositTask();
});
