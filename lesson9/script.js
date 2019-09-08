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
	incomeAmount = document.querySelector('.income-amount'),
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
			
			appData.budget = +salaryAmount.value;
			appData.getExpenses();
			appData.getIncome();
			appData.getExpensesMonth();
			appData.getIncomeMonth();
			appData.getAddExpenses();
			appData.getAddIncome();	
			appData.getBudget();
		 	appData.showResult();	
	},
	showResult: function () {
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(this.getTargetMonth());
		incomePeriodValue.value = this.calcSavedMoney();
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
		for (let key in this.expenses){
			this.expensesMonth += +this.expenses[key];
		}
	},
	getIncomeMonth: function() {
		for (let key in this.income){
			this.incomeMonth += +this.income[key];
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
				periodSelect.disabled = false;
				start.style.display = 'none';
				cancel.style.display = 'block';
			}
		});
	},
	clearForm: function () {
		cancel.style.display = 'none';
		start.style.display = 'block';
		input.forEach(function (item) {
			item.removeAttribute('disabled', 'true');
			item.value = '';
			start.disabled = true;
		});
	},
	getBudget: function (){
		 this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		 this.budgetDay = Math.floor(this.budgetMonth / 30);
	},
	getTargetMonth: function(){
		return targetAmount.value  / this.budgetMonth;
	},
	calcSavedMoney: function () {
			return this.budgetMonth * periodSelect.value;
		},
	};
	start.addEventListener('click', appData.start.bind(appData));
	start.addEventListener('click', appData.inputDisable);
	expensesPlus.addEventListener('click', appData.addExpensesBlock);
	incomePlus.addEventListener('click', appData.addIncomeBlock);
	cancel.addEventListener('click', appData.clearForm);

	periodSelect.addEventListener('change', ()=>{
		periodAmount.innerHTML = periodSelect.value;
		incomePeriodValue.value = periodSelect.value * this.budgetMonth;
	});
	start.disabled = true;
	salaryAmount.addEventListener('input', ()=>{
		if (salaryAmount.value !== ''  && !isNaN(salaryAmount.value)) {
				start.disabled = false;
			}
	});
  


  