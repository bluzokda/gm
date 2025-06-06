<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Финансовый тренажёр: проценты и кредиты</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-50 text-gray-800">
    <div class="financial-bg" id="financialBg">
        <div class="bg-animation"></div>
    </div>
    
    <header class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 shadow-lg relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
            <div class="header-animation"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-2 text-center text-white animate-title">
                <span class="text-gradient">Финансовый тренажёр</span>
            </h1>
            <p class="text-xl text-center opacity-90 animate-subtitle">Освойте проценты, вклады и кредиты на практике</p>
        </div>
    </header>
    
    <div class="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div class="card rounded-2xl overflow-hidden mb-8 transform transition-all hover:shadow-2xl">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-500 pb-2">Тренажёр по финансовой математике</h2>
                
                <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                    <button class="tab-btn bg-blue-600 text-white px-5 py-3 rounded-lg active" onclick="openTab('deposit')">
                        <span class="mr-2">💰</span> Вклады
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('annuity')">
                        <span class="mr-2">🏦</span> Аннуитетный кредит
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('diff')">
                        <span class="mr-2">📉</span> Дифференцированный кредит
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('invest')">
                        <span class="mr-2">📈</span> Инвестиции
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('ege')">
                        <span class="mr-2">🎓</span> ЕГЭ
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('theory')">
                        <span class="mr-2">📚</span> Теория
                    </button>
                </div>
                
                <!-- Вклады -->
                <div id="deposit" class="tab-content">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на вклады</h3>
                        <p id="deposit-question" class="mb-4 text-gray-700"></p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="deposit-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="deposit-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkDepositAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="deposit-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateDepositTask()" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="deposit-score">0</span> из <span id="deposit-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <!-- Аннуитетный кредит -->
                <div id="annuity" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на аннуитетный кредит</h3>
                        <p id="annuity-question" class="mb-4 text-gray-700"></p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="annuity-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="annuity-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkAnnuityAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="annuity-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateAnnuityTask()" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="annuity-score">0</span> из <span id="annuity-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <!-- Дифференцированный кредит -->
                <div id="diff" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на дифференцированный кредит</h3>
                        <p id="diff-question" class="mb-4 text-gray-700"></p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="text" id="diff-answer" placeholder="Введите два числа через пробел" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="diff-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkDiffAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="diff-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateDiffTask()" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="diff-score">0</span> из <span id="diff-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <!-- Инвестиции -->
                <div id="invest" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на инвестиции</h3>
                        <p id="invest-question" class="mb-4 text-gray-700"></p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="invest-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="invest-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkInvestAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="invest-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateInvestTask()" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="invest-score">0</span> из <span id="invest-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <!-- ЕГЭ -->
                <div id="ege" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача для подготовки к ЕГЭ</h3>
                        <p id="ege-question" class="mb-4 text-gray-700"></p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ:</label>
                                <input type="text" id="ege-answer" placeholder="Введите ответ" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="ege-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkEgeAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="ege-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateEgeTask()" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="ege-score">0</span> из <span id="ege-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <!-- Теория -->
                <div id="theory" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Простые проценты</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> <span class="formula">S = P × (1 + r × t)</span></p>
                        <p class="text-gray-700">Где: S - итоговая сумма, P - начальная сумма, r - процентная ставка (в десятичной форме), t - время в годах.</p>
                        <div class="theory-example">
                            <p class="font-medium">Пример:</p>
                            <p>Вклад 10 000 руб. под 5% годовых на 3 года без капитализации:</p>
                            <p class="formula">10 000 × (1 + 0.05 × 3) = 11 500 руб.</p>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Сложные проценты</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> <span class="formula">S = P × (1 + r)<sup>t</sup></span></p>
                        <p class="text-gray-700">При капитализации проценты начисляются на проценты, поэтому сумма растёт быстрее.</p>
                        <div class="theory-example">
                            <p class="font-medium">Пример:</p>
                            <p>Вклад 10 000 руб. под 5% годовых на 3 года с капитализацией:</p>
                            <p class="formula">10 000 × (1 + 0.05)<sup>3</sup> ≈ 11 576,25 руб.</p>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Аннуитетный платёж</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> <span class="formula">Платёж = (P × r × (1 + r)<sup>n</sup>) / ((1 + r)<sup>n</sup> - 1)</span></p>
                        <p class="text-gray-700">Где: P - сумма кредита, r - месячная ставка, n - количество месяцев.</p>
                        <div class="theory-example">
                            <p class="font-medium">Пример:</p>
                            <p>Кредит 100 000 руб. на 1 год под 12% годовых:</p>
                            <p>Месячная ставка: 12%/12 = 1% = 0.01</p>
                            <p class="formula">Платёж = (100000×0.01×(1+0.01)<sup>12</sup>)/((1+0.01)<sup>12</sup>-1) ≈ 8 885 руб.</p>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Дифференцированный платёж</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> <span class="formula">Платёж = (P / n) + (P - (P/n)×(m-1)) × r</span></p>
                        <p class="text-gray-700">Где: n - общее число месяцев, m - текущий месяц, r - месячная ставка.</p>
                        <div class="theory-example">
                            <p class="font-medium">Пример:</p>
                            <p>Кредит 100 000 руб. на 1 год под 12% годовых:</p>
                            <p>Основной платёж: 100000/12 ≈ 8 333 руб.</p>
                            <p class="formula">Первый платёж: 8 333 + (100000 × 0.01) ≈ 9 333 руб.</p>
                            <p class="formula">Последний платёж: 8 333 + (8 333 × 0.01) ≈ 8 416 руб.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Прогресс -->
                <div class="mt-8">
                    <h3 class="text-lg font-semibold text-gray-700 mb-3">Общий прогресс</h3>
                    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div id="progress-bar" class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full progress-bar" style="width: 0%"></div>
                    </div>
                    <div class="text-right mt-1 text-sm text-gray-600">
                        <span id="total-score">0</span>% выполнено
                    </div>
                </div>
            </div>
        </div>
        
        <footer class="bg-gray-800 text-white py-6 mt-12">
            <div class="container mx-auto px-4 text-center">
                <p class="mb-2">© 2025 Финансовый тренажёр. Подготовка к ЕГЭ.</p>
                <p class="text-gray-400 text-sm">Разработано для изучения финансовой математики</p>
            </div>
        </footer>
    </div>

    <script src="main.js"></script>
    <script src="answer.js"></script>
    <script src="tasks.js"></script>
