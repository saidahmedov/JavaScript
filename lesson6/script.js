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
	mission: 350000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMoth: 0,
	expensesMonth: 0,
	asking: function() {
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
		if (appData.period < 0) {
			console.log('Цель не будет достигнута');
		}else {
			
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

	   }
}; 
 	appData.asking();
 	appData.getExpensesMonth();
 	appData.getBudget();
 	appData.getTargetMonth();
 	appData.getStatusIncome();
	 	console.log('Цель будет достигнута за:', Math.floor(appData.period), 'месяца');
	 	console.log('Все расходы за месяц: ',appData.expensesMonth);
 	 for (let i in appData){
				console.log('программа включает данные: ' + i + ' - ' + appData[i]);
		   };
	
	


  


  