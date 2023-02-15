
// step 1: import modules

document.getElementById('btn-cash-in').addEventListener('click', function () {

    let valueCashIn = getValue('cash-in');
    let showValueCashIn = getInnertext('show-cash-in');
    const totalCashIn = parseFloat(valueCashIn + showValueCashIn);
    document.getElementById('show-cash-in').innerText = totalCashIn;
    let totalCash = parseFloat(document.getElementById('total-cash').innerText);
    document.getElementById('total-cash').innerText = totalCash + valueCashIn;
});




document.getElementById('btn-cash-out').addEventListener('click', function () {
    let valueCashOut = getValue('cash-out');
    let showValueCashOut = getInnertext('show-cash-out');
    const totalCashOut = parseFloat(valueCashOut + showValueCashOut);
    let totalCash = parseFloat(document.getElementById('total-cash').innerText);
    if (totalCash < valueCashOut) {
        alert("Not enough cash");
        return;
    }
    document.getElementById('show-cash-out').innerText = totalCashOut;
    document.getElementById('total-cash').innerText = totalCash - valueCashOut;
});
