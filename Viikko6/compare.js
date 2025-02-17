const prompt = require('prompt-sync')();

var s1 = parseFloat(prompt("First number? "));
var s2 = parseFloat(prompt("Second number? "));

if (s1 > s2) {
    console.log(s1+" is the highest number")
}

else if (s2 > s1) {
    console.log(s2+" is the highest number")
}

