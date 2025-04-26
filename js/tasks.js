<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Финансовый тренажёр: проценты и кредиты</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
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
        
        .financial-element {
            position: absolute;
            opacity: 0.15;
            animation: float 15s infinite ease-in-out;
            will-change: transform;
        }
        
        .percentage {
            font-weight: 700;
            color: #1e40af;
        }
        
        .chart {
            border-radius: 8px;
            background: rgba(30, 64, 175, 0.1);
            border: 2px solid rgba(30, 64, 175, 0.2);
        }
        
        .coin {
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #facc15, #eab308);
            box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }
        
        .graph-line {
            height: 2px;
            background: linear-gradient(90deg, transparent, #1e40af, transparent);
            transform-origin: left center;
        }
        
        .circle {
            position: absolute;
            border-radius: 50%;
            animation: moveCircle linear infinite;
            will-change: transform;
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
        
        /* Анимация фона хедера */
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
        
        /* Анимация заголовка */
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
        
        /* Анимация подзаголовка */
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
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(5vw, 5vh) rotate(2deg); }
            50% { transform: translate(-5vw, 8vh) rotate(-2deg); }
            75% { transform: translate(3vw, -4vh) rotate(1deg); }
        }
        
        @keyframes moveCircle {
            to {
                transform: translate(var(--tx), var(--ty));
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.05); opacity: 0.2; }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">
    <!-- Анимированный финансовый фон -->
    <div class="financial-bg" id="financialBg">
        <div class="bg-animation"></div>
    </div>
    
    <!-- Главный контент -->
    <header class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 shadow-lg relative overflow-hidden">
        <!-- Анимированный фон хедера -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="header-animation"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <!-- Анимированный заголовок -->
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
                
                <!-- Табы -->
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
                        <span class="mr-2">🎓</span> Подготовка к ЕГЭ
                    </button>
                    <button class="tab-btn bg-blue-100 text-blue-800 px-5 py-3 rounded-lg hover:bg-blue-200" onclick="openTab('theory')">
                        <span class="mr-2">📚</span> Теория
                    </button>
                </div>
                
                <!-- Контент табов -->
                <div id="deposit" class="tab-content">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на вклады</h3>
                        <p id="deposit-question" class="mb-4 text-gray-700">Сколько денег вы получите через 5 лет, если вложите 100 000 руб. под 8% годовых с ежегодной капитализацией?</p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="deposit-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="deposit-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkAnswer('deposit')" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="deposit-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateTask('deposit')" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="deposit-score">0</span> из <span id="deposit-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <div id="annuity" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на аннуитетный кредит</h3>
                        <p id="annuity-question" class="mb-4 text-gray-700">Какой будет ежемесячный платёж по кредиту 500 000 руб. на 5 лет под 12% годовых с аннуитетными платежами?</p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="annuity-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="annuity-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkAnswer('annuity')" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="annuity-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateTask('annuity')" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="annuity-score">0</span> из <span id="annuity-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <div id="diff" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на дифференцированный кредит</h3>
                        <p id="diff-question" class="mb-4 text-gray-700">Какой будет первый и последний платежи по кредиту 500 000 руб. на 5 лет под 12% годовых с дифференцированными платежами? (введите через пробел)</p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="text" id="diff-answer" placeholder="Введите два числа через пробел" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="diff-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkAnswer('diff')" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="diff-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateTask('diff')" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="diff-score">0</span> из <span id="diff-total">0</span> верно
                        </div>
                    </div>
                </div>
                
                <div id="invest" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на инвестиции</h3>
                        <p id="invest-question" class="mb-4 text-gray-700">Какую сумму вам нужно инвестировать сегодня под 7% годовых, чтобы через 10 лет получить 1 000 000 руб.?</p>
                        
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto flex-1">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (руб.):</label>
                                <input type="number" id="invest-answer" placeholder="Введите сумму" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                <div id="invest-alert" class="hidden text-sm mt-1"></div>
                            </div>
                            <button onclick="checkAnswer('invest')" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg pulse">
                                Проверить
                            </button>
                        </div>
                        
                        <div id="invest-result" class="mt-4 p-3 rounded-lg hidden"></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="generateTask('invest')" 
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                            <span class="mr-2">🔄</span> Новая задача
                        </button>
                        
                        <div class="text-sm text-gray-500">
                            <span id="invest-score">0</span> из <span id="invest-total">0</span> верно
                        </div>
                    </div>
                </div>
                
