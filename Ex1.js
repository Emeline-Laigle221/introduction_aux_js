let celsus = 30

let fahrenheit = celsus * 9/5 + 32

let maDiv = document.getElementById("Exercice_1") //recupère l'element div de la page web 

maDiv.textContent = celsus// change le contenu du texte de la div de la page web 
maDiv.textContent += " "
maDiv.textContent += fahrenheit

//Exo2

let largeur =10
let longeur = 10

let maDiv2= document.getElementById("Exercice_2")
maDiv2.textContent= largeur*longeur

//Ex3
let prenom = "Vladimir"
let nom = "Rekaï"

let chaine = prenom + nom

let div3 = document.getElementById("Exercice_3")
div3.textContent = chaine

//Ex4

let montantHT= 30
const TVA=20
let montantTTC= montantHT + TVA*montantHT*0.01
let HT = document.getElementById("montant_ht")
let tva= document.getElementById("tva")
let TTC=document.getElementById("montant_ttc")
HT.textContent= montantHT
tva.textContent=TVA
TTC.textContent=montantTTC

//Ex5

let div5 = document.getElementById("Exercice_5")
div5.textContent = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)

//Ex6

let poids= 49
let taille=1.69
let imc= poids/(taille*taille)
imc=imc.toFixed(2) //permet de mettre deux chiffres apres a virgule
let div6=document.getElementById("Exercice_6")
div6.textContent=imc

//Ex7
let div7=document.getElementById("Exercice_7")

const min = 40
let total =12

if(total >= min){
    div7.textContent= "Livraison Gratuite"
}else{
    div7.textContent= "Frais de livraison : X euros"
}

//EX8

let nbBinaire="101"
let decimal= parseInt(nbBinaire,2)

let div8=document.getElementById("Exercice_8")
div8.textContent= decimal





