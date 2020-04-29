let total = 0;
let input;

do {
    input =prompt('enter number');
    total += Number(input);
} while (input !== null);
    
if (Number.isNaN(Number(total))) {
    alert('нужно вводить только цифры')
}
else {
    alert(`Общая сумма чисел равна ${total}`)
}