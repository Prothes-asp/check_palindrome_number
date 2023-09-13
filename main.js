const button = document.querySelector("#btn");
const inputText = document.querySelector("#input_field_txt");
const palindrome_result = document.querySelector("#palindrome_result");

button.addEventListener("click", () => {
  // Get the input value from input field
  const text = inputText.value.trim();


  // For This Function When Input is empty
  if (text.length == 0) {
    alert("Input cannot be empty");
    return; 
  }

  //Remove any non-alphanumeric characters and convert to lowercase
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //Check if the cleaned text is a palindrome by comparing the original and reversed strings
  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

  //Create a message based on whether the input is a palindrome or not
  const message = isPalindrome
    ? `<span>Yes. </span> It's a palindrome!`
    : `<span>Nope. </span> Not a palindrome!`;

  //Unpdate the result element with the message
  palindrome_result.innerHTML = message;
  palindrome_result.classList.remove("error", "success");
  setTimeout(() => {
    palindrome_result.classList.add(isPalindrome ? "success" : "error");
  }, 10);
});
