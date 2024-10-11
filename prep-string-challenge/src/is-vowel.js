/* exported isVowel */
function isVowel(char) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < vowel.length; index++) {
    if (char.toLowerCase() == vowel[index]) {
      return true;
    }
  }
  return false;
}
