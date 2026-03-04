document.getElementById('cashoutBtn').addEventListener('click', function () {
  //1 - get the agent number & validate
  const cashoutNumber = getValueFromInput('cashout-number');
  // 1- 1 if cashoutNumber is not equal to 11 digit > show an alert
  if (cashoutNumber.length != 11) {
    alert('Invalid Agent Number');
    return;
  }

  //2 - get the cashout amount
  const cashoutAmount = getValueFromInput('cashout-amount');

  if (cashoutAmount === '' || cashoutAmount <= 0 || isNaN(cashoutAmount)) {
    alert('Invalid Amount');
    return;
  }

  //3 - get the current Balance
  const currentBalance = getBalance();

  //4 - Calculate new Blance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log('New Balance:', newBalance);
  //4-1 if newBalance if -0 show an error alert > return
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }

  //5 - Get the pin and verify
  const cashoutPin = getValueFromInput('cashout-pin');
  if (cashoutPin == '1234') {
    //5 - 1 true:: show an alert > set Balance
    alert('Cashout Successfull');
    setBalance(newBalance);

    //1 - get the history container
    const history = document.getElementById('history-container');

    //2 - create a new div
    const newHistory = document.createElement('div');

    //3 - add innerHTML to the new div
    newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 shadow-sm font-bold">
      ${cashoutAmount} TK
      Cashout Success to,
      AC No/ ${cashoutNumber}.
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

// document.getElementById("cashoutBtn").addEventListener('click', function () {
//   //1 - get the agent number & validate
//   const cashoutNumberInput = document.getElementById('cashout-number');
//   const cashoutNumber = cashoutNumberInput.value;

//   // 1- 1 cashoutNumber is not equal to 11 digit > show an alert
//   if (cashoutNumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   //2 - get the cashout amount
//   const cashoutAmountInput = document.getElementById('cashout-amount');
//   const cashoutAmount = cashoutAmountInput.value;

//   //3 - get the current Balance
//   const baalanceElement = document.getElementById('balance');
//   const balance = baalanceElement.innerText;

//   //4 - Calculate new Blance
//   const newBalance = Number(balance) - Number(cashoutAmount);

//   //4 - 1 newBalance -0 show an error alert > return
//   if (newBalance < 0) {
//     alert("You don't have enough balance");
//     return;
//   }

//   //5 - Get the pin and verify
//   const cashoutPinInput = document.getElementById('cashout-pin');
//   const cashoutPin = cashoutPinInput.value;

//   if (cashoutPin == '1234') {
//     //5 - 1 true:: show an alert > set Balance
//     alert('Cashout successfully');
//     baalanceElement.innerText = newBalance;
//   } else {
//     //5 - 2 false:: show an error alert > return
//     alert('Invalid pin');
//     return;
//   }
// })
