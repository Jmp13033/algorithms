var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


// dice roll that includes values of 1 and 6 
function d6() {
    var roll = Math.floor((Math.random() * 6 + 1) );
    // code
    
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// pass and array that gets what ? 

 function x(array)  
 {
     var y = Math.random() * array.length // take a random number between the length of array range... this includes the values decimal
     y = Math.floor(y) // pass in the parameter that we need to floor

     
     return array[y] // return the array parameter with the index of the array



 }

 console.log(x(lifesAnswers)) // pass in the function with list length






