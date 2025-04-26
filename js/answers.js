   // Функции проверки ответов с проверкой на повторный ответ
function checkDepositAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-yellow-600', 'font-medium');
        return;
    }
    
    const userInput = document.getElementById('deposit-answer').value;
    const sanitizedInput = sanitizeInput(userInput);
    const userAnswer = validateNumber(sanitizedInput);
    const resultDiv = document.getElementById('deposit-result');
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-red-600', 'font-medium');
        return;
    } else {
        alertDiv.classList.add('hidden'); // Скрываем сообщение, если ответ корректен
    }
    
    // Остальная логика проверки...
    answeredDeposit = true;
    document.getElementById('deposit-answer').disabled = true;
    updateProgress();
}

function checkAnnuityAnswer() {
    const alertDiv = document.getElementById('annuity-alert');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-yellow-600', 'font-medium');
        return;
    }
    
    const userInput = document.getElementById('annuity-answer').value;
    const sanitizedInput = sanitizeInput(userInput);
    const userAnswer = validateNumber(sanitizedInput);
    const resultDiv = document.getElementById('annuity-result');
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-red-600', 'font-medium');
        return;
    } else {
        alertDiv.classList.add('hidden'); // Скрываем сообщение, если ответ корректен
    }
    
    // Остальная логика проверки...
    answeredDeposit = true;
    document.getElementById('annuity-answer').disabled = true;
    updateProgress();
}

function checkDiffAnswer() {
    const alertDiv = document.getElementById('diff-alert');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-yellow-600', 'font-medium');
        return;
    }
    
    const userInput = document.getElementById('diff-answer').value;
    const sanitizedInput = sanitizeInput(userInput);
    const userAnswer = validateNumber(sanitizedInput);
    const resultDiv = document.getElementById('diff-result');
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-red-600', 'font-medium');
        return;
    } else {
        alertDiv.classList.add('hidden'); // Скрываем сообщение, если ответ корректен
    }
    
    // Остальная логика проверки...
    answeredDeposit = true;
    document.getElementById('diff-answer').disabled = true;
    updateProgress();
}

function checkEgeAnswer() {
    const alertDiv = document.getElementById('ege-alert');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-yellow-600', 'font-medium');
        return;
    }
    
    const userInput = document.getElementById('ege-answer').value;
    const sanitizedInput = sanitizeInput(userInput);
    const userAnswer = validateNumber(sanitizedInput);
    const resultDiv = document.getElementById('ege-result');
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        alertDiv.classList.add('text-red-600', 'font-medium');
        return;
    } else {
        alertDiv.classList.add('hidden'); // Скрываем сообщение, если ответ корректен
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
