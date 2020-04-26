
// ----------------------------------------------------------------------------
// BLOCK 1
let block_1_cipher_text = "U2FsdGVkX19L7XbuBi8c6jxg3EhWj5EMLn5v0qpZn4hVu9tM919rVQOUaOPXDSHUJ1N/+xYL0uKEkjU+8SjbMkTcEFFAPA2kjLNElYOa7lLEhBPMWQKinM3Uz3vCYA1IJ2F8rW+jPVQXvM8XySg8fg==";
let block_1 = document.getElementById("block_1");
let block_1_password_entry = document.getElementById("block_1_password_entry");
let block_1_decode_button = document.getElementById("block_1_decode_button");
let block_1_taunt = document.getElementById("block_1_taunt");

block_1_decode_button.addEventListener("click", function () {
  let password = block_1_password_entry.value;
  let decrypted_text = Decode(block_1_cipher_text, password);
  if (decrypted_text == "fail") {
    block_1_taunt.innerText = "Did you try to guess...? You cheeky bugger!";
  } else {
    block_1.innerHTML = decrypted_text;
  }
});
// ----------------------------------------------------------------------------

// Function to decode an encrypted block of text given the correct password.
function Decode(cipher_text, password) {

  // Decrypt the text using the provided password.
  let original_bytes = CryptoJS.AES.decrypt(cipher_text, password);

  // Try to interpret the decrypted bytes as a UTF-8 string.
  let decrypted_text = "fail";
  try {
    decrypted_text = original_bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log(error);
  }
  return decrypted_text;
}

// Function to encode a raw block of text into cipher text with the given password.
function Encode(raw_text, password) {
  let encrypted_text = CryptoJS.AES.encrypt(raw_text, password).toString();
  return encrypted_text;
}

let raw_text = ``;
let password = "";
let encrypted_text = Encode(raw_text, password);
console.log(encrypted_text);
