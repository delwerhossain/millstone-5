function getValue(value) {
    let showValueCashIn = parseFloat(document.getElementById(value).value);
    if (isNaN(showValueCashIn)) {
        alert('please add  amount');
        document.getElementById('cash-in').value = '';
        return 0;
    }
    document.getElementById('cash-in').value = '';
    return showValueCashIn;
}



function getInnertext(innerText) {
    let showCashIn = document.getElementById(innerText);
    let showValueCashIn = parseFloat(showCashIn.innerText);
    return showValueCashIn;
}


