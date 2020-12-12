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
        new icone ("Cat", "fas", "fa-cat", "animals"),
        new icone ("Dog", "fas", "fa-dog", "animals"),
        new icone ("Crow", "fas", "fa-crow", "animals"),
        new icone ("Horse", "fas", "fa-horse", "animals"),
        new icone ("Fish", "fas", "fa-fish", "animals"),
        new icone ("Hippo", "fas", "fa-hippo", "animals"),
        new icone ("Carrot", "fas", "fa-carrot", "vegetables"),
        new icone ("Apple", "fas", "fa-apple-alt", "vegetables"),
        new icone ("Lemon", "fas", "fa-lemon", "vegetables"),
        new icone ("Seedling", "fas", "fa-seedling", "vegetables"),
        new icone ("Astronaut", "fas", "fa-user-astronaut", "users"),
        new icone ("Swimmer", "fas", "fa-swimmer", "users"),
        new icone ("Nurse", "fas", "fa-user-nurse", "users"),
        new icone ("Ninja", "fas", "fa-user-ninja", "users"),
    ];

    // Selezioniamo il container icons
    const container = document.getElementById('icons');

    /**
     * ## dato un array di icone stampa a schermo le icone
     * @param {element} container 
     * @param {array} arrayIcons 
     */
    function printIcons(container, arrayIcons) {
        arrayIcons.forEach(icon =>{
            const {name, type, family, color} = icon;
            const markup = `
            <div>
                <i class="fas ${type}" style="color:${color}"></i>
                <div class="title">${name}</div>
            </div>
            `;
            container.insertAdjacentHTML('beforeend', markup);
            
        });
    }


    /////////////////////////
    ///// MILLESTONE 2 //////
    /////////////////////////

    // definiamo dei colori per le icone
    const blue = "#0084ff";
    const orange = "#ffa500";
    const red = "#8b0000";

    //aggiungiamo dei colori usando una funzione
    const newIcone = Icone.map (element => {
        if (element.family === "animals"){
            var color = blue;
        } else if (element.family === "vegetables"){
            var color = orange;
        } else {
            var color = red;
        }
        let newObj = {...element, color: color};

        return newObj
    });
    console.log(newIcone);

    printIcons (container, newIcone);

    

    /////////////////////////
    ///// MILLESTONE 3 //////
    /////////////////////////

    const select = $("#type");
    select.append('<option value="animals">Animals</option>');
    select.append('<option value="vegetables">Vegetables</option>');
    select.append('<option value="users">Users</option>');

    const elSelect = document.getElementById("type");
    elSelect.addEventListener('change', event  => {

        let sceltaUtente = $('#type option:selected').val();
        const arrayFilter = newIcone.filter(icona => icona.family == sceltaUtente);

        container.innerHTML = '';
        printIcons(container, arrayFilter);
        console.log(arrayFilter);
    });
});