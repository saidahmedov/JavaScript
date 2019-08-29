let mission = 350000;
console.log(mission);

let money = +prompt('Ваш ежемесячный доход?');
console.log(money);
console.log(typeof money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
console.log([addExpenses]);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
console.log(typeof deposit);

let income = '150000';
console.log(typeof income);

let costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(costs);
let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(costs2);
let howMuchCost = +prompt('Во сколько это обойдется?');
console.log(howMuchCost);
let howMuchCost2 = +prompt('Во сколько это обойдется?');
console.log(howMuchCost2);
let budgetMonth = money - howMuchCost - howMuchCost2;
console.log(budgetMonth);
console.log(Math.ceil(mission / budgetMonth ));
console.log(Math.floor(budgetMonth / 30));

let budgetDay = Math.floor(budgetMonth / 30);
	if (budgetDay >= 800) {
		console.log('Высокий уровень дохода');
	}
	else if ((budgetDay >= 300) && (budgetDay < 800)){
		console.log('Средний уровень дохода');
	}
	else if ((budgetDay >= 0) && (budgetDay < 300)) {
		console.log('Низкий уровень дохода');
	} 
	else if (budgetDay <= 0)  {
		console.log('Что то пошло не так');
	}
	