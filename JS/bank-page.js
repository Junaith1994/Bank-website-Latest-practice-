// Common functions
function sumCalculator(inputField, displayAmount, isAdd) {
    const amount = document.getElementById(inputField);
    const totalAmount = document.getElementById(displayAmount);
    const balanceTotal = document.getElementById('balance-total');

    totalAmount.innerText = parseFloat(amount.value) + parseFloat(totalAmount.innerText);
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(amount.value) + parseFloat(balanceTotal.innerText);
    }
    else { balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(amount.value); }
    amount.value = '';
}

// deposit button event handler
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit-field');

    if(isNaN(depositAmount.value) || depositAmount.value <= 0) {
        alert("Invalid Input!! Please input valid number");
    }
    else {sumCalculator('deposit-field', 'deposit-total', true);}
})

// witdraw button event handler

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdraw-field');
    const balanceTotal = document.getElementById('balance-total');
    
    if(isNaN(withdrawAmount.value) || withdrawAmount.value <= 0) {
        alert("Invalid Input!! Please input valid number")
    }
    else { 
        if (withdrawAmount.value > balanceTotal.innerText) {
            alert("Insufficient Balance!!")
        }
        else { sumCalculator('withdraw-field', 'withdraw-total'); }
    }
})