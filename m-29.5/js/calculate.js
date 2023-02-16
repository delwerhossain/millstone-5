document.getElementById("btn-calculate").addEventListener("click", function () {
    // define all amount in variables 
    const incomeAmountValue = getValue("input-income");
    const foodAmountValue = getValue("input-food");
    const rentAmountValue = getValue("input-rent");
    const clothAmountValue = getValue("input-cloth");
    const saveAmountValue = getValue("input-save");


    // const outputAmount = getInnertext("output");
    // const totalBalanceInner = getInnertext("total-cost");
    // const totalCostInner = getInnertext("total-balance");


    
    // calculate total cost

    const totalCostAmount = (foodAmountValue + rentAmountValue + clothAmountValue);
    document.getElementById("total-cost").innerText = totalCostAmount;


    // calculate total balance
    const totalBalanceAmount = incomeAmountValue - totalCostAmount;
    document.getElementById('total-balance').innerText = totalBalanceAmount;
})

document.getElementById("save").addEventListener("click", function () {
    
    // save section 
    const BalanceInner = getInnertext("total-balance");
    const remainingBalanceInner = BalanceInner - saveAmountValue;
    document.getElementById("remaining-balance").innerText = remainingBalanceInner;

    document.getElementById('saving-amount').innerText = saveAmountValue
});