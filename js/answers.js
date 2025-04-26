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
    
    resultDiv.classList.remove
