function checkDepositAnswer() {
    const alertDiv = document.getElementById('deposit-alert');
    const answerInput = document.getElementById('deposit-answer');
    const resultDiv = document.getElementById('deposit-result');
    
    if (answeredDeposit) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
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

function checkAnnuityAnswer() {
    const alertDiv = document.getElementById('annuity-alert');
    const answerInput = document.getElementById('annuity-answer');
    const resultDiv = document.getElementById('annuity-result');
    
    if (answeredAnnuity) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
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
    updateProgress();
}

function checkDiffAnswer() {
    const alertDiv = document.getElementById('diff-alert');
    const answerInput = document.getElementById('diff-answer');
    const resultDiv = document.getElementById('diff-result');
    
    if (answeredDiff) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        alertDiv.classList.remove('hidden');
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
    updateProgress();
}

function checkEgeAnswer() {
    const alertDiv = document.getElementById('ege-alert');
    const answerInput = document.getElementById('ege-answer');
    const resultDiv = document.getElementById('ege-result');
    
    if (answeredEge) {
        alertDiv.textContent = "Вы уже ответили! Нажмите 'Новая задача'.";
        alertDiv.classList.remove('hidden');
        return;
    }
    
    const userInput = answerInput.value.trim();
    
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
    } else {
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
