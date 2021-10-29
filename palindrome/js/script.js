// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

//richiesta di una parola
const parola = prompt("Inserire una parola")
console.log("la parola iniziale è: " + parola);

//stampa del risultato
palindrome(parola);

//prova con 2 parole
const parola2 = prompt("Inserire una parola")
console.log("la parola iniziale è: " + parola2);
palindrome(parola2);



//capire se è palindroma
//funzione
function palindrome(text){
    //input del div
    const output = document.getElementById("text");
    //variabile di tipo testuale vuota
    let reverse = "";
    //confronto delle parole in modo inverso
    for( let i = text.length - 1; i >= 0; i--){
        //output
        reverse += text.charAt(i);
        console.log("la parola finale è: " + reverse);
    }
    //outup del risultato
    if (reverse == text){
        return output.innerHTML += ` la parola: ${text} è palindroma;`
    }else{
        return output.innerHTML += ` la parola: ${text} non è palindroma;`
    }
    
};

