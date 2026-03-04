document.getElementById('send-moneyBtn').addEventListener('click', function () {
  //1 - get the agent number & validate
  const sendMoneyNumber = getValueFromInput('send-money-number');
  // 1- 1 if cashoutNumber is not equal to 11 digit > show an alert
  if (sendMoneyNumber.length != 11) {
    alert('Invalid Agent Number');
    return;
  }

  //2 - get the send money amount
  const sendMoneyAmount = getValueFromInput('send-money-amount');

  //3 - get the current Balance
  const currentBalance = getBalance();

  //4 - Calculate new Blance
  const newBalance = currentBalance - Number(sendMoneyAmount);
  console.log('New Balance:', newBalance);
  //4-1 if newBalance if -0 show an error alert > return
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }

  //5 - Get the pin and verify
  const sendMoneyPin = getValueFromInput('send-money-pin');
  if (sendMoneyPin == '1234') {
    //5 - 1 true:: show an alert > set Balance
    alert('Send Money Successfull');
    setBalance(newBalance);

    //1 - get the history container
    const history = document.getElementById('history-container');

    //2 - create a new div
    const newHistory = document.createElement('div');

    //3 - add innerHTML to the new div
    newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 shadow-sm font-bold">
      ${sendMoneyAmount} TK
      Send Money Success to,
      AC No/ ${sendMoneyNumber}.
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
