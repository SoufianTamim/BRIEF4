const vowels = ["a", "e", "i", "o", "u", "y"];
function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
document.getElementById("myButton").onclick = function () {
  let string = document.getElementById("Mytext").value;
  const result = countVowel(string);
  document.getElementById("bg-p").innerHTML = "la phrase que vous avez saisi contient "+ result + "  voyells";
}