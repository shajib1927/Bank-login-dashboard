// code for add money

document.getElementById("add-money-btn").addEventListener("click", function(){
    
    let current_Deposit = parseFloat(document.getElementById("calculated-deposit").innerText);
    let current_Balance = parseFloat(document.getElementById("calculated-balance").innerText);

    const enteredAmount_add = document.getElementById("add-box");
    const enteredAmount = parseFloat(enteredAmount_add.value);

    const new_Deposit = (current_Deposit + enteredAmount);
    const new_Balance = (current_Balance + enteredAmount);

    enteredAmount_add.value = '';
    
    document.getElementById("calculated-deposit").innerText = new_Deposit;
    document.getElementById("calculated-balance").innerText = new_Balance;    
});

// code for cash out

document.getElementById("cash-out-btn").addEventListener("click", function(){

    let current_Withdraw = parseFloat(document.getElementById("calculated-withdraw").innerText);
    let current_Balance = parseFloat(document.getElementById("calculated-balance").innerText);

    const enteredAmount_out = document.getElementById("out-box");
    const enteredAmount = parseFloat(enteredAmount_out.value);

    const new_Withdraw = (current_Withdraw + enteredAmount);
    const new_Balance = (current_Balance - enteredAmount);

    enteredAmount_out.value = '';

    document.getElementById("calculated-withdraw").innerText = new_Withdraw;
    document.getElementById("calculated-balance").innerText = new_Balance;
});

