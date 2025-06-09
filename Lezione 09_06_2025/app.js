import * as util from "./util.js"; // app.js



const arr1 = [1,2,3];
const arr2=arr1

arr1.push(4);

arr1.unshift(0);


let[a,b]=arr1;

console.log(a,b)


console.log(arr1)
console.log(arr2)

const prof={
    nome:"Rob",
    cognome:"Dei",
    età:48,
    indirizzo:{
        città: "Roma",
        via:"Cesare Pavese"
    }
}

let {nome:firstname,cognome}=prof;
console.log(firstname,cognome)
console.log(prof.indirizzo.via)



//console.log(prof.nome)
console.log(prof.indirizzo.via)

const prof1 = new Object();
prof1.cognome="Dei";
prof1.nome="Rob";

console.log(prof1)

function persona(){
    this.nome = "";
    this.cognome = "";
}


const rob = new persona(); //prototyping

console.log()

function Array(){
    console.log("pippo")
}

const arr3 = new Array(1,2,3);

console.log(arr3);


