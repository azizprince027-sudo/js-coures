// let a = prompt("entre un nombre pour verifier ta sexualiter");

// if(a % 2=== 0)  {
// alert ("woubie");

// }
// else {
//     alert("pd chien la");
// }
//pour comprendre la commande return
// function direBonjour() {
//     console.log("Bonjour !"); 
// }

// let cadeau = direBonjour(); 
// console.log(cadeau); 

// function donnerBonjour() {
//     return "Bonjour !"; 
// }

// let cadeau = donnerBonjour(); 
// console.log(cadeau); 

// fonction calcul qui  affiche le resultat

// function calcul(a, b) {
//     return a + b;

// }

// let resultat = calcul(7, 9);
// console.log(resultat);

// function faireSandwich() {
//    return "mange"
// }

// let donne = faireSandwich();

// function demanderAge() {
//     let age = prompt("saisissez votre age");
//     alert("vous avez "  + age  +  "ans " );
// }demanderAge();

// function prevoireAge() {
//     let age = prompt("saisissez votre age");//vue que c chaine de caractere ca concane tout
//   age = parseInt (age); //sert a convertir chaine en nombre
//     alert("vous aurez "  + (age +1)  +  "ans " );
// }

// (function () {console.log ("bisous")})(); auto exeecuter
  
// let functionanonyme =function() {
//     console.log("bious");

// }
// functionanonyme ();


// let  age =  prompt ("saisire ton age");

// if (age < 18 ) {
//     alert("vous n est pas majeure");
// }

// else if (age >= 21 ) {
//     alert("vous etes majeure partout a vous les casino");
// }
// else {
//     alert("vous ete majeure en france");
// }

// let x = 3 

// if (x>3) (
// console.log ("x est grand")

// )

// else {
// console.log("x est petit")

// }

// condition tener :  [condition] ? [true] : [false];

// let x=5  
// x>3 ? console.log("x est grand") : console.log("x est petit"); c comme ca  on fait une condition tener

// let i = 1;

// while (i < 5) {

// console.log("ligne :" + i);
// 
// i++;
// } sans le i ++ on a une boucle infinie



// do {
// var prnom = prompt("ton prenom");
// } while(prnom == ""  || prnom == null)

// alert ( "bonjour  " + prnom); on a utiliser  une var globale

// fonction recursive .  

// function timer(secondes) { //secondes vaut 10
//    if (secondes > 0) {
//     console.log(secondes)
//     timer(secondes -1)
    
//    } else {
//     console.log(secondes )
//    }
// }

// timer(100);

// les tableau

// let tableau [elements];
//pour acceder au elements dun tablau
//  on utilises les  chiffres  0,1,2 ... appelez index
//pour les tableau simples  console .log(le nom du tableau[le nombre])


// tableau 2 dimention

// let tableau = [

//         ["elements1"],
//         ["elements"]
//     ];
// pour  acceder aux elements des 2D on fait 
// console.log(nom du tableau si ya 2 elements on fait [la ligne(elements)] [le nombres]0 1 2 ... exemple  elemt1 [0][2] )


// let mon tableau asso = {    tableau associatifes
// "prenom" : "mark",
// "nom"    : "zuk",
// "poste"  : "PDG"


// }; 

// pour les tableau asso c est pareille mais on utilises ["" a la places des nombres ]
// on ecrit a l interieure des apostrophe l enom qui contioen la valeur  qu on veut afficher 
// exemple ["poste"]


// let menu = ["Accueil", "Contact", "Profil"];

// // 1. On remplace "Contact" (index 1) par "Boutique"
// // On part de l'index 1, on supprime 1 élément, on insère "Boutique"
// menu.splice(1, 1, "Boutique"); 

// // 2. On ajoute "Contact" à la fin du tableau
// menu.push("Contact");

// console.log(menu); // Affiche : ["Accueil", "Boutique", "Profil", "Contact"]

// boucles for in 

//for(const fruit in panier){
//}

// function direBonjour() {
//     return "c est comment"
    
// }

// let salut = direBonjour();
// console.log(salut)
// console.log(direBonjour())


// let compteur = 0;
// function incrementer() {
//     compteur = compteur + 1;
//     return compteur;
// }

// let score = incrementer(); // Ici, compteur devient 1. 'score' vaut 1.

// console.log(score);        // Affiche 1. (On regarde juste la boîte)
// console.log(score);        // Affiche 1. (On regarde encore la boîte)

// console.log(incrementer()); // Affiche 2 ! (On a relancé la fonction, donc le compteur a bougé)
// console.log(incrementer()); // Affiche 3 ! (On l'a encore relancée)

// boucle for  of

// let panier = ["Atiéké", "Alloco", "Poisson"];

// for (let nourriture of panier) {
//   console.log("Je mange du " + nourriture);
// }

// Ce qui se passe dans la machine :

// Tour 1 : nourriture devient "Atiéké". Affiche : Je mange du Atiéké.

// Tour 2 : nourriture devient "Alloco". Affiche : Je mange du Alloco.

// Tour 3 : nourriture devient "Poisson". Affiche : Je mange du Poisson.

// Fin : Plus rien dans la liste ? La boucle s'arrête toute seule.

// les objet 

// let chien = {
// race : "baoulé",
// poil : "court",
// aboyer: function (){
//     console.log("ouaf ouaf")
// }

// }
// chien.aboyer();

// pour les fonction annonyme  c est ca on fait


// const chien = {
//     race:"baoulé",
//     poil: "court",
//     aboyer: function (){
//         console.log("waf waf");
//     }
// }
// nb quand on  ajoute une fonction annonyme on fait  pas console .log
// mais l objet. la fonction

// chien.aboyer();

// pour faire avec fonction fleché

const chien = {
    race:"baoulé",
    poil: "court",
    aboyer: () => console.log("waf waf")
}

chien.aboyer();
