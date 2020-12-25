let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {

  let temp;

  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      if( array[j - 1] > array[j] ) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

alert(bubbleSort(array))
