// Nous allons ciblier le conteneur de la recette
let container = document.getElementById(`fleur-container`);

let counter = 0;

// Boucle pour injecter les recettes dans le container

function filtrerCouleur() {
    const couleur = document.getElementById("couleur").value;
    fleurs.forEach(fleur => {
        if (couleur === "") {
            counter ++;
            const carte = document.createElement(`div`);
            carte.classList.add(`carte`);
            carte.innerHTML = `<h2>${fleur.nom}</h2>
            <h4>${fleur.color ? fleur.color : "Multicouleur"}</h4>
            <a href="${fleur.lien}"><img src="${fleur.image}" alt="${fleur.nom}" title="${fleur.nom}" ${counter>3 && counter<7 ? " class=\"ronde\"" : ""}/></a>
            <p>${fleur.description.slice(0, 40)}...</p>`;
            container.appendChild(carte);
        } else if (couleur === fleur.color) {
            counter ++;
            const carte = document.createElement(`div`);
            carte.classList.add(`carte`);
            carte.innerHTML = `<h2>${fleur.nom}</h2>
            <h4>${fleur.color ? fleur.color : "Multicouleur"}</h4>
            <a href="${fleur.lien}"><img src="${fleur.image}" alt="${fleur.nom}" title="${fleur.nom}" ${counter>3 && counter<7 ? " class=\"ronde\"" : ""}/></a>
            <p>${fleur.description.slice(0, 40)}...</p>`;
            container.appendChild(carte);
        }
        
    });
    const inputCouleur = document.getElementById("couleur");
    const boutonColor = document.getElementById("boutonCouleur");
    inputCouleur.disabled = true;
    boutonColor.disabled = true;
    
}

/* // Exercise 22 Avril : Montrer des muguets si la condicion est vrai

let fecha = prompt(`Quel jour sommes-nous aujourd'hui ?`);

let containerMuguet = document.getElementById(`feteTravail`);
console.log(containerMuguet);
if (fecha === `1 Mai`) {
    fleurs.forEach(fleur => {
        if (fleur.nom === `Muguet`) {
            const muguetMai = document.createElement(`div`);
            muguetMai.classList.add(`trabajo`);
            muguetMai.innerHTML = `<h2>Muguet de Mai</h2>
            <a href="${fleur.lien}"><img src="${fleur.image}" alt="${fleur.nom}" title="${fleur.nom}"/></a>
            <p>${fleur.description.slice(0, 40)}...</p>`;
            
            containerMuguet.appendChild(muguetMai);
        }
    });
}

*/

// muguetMai.classList.remove(`hidden`);
/*

#feteTravail .trabajo .hidden{
    display: none;
}

*/



let fleurs2 = [
    {
        nom: `Rose rouge`,
        couleur: `Rouge`,
        quantite: 5
    },
    {
        nom: `Anémone`,
        couleur: "Violet",
        quantite: 10
    },
    {
        nom: `Jasmin`,
        couleur: "Blanche",
        quantite: 20
    },
    {
        nom: `Tulipe`,
        couleur: "Bleu",
        quantite: 15 
    },
    {
        nom: `Hibiscus`,
        couleur: "Rose",
        quantite: 25 
    },
    {
        nom: `Lilas`,
        couleur: "Lila",
        quantite: 10 
    },
    {
        nom: `Hortensia`,
        couleur: "Violet",
        quantite: 15 
    }
];

let divMesFleurs = document.querySelector("#mesFleurs");

let paragrFleur = document.createElement(`p`);

fleurs2.forEach(element => {
    
    let paragrFleur = document.createElement(`p`);

    paragrFleur.textContent += `Nom de fleur : ${element.nom}, couleur : ${element.couleur}, quantité : ${element.quantite}\n`;
    paragrFleur.textContent += `Nom de fleur : ${element.nom}\n`;

    divMesFleurs.appendChild(paragrFleur);
});