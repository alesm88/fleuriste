let fleurs = [
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

fleurs.forEach(element => {
    
    let paragrFleur = document.createElement(`p`);

    paragrFleur.textContent += `Nom de fleur : ${element.nom}, couleur : ${element.couleur}, quantité : ${element.quantite}\n`;
    paragrFleur.textContent += `Nom de fleur : ${element.nom}\n`;

    divMesFleurs.appendChild(paragrFleur);
});


