document.addEventListener("DOMContentLoaded", function(){
    function message(){
        alert("This button doesnt create a message! Try again with other buttons.");
    }


    function createParagrah(){
        let para = document.createElement('p');
        para.textContent = "You clicked the button!";
        document.body.appendChild(para);        
    }

    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', createParagrah);
    }

});



