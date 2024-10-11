/* exported capitalize */
function capitalize(word) {
  let capital = word.charAt(0).toUpperCase();
  let lower = word.slice(1).toLowerCase();
  return capital + lower;
}
