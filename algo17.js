

function isPal(string) {
    string = string.toUpperCase();
    for(var left=0; left<string.length/2; left++) {
        var right = string.length-1-left;
        if(string[left]!= string[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal( "BoB" );
console.log(result1);
    
var result2 = isPal( "yourhubj" );
console.log(result2);


