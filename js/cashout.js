// document.getElementById('withdrawMoneyBtn').addEventListener('click', function(e){
//     e.preventDefault();
//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);
//     const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
//     const agentNumber = document.getElementById('agent-number').value;
//     const validPin = '1234';
//     const pinNumber = document.getElementById('cashout-pin').value;
//     if(agentNumber.length !== 11)
//     {
//         alert('Please enter valid Agent Number');
//         return;
//     }
//     if(pinNumber !== validPin)
//     {
//         alert('Invalid Pin Number');
//         return;
//     }

//     const newAmount = availableBalance - cashoutAmount;
//     document.getElementById('available-balance').innerText = newAmount;
//     document.getElementById('agent-number').value = '';
//     document.getElementById('cashout-amount').value = '';
//     document.getElementById('cashout-pin').value = '';
// })