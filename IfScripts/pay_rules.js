let hours = 39;
var Pay;

if (hours <= 40) {
    Pay = 12.5 * hours
 }
 else if (hours == 40) { 
   Pay = 40 * hours}
 else {
   Pay = 45 * hours
 }

console.log(Pay)