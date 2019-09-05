	'use strict';
let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
	incomePlus = btnPlus[0],
	expensesPlus = btnPlus[1],
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    checkBox = document.querySelector('#deposit-check'),
    budgetMonthValue = document.getElementsByClassName('.budget_month-value'),
	budgetDayValue = document.getElementsByClassName('.budget_day-value'),
	expensesMonthValue = document.getElementsByClassName('.expenses_month-value'),
	accumulatedIncomeValue = document.getElementsByClassName('.accumulated_income-value'),
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
	budget: 0,
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
			};
			appData.budget = salaryAmount.value;
			appData.showResult();
			appData.getExpenses();
			appData.getAddExpenses();
		 	appData.getExpensesMonth();
		 	appData.getBudget();
		 	appData.getAddIncome();	
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
	addExpensesBlock: function () {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	getBudget: function (){
		 appData.budgetMonth = appData.budget - appData.expensesMonth;
		 appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function(){
		appData.period = Math.floor(appData.mission / appData.budgetMonth);
	},
	calcSavedMoney: function () {
			return appData.budgetMonth * appData.period;
	},
	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
	}
};
	start.addEventListener('click', appData.start);
	expensesPlus.addEventListener('click', appData.addExpensesBlock);
	
	


  


  