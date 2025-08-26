//function to get available balance inner text
function getAvailableBalance(id){
    const availableBalanceValue = document.getElementById(id).innerText;
    const availableBalanceNumber = parseInt(availableBalanceValue);
    return availableBalanceNumber;
}

//functions to get input value
function getInputNumber(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseInt(inputValue);
    return inputValueNumber;
}

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

//function to set inner text
function setInnerText(newBalance)
{
    document.getElementById('available-balance').innerText = newBalance;
}


//add-money button feature
document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getAvailableBalance('available-balance');
    const addAmount = getInputNumber('add-amount');
    const bankAccount = getInputValue('bank-account');
    const validPin = '1234';
    const pinNumber = getInputValue('add-pin');
    if(bankAccount.length !== 11)
    {
        alert('Please enter valid Bank Account Number');
        return;
    }
    if(pinNumber !== validPin)
    {
        alert('Invalid Pin Number');
        return;
    }
    const newAvailableBalance = availableBalance + addAmount;
    setInnerText(newAvailableBalance);
    document.getElementById('select-bank').value = 'Select bank';
    document.getElementById('bank-account').value = '';
    document.getElementById('add-amount').value = '';
    document.getElementById('add-pin').value = '';
})


//cash out button feature:
document.getElementById('withdrawMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getAvailableBalance('available-balance');
    const cashoutAmount = getInputNumber('cashout-amount');
    const agentNumber = getInputValue('agent-number');
    const validPin = '1234';
    const pinNumber = getInputValue('cashout-pin');
    if(agentNumber.length !== 11)
    {
        alert('Please enter valid Agent Number');
        return;
    }
    if(pinNumber !== validPin)
    {
        alert('Invalid Pin Number');
        return;
    }

    const newAmount = availableBalance - cashoutAmount;
    setInnerText(newAmount);
    document.getElementById('agent-number').value = '';
    document.getElementById('cashout-amount').value = '';
    document.getElementById('cashout-pin').value = '';
})


//transfer money button feature
document.getElementById('sendMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getAvailableBalance('available-balance');
    const transferAmount = getInputNumber('transfer-amount');
    const userNumber = getInputValue('user-account-number');
    const validPin = '1234';
    const pinNumber = getInputValue('transfer-pin');
    if(userNumber.length !== 11)
    {
        alert('Please enter valid User Number');
        return;
    }
    if(pinNumber !== validPin)
    {
        alert('Invalid Pin Number');
        return;
    }
    const newAmount = availableBalance - transferAmount;
    setInnerText(newAmount);
    document.getElementById('user-account-number').value = '';
    document.getElementById('transfer-amount').value = '';
    document.getElementById('transfer-pin').value = '';
})


//pay bill button features
document.getElementById('payNowBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getAvailableBalance('available-balance');
    const billPayAmount = getInputNumber('bill-amount');
    const validPin = '1234';
    const pinNumber = getInputValue('bill-pin');
    if(pinNumber !== validPin)
    {
        alert('Invalid Pin Number');
        return;
    }
    const newAvailableBalance = availableBalance - billPayAmount;
    setInnerText(newAvailableBalance);
    document.getElementById('select-bill-type').value = 'Select back';
    document.getElementById('biller-account-number').value = '';
    document.getElementById('bill-amount').value = '';
    document.getElementById('bill-pin').value = '';
})