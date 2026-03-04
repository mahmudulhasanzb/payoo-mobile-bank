const addMoneyBtn = document
  .getElementById('add-moneyBtn')
  .addEventListener('click', function () {

    //1 - get the bank account
    const bankAccount = getValueFromInput('add-money-bank');

    //1-1 if the bank account is not selected show an error message
    if (bankAccount === 'Select A Bank') {
      alert('Please select a bank account');
      return;
    }

    //2 - get the bank account number
    const ACNo = getValueFromInput('add-money-number');

    //2-1 if the ACNo is not equal to 11 digit -> show an error message
    if (ACNo.length != 11) {
      alert('Invalid Bank Account Number');
      return;
    }

    //3 - get the amount to add
    const amount = getValueFromInput('add-money-amount');

    //3-1 if the amount is -0 -> show an error message
    if (amount === '' || amount <= 0 || isNaN(amount)) {
      alert('Invalid Amount');
      return;
    }

    const newBalance = getBalance() + Number(amount);
    console.log('New Balance:', newBalance);

    //4 - get the add money pin
    const addMoneyPin = getValueFromInput('add-money-pin');

    //4-1 if the addMoneyPin is equal to 4 digit ->
    if (addMoneyPin == '1234') {
      alert(`
        ${amount} TK
        Add Money Success from
        ${bankAccount}
        at ${new Date()}`);
      setBalance(newBalance);

      //1 - get the history container
      const history = document.getElementById('history-container');

      //2 - create a new div
      const newHistory = document.createElement('div');

      //3 - add innerHTML to the new div
      newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 shadow-sm font-bold">
      ${amount} TK
       Add Money Success from
       ${bankAccount}, AC No/ ${ACNo}.
       at ${new Date()};  
      </div>
      `;

      //4 - append the new div to the history container
      history.append(newHistory);
    } else {
      alert('Invalid Pin');
      return;
    }
  });
