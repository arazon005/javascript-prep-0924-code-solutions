/* exported reverse */
function reverse(array) {
  let reverseArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray.push(array[index]);
  }
  return reverseArray;
}
