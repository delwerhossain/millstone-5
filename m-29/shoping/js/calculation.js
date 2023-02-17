
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    let totalItem = btnCalculation("input-phone", true);
    let totalprice = totalItem * 1200;
    document.getElementById("phone-price").innerText = totalprice;
    subTotal(totalItem, 1200, true);

});


document.getElementById("btn-phone-minus").addEventListener("click", function () {
    // nanfixed("input-phone");
    const amount = parseFloat(document.getElementById("input-phone").value);
    if (amount <= 0) {
        return;
    }
    nanfixed("input-phone");
    let totalItem = btnCalculation("input-phone", false);
    totalItem = totalItem * 1200;
    document.getElementById("phone-price").innerText = totalItem;
    subTotal(totalItem, 1200, false);
});


// --------------- cover part --------------- 


document.getElementById("btn-cover-plus").addEventListener("click", function coverCal() {
    let totalItem = btnCalculation("input-cover", true);
    totalItem = totalItem * 60;
    document.getElementById("cover-price").innerText = totalItem;

    subTotal(totalItem, 60, true);
});

document.getElementById("btn-cover-minus").addEventListener("click", function phoneCal() {
    // nanfixed("input-cover");
    const amount = parseFloat(document.getElementById("input-cover").value);
    if (amount <= 0) {
        return;
    }
    let totalItem = btnCalculation("input-cover", false);
    totalItem = totalItem * 60;
    document.getElementById("cover-price").innerText = totalItem;
    subTotal(totalItem, 60, false);
});

// --------------- sub total part ---------------

