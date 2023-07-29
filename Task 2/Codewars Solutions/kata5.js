let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = [2,2,2,4,3,5,6,8,2,5,8,6]


function averageArray(array) {
  if (array.length === 0) {
  return 0;
  }
  var average = 0;
  for (i=0; i<array.length; i++) {
    average +=array[i];
  }
  return average/array.length;
}


console.log(averageArray(array1));
console.log(averageArray(array2));