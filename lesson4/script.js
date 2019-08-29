let mission = 350000;
console.log(mission);
let income = '150000';

let money = +prompt('Ваш ежемесячный доход?', 100000);
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.', 'Еда, еда и еще раз еда))');
console.log([addExpenses]);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let showTypeOf = function (data) {
	console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);

let costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(costs);
let howMuchCost = +prompt('Во сколько это обойдется?', 3500);
console.log(howMuchCost);
let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(costs2);
let howMuchCost2 = +prompt('Во сколько это обойдется?', 2000);
console.log(howMuchCost2);
let budgetMonth = money - howMuchCost - howMuchCost2;
console.log(budgetMonth);
console.log(Math.ceil(mission / budgetMonth ));
console.log(Math.floor(budgetMonth / 30));

let budgetDay = Math.floor(budgetMonth / 30);

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


	let getExpensesMonth = function() {
		return howMuchCost + howMuchCost2;
	};
		console.log(getExpensesMonth());
	let getAccumulatedMonth = function () {
		return money - getExpensesMonth();
	};
		console.log(getAccumulatedMonth());
	let getTargetMonth = function(){
		return mission / getAccumulatedMonth();
	};
		console.log(Math.floor(getTargetMonth()));