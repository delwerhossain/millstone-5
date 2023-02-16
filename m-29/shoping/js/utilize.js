// function nanfixed(inputPhone) {
//     const amount = parseFloat(document.getElementById(inputPhone).value);
//     if (amount <= 0) {
//         return 0;
//     }
// }
function btnCalculation(inputElmentById, isIncrese) {
    const inputValue = parseInt(document.getElementById(inputElmentById).value);
    // if (inputValue <= 0) {
    //     return;
    // }
    // else if (isNaN(inputValue)) {
    //     return;
    // }
    // else if (inputValue > 0){
    let newInputValue;
    if (isIncrese) {
        newInputValue = inputValue + 1;
    }
    else {
        newInputValue = inputValue - 1;
    }
    document.getElementById(inputElmentById).value = newInputValue;
    // return Math.abs(newInputValue);
    if (newInputValue < 0) {
        alert("select atleast one Item");
        document.getElementById(inputElmentById).value = 0;
        let zeroValue = Math.abs(newInputValue);
        zeroValue = 0;
        return zeroValue;
    }
    else if (newInputValue === 0) {

    }
    return Math.abs(newInputValue);

}

// }


// sub total price calculation


function subTotal(itemValue, itemPrice, isIncresetting) {
    let subInnertext = parseInt((document.getElementById("sub-total").innerText));
    // let inputValue = parseInt(document.getElementById(itemValue).value);

    let subTotal;
    if (isIncresetting && itemValue > 0) {

        subTotal = subInnertext + itemPrice;
        document.getElementById("sub-total").innerText = subTotal;

    }
    else if (!isIncresetting && itemValue > 0) {
        subTotal = parseInt(subInnertext) - itemPrice;
        document.getElementById("sub-total").innerText = subTotal;
    }
    else if (!isIncresetting && itemValue === 0) {

        subTotal = parseInt(subInnertext) - itemPrice;
        document.getElementById("sub-total").innerText = subTotal;
    }
    else if (itemPrice < 0) {
        return;
    }
}

function Total() {
    
}
