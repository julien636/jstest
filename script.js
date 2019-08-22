console.log("coucou depuis la console");
let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "ceci ets la data3";
  console.log(data3);

} //fin du sous-bloc

// console.log(data1); // "variable let modifiée dans le sous-bloc"
// console.log(data2); // "variable var définie dans le sous-bloc"

// let a = 2, b = 2;
// a++
// console.log(a);
// console.log(b += 2);

// let a = "Bonjour", b = "Monde";
// console.log(a + " " + b);

// c=Number("5");
// console.log(typeof c)

// d=String(5);
// console.log(typeof d);

// let monArray=["Moussaillon", "Corsaire", "Renégat"];
// console.log(monArray.unshift("Renégat"))
// console.log(monArray)

// let a = 3;
//   console.log("Bonjour à tous les "+ a);
//   console.log(a + "3");
  
// let numStudent = 4;
// let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
// console.log(statement);

// const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
// const lesson = contentOfTHP.split("-");
// console.log(lesson[0]); // "Git"
// console.log(lesson[5]); // "JS"
// console.log(lesson[3]);

// let THPSessionNum2 = {
//   numOfMouss: 80,
//   cities: ["Paris", "Lyon", "Montpellier"],
//   successRate: 0.80,
//   sessionMoto: "keep pushing to the top"
// };

// console.log(THPSessionNum2);
// console.log(THPSessionNum2.numOfMouss);

// let attributName = "successRate";
// console.log(THPSessionNum2[attributName]);

// for(var count = 0; count <=5; count++){
//   console.log(`on va compter jusqu'à 5 : ${count}`);
// }

// console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
// //passe count en var pour tester ce que ça donne

// let answer = "";
// while(answer !== "oui") {
//   console.log("alors ?")
//   answer = prompt("Tu kiffes THP ?");
// } 

// console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

// let word = "";
// let letter;

// while (true) {
//     letter = prompt('Tape UNE lettre stp :');

//     if (letter) {
//         word += letter; //on rajoute la lettre saisie à la suite du mot
//         console.log(word);
//     } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
//         break; // On quitte la boucle
//     }
// }
// console.log(`voilà ce que tu as tapé : ${word}`);

// On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

// console.log("**********Parcourons le array :")
// for(let index in weeksOfTHPArray) {
//   console.log(index); // index va aller de 0 à 3
//   console.log(weeksOfTHPArray[index]);
// }

// console.log("**********Parcourons l'objet :")
// for(let weekAttribut in weeksOfTHPObject) {
//   console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
//   console.log(weeksOfTHPObject[weekAttribut]);
// }

console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(a => {
  console.log(a)
});