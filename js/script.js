// Funzione per il controllo delle parole palindrome
function isPalindroma(parola){
    var isWordPalindroma = true;

    for (let i = 0; i < parola.length; i++) {
        for (let j = (parola.length - 1); j >= 0 ; j--) {
            console.log(parola[i] + ' == ' +  parola[j] + ' ?');

            if (parola[i] == parola[j]) {
                console.log('Sì! Sono uguali!');
            } else {
                console.log('No! Sono diverse!');
                isWordPalindroma = false;
                break;
            }
            i++;
        }
        if (!isWordPalindroma) {
            break;
        }
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




