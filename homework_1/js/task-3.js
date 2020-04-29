const ADMIN_PASSWORD = 'jqueryismyjam';
const input = prompt('Please, enter password');
let massage;

if (input === null){
    massage = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD){
    massage = 'Добро пожаловать!';
} else {
    massage = 'Доступ запрещен, неверный пароль!'
}

console.log(massage);

alert(massage);