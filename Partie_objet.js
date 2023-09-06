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

const personnes =[{prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},{prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},{prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}];
/*console.log(personnes[0])//affiche juste object puis l'objet
console.table(personnes[1])//affiche l'objet sous forme de tableaux
console.table(personnes[2])*/

//Ex3
personnes.push({prenom : "Marc", nom: "Doe", age: 32, ville : "Marseille"}) 
/*console.log(personnes)
console.table(personnes)*/

//Ex4

personnes[0].prenom="Jean"
personnes[0].nom="philippe"
personnes[0].age="80"
personnes[0].ville="caen"

personnes.splice(1,1)
console.log(personnes)
console.table(personnes)
//Ex5

