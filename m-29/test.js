// --------------- cover part --------------- 

document.getElementById("btn-cover-plus").addEventListener("click", function () {
    let totalItem = btncover(true);
    totalItem = totalItem * 10;
    // let coverPrice = parseInt(document.getElementById("cover-price").innerText);
    document.getElementById("cover-price").innerText = totalItem;
    
});

document.getElementById("btn-cover-minus").addEventListener("click", function () {
    let totalItem = btncover(false);
    totalItem = totalItem * 10;
    document.getElementById("cover-price").innerText = totalItem; 
});