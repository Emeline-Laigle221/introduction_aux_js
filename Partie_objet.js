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
let nombres = [1,2,3,4,5,6,7,8,9,10]
console.log(nombres[0])
console.log(nombres[9])
console.log(nombres.length)

//Ex6

let nombres10=[10,20,30,40,50,60,70,80,90,100];
console.table(nombres10);
nombres10.reverse();
console.table(nombres10);

//Ex7
let numbers =[2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
console.table(numbers)
numbers.sort()
console.table(numbers)

//EX8

numbers.push(11)
console.table(numbers)
numbers.unshift(0)
console.table(numbers)
numbers.pop()
console.table(numbers)
