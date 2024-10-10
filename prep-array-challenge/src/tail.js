/* exported tail */
function tail(array) {
  let tailArray = [];
  for (let index = 1; index < array.length; index++) {
    tailArray.push(array[index]);
  }
  return tailArray;
}
