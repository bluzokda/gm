   // Функции проверки ответов с проверкой на повторный ответ
function checkDepositAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
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
    updateProgress();
}

function checkАnnuityAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    if (answeredАnnuity) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const userAnswer = parseFloat(userInput);
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredАnnuity = true;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentАnnuityTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentDepositTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentАnnuityTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    updateProgress();
}

function checkDiffAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    if (answeredDiff) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value;
    const userAnswer = parseFloat(userInput);
    
    if (isNaN(userAnswer)) {
        alertDiv.textContent = 'Пожалуйста, введите корректное число';
        alertDiv.classList.remove('hidden');
        return;
    }
    
    answeredDiff = true;
    totalTasks++;
    
    const roundedAnswer = Math.round(userAnswer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - currentDiffTask.correct) < 0.01;
    
    if (isCorrect) {
        resultDiv.textContent = `Правильно! Ответ: ${currentDiffTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-green-100 text-green-800';
        score++;
    } else {
        resultDiv.textContent = `Неправильно. Правильный ответ: ${currentDiffTask.correct.toLocaleString('ru-RU')} руб.`;
        resultDiv.className = 'result mt-4 p-3 rounded-lg bg-red-100 text-red-800';
    }
    
    resultDiv.classList.remove('hidden');
    answerInput.disabled = true;
    updateProgress();
}

function checkEgeAnswer() {
    const alertDiv = document.getElementById('ege-alert');
    const answerInput = document.getElementById('ege-answer');
    const resultDiv = document.getElementById('ege-result');
    
    if (answeredEge) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Следующая задача'.";
        alertDiv.classList.remove('hidden');
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
    updateProgress();
}
