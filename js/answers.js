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
