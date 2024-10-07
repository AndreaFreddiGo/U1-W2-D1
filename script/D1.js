/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let JS =
  'JavaScript prevede 5 diversi tipi di datatype da associare alle varibili o alle costanti: numerici (quindi numeri come 1, 2 , 3, 4), stringhe (quindi parole e/o nomi come Pippo e Pluto), boleani (quindi condizioni che possono essere VERE o FALSE), undefined (nel caso in cui non si è ancora deciso che valore assegnare alla variabile o costante) o null (nel caso in cui si sia volutamente deciso di lasciare la variabile VUOTA)'
console.log(JS)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Andrea'
console.log('Il mio nome è', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
let sum = number1 + number2
console.log('Il risultato della somma di number1 e number2 è', sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log('Il valore di x è', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Freddi'
console.log('Il mio cognome è', myName)
const NAME = 'Andrea'
console.log('Il mio nome è', NAME)
// NAME = 'Pippo' // in console viene segnato errore alla riga 48 perchè ho provato ad assegnare nuovo valore ad una costante//
// quindi provando a dire che "il mio nome è Pippo" in console mi verrà restituito un valore boleano "FALSE" //
console.log('Mi chiamo Pippo è', NAME === 'Pippo')

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log('Il risultato della sottrazione (4 - x) è pari a', 4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log('La condizione "name1 e name2 sono uguali" è', name1 === name2)

// per fare diventare true serve che entrambe le stringhe siano lowercase (quindi senza più la J in maiuscolo) //
// per poterlo fare si applica toLowerCase() //

console.log(
  'Applicando "toLowerCase()" la condizione "name1 e name2 sono uguali" diventa',
  name1 === name2.toLowerCase()
)
