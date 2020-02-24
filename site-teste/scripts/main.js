var myHeading = document.querySelector('h1');
myHeading.textContent = "Javascript funcionou!";

var myParagrah = document.querySelector('p');

//Mudando imagem com um clique
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc == "/home/fabio/Documentos/Projetos-Web/Prática_2020/site-teste/imagens/firefox.png"){
        myImage.setAttribute('src', "/home/fabio/Documentos/Projetos-Web/Prática_2020/site-teste/imagens/Firefox.png");
        alert("Imagem alterada!");
    }else{
        myImage.setAttribute('src', "/home/fabio/Documentos/Projetos-Web/Prática_2020/site-teste/imagens/firefox.png");
        alert("Imagem alterada!");
    }
}

myParagrah.onclick = function(){
    myParagrah.textContent = "Apenas uma mudança de visão";
}

var myButton = document.querySelector('button');

function setUserName(){
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "O Mozilla é muito legal, " + myName;
}

if(!localStorage.getItem('name')){
    setUserName();

}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla é muito legal, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}