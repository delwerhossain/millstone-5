function getValue(value) {
    let showValueCashIn = parseInt(document.getElementById(value).value);
    if (isNaN(showValueCashIn))  {
        alert('isNan');
        // document.getElementById(value).value = '';
        return 0;
    }
    else if (showValueCashIn == '') {
        alert('empty');
        // document.getElementById(value).value = '';
        return 0;
    }
    document.getElementById(value).value = '';
    return showValueCashIn;
    
}



function getInnertext(innerText) {
    let showCashIn = document.getElementById(innerText);
    let showValueCashIn = parseInt(showCashIn.innerText);
    return showValueCashIn;
}
