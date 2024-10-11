/* exported reverseWord */
function reverseWord(word) {
  let reverse = '';
  for (let index = word.length - 1; index >= 0; index--) {
    reverse += word.charAt(index);
  }
  return reverse;
}
