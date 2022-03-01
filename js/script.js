
/*
-------------------------------------------------------
Palindroma
------------------------------------------------------- 
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma 
*/

const palindromoInput = document.getElementById('palindromo-input');
const palindromoBtn = document.getElementById('palindromo-btn');
const palindromoResult = document.getElementById('palindromo-risultato');

function palindromoFase1(parola) {

    let parolaReversed = parola.split('').reverse().join('');
    let validator;

    if(parola === parolaReversed) {
        validator = true
    } else {
        validator = false
    }
    return validator
};

palindromoBtn.addEventListener('click', function(){
    let textInputPalindromo = palindromoFase1(palindromoInput.value)
    if(textInputPalindromo) {
        palindromoResult.innerHTML = 'La parola è palindroma'
    } else {
        palindromoResult.innerHTML = 'La parola non è palindroma'
    }
})


/*
-------------------------------------------------------
Pari o dispari
------------------------------------------------------- 
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto. 
*/

function random(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min) ) + min;
    return numeroRandom;
};