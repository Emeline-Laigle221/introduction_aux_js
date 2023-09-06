//Ex1

const personne = {
    prenom: "Vlad",
    nom: "Rekaï",
    age: 18,
    ville : "Louvigny"
}

console.log(personne.nom)
console.log(personne.prenom)
console.log(personne.age)
console.log(personne.ville)

//Ex2

const personne2 =[{prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},{prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},{prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}];
console.log(personne2[0])//affiche juste object puis l'objet
console.table(personne2[1])//affiche l'objet sous forme de tableaux
console.table(personne2[2])
