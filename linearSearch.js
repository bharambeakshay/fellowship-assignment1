//linearSearch function ==> finds the element in the array, returns index number if found else returns -1
function linearSearch(numArray, element) {     
    for (var index = 0; index < numArray.length; index++) {
        if (numArray[index] === element) {
            return index;
        }
    }
    return -1;
}

var arraySize = parseInt(prompt("Enter the length of Array: "));
var numArray = [];
//Taking the numbers as input in numArray
for (var i = 0; i < arraySize; i++) {
    numArray[i] = parseInt(prompt("Enter the number: "));
}
var element = parseInt(prompt(("Enter the number to be search ")));
//Printing the input data
console.log("Array is ", numArray);
console.log("Number to be search is ", element);

console.log(linearSearch(numArray, element));

