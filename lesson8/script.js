	'use strict';
let start = document.getElementById('start'),
	cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
	incomePlus = btnPlus[0],
	expensesPlus = btnPlus[1],
	input = document.querySelectorAll('input'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    checkBox = document.querySelector('#deposit-check'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	accumulatedIncomeValue = document.getElementsByClassName('accumulated_income-value')[0],
	additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
 	expensesTitle = document.querySelector('.expenses-title'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	incomeItems = document.querySelectorAll('.income-items'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	periodAmount = document.querySelector('.period-amount'),
	incomeItem = document.querySelectorAll('.income-items');
let appData = {
	income: {},
	budget: 0,
	addIncome: [],
	incomeMonth: 0,
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	start: function() {
			if (salaryAmount.value === '') {
				start.disabled = 'true';
				return;
			};
			appData.budget = +salaryAmount.value;
			appData.getExpenses();
			appData.getIncome();
			appData.getExpensesMonth();
			appData.getAddExpenses();
			appData.getAddIncome();	
			appData.getBudget();
		 	appData.showResult();	
	},
	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
		additionalIncomeValue.value = appData.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(appData.getTargetMonth());
		incomePeriodValue.value = appData.calcSavedMoney();
	},
	getIncome: function () {
		incomeItems.forEach(function(item){
				 let itemIncome = item.querySelector('.income-title').value;
				 let cashIncome = item.querySelector('.income-amount').value;
				 if (itemIncome !== '' && cashIncome !== '') {
				 appData.income[itemIncome] = cashIncome;
				 	}
				});
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

	addExpensesBlock: function () {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	addIncomeBlock: function () {
		let cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			incomePlus.style.display = 'none';
		}
	},

	getExpensesMonth: function() {
		for (let key in appData.expenses){
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	getAddExpenses: function () {
		let adExpenses = additionalExpensesItem.value.split(',');
		adExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	getAddIncome: function () {
		additionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push(itemValue);
			}
		});
	},
	inputDisable: function () {
		input.forEach(input =>{
			if (input.disabled === false) {
				input.disabled = true;
				start.style.display = 'none';
				cancel.style.display = 'block';
			}else {
				input.disabled = false;
			}
			
		});
	},
	getBudget: function (){
		 appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		 appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function(){
		return targetAmount.value  / appData.budgetMonth;
	},
	calcSavedMoney: function () {
			return appData.budgetMonth * periodSelect.value;
		},
};
	start.addEventListener('click', appData.start);
	start.addEventListener('click', appData.inputDisable);
	expensesPlus.addEventListener('click', appData.addExpensesBlock);
	incomePlus.addEventListener('click', appData.addIncomeBlock);
	
	


  


  