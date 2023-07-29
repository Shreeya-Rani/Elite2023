let time = prompt("Enter the time in Hours like 5 or 11.7: ");
console.log(time);
function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(parseInt(time)));
