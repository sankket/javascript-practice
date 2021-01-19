function arrayUnion(){
let array1 = [1,2,3,4,5];
let array2 = [4,5,6,7];
// Here merging elememnts of the two arrays.

let array3 = [...array1,...array2];
// ... is spread operator in javascript which expands array elements into individual elements.

alert(array3);
}
