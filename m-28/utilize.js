function getValue(value) {
    let showValueCashIn = parseFloat(document.getElementById(value).value);
    return showValueCashIn;
    document.getElementById('cash-in').value = '';
}



function getInnertext(innerText) {
    let showCashIn = document.getElementById(innerText);
    let showValueCashIn = parseFloat(showCashIn.innerText);
    return showValueCashIn;
}

