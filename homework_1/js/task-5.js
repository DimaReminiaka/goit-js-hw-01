let cost;
const input = prompt('Enter your country').toLowerCase();

switch (input) { 
    case `китай`:
        cost =  100;
        console.log(`Доставка в ${input} будет стоить ${cost} кредитов.`);
        alert(`Доставка в ${input} будет стоить ${cost} кредитов.`);
    break;

    case `чили`:
        cost =  250;
        console.log(`Доставка в ${input} будет стоить ${cost} кредитов.`);
        alert(`Доставка в ${input} будет стоить ${cost} кредитов.`);
    break;

    case `австралия`:
        cost =  170;
        console.log(`Доставка в ${input} будет стоить ${cost} кредитов.`);
        alert(`Доставка в ${input} будет стоить ${cost} кредитов.`);
    break;

    case `индия`:
        cost =  80;
        console.log(`Доставка в ${input} будет стоить ${cost} кредитов.`);
        alert(`Доставка в ${input} будет стоить ${cost} кредитов.`);
    break;

    case `ямайка`:
        cost =  120;
        console.log(`Доставка в ${input} будет стоить ${cost} кредитов.`);
        alert(`Доставка в ${input} будет стоить ${cost} кредитов.`);
    break;

    default :
    console.log(`Доставка в вашей стране недоступна`);
    alert(`Доставка в вашей стране недоступна`)
}
