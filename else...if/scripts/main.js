const btnHelp = document.querySelector('.help');
const btnNotHelp = document.querySelector('.notHelp');
const text = document.querySelector('.result')
let shoppingDone = false;
let allowance = 0;

function shopping(){
    if (shoppingDone === true){
        allowance = 10;
        text.textContent = "Thanks for help!" + " Your allowance is: U$ " + allowance + ",00";
    }else if(shoppingDone === false){
        allowance = 5;
        text.textContent = "No helping, no extra money for you!" + " Your allowance is: U$ " + allowance + ",00";
    }
}

function btnClickHelp(){
    shoppingDone = true;
    shopping();
}

function btnClickNotHelp(){
    shoppingDone = false;
    shopping();
}

btnHelp.addEventListener('click', btnClickHelp);
btnNotHelp.addEventListener('click', btnClickNotHelp);