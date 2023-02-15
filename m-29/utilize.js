function btnCalculation(inputElmentById, isIncrese) {
    const inputValue = parseInt(document.getElementById(inputElmentById).value);
    let newInputValue;
    if (isIncrese) {
        newInputValue = inputValue + 1;
    }
    else {
        newInputValue = inputValue - 1;
    }
    document.getElementById(inputElmentById).value = newInputValue;
    if (newInputValue < 0) {
        alert("select atleast one Item");
        document.getElementById(inputElmentById).value = 0;
        let zeroValue = Math.abs(newInputValue);
        zeroValue = 0;
        return zeroValue;
    }
    return Math.abs(newInputValue);

}

function subTotal(itemValue, itemPrice, isIncresetting) {
    let subInnertext = parseInt((document.getElementById("sub-total").innerText));
    // let inputValue = parseInt(document.getElementById(itemValue).value);

    let subTotal;
    if (isIncresetting && itemValue > 0) {

        subTotal = subInnertext + itemPrice;

    }
    else if (!isIncresetting && itemValue > 0) {
        subTotal = parseInt(subInnertext) - itemPrice;
    }

    document.getElementById("sub-total").innerText = subTotal;
}
