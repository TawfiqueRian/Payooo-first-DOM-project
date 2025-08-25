document.getElementById('sendMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const userNumber = document.getElementById('user-account-number').value;
    const validPin = '1234';
    const pinNumber = document.getElementById('transfer-pin').value;
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
    document.getElementById('available-balance').innerText = newAmount;
    document.getElementById('user-account-number').value = '';
    document.getElementById('transfer-amount').value = '';
    document.getElementById('transfer-pin').value = '';
})