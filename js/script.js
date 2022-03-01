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

const palindromoInput = document.getElementById('palindromo-input');
const palindromoBtn = document.getElementById('palindromo-btn');
const palindromoResult = document.getElementById('palindromo-risultato');



function controlloPalindromo(parola) {
    parola = parola.toLowerCase();
    let lunghezzaParola= parola.length;

    for (let i = 0; i < lunghezzaParola/2; i++){ /* Spezzo la parola a metà */
        let reverseParola = parola[lunghezzaParola - 1 - i] /* inverto la parola per confrontarla dopo */

        if (parola[i] !== reverseParola) { /* se la lettera della parola non è identica al suo opposto, ritorna false */
            return false;
        }
    }
    return true; /* Se passa il test dell'if sopra*/
}


palindromoBtn.addEventListener ('click', function(){
    

    if () {
        palindromoResult.innerHTML = 'La parola è palindroma';
    } else {
        palindromoResult.innerHTML = 'La parola non è palindroma';
    }
});