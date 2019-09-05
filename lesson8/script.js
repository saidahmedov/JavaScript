	'use strict';
let button = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
	incomePlus = btnPlus[0],
	expensesPlus = btnPlus[1],
    checkBox = document.querySelector('deposit-check'),
    entryField = document.querySelectorAll('additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('.budget_month-value'),
	budgetDayValue = document.getElementsByClassName('.budget_day-value'),
	expensesMonthValue = document.getElementsByClassName('.expenses_month-value'),
	additionalIncomeValue = document.getElementsByClassName('.additional_income-value'),
	additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value'),
	incomePeriodValue = document.getElementsByClassName('.income_period-value'),
	targetMonthValue = document.getElementsByClassName('.target_month-value'),
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
 	incomeAmount = document.querySelector('.income-amount'),
 	expensesTitle = document.querySelector('.expenses-title'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select');



let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 350000,
	period: 3,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	start: function() {

			if (salaryAmount.value === '') {
				alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
				return;
			}

			appData.budget = salaryAmount.value;
			appData.getExpenses();
			// appData.asking();
		 	appData.getExpensesMonth();
		 	appData.getBudget();
		 	appData.getAddExpenses();
		 	appData.showResult();
	},
	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
	},
	addExpensesBlock: function () {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus,);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	getExpenses: function () {
		expensesItems.forEach(function(item) {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}

		});
	},
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItem.value.split(',');
		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	asking: function() {
		let itemIncome,cashIncome;
		
		if (confirm('Есть ли у вас дополнительный источник заработка?')) {
			do {
				 itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
			}
			while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null); 
			do { 
				cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
			}
			while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
			appData.income[itemIncome] = cashIncome;
		}
		console.log(appData.income);
		let addExpenses = prompt('Перечислите возможные расходы через запятую.', 'колледж, кварплата');
			appData.addExpenses = addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let costs,howMuch;
			for (let i = 0; i < 2; i++){
				if (i === 0) {
					do {
						costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Колледж");
					}
					while(!isNaN(costs) || costs === '' || costs === null);
					
				}else if (i === 1) {
					do{
						costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Кварплата");
					}
					while(!isNaN(costs) || costs === '' || costs === null);
				}
					howMuch = prompt('Во сколько это обойдется?', 13500);
				while (isNaN(howMuch) || howMuch === '' || howMuch === null){
					howMuch = prompt('Во сколько это обойдется?', 13500);
				}
				appData.expenses[costs] = howMuch;

			};
			console.log(appData.expenses);
	},
	getExpensesMonth: function() {
		for (let key in appData.expenses){
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	getBudget: function (){
		 appData.budgetMonth = appData.budget - appData.expensesMonth;
		 appData.budgetDay = Math.floor(appData.budgetMoth / 30);

	},
	getTargetMonth: function(){
		appData.period = Math.floor(appData.mission / appData.budgetMonth);
	},
	getStatusIncome: function (){
		// if (appData.period < 0) {
		// 	console.log('Цель не будет достигнута');
		// }else {
		// 	console.log('Цель будет достигнута за:', Math.floor(appData.period), 'месяца');
		// }
			appData.budgetDay = Math.floor(appData.budgetMonth / 30);
		console.log('Ежедневный доход: ', Math.floor(appData.budgetDay));
		if (appData.budgetDay >= 800){
			return('Высокий уровень дохода');
		}else if ((appData.budgetDay >= 300) && (appData.budgetDay < 800)){
		 return('Средний уровень дохода');
		}else if ((appData.budgetDay >= 0) && (appData.budgetDay < 300)){
		 return('Низкий уровень дохода');
		}else {
		 return('Что то пошло не так');
		}
	   } ,
	getInfoDeposit: function () {
		let percentDeposit, moneyDeposit;
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt('Какой годовой процент?', '10');
			}
			while(isNaN(appData.percentDeposit) || appData.percentDeposit.lenght === '' || appData.percentDeposit === null); 
			do { 
				appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
			}
			while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);	
		}

	},
	calcSavedMoney: function () {
			return appData.budgetMonth * appData.period;
	}	   
};
	start.addEventListener('click', appData.start);
	expensesPlus.addEventListener('click', appData.addExpensesBlock);
	
	


  


  