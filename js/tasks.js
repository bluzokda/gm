function generateDepositTask() {
    const principal = Math.floor(Math.random() * 90000) + 10000;
    const rate = Math.floor(Math.random() * 11) + 5;
    const years = Math.floor(Math.random() * 5) + 1;
    const isCompound = Math.random() > 0.5;
    
    if (isCompound) {
        currentDepositTask = {
            correct: principal * Math.pow(1 + rate / 100, years),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с капитализацией. Сколько получит клиент?`
        };
    } else {
        currentDepositTask = {
            correct: principal * (1 + rate / 100 * years),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} без капитализации. Сколько получит клиент?`
        };
    }
    
    document.getElementById('deposit-question').textContent = currentDepositTask.question;
    document.getElementById('deposit-answer').value = '';
    document.getElementById('deposit-result').classList.add('hidden');
    document.getElementById('deposit-answer').disabled = false;
    document.getElementById('deposit-alert').classList.add('hidden');
    answeredDeposit = false;
}

function generateAnnuityTask() {
    const principal = Math.floor(Math.random() * 900000) + 100000;
    const rate = Math.floor(Math.random() * 11) + 10;
    const years = Math.floor(Math.random() * 5) + 1;
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    
    currentAnnuityTask = {
        correct: principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1),
        question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какой будет ежемесячный платёж?`
    };
    
    document.getElementById('annuity-question').textContent = currentAnnuityTask.question;
    document.getElementById('annuity-answer').value = '';
    document.getElementById('annuity-result').classList.add('hidden');
    document.getElementById('annuity-answer').disabled = false;
    document.getElementById('annuity-alert').classList.add('hidden');
    answeredAnnuity = false;
}

function generateDiffTask() {
    const principal = Math.floor(Math.random() * 900000) + 100000;
    const rate = Math.floor(Math.random() * 11) + 10;
    const years = Math.floor(Math.random() * 5) + 1;
    const months = years * 12;
    const monthlyPrincipal = principal / months;
    
    currentDiffTask = {
        firstPayment: monthlyPrincipal + principal * (rate / 100 / 12),
        lastPayment: monthlyPrincipal + monthlyPrincipal * (rate / 100 / 12),
        question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с дифференцированными платежами. Какой будет первый и последний платежи? (введите через пробел)`
    };
    
    document.getElementById('diff-question').textContent = currentDiffTask.question;
    document.getElementById('diff-answer').value = '';
    document.getElementById('diff-result').classList.add('hidden');
    document.getElementById('diff-answer').disabled = false;
    document.getElementById('diff-alert').classList.add('hidden');
    answeredDiff = false;
}

function generateEgeTask() {
    const taskType = Math.floor(Math.random() * 3) + 1;
    
    if (taskType === 1) {
        const principal = Math.floor(Math.random() * 90000) + 10000;
        const years = Math.floor(Math.random() * 5) + 1;
        const rate1 = Math.floor(Math.random() * 11) + 5;
        const rate2 = Math.floor(Math.random() * 11) + 5;
        const type1 = Math.random() > 0.5 ? 'простыми' : 'сложными';
        const type2 = Math.random() > 0.5 ? 'простыми' : 'сложными';
        
        let sum1 = type1 === 'простыми' ? 
            principal * (1 + rate1 / 100 * years) : 
            principal * Math.pow(1 + rate1 / 100, years);
        
        let sum2 = type2 === 'простыми' ? 
            principal * (1 + rate2 / 100 * years) : 
            principal * Math.pow(1 + rate2 / 100, years);
        
        currentEgeTask = {
            correct: sum1 > sum2 ? '1' : '2',
            question: `Вкладчик хочет внести ${formatNumber(principal)} руб. на ${years} ${getYearWord(years)}. Выберите более выгодный вариант:
                Вариант 1: ${rate1}% годовых с ${type1} процентами.
                Вариант 2: ${rate2}% годовых с ${type2} процентами.
                Введите номер варианта (1 или 2):`
        };
    } else if (taskType === 2) {
        const principal = Math.floor(Math.random() * 900000) + 100000;
        const rate = Math.floor(Math.random() * 11) + 10;
        const years = Math.floor(Math.random() * 5) + 1;
        const months = years * 12;
        const monthlyRate = rate / 100 / 12;
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1);
        const totalPayment = payment * months;
        
        currentEgeTask = {
            correct: totalPayment - principal,
            question: `Кредит ${formatNumber(principal)} руб. под ${rate}% годовых на ${years} ${getYearWord(years)} с аннуитетными платежами. Какова общая переплата по кредиту?`
        };
    } else {
        const principal = Math.floor(Math.random() * 400000) + 100000;
        const multiplier = Math.random() * 1.2 + 1.3;
        const target = Math.round(principal * multiplier);
        const rate = Math.floor(Math.random() * 11) + 5;
        const t = Math.log(target / principal) / Math.log(1 + rate / 100);
        
        currentEgeTask = {
            correct: Math.ceil(t).toString(),
            question: `Вклад ${formatNumber(principal)} руб. под ${rate}% годовых с ежегодной капитализацией. Через сколько лет сумма
