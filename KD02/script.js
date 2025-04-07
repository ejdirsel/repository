let vards = "gregs";
let vecums = 18;

console.log(vards)
console.log(vecums)

let irPilsonis = true

if (vecums >= 18 && irPilsonis) {
    console.log("Drīkst balsot");
}
 else
    if (vecums >= 18 && !irPilsonis) {
        console.log("Pilngadīgs, bet nav pilsonis");
    }
 else
    if (vecums < 18 && !irPilsonis) {
        console.log("Pilsonis, bet nepilngadīgs");
    }
 else{
 console.log("Nav pilngadīgs un pilsonis")
}