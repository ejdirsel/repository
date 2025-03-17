/*
let a = "5";
let b = "5";

if( a == b )
{
    console.log("a == b");
}
if( a === b )
{
    console.log("a === b")
}
let diena = parseInt(prompt("ievadi dienas numuru"));

switch( diena )
{
case 1:
 console.log("case 1");
break;

case 2:
 console.log("case 2");
break;

case 3:
 console.log("case 3");
break;

case 4:
 console.log("case 4");
break;

case 5:
 console.log("case 5");
break;

case 6:
 console.log("case 6");
break;

case 7:
 console.log("case 7");
break;
} */

let diena = parseInt(prompt("ievadi mēneša numuru"));
switch( diena )
{
case "Janvāris":
case "Februāris":
case "Decembris":
 console.log("Ziema");
break;

case "Marts":
case "Aprīls":
case "Maijs":
 console.log("Pavasaris");
break;

case "Jūnijs":
case "Jūlijs":
case "Augusts":
 console.log("Vasara");
break;

case "Septembris":
case "Oktobris":
case "Novembris":
 console.log("Rudens");
break;
}