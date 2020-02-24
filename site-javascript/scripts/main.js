const first  = document.querySelector('p');
const second = document.querySelector('p');

first.addEventListener('click', updateName);
second.addEventListener('mouseout', byeMessage);

function updateName(){
    let name = prompt('Enter a new name');
    first.textContent = 'Player 1: ' + name;

}

function byeMessage(){
    alert("Click on name to change it.");

}


