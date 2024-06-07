// chiedi all’utente la sua email
// richiamo input email e mio bottone
const userEmail = document.querySelector("input");

const myButton = document.querySelector(".mybutton");

// creo array con lista email degli utenti con accesso
const userAccesso = ["simo.martinucci3@gmail.com", "mario.rossi@gmail.com", "jane.doe@gmail.com", "john.doe@gmail.com", "maria.bianchi@gmail.com"];

// aggiungo funzione click a bottone
myButton.addEventListener("click",
    function() {

        let messaggio;
        let myDiv = document.getElementById("answer");
        let answer;
        
        // faccio partire ciclo
        for (let i = 0; i < userAccesso.length; i++) {
            // recupero valore email utente
            let userEmailValue = userEmail.value;
        
            // inserisco condizioni
            if(userEmailValue === userAccesso[i]) {
                messaggio = "Può entrare";
                answer = "Complimenti, hai i requisiti per l'accesso";
            }else {
                messaggio = "Non può entrare"
                answer = "Siamo spiacenti, l'indirizzo email non soddisfa i requisiti per l'accesso";
            }

            // metto la risposta all'interno del div
            myDiv.append(answer);

            console.log(userEmailValue, userAccesso[i], messaggio);        
        }
        
    }
)