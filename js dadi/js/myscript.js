// genero un numero random per l'utente
let numUser = Math.floor(Math.random()*6) + 1;

console.log(numUser);

// genero un numero random per il pc
let numPc = Math.floor(Math.random()*6) + 1;

console.log(numPc);

// richiamo div riferentesi all'user
const myDivUser = document.getElementById("dice-user");

// richiamo div riferentesi al pc
const myDivPc = document.getElementById("dice-pc");

// inserisco i numeri generati all'interno dei propri div
myDivUser.append(numUser);

myDivPc.append(numPc);

//creo variabile messaggio
let messaggio;

// creo condizione per vittoria, pareggio, sconfitta
if(numUser > numPc) {
    messaggio = "Complimenti, HAI VINTO"
}else if(numUser === numPc) {
    messaggio = "PAREGGIO, ritenta di nuovo!"
}else if(numUser < numPc){
    messaggio = "Mi spiace, HAI PERSO"
}

// richiamo div risultato
const risultato = document.getElementById("result");

// inserisco messaggio nel risultato
risultato.append(messaggio);