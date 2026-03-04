document.getElementById('pay-billBtn').addEventListener('click', function () {
  //1 - get the bank account
  const service = getValueFromInput('pay-bill-service');

  //1-1 if the bank account is not selected show an error message
  if (service === 'Select A Service') {
    alert('Please select a service');
    return;
  }

  //1 - get the pay bill number & validate
  const payBillNumber = getValueFromInput('pay-bill-number');
  // 1- 1 if payBillNumber is not equal to 11 digit > show an alert
  if (payBillNumber.length != 11) {
    alert('Invalid Agent Number');
    return;
  }

  //2 - get the pay bill amount
  const payBillAmount = getValueFromInput('pay-bill-amount');

  if (payBillAmount === '' || payBillAmount <= 0 || isNaN(payBillAmount)) {
    alert('Invalid Amount');
    return;
  }

  //3 - get the current Balance
  const currentBalance = getBalance();

  //4 - Calculate new Blance
  const newBalance = currentBalance - Number(payBillAmount);
  console.log('New Balance:', newBalance);
  //4-1 if newBalance is -0 show an error alert > return
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }

  //5 - Get the pin and verify
  const payBillPin = getValueFromInput('pay-bill-pin');
  if (payBillPin == '1234') {
    //5 - 1 true:: show an alert > set Balance
    alert(`${payBillAmount} TK ${service} Bill Paid Successfully`);
    setBalance(newBalance);

    //1 - get the history container
    const history = document.getElementById('history-container');

    //2 - create a new div
    const newHistory = document.createElement('div');

    //3 - add innerHTML to the new div
    newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 shadow-sm font-bold">
      ${payBillAmount} TK
      ${service} Bill Paid Successfully,
      AC No/ ${payBillNumber}.
      at ${new Date()};  
      </div>
      `;

    //4 - append the new div to the history container
    history.append(newHistory);
  } else {
    //5 - 2 false:: show an error alert > return
    alert('Incorrect Pin');
    return;
  }
});
