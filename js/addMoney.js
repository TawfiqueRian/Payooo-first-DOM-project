document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const bankAccount = document.getElementById('bank-account').value;
    const validPin = '1234';
    const pinNumber = document.getElementById('add-pin').value;
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
    document.getElementById('available-balance').innerText = newAvailableBalance;
    document.getElementById('select-bank').value = 'Select bank';
    document.getElementById('bank-account').value = '';
    document.getElementById('add-amount').value = '';
    document.getElementById('add-pin').value = '';
})