const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanText(text) {
  return text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}

function isPalindrome(text) {
  const cleaned = cleanText(text);
  return cleaned === cleaned.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
  const value = textInput.value;

  if (!value.trim()) {
    alert("Please input a value");
    return;
  }

  const message = isPalindrome(value)
    ? `${value} is a palindrome`
    : `${value} is not a palindrome`;

  result.textContent = message;
});
