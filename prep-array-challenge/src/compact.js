/* exported compact */
function compact(array) {
  let compactArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      compactArray.push(array[index]);
    }
  }
  return compactArray;
}
