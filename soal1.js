function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

// kalimat 1
const kalimat1 = "Saya sangat mencintai kota cirebon";
const firstword1 = "mencintai";
const newword1 = "membenci";

const hasil1 = changeWord(firstword1, newword1, kalimat1);

// kalimat 2
const kalimat2 =
  "Gunung matterhorn tak akan mampu menggambarkan besarnya cintaku padamu";
const firstword2 = "matterhorn";
const newword2 = "stanserhorn";

const hasil2 = changeWord(firstword2, newword2, kalimat2);

console.log(hasil1);
console.log(hasil2);
