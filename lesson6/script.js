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
		appData.period = appData.mission / appData.budgetMonth();
	}

};
 	appData.asking();
	appData.getExpensesMonth();
	appData.getBudget();
		if (appData.period < 0) {
			console.log('Цель не будет достигнута');
		}else {
			console.log('Цель будет достигнута за:', Math.floor(appData.period), 'месяца');
		};
	appData.budgetDay = appData.budgetMonth / 30;
		console.log('Ежедневный доход: ', Math.floor(appData.budgetDay));
	appData.getStatusIncome = function (){
	if (budgetDay >= 800){
		return('Высокий уровень дохода');
	}else if ((budgetDay >= 300) && (budgetDay < 800)){
	 return('Средний уровень дохода');
	}else if ((budgetDay >= 0) && (budgetDay < 300)){
	 return('Низкий уровень дохода');
	}else {
	 return('Что то пошло не так');
	}
   };
   for (let i in appData){
		console.log('программа включает данные: ' + i + ' - ' + appData[i]);
   }

  


  