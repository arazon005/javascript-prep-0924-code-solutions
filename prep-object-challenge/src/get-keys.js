/* exported getKeys */
function getKeys(object) {
  let array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}
