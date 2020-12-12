let dropdownVisitor = document.getElementsByClassName("dropdown");
let allGuests= [];

function activateDropdown (){
    for (let i = 0; i < dropdownVisitor.length; i++) {
    dropdownVisitor[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let dropdownVisitorList = this.nextElementSibling;
        if (dropdownVisitorList.style.display === "block") {
            dropdownVisitorList.style.display = "none";
        } else {
            dropdownVisitorList.style.display = "block";
        }
    })
}}

activateDropdown();

document.addEventListener('DOMContentLoaded', function(){
    setTitle();
}, false);

let quantityVisitors = []
let minusVisitor = []
let plusVisitor = []
let blockVisitors = document.getElementsByClassName('dropdown__list')
let counterVisitors= [];

for (let i = 0; i < dropdownVisitor.length; i++){
    allGuests[i]=0;
    let counterVisitors1 = []
    let a = 0;
    while (a < 3){
        let number = document.getElementsByClassName('dropdown__list')
        counterVisitors1.push(number[i].getElementsByClassName("dropdown__visitors")[a].value)
        allGuests[i]=allGuests[i]+Number(counterVisitors1[a]);
        a++;
    }
    counterVisitors.push([counterVisitors1]);
}

function countVisitors() {
    for (let i = 0; i < dropdownVisitor.length; i++) {
        quantityVisitors = blockVisitors[i].getElementsByClassName("dropdown__visitors");
        minusVisitor = blockVisitors[i].getElementsByClassName("dropdown__minus");
        plusVisitor = blockVisitors[i].getElementsByClassName("dropdown__plus");
        for (let x = 0; x < 3; x++) {
            counterVisitors[i][x] = quantityVisitors[x].value;
            plusVisitor[x].onclick = function () {
                if (counterVisitors[i][x] < 100) {
                    counterVisitors[i][x]++;
                    blockVisitors[i].getElementsByClassName("dropdown__visitors")[x].value = counterVisitors[i][x];
                    allGuests[i] = allGuests[i] + 1;
                }
                setTitle();
                blockVisitors[i].getElementsByClassName("dropdown__minus")[x].style.opacity = '1';
            };
            minusVisitor[x].onclick = function () {
                if (counterVisitors[i][x] > 0) {
                    counterVisitors[i][x]--;
                    blockVisitors[i].getElementsByClassName("dropdown__visitors")[x].value = counterVisitors[i][x];
                    allGuests[i] = allGuests[i] - 1;
                }
                if (counterVisitors[i][x] === 0) {
                    blockVisitors[i].getElementsByClassName("dropdown__minus")[x].style.opacity = '0.5';
                }
                setTitle();
            }
            if (quantityVisitors[x].value > 0) {
                minusVisitor[x].style.opacity = '1';
            } else {
                minusVisitor[x].style.opacity = '0.5';
            }

        }
    }
}
countVisitors();

let title = document.getElementsByClassName("dropdown__name");
let btnClear = document.getElementsByClassName("dropdown__clear");

function setTitle() {
    for(let i=0; i<dropdownVisitor.length; i++){

        if (allGuests[i] > 0) {
            if (allGuests[i] === 1) {
                title[i].innerHTML = '1 гость';
            } else if (allGuests[i] < 5) {
                title[i].innerHTML = allGuests[i] + ' ' + 'гостя';
            } else {
                title[i].innerHTML = allGuests[i] + ' ' + 'гостей';
            }
            btnClear[i].style.visibility = "visible";
        } else {
            title[i].innerHTML = 'Сколько гостей';
            btnClear[i].style.visibility = "hidden";
        }

    }
}

activateButtons();

function activateButtons() {

    for (let i = 0; i < dropdownVisitor.length; i++) {
        let btnSubmit = document.getElementsByClassName('dropdown__submit')
        btnClear[i].onclick = function () {
            let a = 0;
            while (a < 3) {
                blockVisitors[i].getElementsByClassName("dropdown__visitors")[a].value = 0;
                allGuests[i] = 0;
                counterVisitors[i][a] = 0;
                a++;
            }
            title[i].innerHTML = 'Сколько гостей';
            btnClear[i].style.visibility = "hidden";
        }
        btnSubmit[i].onclick = function () {
            blockVisitors[i].style.display = 'none';
        }
    }
}
