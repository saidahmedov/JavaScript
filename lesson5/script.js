'use strict';
let money,
	mission = 350000,
	income = 'Freelance',
	addExpenses = prompt('Перечислите возможные расходы через запятую.', 'Колледж, Кварплата'),
	deposit = confirm('Есть ли у вас депозит в банке?');
	let start = function() {
		do {
			money = prompt('Ваш ежемесячный доход?', 100000);
		}
		while(isNaN(money) || money === '' || money === null);
	}
	start();
let showTypeOf = function (item){
		console.log(item, typeof(item));
};
	showTypeOf(money);
	showTypeOf(deposit);
	showTypeOf(income);
let costs,
	costs2,
	howMuch;
	let getExpensesMonth = function() {
		let sum = 0;
			for (let i = 0; i < 2; i++) {
				if (i === 0) {
					costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Колледж");
				}
				else if (i === 1) {
					costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Кварплата");
				}
					howMuch = prompt('Во сколько это обойдется?', 13500);
				while (isNaN(howMuch) || howMuch === '' || howMuch === null){
					howMuch = prompt('Во сколько это обойдется?', 13500);
				}
				sum += +howMuch;
			}
		return sum;
	};
	let expensesAmount = getExpensesMonth();
		console.log('Все расходы за месяц: ', expensesAmount);
	let getAccumulatedMonth = function (){
		return money - expensesAmount;
	};
		console.log('Ежемесячный доход со всеми расходами: ', getAccumulatedMonth());
	let getTargetMonth = function(){
		return mission / getAccumulatedMonth();
		
	};
		if (getTargetMonth() < 0) {
			console.log('Цель не будет достигнута');
		}else {
			console.log('Цель будет достигнута за:', Math.floor(getTargetMonth()), 'месяца');
		};
	let budgetDay = getAccumulatedMonth() / 30;
		console.log('Ежедневный доход: ', Math.floor(budgetDay));
let getStatusIncome = function (){
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
   	console.log(getStatusIncome());