let name = prompt("Enter your full name (eg. Shreeya Rani): ");
function swapName(fullName){
    return fullName.split(' ').reverse().join(' ');
}
console.log(swapName(name));