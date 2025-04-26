<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Финансовый тренажёр: проценты и кредиты</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
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
