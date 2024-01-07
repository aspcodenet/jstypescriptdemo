

// // PROBLEM MED JAVASCRIPT

// // fel i runtime!!!! PRODUKTION Kunden blir lidande
// //När man kör

// // SYNTAXFEL : fånga upp i utvecklingsfasen?

// // ändra datatyp = sannolikt fel?
// // javascript är typat! Men det är DYNAMISKT TYPAT
let cost = "12"
// ... 1000 rader senare
//let costPeople = "kalle"
cost = "Kalle"
//cost = 12

let isOk : boolean

isOk = false

let namnen:string [] = ["Stefan", "Kalle"]


// // //funktionsheader är inte självdokumenterande! Inga datatyper på parametrar, inget return
// function canIBuyBeer(age:number,location:string,promille:number) : boolean  {
//  //... 
//  return "2341342"
// }
 




const freight = document.getElementById("freight") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const totalPrice = document.getElementById("totalPrice") as HTMLElement;

function calculateTotalPrice(frakt:number, pris:number) {
    totalPrice.innerText = (frakt+pris+200).toString()
}

function onRecalculate(){
    calculateTotalPrice(parseInt(freight.value), parseInt(price.value));
}

price.addEventListener("input", onRecalculate);
freight.addEventListener("input", onRecalculate);


