




/*

Creiamo un layout come da screenshot, ma personalizzabile.
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza (numero casuale tra 1 e 9 incluso)
Prezzo calcolato in base all'esercizio visto in precedenza
Categoria selezionata dall'utente
Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.
Bonus: aggiungete qualche controllo sui dati di input!

*/


var genera = document.getElementById('genera');


// BOTTONE GENERA
genera.addEventListener('click', function(){

    // Prendere nome
    var nome = document.getElementById('nome').value;
    console.log(nome);

    // Prendere km per prezzo
    var km = document.getElementById('km').value;
    
    var prezzo = km * 0.21;
    console.log(prezzo);


    // Prendere eta piu sconto
    var eta = document.getElementById('eta').value;
    console.log(eta);

    if (eta === 'minorenne') {
        var sconto = prezzo - prezzo * 20 / 100;
    } else if ( eta === 'over65') {
        var sconto = prezzo - prezzo * 40 / 100;
    } else {
        var sconto = prezzo;
    }
    console.log(sconto);

    // Carrozza
    var carrozza = Math.round(Math.random() *  8) + 1;
    console.log('carrozza ' + carrozza);

    //Codice CP
    var cp = Math.floor(Math.random() *  100000) + 90000;
    console.log('CP ' + cp);


});