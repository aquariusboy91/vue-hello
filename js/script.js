// Descrizione:
// Stampare a schermo un messaggio
//  all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, 
// presa anch’essa da un data.

var app = new Vue({
    el: '#app',
    data: {
      message: 'Happy Christmas!',
      image: 'natale.jfif',
      text: 'Buon Natale',
      image_presents: 'presents.jfif',
      number : 1
    }
  })

//   Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un
//  testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che
//  identifica il numero di prodotti desiderati, i 
//  dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.