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
