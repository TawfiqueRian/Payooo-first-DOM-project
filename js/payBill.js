// document.getElementById('payNowBtn').addEventListener('click', function(e){
//     e.preventDefault();
//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);
//     const billPayAmount = parseInt(document.getElementById('bill-amount').value);
//     // const bankAccount = document.getElementById('bank-account').value;
//     const validPin = '1234';
//     const pinNumber = document.getElementById('bill-pin').value;
//     // if(bankAccount.length !== 11)
//     // {
//     //     alert('Please enter valid Bank Account Number');
//     //     return;
//     // }
//     if(pinNumber !== validPin)
//     {
//         alert('Invalid Pin Number');
//         return;
//     }
//     const newAvailableBalance = availableBalance - billPayAmount;
//     document.getElementById('available-balance').innerText = newAvailableBalance;
//     document.getElementById('select-bill-type').value = 'Select back';
//     document.getElementById('biller-account-number').value = '';
//     document.getElementById('bill-amount').value = '';
//     document.getElementById('bill-pin').value = '';
// })