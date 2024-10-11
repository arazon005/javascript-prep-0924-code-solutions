/* exported getWords */
function getWords(string) {
  let words = [];
  let word = '';
  if (string === '') {
    return words;
  }
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) == ' ') {
      words.push(word);
      word = '';
    } else {
      word += string.charAt(index);
    }
  }
  words.push(word);
  return words;
}
