
let menuID = document.getElementById('menu-main-heading');
let menuClass = document.getElementsByClassName('menu-li');
for (let li of menuClass){
    console.log(li)
}
// console.log(menuID);
let liTag = document.getElementsByTagName('li')
// console.log(liTag)
let qurrySelect = document.querySelector('.banner p');
qurrySelect.innerHTML =' this sms form js ';
// console.log(qurrySelect.innerHTML);

let sectionQurry = document.querySelectorAll('section')
for (let i of sectionQurry){
    // console.log(i.innerHTML)
    i.style.border= '2px solid black';
}
let placeContainer = document.getElementById('barner');
// placeContainer.classList.add('bg-yl');
// placeContainer.classList.remove('bg-yl');
