document.getElementById("btn-calculate").addEventListener("click", function () {
    calculation();
})

document.getElementById("btn-save").addEventListener("click", function () {
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


    // save section 

    const saveAmountValue = getValue("input-save");
    const balanceInner = getInnertext("total-balance");

    // if (saveAmountValue <= balanceInner) {
    //     const remainingBalanceInner = balanceInner - saveAmountValue;
    //     return remainingBalanceInner;

    // }
    // else if (saveAmountValue > balanceInner) { 
    //     alert('save amount is biger than balance');
    //     return ;
    // }
    // else {
    //     alert('error saving');
    // }

    const remainingBalanceInner = balanceInner - saveAmountValue;


    // console.log('balanceInner - ', balanceInner, ' saveAmountValue - ', saveAmountValue, ' remainingBalanceInner -', remainingBalanceInner);


    // document.getElementById('input-save').value = '';

    document.getElementById('saving-amount').innerText = saveAmountValue;
    document.getElementById("remaining-amount").innerText = remainingBalanceInner;



});