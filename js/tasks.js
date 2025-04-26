       // Модифицированные функции генерации задач с сбросом флагов
function generateDepositTask() {
    userAnswers.deposit = null;
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-answer').value = '';

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
    userAnswers.annuity = null;
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-answer').value = '';
        
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
    userAnswers.diff = null;
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-answer').value = '';
        
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
    userAnswers.Ege = null;
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-answer').value = '';
        
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
