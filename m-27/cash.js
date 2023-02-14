
// step 1: import modules

document.getElementById('btn-cash-in').addEventListener('click', function () {
    // step 2: create all variables

    let cashIn = document.getElementById('cash-in');
    let valueCashIn = parseFloat(cashIn.value);
    let showCashIn = document.getElementById('show-cash-in');
    let showValueCashIn = parseFloat(showCashIn.innerText);
    const totalCashIn = parseFloat(valueCashIn + showValueCashIn);

    // step 3: show total cash in
    document.getElementById('show-cash-in').innerText = totalCashIn;
    // step 4: show total balance
    let totalCash = parseFloat(document.getElementById('total-cash').innerText);
    document.getElementById('total-cash').innerText = totalCash + valueCashIn;



    document.getElementById('cash-in').value = '';





});



document.getElementById('btn-cash-out').addEventListener('click', function () {
    // step 2: create all variables

    let cashIn = document.getElementById('cash-out');
    let valueCashOut = parseFloat(cashIn.value);
    let showCashOut = document.getElementById('show-cash-out');
    let showValueCashOut = parseFloat(showCashOut.innerText);
    const totalCashOut = parseFloat(valueCashOut + showValueCashOut);

    // step 3: show total balance
    let totalCash = parseFloat(document.getElementById('total-cash').innerText);

    document.getElementById('cash-out').value = '';

    if (totalCash < valueCashOut) {
        alert("Not enough cash");
        return;
    }

    // step 4: show total cash in
    document.getElementById('show-cash-out').innerText = totalCashOut;


    document.getElementById('total-cash').innerText = totalCash - valueCashOut;



});
