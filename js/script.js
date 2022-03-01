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

const parolaInputUtente = prompt('Scrivi una parola e ti dirò se è palindroma:');

/* 
-   Creo una funzione di controllo della parola 
-   Creo una variabile "lunghezzaParola" per calcolare le singole posizioni delle lettere.
-   Creo un ciclo che come condizione limite avrà la lunghezza della parola totale, divisa per 2, 
ciò mi serve per controllare fino alla metà della parola.
(Esempio: Nella parola "anna" mi basta controllare metà parola an- e confrontarla con l'altra metà -na).
-   Creo condizione:   Se la lettera (selezionata con -charAt-) in posizione "i" NON è uguale alla lettera in posizione speculare, allora ritorna falso.
-                      Se invece è uguale ritorna vero.
   
*/
function controlloPalindromo (parola) {
    let lunghezzaParola = parola.lenght;
    for (let i=0; i < lunghezzaParola / 2; i++){
        if (parola.charAt(i) !== parola.charAt(lunghezzaParola - 1 - i)){
            return false;
        }
    }
    return true;
}
