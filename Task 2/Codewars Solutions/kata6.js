let number = prompt("Enter a number to check if it's a prime number or not: ");


function isPrime(num) {
    if (num < 2){
        return false;
    }


    for (var i=2; i<num; i++) {
        if (num % i == 0) {  
        return false;}
    }  
    return true;  
}


console.log(isPrime(parseInt(number)));