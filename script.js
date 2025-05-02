const hash = CryptoJS.MD5('MetaCTF{a11at_4n0thing}');
console.log(hash.toString());
function checkAnswer() {
  const input = document.getElementById('answer').value.trim();
  const result = document.getElementById('result');
  const hash = '2b64a57e7ea5dd2c8dc851106358a810'
    //   The key to the cipher text is c787bea5373988d27ca5480b2af25884
  if (CryptoJS.MD5(input).toString() === hash) {
    result.innerHTML = "✅ Correct!";
    result.style.color = "lightgreen";
  } else {
    result.innerHTML = "❌ Incorrect. Try again.";
    result.style.color = "red";
  }
}