// chiedi all’utente la sua email
// richiamo input email e mio bottone
const userEmail = document.querySelector("input");

const myButton = document.querySelector(".mybutton");

// creo array con lista email degli utenti con accesso
const userAccesso = ["simo.martinucci3@gmail.com", "mario.rossi@gmail.com", "jane.doe@gmail.com", "john.doe@gmail.com", "maria.bianchi@gmail.com"];

// aggiungo funzione click a bottone
myButton.addEventListener("click",
    function() {

        // recupero valore email utente
        let userEmailValue = userEmail.value;
        // richiamo div in cui inserire la risposta
        let myDiv = document.getElementById("answer");
        let answer = false;
        let messaggio;
        
        // faccio partire ciclo
        for (let i = 0; i < userAccesso.length; i++) {
            // inserisco condizioni
            if(userEmailValue === userAccesso[i]) {
                answer = true;
            }   
        }

        // decido il messaggio
        if(answer === true) {
            messaggio = "Complimenti, hai i requisiti per l'accesso";
        }else{
            messaggio = "Siamo spiacenti, l'indirizzo email non soddisfa i requisiti per l'accesso";
        }

        // metto la risposta all'interno del div
        myDiv.append(messaggio);
    }
)