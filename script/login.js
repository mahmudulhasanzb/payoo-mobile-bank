document.getElementById('login-btn').addEventListener('click', function btn() {
  // 1. get the mobile number
  const numberInput = document.getElementById('input-number');
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  // 2. get the pin
  const pinInput = document.getElementById('input-pin');
  const pin = pinInput.value;
  console.log(pin);

  // 3. check if the mobile number and pin are correct
  if (contactNumber == '01756324260' && pin == '1234') {
    // 3-1. if true, show an alert message and redirect to the home page by using window.location.replace()
    alert('login successfully');
    window.location.replace('./hone.html');
  } // 3-2. if false, show an error message
  else {
    alert('login failed');
    return;
  }
});
