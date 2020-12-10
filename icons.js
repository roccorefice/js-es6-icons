$(document).ready(function () {
    /////////////////////////
    ///// MILLESTONE 1 //////
    /////////////////////////

    // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
    class icone {
        constructor (name, prefix, type, family){
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    }

    const Icone = [
        new icone ("cat", "fas", "fa-cat", "animals"),
        new icone ("dog", "fas", "fa-dog", "animals"),
        new icone ("crow", "fas", "fa-crow", "animals"),
        new icone ("horse", "fas", "fa-horse", "animals"),
        new icone ("fish", "fas", "fa-fish", "animals"),
        new icone ("hippo", "fas", "fa-hippo", "animals"),
        new icone ("carrot", "fas", "fa-carrot", "vegetables"),
        new icone ("apple", "fas", "fa-apple-alt", "vegetables"),
        new icone ("lemon", "fas", "fa-lemon", "vegetables"),
        new icone ("seedling", "fas", "fa-seedling", "vegetables"),
        new icone ("astronaut", "fas", "fa-user-astronaut", "users"),
        new icone ("swimmer", "fas", "fa-swimmer", "users"),
        new icone ("nurse", "fas", "fa-user-nurse", "users"),
        new icone ("ninja", "fas", "fa-user-ninja", "users"),
    ];

    // Selezioniamo il container icons
    const container = document.getElementById('icons');

    //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
    Icone.forEach(element => {
        const markup = `
        <div>
            <i class="fas ${element.type}" style="color:blue"></i>
            <div class="title">${element.name}</div>
        </div>
        `;
        container.innerHTML += markup;
        // console.log(markup);
        // console.log(container);
    });
  
    /* ---- FUNCTIONS ----*/
    // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
    // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
    // tip: il template literal ci puo aiutare con il markup



    /////////////////////////
    ///// MILLESTONE 2 //////
    /////////////////////////

    // Qui le icone che abbiamo definito nella milestone 1

    // definiamo dei colori per le icone (blue, orange, purple)


    //aggiungiamo dei colori usando una funzione


    //inseriamo le icone colorate nel container




    /* ---- FUNCTIONS ----*/
    //1. Funzione milestone 1


    //2. funzione per assegnare un colore ad un icona
    // tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


    //3. funzione per ottenere da un array
    // tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
});