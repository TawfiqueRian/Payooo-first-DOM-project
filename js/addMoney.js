document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const newAvailableBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText = newAvailableBalance;
    document.getElementById('select-bank').value = 'Select bank';
    document.getElementById('bank-account').value = '';
    document.getElementById('add-amount').value = '';
    document.getElementById('add-pin').value = '';
})