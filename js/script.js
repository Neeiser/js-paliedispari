/* ---- Palindroma ---- */

/* - Chiedere all’utente di inserire una parola */
/* - Creare una funzione per capire se la parola inserita è palindroma */

/* ---- Pari e Dispari ---- */

/* - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */
/* - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */
/* - Sommiamo i due numeri */
/* - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */
/* - Dichiariamo chi ha vinto. */



/* Palindroma */

/* 

-   Creo una funzione di controllo della parola 
-   Creo una variabile "lunghezzaParola" per calcolare successivamente le singole posizioni delle lettere.
-   Creo una variabile "smezzatoreNumericoParola" per calcolare matematicamente la metà della lunghezza della parola, 
ciò mi serve per controllare fino alla metà della parola.
(Esempio: Nella parola "anna" mi basta controllare metà parola an- e confrontarla con l'altra metà -na).

-   Creo un ciclo che paragoni la prima lettera con l'ultima (ad ogni iterazione): 
    "letteraParolaAvanti" passa alla successiva e 
    "letteraParolaRitroso" alla precedente.

*/

const palindromoInput = document.getElementById('palindromo-input');
const palindromoBtn = document.getElementById('palindromo-btn');
const palindromoResult = document.getElementById('palindromo-risultato');



function controlloPalindromo(parola) {
    let lunghezzaParola = parola.lenght;
    let smezzatoreNumericoParola = Math.floor(lunghezzaParola/2);
    
    for ( let i = 0; i < smezzatoreNumericoParola; i++){

        let letteraParolaAvanti = parola[i];
        let letteraParolaRitroso = parola[lunghezzaParola - 1 - i];

        if (letteraParolaAvanti !== letteraParolaRitroso){
            return false;
        } else {
            return true;
        }
    }
};


palindromoBtn.addEventListener ('click', function(){

    if (controlloPalindromo(palindromoInput.value)) {
        palindromoResult.innerHTML = 'La parola è palindroma';
    } else {
        palindromoResult.innerHTML = 'La parola non è palindroma';
    }
});