const credits = 23580;
const pricePerDroid = 3000;
const input = prompt('How many droids you need?');
let totalPrice = input * pricePerDroid;
let massage;

if (input === null){
    massage = 'Отменено пользователем!';
} else if (totalPrice <= credits){
    massage = `Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
} else {
    massage = 'Недостаточно средств на счету!';
}

console.log(massage);