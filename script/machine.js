// machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id)
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log('current balance:', Number(balance));
  return Number(balance);
}

// machine value -> set Balance
function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}

// machine id > hide al > show id
function showOnly(id) {
  const addMoney = document.getElementById('addMoneySection');
  const cashout = document.getElementById('cashoutSection');
  const sendMoney = document.getElementById('sendMoneySection');
  const getBonus = document.getElementById('getBonusSection');
  const payBill = document.getElementById('payBillSection');
  const history = document.getElementById('history');
  
  // console.log(`add Money - ${addMoney}, cashout - ${cashout} `);
  // Hide everything
  addMoney.classList.add('hidden')
  cashout.classList.add('hidden')
  sendMoney.classList.add('hidden')
  getBonus.classList.add('hidden')
  payBill.classList.add('hidden')
  history.classList.add('hidden')

  // show the element id
 const selected = document.getElementById(id)
 selected.classList.remove('hidden')
}