const prompt = require('prompt-sync')();

var userword = prompt("Enter a word: ");
const palindrome = userword.split('').reverse().join('');
if (palindrome == userword ){
    console.log(userword +" is a palindrome");
}
else {
    console.log(userword +" is a not palindrome");
}