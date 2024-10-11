/* exported getValues */
function getValues(object) {
  let array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
