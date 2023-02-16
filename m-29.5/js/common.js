function getValue(value) {
    let showValueCashIn = parseInt(document.getElementById(value).value);
    if (isNaN(showValueCashIn)) {
        // document.getElementById(value).value = '';
        return 0;
    }
    else if (showValueCashIn == '') {
        // document.getElementById(value).value = '';
        return 0;
    }
    // document.getElementById(value).value = '';
    return showValueCashIn;

}



function getInnertext(innerText) {
    let showCashIn = document.getElementById(innerText);
    let showValueCashIn = parseInt(showCashIn.innerText);
    return showValueCashIn;
}

function calculation() {
    // define all amount in variables 
    const incomeAmountValue = getValue("input-income");
    const foodAmountValue = getValue("input-food");
    const rentAmountValue = getValue("input-rent");
    const clothAmountValue = getValue("input-cloth");

    // calculate total cost
    const totalCostAmount = (foodAmountValue + rentAmountValue + clothAmountValue);
    document.getElementById("total-cost").innerText = totalCostAmount;

    // calculate total balance
    const totalBalanceAmount = incomeAmountValue - totalCostAmount;
    document.getElementById('total-balance').innerText = totalBalanceAmount;
}