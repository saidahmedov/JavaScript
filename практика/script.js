'use strict';
let money,
	start = function() {
		do {
			money = prompt('Ваш ежемесячный доход?', 100000);
		}
		while(isNaN(money) || money === '' || money === null);
	}
	start();
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
	budget: money,
	budgetDay: 0,
	budgetMoth: 0,
	expensesMonth: 0,
	asking: function() {
		let itemIncome,cashIncome;
		
		if (confirm('Есть ли у вас дополнительный источник заработка?')) {
			do {
				 itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
			}
			while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null); 
			do { 
				cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
			}
			while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
			appData.income[itemIncome] = cashIncome;
		}
		let addExpenses = prompt('Перечислите возможные расходы через запятую.', 'Колледж, Кварплата');
			appData.addExpenses = addExpenses.toLowerCase().split(',');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let costs,howMuch;
			for (let i = 0; i < 2; i++){
				if (i === 0) {
					costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Колледж");
				}else if (i === 1) {
					costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Кварплата");
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
		console.log('Все расходы за месяц: ',appData.expensesMonth);
	},
	getBudget: function (){
		 appData.budgetMonth = appData.budget - appData.expensesMonth;
		 appData.budgetDay = Math.floor(appData.budgetMoth / 30);

	},
	getTargetMonth: function(){
		appData.period = Math.floor(appData.mission / appData.budgetMonth);
	},
	getStatusIncome: function (){
		if (appData.period < 0) {
			console.log('Цель не будет достигнута');
		}else {
			console.log('Цель будет достигнута за:', Math.floor(appData.period), 'месяца');
		}
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
				percentDeposit = prompt('Какой годовой процент?', '10');
			}
			while(!isNaN(percentDeposit) || percentDeposit === '' || percentDeposit === null); 
			do { 
				moneyDeposit = +prompt('Какая сумма заложена?', 10000);
			}
			while(isNaN(moneyDeposit) || moneyDeposit === '' || moneyDeposit === null);	
		}

	},
	calcSavedMoney: function () {
			return appData.budgetMonth * appData.period;
	}	   
};
 	appData.asking();
 	appData.getExpensesMonth();
 	appData.getBudget();
 	appData.getTargetMonth();
 	appData.getStatusIncome();
 	appData.getInfoDeposit();

 	console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

 	 // for (let i in appData){
			// 	console.log('программа включает данные: ' + i + ' - ' + appData[i]);
		 //   };
		   
	
	
	


  


  