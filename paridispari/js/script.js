// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//utente sceglie pari o dispari
const scelta = prompt("scegli pari o dispari");
console.log("la scelta dell'utente è: " + scelta);


//richiesta numero da USER
const numUser = parseInt(prompt("inserire un numero"));
console.log("numero dell' User: " + numUser);

//Variabile per stampare il numero di USER
const userText = document.getElementById("textuser");
userText.innerHTML = `Il numero scelto da USER è: ${numUser}; e ha scelto: ${scelta}`;

let numPc = pcrandomnum();
let vincitore = pariodispari(numUser,numPc);


//stampa del risultato
const text = document.getElementById("text");
if(scelta == vincitore){
    text.innerHTML = `il vincitore è USER con ${numUser}`;
}else{
    text.innerHTML = `il vincitore è PC con ${numPc}`;
}


//funzioni

//generazione di un numero random dal PC
function pcrandomnum (){
    //richiesta numero da PC
    const numPc = Math.floor(Math.random() * 5) +1;
    console.log("numero del PC: " + numPc);
    
    //Variabile per stampare il numero di PC
    const pcText = document.getElementById("textpc");
    pcText.innerHTML = `Il numero scelto da PC è: ${numPc}`;
    return numPc;
};


//somma dei 2 valori
function pariodispari(num1, num2){
    //somma dei 2 numeri
    let somma = num1 + num2;
    //calcole se la somma è pari o dispari
    let risultato ="";
    if(somma % 2 === 0){
        console.log(`la somma dei numeri fa ${somma}, ed è pari`);
        risultato = "pari";
        console.log("il risultato è: " + risultato);
    }else{
        console.log(`la somma dei numeri fa ${somma}, ed è dispari`);
        risultato = "dispari";
        console.log("il risultato è: " + risultato);
    }
    //stampa della somma dei numeri
    const sommaText = document.getElementById("sommanum");
    sommaText.innerHTML = `La somma dei numeri è: ${somma}`;
    return risultato;
}; 