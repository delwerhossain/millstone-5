document.getElementById("btn-calculate").addEventListener("click", function () { 
    // define all amount in variables 
    const incomeAmountValue = getValue("input-income");
    const foodAmountValue = getValue("input-food");
    const rentAmountValue = getValue("input-rent");
    const clothAmountValue = getValue("input-cloth");
    // const outputAmount = getInnertext("output");
    const totalBalanceInner = getInnertext("total-balance");
    const totalCostInner = getInnertext("total-balance");
    const totalCost = (foodAmount + rentAmount + clothAmount);


    const totalAmount = incomeAmount - totalCost;
    document.getElementById('output').innerText = totalAmount;
    


 
})