</body>
</html>

body, html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

.financial-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    animation: float linear infinite;
    filter: blur(20px);
    will-change: transform, opacity;
    pointer-events: none;
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) rotate(360deg);
        opacity: 0;
    }
}

.header-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        rgba(255,255,255,0.1) 0%, 
        rgba(255,255,255,0) 50%, 
        rgba(255,255,255,0.1) 100%);
    background-size: 200% 200%;
    animation: headerShine 8s ease infinite;
}

@keyframes headerShine {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animate-title {
    perspective: 1000px;
}

.text-gradient {
    background: linear-gradient(90deg, 
        #ffffff 0%, 
        #a7d8ff 50%, 
        #ffffff 100%);
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: textShine 3s linear infinite;
    display: inline-block;
}

@keyframes textShine {
    to { background-position: 200% center; }
}

.animate-subtitle {
    animation: fadeInUp 1.5s ease-out both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 0.9;
        transform: translateY(0);
    }
}

.card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.tab-btn {
    transition: all 0.2s ease;
}

.tab-btn:hover {
    transform: translateY(-2px);
}

.progress-bar {
    transition: width 0.6s ease;
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
    100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
}

.hidden { display: none; }
.bg-green-100 { background-color: #dcfce7; }
.text-green-800 { color: #166534; }
.bg-red-100 { background-color: #fee2e2; }
.text-red-800 { color: #991b1b; }
.bg-yellow-100 { background-color: #fef9c3; }
.text-yellow-800 { color: #92400e; }

.tab-content {
    transition: opacity 0.3s ease;
}

.theory-example {
    background-color: rgba(255, 255, 255, 0.7);
    border-left: 4px solid #3b82f6;
    padding: 12px;
    margin-top: 8px;
    border-radius: 0 8px 8px 0;
}

.formula {
    font-family: 'Courier New', monospace;
    background-color: #f3f4f6;
    padding: 2px 4px;
    border-radius: 4px;
    color: #1e40af;
    font-weight: bold;
}

.result {
    transition: all 0.3s ease;
}

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

function checkDepositAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    if (answeredDeposit) {
        resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const userAnswer = parseFloat(userInput);
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredDeposit = true;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentDepositTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    
    const scoreSpan = document.getElementById('deposit-score');
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + (isCorrect ? 1 : 0);
    const totalSpan = document.getElementById('deposit-total');
    totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    
    updateProgress();
}

function checkAnnuityAnswer() {
    const alertDiv = document.getElementById('annuity-alert');
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (answeredAnnuity) {
        resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const userAnswer = parseFloat(userInput);
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredAnnuity = true;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentAnnuityTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    
    const scoreSpan = document.getElementById('annuity-score');
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + (isCorrect ? 1 : 0);
    const totalSpan = document.getElementById('annuity-total');
    totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    
    updateProgress();
}

function checkDiffAnswer() {
    const alertDiv = document.getElementById('diff-alert');
    const answerInput = document.getElementById('diff-answer');
    const resultDiv = document.getElementById('diff-result');
    
    if (answeredDiff) {
        resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const parts = userInput.trim().split(/\s+/);
    
    if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
        alertDiv.textContent = 'Пожалуйста, введите два числа через пробел';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredDiff = true;
    totalTasks++;
    
    const userAnswer1 = parseFloat(parts[0]);
    const userAnswer2 = parseFloat(parts[1]);
    const isCorrect = Math.abs(userAnswer1 - currentDiffTask.firstPayment) < 0.01 && 
                     Math.abs(userAnswer2 - currentDiffTask.lastPayment) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentDiffTask.firstPayment.toLocaleString('ru-RU')} руб. и ${currentDiffTask.lastPayment.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDiffTask.firstPayment.toLocaleString('ru-RU')} руб. и ${currentDiffTask.lastPayment.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    
    const scoreSpan = document.getElementById('diff-score');
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + (isCorrect ? 1 : 0);
    const totalSpan = document.getElementById('diff-total');
    totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    
    updateProgress();
}

function checkInvestAnswer() {
    const alertDiv = document.getElementById('invest-alert');
    const answerInput = document.getElementById('invest-answer');
    const resultDiv = document.getElementById('invest-result');
    
    if (answeredInvest) {
        resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const userAnswer = parseFloat(userInput);
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredInvest = true;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentInvestTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentInvestTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentInvestTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    
    const scoreSpan = document.getElementById('invest-score');
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + (isCorrect ? 1 : 0);
    const totalSpan = document.getElementById('invest-total');
    totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    
    updateProgress();
}

function checkEgeAnswer() {
    const alertDiv = document.getElementById('ege-alert');
    const answerInput = document.getElementById('ege-answer');
    const resultDiv = document.getElementById('ege-result');
    
    if (answeredEge) {
        resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value.trim();
    
    // Проверка для текстовых ответов (вариант 1/2 или количество лет)
    if (typeof currentEgeTask.correct === 'string') {
        if (userInput !== '1' && userInput !== '2') {
            alertDiv.textContent = 'Пожалуйста, введите 1 или 2';
            alertDiv.classList.remove('hidden');
            return;
        }
        
        answeredEge = true;
        totalTasks++;
        
        if (userInput === currentEgeTask.correct) {
            resultDiv.textContent = 'Правильно!';
            resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct}`;
            resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
        }
    } 
    // Проверка для числовых ответов (переплата по кредиту)
    else {
        const userAnswer = parseFloat(userInput);
        
        if (isNaN(userAnswer)) {
            alertDiv.textContent = 'Пожалуйста, введите корректное число';
            alertDiv.classList.remove('hidden');
            return;
        }
        
        answeredEge = true;
        totalTasks++;
        
        const roundedAnswer = Math.round(userAnswer * 100) / 100;
        const isCorrect = Math.abs(roundedAnswer - currentEgeTask.correct) < 0.01;
        
        if (isCorrect) {
            resultDiv.textContent = `Правильно! Ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
        }
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    
    const scoreSpan = document.getElementById('ege-score');
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + (resultDiv.className.includes('bg-green-100') ? 1 : 0);
    const totalSpan = document.getElementById('ege-total');
    totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    
    updateProgress();
}

function generateDepositTask() {
    const principal = Math.floor(Math.random() * 90000) + 10000;
    const rate = Math.floor(Math.random() * 11) + 5;
    const years = Math.floor(Math.random() * 5) + 1;
    const isCompound = Math.random() > 0.5;
    
    if (isCompound) {
        currentDepositTask = {
            correct: principal * Math.pow(1 + rate / 100, years),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с капитализацией. Сколько получит клиент?`
        };
    } else {
        currentDepositTask = {
            correct: principal * (1 + rate / 100 * years),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} без капитализации. Сколько получит клиент?`
        };
    }
    
    document.getElementById('deposit-question').textContent = currentDepositTask.question;
    document.getElementById('deposit-answer').value = '';
    document.getElementById('deposit-result').classList.add('hidden');
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-alert').classList.add('hidden');
    answeredDeposit = false;
}

function generateAnnuityTask() {
    const principal = Math.floor(Math.random() * 900000) + 100000;
    const rate = Math.floor(Math.random() * 11) + 10;
    const years = Math.floor(Math.random() * 5) + 1;
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    
    currentAnnuityTask = {
        correct: principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1),
        question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какой будет ежемесячный платёж?`
    };
    
    document.getElementById('annuity-question').textContent = currentAnnuityTask.question;
    document.getElementById('annuity-answer').value = '';
    document.getElementById('annuity-result').classList.add('hidden');
    document.getElementById('annuity-answer').disabled = false;
    document.getElementById('annuity-alert').classList.add('hidden');
    answeredAnnuity = false;
}

function generateDiffTask() {
    const principal = Math.floor(Math.random() * 900000) + 100000;
    const rate = Math.floor(Math.random() * 11) + 10;
    const years = Math.floor(Math.random() * 5) + 1;
    const months = years * 12;
    const monthlyPrincipal = principal / months;
    
    currentDiffTask = {
        firstPayment: monthlyPrincipal + principal * (rate / 100 / 12),
        lastPayment: monthlyPrincipal + monthlyPrincipal * (rate / 100 / 12),
        question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с дифференцированными платежами. Какой будет первый и последний платежи? (введите через пробел)`
    };
    
    document.getElementById('diff-question').textContent = currentDiffTask.question;
    document.getElementById('diff-answer').value = '';
    document.getElementById('diff-result').classList.add('hidden');
    document.getElementById('diff-answer').disabled = false;
    document.getElementById('diff-alert').classList.add('hidden');
    answeredDiff = false;
}

function generateInvestTask() {
    const target = Math.floor(Math.random() * 9000000) + 1000000;
    const rate = Math.floor(Math.random() * 8) + 5;
    const years = Math.floor(Math.random() * 15) + 5;
    
    currentInvestTask = {
        correct: target / Math.pow(1 + rate / 100, years),
        question: `Какую сумму вам нужно инвестировать сегодня под ${rate}% годовых, чтобы через ${years} ${getYearWord(years)} получить ${formatNumber(target)} руб.?`
    };
    
    document.getElementById('invest-question').textContent = currentInvestTask.question;
    document.getElementById('invest-answer').value = '';
    document.getElementById('invest-result').classList.add('hidden');
    document.getElementById('invest-answer').disabled = false;
    document.getElementById('invest-alert').classList.add('hidden');
    answeredInvest = false;
}

function generateEgeTask() {
    const taskType = Math.floor(Math.random() * 3) + 1;
    
    if (taskType === 1) {
        const principal = Math.floor(Math.random() * 90000) + 10000;
        const years = Math.floor(Math.random() * 5) + 1;
        const rate1 = Math.floor(Math.random() * 11) + 5;
        const rate2 = Math.floor(Math.random() * 11) + 5;
        const type1 = Math.random() > 0.5 ? 'простыми' : 'сложными';
        const type2 = Math.random() > 0.5 ? 'простыми' : 'сложными';
        
        let sum1 = type1 === 'простыми' ? 
            principal * (1 + rate1 / 100 * years) : 
            principal * Math.pow(1 + rate1 / 100, years);
        
        let sum2 = type2 === 'простыми' ? 
            principal * (1 + rate2 / 100 * years) : 
            principal * Math.pow(1 + rate2 / 100, years);
        
        currentEgeTask = {
            correct: sum1 > sum2 ? '1' : '2',
            question: `Вкладчик хочет внести ${formatNumber(principal)} руб. на ${years} ${getYearWord(years)}. Выберите более выгодный вариант:
                Вариант 1: ${rate1}% годовых с ${type1} процентами.
                Вариант 2: ${rate2}% годовых с ${type2} процентами.
                Введите номер варианта (1 или 2):`
        };
    } else if (taskType === 2) {
        const principal = Math.floor(Math.random() * 900000) + 100000;
        const rate = Math.floor(Math.random() * 11) + 10;
        const years = Math.floor(Math.random() * 5) + 1;
        const months = years * 12;
        const monthlyRate = rate / 100 / 12;
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1);
        const totalPayment = payment * months;
        
        currentEgeTask = {
            correct: totalPayment - principal,
            question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какова общая переплата по кредиту?`
        };
    } else {
        const principal = Math.floor(Math.random() * 400000) + 100000;
        const multiplier = Math.random() * 1.2 + 1.3;
        const target = Math.round(principal * multiplier);
        const rate = Math.floor(Math.random() * 11) + 5;
        const t = Math.log(target / principal) / Math.log(1 + rate / 100);
        
        currentEgeTask = {
            correct: Math.ceil(t).toString(),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых с ежегодной капитализацией. Через сколько лет сумма превысит ${formatNumber(target)} руб.?`
        };
    }
    
    document.getElementById('ege-question').textContent = currentEgeTask.question;
    document.getElementById('ege-answer').value = '';
    document.getElementById('ege-result').classList.add('hidden');
    document.getElementById('ege-answer').disabled = false;
    document.getElementById('ege-alert').classList.add('hidden');
    answeredEge = false;
}

// Вспомогательные функции
function formatNumber(num) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(num));
}

function getYearWord(years) {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'лет';
    if (lastDigit === 1) return 'год';
    if (lastDigit >= 2 && lastDigit <= 4) return 'года';
    return 'лет';
}

// Инициализация первой задачи
generateDepositTask();