<!-- Раздел ЕГЭ -->
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
                
                <div id="theory" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Простые проценты</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> S = P × (1 + r × t)</p>
                        <p class="text-gray-700">Где: S - итоговая сумма, P - начальная сумма, r - процентная ставка (в десятичной форме), t - время в годах.</p>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Сложные проценты</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> S = P × (1 + r)<sup>t</sup></p>
                        <p class="text-gray-700">При капитализации проценты начисляются на проценты, поэтому сумма растёт быстрее.</p>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Аннуитетный платёж</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> Платёж = (P × r × (1 + r)<sup>n</sup>) / ((1 + r)<sup>n</sup> - 1)</p>
                        <p class="text-gray-700">Где: P - сумма кредита, r - месячная ставка, n - количество месяцев.</p>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Дифференцированный платёж</h3>
                        <p class="mb-2 text-gray-700"><span class="font-bold">Формула:</span> Платёж = (P / n) + (P - (P/n)×(m-1)) × r</p>
                        <p class="text-gray-700">Где: n - общее число месяцев, m - текущий месяц, r - месячная ставка.</p>
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

    <script>
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

        // Создаем анимированный финансовый фон
        function createFinancialBackground() {
            const bg = document.getElementById('financialBg');
            const elements = [];
            
            // Создаем проценты
            for (let i = 0; i < 15; i++) {
                const percent = document.createElement('div');
                percent.className = 'financial-element percentage';
                percent.textContent = `${Math.floor(Math.random() * 20) + 1}%`;
                percent.style.fontSize = `${Math.random() * 20 + 10}px`;
                percent.style.left = `${Math.random() * 100}%`;
                percent.style.top = `${Math.random() * 100}%`;
                percent.style.animationDelay = `${Math.random() * 5}s`;
                percent.style.animationDuration = `${Math.random() * 20 + 10}s`;
                elements.push(percent);
            }
            
            // Создаем графики
            for (let i = 0; i < 10; i++) {
                const chart = document.createElement('div');
                chart.className = 'financial-element chart';
                chart.style.width = `${Math.random() * 100 + 50}px`;
                chart.style.height = `${Math.random() * 60 + 30}px`;
                chart.style.left = `${Math.random() * 100}%`;
                chart.style.top = `${Math.random() * 100}%`;
                chart.style.animationDelay = `${Math.random() * 5}s`;
                chart.style.animationDuration = `${Math.random() * 20 + 10}s`;
                
                // Добавляем линии графика
                for (let j = 0; j < 3; j++) {
                    const line = document.createElement('div');
                    line.className = 'graph-line';
                    line.style.width = '100%';
                    line.style.height = '2px';
                    line.style.margin = '5px 0';
                    line.style.transform = `scaleX(${Math.random() * 0.8 + 0.2})`;
                    chart.appendChild(line);
                }
                
                elements.push(chart);
            }
            
            // Создаем монеты
            for (let i = 0; i < 8; i++) {
                const coin = document.createElement('div');
                coin.className = 'financial-element coin';
                coin.style.width = `${Math.random() * 30 + 20}px`;
                coin.style.height = coin.style.width;
                coin.style.left = `${Math.random() * 100}%`;
                coin.style.top = `${Math.random() * 100}%`;
                coin.style.animationDelay = `${Math.random() * 5}s`;
                coin.style.animationDuration = `${Math.random() * 20 + 10}s`;
                elements.push(coin);
            }
            
            // Добавляем все элементы на фон
            elements.forEach(el => bg.appendChild(el));
        }
        
        // Создаем анимированные круги для фона
        function createBackground() {
            const bgAnimation = document.querySelector('.bg-animation');
            if (!bgAnimation) {
                console.error('Элемент .bg-animation не найден!');
                return;
            }    
            bgAnimation.innerHTML = ''; // Очищаем предыдущие круги
            
            const colors = [
                'rgba(255, 255, 255, 0.2)',
                'rgba(200, 230, 255, 0.3)',
                'rgba(150, 200, 255, 0.25)'
            ];
            
            for (let i = 0; i < 20; i++) {
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
        
        // Управление табами
        function openTab(tabName) {
            // Скрываем все табы
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
                tab.classList.remove('block', 'active');
            });
            
            // Убираем активный стиль у всех кнопок
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
            });
            
            // Показываем выбранный таб
            document.getElementById(tabName).classList.remove('hidden');
            document.getElementById(tabName).classList.add('block', 'active');
            
            // Добавляем активный стиль к выбранной кнопке
            event.currentTarget.classList.remove('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
            event.currentTarget.classList.add('bg-blue-600', 'text-white');
            
            // Генерируем новую задачу для выбранного таба
            if (tabName === 'ege') {
                generateEgeTask();
            } else {
                generateTask(tabName);
            }
        }
        
        // Генерация задач
        function generateTask(type) {
            let question, correctAnswer;
            
            if (type === 'deposit') {
                const principal = Math.floor(Math.random() * 90000) + 10000;
                const rate = Math.floor(Math.random() * 11) + 5;
                const years = Math.floor(Math.random() * 5) + 1;
                const isCompound = Math.random() > 0.5;
                
                if (isCompound) {
                    correctAnswer = principal * Math.pow(1 + rate / 100, years);
                    question = `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с капитализацией. Сколько получит клиент?`;
                } else {
                    correctAnswer = principal * (1 + rate / 100 * years);
                    question = `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} без капитализации. Сколько получит клиент?`;
                }
                
                document.getElementById('deposit-question').textContent = question;
                document.getElementById('deposit-answer').value = '';
                document.getElementById('deposit-result').classList.add('hidden');
                document.getElementById('deposit-answer').disabled = false;
                document.getElementById('deposit-answer').dataset.correct = correctAnswer.toFixed(2);
                answeredDeposit = false;
            } 
            else if (type === 'annuity') {
                const principal = Math.floor(Math.random() * 900000) + 100000;
                const rate = Math.floor(Math.random() * 11) + 10;
                const years = Math.floor(Math.random() * 5) + 1;
                const months = years * 12;
                const monthlyRate = rate / 100 / 12;
                
                correctAnswer = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
                question = `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какой будет ежемесячный платёж?`;
                
                document.getElementById('annuity-question').textContent = question;
                document.getElementById('annuity-answer').value = '';
                document.getElementById('annuity-result').classList.add('hidden');
                document.getElementById('annuity-answer').disabled = false;
                document.getElementById('annuity-answer').dataset.correct = correctAnswer.toFixed(2);
                answeredAnnuity = false;
            }
            else if (type === 'diff') {
                const principal = Math.floor(Math.random() * 900000) + 100000;
                const rate = Math.floor(Math.random() * 11) + 10;
                const years = Math.floor(Math.random() * 5) + 1;
                const months = years * 12;
                
                const monthlyPrincipal = principal / months;
                const firstPayment = monthlyPrincipal + principal * (rate / 100 / 12);
                const lastPayment = monthlyPrincipal + monthlyPrincipal * (rate / 100 / 12);
                
                question = `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с дифференцированными платежами. Какой будет первый и последний платежи? (введите через пробел)`;
                
                document.getElementById('diff-question').textContent = question;
                document.getElementById('diff-answer').value = '';
                document.getElementById('diff-result').classList.add('hidden');
                document.getElementById('diff-answer').disabled = false;
                document.getElementById('diff-answer').dataset.correct = `${firstPayment.toFixed(2)} ${lastPayment.toFixed(2)}`;
                answeredDiff = false;
            }
            else if (type === 'invest') {
                const target = Math.floor(Math.random() * 9000000) + 1000000;
                const rate = Math.floor(Math.random() * 8) + 5;
                const years = Math.floor(Math.random() * 15) + 5;
                
                correctAnswer = target / Math.pow(1 + rate / 100, years);
                question = `Какую сумму вам нужно инвестировать сегодня под ${rate}% годовых, чтобы через ${years} ${getYearWord(years)} получить ${formatNumber(target)} руб.?`;
                
                document.getElementById('invest-question').textContent = question;
                document.getElementById('invest-answer').value = '';
                document.getElementById('invest-result').classList.add('hidden');
                document.getElementById('invest-answer').disabled = false;
                document.getElementById('invest-answer').dataset.correct = correctAnswer.toFixed(2);
                answeredInvest = false;
            }
        }
        
        // Генерация задач для ЕГЭ
        function generateEgeTask() {
            // Сброс состояния и UI
            answeredEge = false;
            document.getElementById('ege-alert').classList.add('hidden');
            document.getElementById('ege-answer').disabled = false;
            document.getElementById('ege-answer').value = '';

            const resultDiv = document.getElementById('ege-result');
            resultDiv.textContent = '';
            resultDiv.classList.add('hidden');
            resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');

            // Генерация задачи
            const taskType = Math.floor(Math.random() * 3) + 1;
            
            if (taskType === 1) {
                const principal = Math.floor(Math.random() * 90000) + 10000;
                const years = Math.floor(Math.random() * 5) + 1;
                
                const rate1 = Math.floor(Math.random() * 11) + 5;
                const rate2 = Math.floor(Math.random() * 11) + 5;
                const type1 = Math.random() > 0.5 ? 'простыми' : 'сложными';
                const type2 = Math.random() > 0.5 ? 'простыми' : 'сложными';
                
                let sum1, sum2;
                
                if (type1 === 'простыми') {
                    sum1 = principal * (1 + rate1 / 100 * years);
                } else {
                    sum1 = principal * Math.pow(1 + rate1 / 100, years);
                }
                
                if (type2 === 'простыми') {
                    sum2 = principal * (1 + rate2 / 100 * years);
                } else {
                    sum2 = principal * Math.pow(1 + rate2 / 100, years);
                }
                
                if (Math.abs(sum1 - sum2) < 100) {
                    return generateEgeTask();
                }
                
                document.getElementById('ege-question').textContent = 
                    `Вкладчик хочет внести ${formatNumber(principal)} руб. на ${years} ${getYearWord(years)}. Выберите более выгодный вариант:
                    Вариант 1: ${rate1}% годовых с ${type1} процентами.
                    Вариант 2: ${rate2}% годовых с ${type2} процентами.
                    Введите номер варианта (1 или 2):`;
                
                currentEgeTask = {
                    correct: sum1 > sum2 ? '1' : '2'
                };
            }
            else if (taskType === 2) {
                const principal = Math.floor(Math.random() * 900000) + 100000;
                const rate = Math.floor(Math.random() * 11) + 10;
                const years = Math.floor(Math.random() * 5) + 1;
                const months = years * 12;
                const monthlyRate = rate / 100 / 12;
                
                const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                              (Math.pow(1 + monthlyRate, months) - 1);
                const totalPayment = payment * months;
                const overpayment = totalPayment - principal;
                
                document.getElementById('ege-question').textContent = 
                    `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какова общая переплата по кредиту?`;
                
                currentEgeTask = {
                    correct: Math.round(overpayment * 100) / 100
                };
            }
            else if (taskType === 3) {
                const principal = Math.floor(Math.random() * 400000) + 100000;
                const multiplier = Math.random() * 1.2 + 1.3;
                const target = Math.round(principal * multiplier);
                const rate = Math.floor(Math.random() * 11) + 5;
                
                const t = Math.log(target / principal) / Math.log(1 + rate / 100);
                const tYears = Math.ceil(t);
                
                document.getElementById('ege-question').textContent = 
                    `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых с ежегодной капитализацией. Через сколько лет сумма превысит ${formatNumber(target)} руб.?`;
                
                currentEgeTask = {
                    correct: tYears.toString()
                };
            }
        }
        
        // Проверка ответов для задач ЕГЭ
        function checkEgeAnswer() {
            const alertDiv = document.getElementById('ege-alert');
            const answerInput = document.getElementById('ege-answer');
            const resultDiv = document.getElementById('ege-result');
            
            if (answeredEge) {
                resultDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
                resultDiv.classList.remove('hidden');
                return;
            }
            
            const userInput = answerInput.value.trim();
            
            // Проверка для текстовых ответов (вариант 1/2 или количество лет)
            if (typeof currentEgeTask.correct === 'string') {
                if (userInput !== '1' && userInput !== '2') {
                    alertDiv.textContent = 'Пожалуйста, введите 1 или 2';
                    alertDiv.className = 'text-red-600';
                    alertDiv.classList.remove('hidden');
                    return;
                }
                
                answeredEge = true;
                totalTasks++;
                
                if (userInput === currentEgeTask.correct) {
                    resultDiv.textContent = 'Правильно!';
                    resultDiv.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800';
                    
                    // Обновляем счетчик правильных ответов
                    const scoreSpan = document.getElementById('ege-score');
                    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1;
                    score++;
                } else {
                    resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct}`;
                    resultDiv.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800';
                }
            } 
            // Проверка для числовых ответов (переплата по кредиту)
            else {
                const userAnswer = parseFloat(userInput);
                
                if (isNaN(userAnswer)) {
                    alertDiv.textContent = 'Пожалуйста, введите корректное число';
                    alertDiv.className = 'text-red-600';
                    alertDiv.classList.remove('hidden');
                    return;
                }
                
                answeredEge = true;
                totalTasks++;
                
                const roundedAnswer = Math.round(userAnswer * 100) / 100;
                const isCorrect = Math.abs(roundedAnswer - currentEgeTask.correct) < 0.01;
                
                if (isCorrect) {
                    resultDiv.textContent = `Правильно! Ответ: ${formatNumber(currentEgeTask.correct)} руб.`;
                    resultDiv.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800';
                    
                    // Обновляем счетчик правильных ответов
                    const scoreSpan = document.getElementById('ege-score');
                    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1;
                    score++;
                } else {
                    resultDiv.textContent = `Неправильно. Правильный ответ: ${formatNumber(currentEgeTask.correct)} руб.`;
                    resultDiv.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800';
                }
            }
            
            resultDiv.classList.remove('hidden');
            answerInput.disabled = true;
            
            // Обновляем счетчик задач
            const totalSpan = document.getElementById('ege-total');
            totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
            
            updateProgress();
        }
        
        // Проверка ответов для остальных задач
        function checkAnswer(type) {
            const input = document.getElementById(`${type}-answer`);
            const resultDiv = document.getElementById(`${type}-result`);
            const alertDiv = document.getElementById(`${type}-alert`);
            
            // Проверяем, не отвечали ли уже на этот вопрос
            if (type === 'deposit' && answeredDeposit) {
                resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Новая задача"';
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
                resultDiv.classList.remove('hidden');
                return;
            }
            if (type === 'annuity' && answeredAnnuity) {
                resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Новая задача"';
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
                resultDiv.classList.remove('hidden');
                return;
            }
            if (type === 'diff' && answeredDiff) {
                resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Новая задача"';
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
                resultDiv.classList.remove('hidden');
                return;
            }
            if (type === 'invest' && answeredInvest) {
                resultDiv.textContent = 'Вы уже ответили на этот вопрос! Нажмите "Новая задача"';
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-yellow-100 text-yellow-800';
                resultDiv.classList.remove('hidden');
                return;
            }
            
            // Проверяем ввод пользователя
            if (type === 'diff') {
                const parts = input.value.trim().split(/\s+/);
                if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
                    alertDiv.textContent = 'Пожалуйста, введите два числа через пробел';
                    alertDiv.className = 'text-red-600';
                    alertDiv.classList.remove('hidden');
                    return;
                }
            } else {
                const userAnswer = parseFloat(input.value);
                if (isNaN(userAnswer)) {
                    alertDiv.textContent = 'Пожалуйста, введите число';
                    alertDiv.className = 'text-red-600';
                    alertDiv.classList.remove('hidden');
                    return;
                }
            }
            
            // Скрываем алерт, если он был показан
            alertDiv.classList.add('hidden');
            
            // Получаем правильный ответ
            let correctAnswer;
            if (type === 'diff') {
                correctAnswer = input.dataset.correct.split(' ').map(Number);
            } else {
                correctAnswer = parseFloat(input.dataset.correct);
            }
            
            // Обновляем счетчик задач
            const totalSpan = document.getElementById(`${type}-total`);
            totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
            
            // Проверяем ответ
            let isCorrect = false;
            if (type === 'diff') {
                const parts = input.value.trim().split(/\s+/);
                const userAnswer1 = parseFloat(parts[0]);
                const userAnswer2 = parseFloat(parts[1]);
                isCorrect = Math.abs(userAnswer1 - correctAnswer[0]) < 0.01 && 
                             Math.abs(userAnswer2 - correctAnswer[1]) < 0.01;
            } else {
                const userAnswer = parseFloat(input.value);
                isCorrect = Math.abs(userAnswer - correctAnswer) / correctAnswer < 0.01;
            }
            
            // Отображаем результат
            if (isCorrect) {
                resultDiv.textContent = type === 'diff' 
                    ? `✅ Верно! Правильные ответы: ${formatNumber(correctAnswer[0])} руб. и ${formatNumber(correctAnswer[1])} руб.`
                    : `✅ Верно! Правильный ответ: ${formatNumber(correctAnswer)} руб.`;
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800';
                
                // Обновляем счетчик правильных ответов
                const scoreSpan = document.getElementById(`${type}-score`);
                scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1;
                score++;
            } else {
                resultDiv.textContent = type === 'diff'
                    ? `❌ Неверно. Правильные ответы: ${formatNumber(correctAnswer[0])} руб. и ${formatNumber(correctAnswer[1])} руб.`
                    : `❌ Неверно. Правильный ответ: ${formatNumber(correctAnswer)} руб.`;
                resultDiv.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800';
            }
            
            resultDiv.classList.remove('hidden');
            input.disabled = true;
            
            // Помечаем вопрос как отвеченный
            if (type === 'deposit') answeredDeposit = true;
            if (type === 'annuity') answeredAnnuity = true;
            if (type === 'diff') answeredDiff = true;
            if (type === 'invest') answeredInvest = true;
            
            updateProgress();
        }
        
        // Обновление общего прогресса
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
            
            // Изменяем цвет прогресс-бара
            const progressBar = document.getElementById('progress-bar');
            if (progress < 30) {
                progressBar.className = 'bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full progress-bar';
            } else if (progress < 70) {
                progressBar.className = 'bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full progress-bar';
            } else {
                progressBar.className = 'bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full progress-bar';
            }
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
        
        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            createFinancialBackground();
            createBackground();
            generateTask('deposit');
        });
    </script>
</body>
</html>
