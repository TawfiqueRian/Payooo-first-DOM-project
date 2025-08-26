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

//function for toggling the cards
function toggleCards(id, card)
{
    const elements = document.getElementsByClassName('card-button');
    for(const element of elements)
    {
        element.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
    const cards = document.getElementsByClassName('card');
    for(const card of cards)
    {
        card.style.border = '1px solid #0808081a';
        card.style.backgroundColor = 'white';
    }
    document.getElementById(card).style.border = '1px solid #0874F2';
    document.getElementById(card).style.backgroundColor = '#0874f20d';
}


const transactionsData = [];

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
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }

    transactionsData.push(data);

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

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionsData.push(data);

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

    const data = {
        name: 'Money Transfer',
        date: new Date().toLocaleTimeString()
    }

    transactionsData.push(data);

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

    const data = {
        name: 'Bill Pay',
        date: new Date().toLocaleTimeString()
    }

    transactionsData.push(data);

    document.getElementById('select-bill-type').value = 'Select back';
    document.getElementById('biller-account-number').value = '';
    document.getElementById('bill-amount').value = '';
    document.getElementById('bill-pin').value = '';
})





//card 1 toggle feature
document.getElementById('card1').addEventListener('click', function(){
    toggleCards('add-money', 'card1');
})

//card2 toggle feature
document.getElementById('card2').addEventListener('click', function(){
    toggleCards('cash-out', 'card2');
})

//card3 toggle feature
document.getElementById('card3').addEventListener('click', function(){
    toggleCards('transfer-money', 'card3');
})

//card4 toggle feature
document.getElementById('card4').addEventListener('click', function(){
    toggleCards('get-bonus', 'card4');
})

//card 5 toggle feature
document.getElementById('card5').addEventListener('click', function(){
    toggleCards('pay-bill', 'card5');
})

//card6 toggle feature
document.getElementById('card6').addEventListener('click', function(){
    toggleCards('transactions', 'card6');
    const parentNode = document.getElementById('transaction-container');
    parentNode.innerText = '';
    for(const elData of transactionsData)
    {
        const transactionCard = document.createElement('div');
        const elname = elData.name;
        const eldate = elData.date;
        transactionCard.innerHTML = `
            <div class="transactionContainer bg-white mx-[24px] p-[15px] rounded-[12px] flex justify-between items-center mb-[12px]">
                <div class="transaction-cards  flex items-center gap-[8px] ">
                    <div class="img w-[45.5px] h-[45.5px] rounded-full bg-[#f4f5f7] flex items-center justify-center">
                        <img src="payoo.png" alt="" class="max-w-[24px] h-[24px] ">
                    </div>
                    <div class="detail">
                        <h2 class="text-base text-[#080808b3] font-semibold">${elname}</h2>
                        <p class="text-[0.75rem] text-[#080808b3]">${eldate}</p>
                    </div>
                </div>
                <div class="dots">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        `
        parentNode.appendChild(transactionCard);
    }
})