function getValue(value) {
    let showValueCashIn = parseFloat(document.getElementById(value).value);
    if (isNaN(showValueCashIn)) {
        alert('please add  amount');
        document.getElementById(value).value = '';
        return 0;
    }
    document.getElementById(value).value = '';
    return showValueCashIn;
}



function getInnertext(innerText) {
    let showCashIn = document.getElementById(innerText);
    let showValueCashIn = parseFloat(showCashIn.innerText);
    return showValueCashIn;
}
