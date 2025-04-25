<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Финансовый тренажёр: проценты и кредиты</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            overflow-x: hidden;
            position: relative;
            min-height: 100vh;
        }
        
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }
        
        .circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(52, 152, 219, 0.1);
            animation: float 15s infinite linear;
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-1000px) rotate(720deg);
                opacity: 0;
            }
        }
        
        .tab-btn {
            transition: all 0.3s ease;
        }
        
        .tab-btn:hover {
            transform: translateY(-2px);
        }
        
        .result {
            transition: all 0.3s ease;
        }
        
        .progress-bar {
            transition: width 0.5s ease;
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
            100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Анимированный фон -->
    <div class="bg-animation">
        <!-- Круги будут добавлены через JavaScript -->
    </div>
    
    <!-- Главный контент -->
    <header class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 shadow-lg relative overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-10"></div>
        <div class="container mx-auto px-4 relative">
            <h1 class="text-4xl md:text-5xl font-bold mb-2 text-center floating">Финансовый тренажёр</h1>
            <p class="text-xl text-center opacity-90">Освойте проценты, вклады и кредиты на практике</p>
        </div>
    </header>
    
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-xl shadow-xl overflow-hidden mb-8 transform transition-all hover:shadow-2xl">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-500 pb-2">Тренажёр по финансовой математике</h2>
                
                <!-- Табы -->
                <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                    <button class="tab-btn bg-blue-600 text-white px-4 py-2 rounded-t-lg active" onclick="openTab('deposit')">
                        <i class="mr-2">💰</i> Вклады
                    </button>
                    <button class="tab-btn bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg" onclick="openTab('annuity')">
                        <i class="mr-2">🏦</i> Аннуитетный кредит
                    </button>
                    <button class="tab-btn bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg" onclick="openTab('diff')">
                        <i class="mr-2">📉</i> Дифференцированный кредит
                    </button>
                    <button class="tab-btn bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg" onclick="openTab('ege')">
                        <i class="mr-2">🎓</i> Подготовка к ЕГЭ
                    </button>
                    <button class="tab-btn bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg" onclick="openTab('theory')">
                        <i class="mr-2">📚</i> Теория
                    </button>
                </div>
                
                <!-- Контент табов -->
                <div id="deposit" class="tab-content active">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на вклады</h3>
                        <p id="deposit-question" class="mb-4 text-gray-700"></p>
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ:</label>
                                <input type="number" id="deposit-answer" placeholder="Введите число" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <button onclick="checkDepositAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all pulse">
                                Проверить
                            </button>
                        </div>
                        <div class="result mt-4 p-3 rounded-lg hidden" id="deposit-result"></div>
                    </div>
                    <button onclick="generateDepositTask()" 
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                        Следующая задача
                    </button>
                </div>
                
                <div id="annuity" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на аннуитетный кредит</h3>
                        <p id="annuity-question" class="mb-4 text-gray-700"></p>
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ:</label>
                                <input type="number" id="annuity-answer" placeholder="Введите число" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <button onclick="checkAnnuityAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                                Проверить
                            </button>
                        </div>
                        <div class="result mt-4 p-3 rounded-lg hidden" id="annuity-result"></div>
                    </div>
                    <button onclick="generateAnnuityTask()" 
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                        Следующая задача
                    </button>
                </div>
                
                <div id="diff" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача на дифференцированный кредит</h3>
                        <p id="diff-question" class="mb-4 text-gray-700"></p>
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ (2 числа через пробел):</label>
                                <input type="text" id="diff-answer" placeholder="Например: 15000 12000" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <button onclick="checkDiffAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                                Проверить
                            </button>
                        </div>
                        <div class="result mt-4 p-3 rounded-lg hidden" id="diff-result"></div>
                    </div>
                    <button onclick="generateDiffTask()" 
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                        Следующая задача
                    </button>
                </div>
                
                <div id="ege" class="tab-content hidden">
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="text-xl font-semibold text-blue-800 mb-3">Задача для подготовки к ЕГЭ</h3>
                        <p id="ege-question" class="mb-4 text-gray-700"></p>
                        <div class="flex flex-col md:flex-row gap-4 items-start md:items-end">
                            <div class="w-full md:w-auto">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Ваш ответ:</label>
                                <input type="text" id="ege-answer" placeholder="Введите ответ" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <button onclick="checkEgeAnswer()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                                Проверить
                            </button>
                        </div>
                        <div class="result mt-4 p-3 rounded-lg hidden" id="ege-result"></div>
                    </div>
                    <button onclick="generateEgeTask()" 
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
                        Следующая задача
                    </button>
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
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">Ваш прогресс</h3>
                    <div class="w-full bg-gray-200 rounded-full h-4">
                        <div id="progress" class="bg-green-500 h-4 rounded-full text-xs text-white flex items-center justify-center" style="width: 0%">0%</div>
                    </div>
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
    
    <script>
        // Создаем анимированный фон
        function createBackground() {
            const bgAnimation = document.querySelector('.bg-animation');
            const colors = ['rgba(52, 152, 219, 0.1)', 'rgba(155, 89, 182, 0.1)', 'rgba(26, 188, 156, 0.1)'];
            
            for (let i = 0; i < 20; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                
                // Случайные параметры
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

        // Глобальные переменные для хранения текущих задач и результатов
        let currentDepositTask = {};
        let currentAnnuityTask = {};
        let currentDiffTask = {};
        let currentEgeTask = {};
        let score = 0;
        let totalTasks = 0;

         // Флаги для отслеживания отвеченных вопросов
    let answeredDeposit = false;
    let answeredAnnuity = false;
    let answeredDiff = false;
    let answeredEge = false;
        
        // Функции для работы с вкладками
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
            
            // При открытии вкладки генерируем новую задачу
            if (tabName === 'deposit') generateDepositTask();
            if (tabName === 'annuity') generateAnnuityTask();
            if (tabName === 'diff') generateDiffTask();
            if (tabName === 'ege') generateEgeTask();
        }
        

      // Функции проверки ответов с проверкой на повторный ответ
    function checkDepositAnswer() {
        if (answeredDeposit) {
            alert("Вы уже ответили на этот вопрос! Нажмите 'Следующая задача'.");
            return;
        }
        
        const userInput = document.getElementById('deposit-answer').value;
        const sanitizedInput = sanitizeInput(userInput);
        const userAnswer = validateNumber(sanitizedInput);
        const resultDiv = document.getElementById('deposit-result');
        
        if (isNaN(userAnswer)) {
            resultDiv.textContent = 'Пожалуйста, введите корректное число';
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
            return;
        }
        
        totalTasks++;
        const roundedAnswer = Math.round(userAnswer * 100) / 100;
        
        if (Math.abs(roundedAnswer - currentDepositTask.correct) < 0.01) {
            resultDiv.textContent = `Правильно! Ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
            resultDiv.classList.add('bg-green-100', 'text-green-800');
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
        }
        
        resultDiv.classList.remove('hidden');
        answeredDeposit = true;
        document.getElementById('deposit-answer').disabled = true;
        updateProgress();
    }

    function checkAnnuityAnswer() {
        if (answeredAnnuity) {
            alert("Вы уже ответили на этот вопрос! Нажмите 'Следующая задача'.");
            return;
        }
        
        const userInput = document.getElementById('annuity-answer').value;
        const sanitizedInput = sanitizeInput(userInput);
        const userAnswer = validateNumber(sanitizedInput);
        const resultDiv = document.getElementById('annuity-result');
        
        if (isNaN(userAnswer)) {
            resultDiv.textContent = 'Пожалуйста, введите корректное число';
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
            return;
        }
        
        totalTasks++;
        const roundedAnswer = Math.round(userAnswer * 100) / 100;
        
        if (Math.abs(roundedAnswer - currentAnnuityTask.correct) < 0.01) {
            resultDiv.textContent = `Правильно! Ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
            resultDiv.classList.add('bg-green-100', 'text-green-800');
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
        }
        
        resultDiv.classList.remove('hidden');
        answeredAnnuity = true;
        document.getElementById('annuity-answer').disabled = true;
        updateProgress();
    }

    function checkDiffAnswer() {
        if (answeredDiff) {
            alert("Вы уже ответили на этот вопрос! Нажмите 'Следующая задача'.");
            return;
        }
        
        const userInput = document.getElementById('diff-answer').value;
        const sanitizedInput = sanitizeInput(userInput);
        const resultDiv = document.getElementById('diff-result');
        
        const parts = sanitizedInput.trim().split(/\s+/);
        if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
            resultDiv.textContent = 'Пожалуйста, введите два числа через пробел';
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
            return;
        }
        
        totalTasks++;
        const userAnswer1 = Math.round(parseFloat(parts[0]) * 100) / 100;
        const userAnswer2 = Math.round(parseFloat(parts[1]) * 100) / 100;
        
        const correct1 = currentDiffTask.correct[0];
        const correct2 = currentDiffTask.correct[1];
        
        if (Math.abs(userAnswer1 - correct1) < 0.01 && Math.abs(userAnswer2 - correct2) < 0.01) {
            resultDiv.textContent = `Правильно! Ответ: ${correct1.toLocaleString('ru-RU')} руб. и ${correct2.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
            resultDiv.classList.add('bg-green-100', 'text-green-800');
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${correct1.toLocaleString('ru-RU')} руб. и ${correct2.toLocaleString('ru-RU')} руб.`;
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
        }
        
        resultDiv.classList.remove('hidden');
        answeredDiff = true;
        document.getElementById('diff-answer').disabled = true;
        updateProgress();
    }

    function checkEgeAnswer() {
        if (answeredEge) {
            alert("Вы уже ответили на этот вопрос! Нажмите 'Следующая задача'.");
            return;
        }
        
        const userInput = document.getElementById('ege-answer').value;
        const sanitizedInput = sanitizeInput(userInput).trim();
        const resultDiv = document.getElementById('ege-result');
        
        if (sanitizedInput === '') {
            resultDiv.textContent = 'Пожалуйста, введите ответ';
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
            return;
        }
        
        totalTasks++;
        let isCorrect = false;
        
        if (typeof currentEgeTask.correct === 'string') {
            isCorrect = sanitizedInput === currentEgeTask.correct;
        } else {
            const userAnswer = validateNumber(sanitizedInput);
            if (!isNaN(userAnswer)) {
                isCorrect = Math.abs(userAnswer - currentEgeTask.correct) < 0.01;
            }
        }
        
        if (isCorrect) {
            if (typeof currentEgeTask.correct === 'string') {
                resultDiv.textContent = 'Правильно!';
            } else {
                resultDiv.textContent = `Правильно! Ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
            }
            resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
            resultDiv.classList.add('bg-green-100', 'text-green-800');
            score++;
        } else {
            if (typeof currentEgeTask.correct === 'string') {
                resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct}`;
            } else {
                resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
            }
            resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            resultDiv.classList.add('bg-red-100', 'text-red-800');
        }
        
        resultDiv.classList.remove('hidden');
        answeredEge = true;
        document.getElementById('ege-answer').disabled = true;
        updateProgress();
    }

       // Модифицированные функции генерации задач с сбросом флагов
    function generateDepositTask() {
        answeredDeposit = false;
        document.getElementById('deposit-answer').disabled = false;
        
        const principal = Math.floor(Math.random() * 90000) + 10000;
        const rate = Math.floor(Math.random() * 11) + 5;
        const years = Math.floor(Math.random() * 5) + 1;
        const isCompound = Math.random() > 0.5;
        
        let correct;
        if (isCompound) {
            correct = principal * Math.pow(1 + rate / 100, years);
            document.getElementById('deposit-question').textContent = 
                `Вклад ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} год(а) с капитализацией. Сколько получит клиент?`;
        } else {
            correct = principal * (1 + rate / 100 * years);
            document.getElementById('deposit-question').textContent = 
                `Вклад ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} год(а) без капитализации. Сколько получит клиент?`;
        }
        
        currentDepositTask = {
            correct: Math.round(correct * 100) / 100
        };
        
        document.getElementById('deposit-answer').value = '';
        const resultDiv = document.getElementById('deposit-result');
        resultDiv.textContent = '';
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    }

    function generateAnnuityTask() {
        answeredAnnuity = false;
        document.getElementById('annuity-answer').disabled = false;
        
        const principal = Math.floor(Math.random() * 900000) + 100000;
        const rate = Math.floor(Math.random() * 11) + 10;
        const years = Math.floor(Math.random() * 5) + 1;
        const months = years * 12;
        const monthlyRate = rate / 100 / 12;
        
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
        
        document.getElementById('annuity-question').textContent = 
            `Кредит ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} лет с аннуитетными платежами. Какой будет ежемесячный платёж?`;
        
        currentAnnuityTask = {
            correct: Math.round(payment * 100) / 100
        };
        
        document.getElementById('annuity-answer').value = '';
        const resultDiv = document.getElementById('annuity-result');
        resultDiv.textContent = '';
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    }

    function generateDiffTask() {
        answeredDiff = false;
        document.getElementById('diff-answer').disabled = false;
        
        const principal = Math.floor(Math.random() * 900000) + 100000;
        const rate = Math.floor(Math.random() * 11) + 10;
        const years = Math.floor(Math.random() * 5) + 1;
        const months = years * 12;
        
        const monthlyPrincipal = principal / months;
        const firstPayment = monthlyPrincipal + principal * (rate / 100 / 12);
        const lastPayment = monthlyPrincipal + monthlyPrincipal * (rate / 100 / 12);
        
        document.getElementById('diff-question').textContent = 
            `Кредит ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} лет с дифференцированными платежами. Какой будет первый и последний платежи? (введите через пробел)`;
        
        currentDiffTask = {
            correct: [
                Math.round(firstPayment * 100) / 100,
                Math.round(lastPayment * 100) / 100
            ]
        };
        
        document.getElementById('diff-answer').value = '';
        const resultDiv = document.getElementById('diff-result');
        resultDiv.textContent = '';
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    }

    function generateEgeTask() {
        answeredEge = false;
        document.getElementById('ege-answer').disabled = false;
        
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
                `Вкладчик хочет внести ${principal.toLocaleString('ru-RU')} руб. на ${years} лет. Выберите более выгодный вариант:
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
                `Кредит ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} лет с аннуитетными платежами. Какова общая переплата по кредиту?`;
            
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
                `Вклад ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых с ежегодной капитализацией. Через сколько лет сумма превысит ${target.toLocaleString('ru-RU')} руб.?`;
            
            currentEgeTask = {
                correct: tYears.toString()
            };
        }
        
        document.getElementById('ege-answer').value = '';
        const resultDiv = document.getElementById('ege-result');
        resultDiv.textContent = '';
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    }
</script>
                
                // Убедимся, что варианты разные
                if (Math.abs(sum1 - sum2) < 100) {
                    return generateEgeTask();
                }
                
                document.getElementById('ege-question').textContent = 
                    `Вкладчик хочет внести ${principal.toLocaleString('ru-RU')} руб. на ${years} лет. Выберите более выгодный вариант:
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
                    `Кредит ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых на ${years} лет с аннуитетными платежами. Какова общая переплата по кредиту?`;
                
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
                    `Вклад ${principal.toLocaleString('ru-RU')} руб. под ${rate}% годовых с ежегодной капитализацией. Через сколько лет сумма превысит ${target.toLocaleString('ru-RU')} руб.?`;
                
                currentEgeTask = {
                    correct: tYears.toString()
                };
            }
            
            document.getElementById('ege-answer').value = '';
            const resultDiv = document.getElementById('ege-result');
            resultDiv.textContent = '';
            resultDiv.classList.add('hidden');
            resultDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
        }
        
        // Функции проверки ответов
        function checkDepositAnswer() {
            const userInput = document.getElementById('deposit-answer').value;
            const sanitizedInput = sanitizeInput(userInput);
            const userAnswer = validateNumber(sanitizedInput);
            const resultDiv = document.getElementById('deposit-result');
            
            if (isNaN(userAnswer)) {
                resultDiv.textContent = 'Пожалуйста, введите корректное число';
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
                return;
            }
            
            totalTasks++;
            const roundedAnswer = Math.round(userAnswer * 100) / 100;
            
            if (Math.abs(roundedAnswer - currentDepositTask.correct) < 0.01) {
                resultDiv.textContent = `Правильно! Ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                resultDiv.classList.add('bg-green-100', 'text-green-800');
                score++;
            } else {
                resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
            }
            
            resultDiv.classList.remove('hidden');
            updateProgress();
        }
        
        function checkAnnuityAnswer() {
            const userInput = document.getElementById('annuity-answer').value;
            const sanitizedInput = sanitizeInput(userInput);
            const userAnswer = validateNumber(sanitizedInput);
            const resultDiv = document.getElementById('annuity-result');
            
            if (isNaN(userAnswer)) {
                resultDiv.textContent = 'Пожалуйста, введите корректное число';
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
                return;
            }
            
            totalTasks++;
            const roundedAnswer = Math.round(userAnswer * 100) / 100;
            
            if (Math.abs(roundedAnswer - currentAnnuityTask.correct) < 0.01) {
                resultDiv.textContent = `Правильно! Ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                resultDiv.classList.add('bg-green-100', 'text-green-800');
                score++;
            } else {
                resultDiv.textContent = `Неправильно. Правильный ответ: ${currentAnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
            }
            
            resultDiv.classList.remove('hidden');
            updateProgress();
        }
        
        function checkDiffAnswer() {
            const userInput = document.getElementById('diff-answer').value;
            const sanitizedInput = sanitizeInput(userInput);
            const resultDiv = document.getElementById('diff-result');
            
            const parts = sanitizedInput.trim().split(/\s+/);
            if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
                resultDiv.textContent = 'Пожалуйста, введите два числа через пробел';
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
                return;
            }
            
            totalTasks++;
            const userAnswer1 = Math.round(parseFloat(parts[0]) * 100) / 100;
            const userAnswer2 = Math.round(parseFloat(parts[1]) * 100) / 100;
            
            const correct1 = currentDiffTask.correct[0];
            const correct2 = currentDiffTask.correct[1];
            
            if (Math.abs(userAnswer1 - correct1) < 0.01 && Math.abs(userAnswer2 - correct2) < 0.01) {
                resultDiv.textContent = `Правильно! Ответ: ${correct1.toLocaleString('ru-RU')} руб. и ${correct2.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                resultDiv.classList.add('bg-green-100', 'text-green-800');
                score++;
            } else {
                resultDiv.textContent = `Неправильно. Правильный ответ: ${correct1.toLocaleString('ru-RU')} руб. и ${correct2.toLocaleString('ru-RU')} руб.`;
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
            }
            
            resultDiv.classList.remove('hidden');
            updateProgress();
        }
        
        function checkEgeAnswer() {
            const userInput = document.getElementById('ege-answer').value;
            const sanitizedInput = sanitizeInput(userInput).trim();
            const resultDiv = document.getElementById('ege-result');
            
            if (sanitizedInput === '') {
                resultDiv.textContent = 'Пожалуйста, введите ответ';
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
                return;
            }
            
            totalTasks++;
            let isCorrect = false;
            
            if (typeof currentEgeTask.correct === 'string') {
                // Для вариантов 1/2 или количества лет
                isCorrect = sanitizedInput === currentEgeTask.correct;
            } else {
                // Для числового ответа
                const userAnswer = validateNumber(sanitizedInput);
                if (!isNaN(userAnswer)) {
                    isCorrect = Math.abs(userAnswer - currentEgeTask.correct) < 0.01;
                }
            }
            
            if (isCorrect) {
                if (typeof currentEgeTask.correct === 'string') {
                    resultDiv.textContent = 'Правильно!';
                } else {
                    resultDiv.textContent = `Правильно! Ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
                }
                resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                resultDiv.classList.add('bg-green-100', 'text-green-800');
                score++;
            } else {
                if (typeof currentEgeTask.correct === 'string') {
                    resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct}`;
                } else {
                    resultDiv.textContent = `Неправильно. Правильный ответ: ${currentEgeTask.correct.toLocaleString('ru-RU')} руб.`;
                }
                resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                resultDiv.classList.add('bg-red-100', 'text-red-800');
            }
            
            resultDiv.classList.remove('hidden');
            updateProgress();
        }
        
        function updateProgress() {
            const progress = totalTasks > 0 ? Math.round((score / totalTasks) * 100) : 0;
            const progressBar = document.getElementById('progress');
            progressBar.style.width = `${progress}%`;
            progressBar.textContent = `${progress}%`;
            
            // Изменяем цвет в зависимости от прогресса
            if (progress < 30) {
                progressBar.classList.remove('bg-yellow-500', 'bg-green-500');
                progressBar.classList.add('bg-red-500');
            } else if (progress < 70) {
                progressBar.classList.remove('bg-red-500', 'bg-green-500');
                progressBar.classList.add('bg-yellow-500');
            } else {
                progressBar.classList.remove('bg-red-500', 'bg-yellow-500');
                progressBar.classList.add('bg-green-500');
            }
        }
        
        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            createBackground();
            generateDepositTask();
        });
    </script>
<script>
    // Чистильщик (добавьте перед закрывающим </body> или в конец <script>)
    function cleanUpPage() {
        // 1. Удаляем все ссылки на bluzokda.github.io/gm
        document.querySelectorAll('a[href*="bluzokda.github.io/gm"]').forEach(link => {
            link.remove();
            console.log('Удалена подозрительная ссылка:', link);
        });
        
        // 2. Удаляем текстовые узлы с "gm"
        document.querySelectorAll('*').forEach(element => {
            if (element.childNodes.length === 1 && element.textContent.includes('gm')) {
                element.remove();
                console.log('Удалён элемент с текстом "gm":', element);
            }
        });
    }

    // Запускаем при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
        createBackground();
        generateDepositTask();
        cleanUpPage(); // Добавляем вызов чистильщика
    });

    // Дополнительная защита (на случай динамического добавления)
    new MutationObserver(cleanUpPage).observe(document, {
        childList: true,
        subtree: true
    });
</script>
</body>
</html>
