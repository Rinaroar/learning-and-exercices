// Code goes here

let suites= ["Coeurs", "Trèfles", "Piques", "Carreaux"];

let values=["Ace", "Roi","Reine","Valet",
            "Dix","Neuf","Huit","Sept","Six","Cinq","Quatre",
            "Trois","Deux","Un"];

let jeu=[];

for (let suiteIdx=0 ; suiteIdx<suites.length ; suiteIdx++) {
  
  for (let valueIdx=0 ; valueIdx<values.length ; valueIdx++) {
    jeu.push (values[valueIdx] + ' de ' + suites[suiteIdx]);
  }
}

for (let i=0; i<jeu.length; i++) {
  console.log(jeu[i]);
}


let cartes= [jeu[0], jeu[2] ];

console.log("Bienvenue au BlackJack");

console.log("Vous avez:");
console.log(" " + cartes[0]);
console.log(" " + cartes[1]);
