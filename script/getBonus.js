const getBonusBtn = document
  .getElementById('get-bonusBtn')
  .addEventListener('click', function () {
    //1 - get the cupon code
    const cuponCode = getValueFromInput('cupon-code');

    const bonus = 1000;

    //2-1 if the cupon code is equal to 4 digit ->
    if (cuponCode == 'KJ123E') {
      alert(`
        Congratulation! You got ${bonus} TK Bonus
        at ${new Date()}`);
      setBalance(getBalance() + bonus);

      //1 - get the history container
      const history = document.getElementById('history');

      //2 - create a new div
      const newHistory = document.createElement('div');

      //3 - add innerHTML to the new div
      newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 shadow-sm font-bold">
      Congratulation! You got ${bonus} TK Bonus
       at ${new Date()};  
      </div>
      `;

      //4 - append the new div to the history container
      history.append(newHistory);
    } else {
      alert('Invalid Cupon Code');
      return;
    }
  });
