// // ES-1 Verifica parola palindroma

// Funzione per il controllo delle parole palindrome
function isPalindroma(parola){
    var isWordPalindroma = true;

    var i = 0;

    for (let j = (parola.length - 1); j >= 0 ; j--) {

        if (parola[i] != parola[j]) {
            isWordPalindroma = false;
            break;
        }
        i++;
    }

    if (isWordPalindroma) {
        console.log('La parola inserita è palindroma');
    }
    else{
        console.log('La parola inserita NON è palindroma');
    }
}

// Faccio inserire la parola all'utente
var parola = prompt('Inserisci una parola').toLowerCase();
console.log('Parola inserita: ' + parola);
// Richiamo la funzione
isPalindroma(parola);

// -------------------------------------------------
// ES-2 Scommessa su numero pari/dispari

// Funzione che mi dice se ho indovinato o meno
function scommessaPariDispari (){
    var scommessa = prompt('La somma dei 2 numeri darà un numero pari o dispari?').toLowerCase();
    var num = parseInt(prompt('Inserisci il tuo numero:'));
    var computerNum = Math.floor(Math.random() * 100) + 1;
    var isIndovinato = false;

    console.log('Hai scommesso su: ' + scommessa);
    console.log('Numero inserito: ' + num);
    console.log('Numero computer: ' + computerNum);

    //Richiamo la funzione isPair e assegno il risultato alla var
    var pariDispari = isPair(num, computerNum);

    if (scommessa == pariDispari) {
        console.log('Hai indovinato! La somma è ' + pariDispari + ': ' + (num + computerNum));
    }else{
        console.log('Hai sbagliato! La somma è ' + pariDispari + ': ' + (num + computerNum));
    }
}

// Funzione che verifica se la somma è pari/dispari e torna il verdetto
function isPair(num1, num2){
    var pariDispari;
    
    if ((num1 + num2) % 2 == 0){
        pariDispari = 'pari';
    }else{
        pariDispari = 'dispari';
    }
    return pariDispari;
}

// Richiamo la funzione principale
scommessaPariDispari();