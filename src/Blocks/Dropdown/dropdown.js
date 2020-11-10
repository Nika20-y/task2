var acc = document.getElementsByClassName("dropdown");
let allGuests= [];

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}
document.addEventListener('DOMContentLoaded', function(){
    setTitle();
}, false);

let quantity = []
let minus = []
let plus = []
let number = document.getElementsByClassName('dropdown__list')
let counter= [];

for (let i = 0; i < acc.length; i++){
    allGuests[i]=0;
    let counter1 = []
    let a = 0;
    while (a < 3){
        let number = document.getElementsByClassName('dropdown__list')
        counter1.push(number[i].getElementsByClassName("dropdown__visitors")[a].value)
        allGuests[i]=allGuests[i]+Number(counter1[a]);
        a++;
    }
    counter.push([counter1]);
}


for (let i = 0; i < acc.length; i++) {
    quantity = number[i].getElementsByClassName("dropdown__visitors");
    minus = number[i].getElementsByClassName("dropdown__minus");
    plus = number[i].getElementsByClassName("dropdown__plus");
    for (let x = 0; x < 3; x++) {
        counter[i][x]= quantity[x].value;
        plus[x].onclick = function () {
            if (counter[i][x] < 100) {
                counter[i][x]++;
                number[i].getElementsByClassName("dropdown__visitors")[x].value = counter[i][x];
                allGuests[i] = allGuests[i]+1;}
            setTitle();

        };
        minus[x].onclick = function () {
            if (counter[i][x] > 0) {
                counter[i][x]--;
                number[i].getElementsByClassName("dropdown__visitors")[x].value = counter[i][x];
                allGuests[i] = allGuests[i]-1;
            }

            setTitle();
        }
    }
}

let title = document.getElementsByClassName("dropdown__name");
let btnClear = document.getElementsByClassName("dropdown__clear");

function setTitle() {
    for(let i=0; i<acc.length; i++){

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
    }}

for(let i=0; i<acc.length; i++) {
    let btnSubmit = document.getElementsByClassName('dropdown__submit')
    btnClear[i].onclick = function () {
        let a = 0;
        while (a < 3){
            number[i].getElementsByClassName("dropdown__visitors")[a].value = 0;
            allGuests[a]=0;
            counter[i][a]=0;
            a++;}
        title[i].innerHTML = 'Сколько гостей';
        btnClear[i].style.visibility = "hidden";
    }
    btnSubmit[i].onclick = function () {
        number[i].style.display = 'none';
    }
}