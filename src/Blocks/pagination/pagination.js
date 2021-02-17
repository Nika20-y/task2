let numPage = document.getElementsByClassName('pagination__number')
let activeNum;
let nextPage = document.getElementsByClassName('pagination__next')[0]
let textPage = document.getElementsByClassName('pagination__text')[0]


function toggleActiveNum(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i].addEventListener("click", function () {
            activeNum = document.getElementsByClassName('pagination__number-active')[0]
            if(arr[i]!==activeNum){
                activeNum.classList.remove('pagination__number-active');
                arr[i].classList.add('pagination__number-active');
                let activePage = Number(arr[i].getElementsByClassName('pagination__page')[0].innerHTML);
                let from =activePage*12-11;
                let to = activePage*12;
                textPage.innerHTML = from +' - '+ to +' из 100+ вариантов аренды'
            }
        })
    }
}

function toggleNextPage(button) {
button.addEventListener("click", function () {
    activeNum = document.getElementsByClassName('pagination__number-active')[0];
    let nextNum = activeNum.nextElementSibling;
    if(nextNum!==button){
    activeNum.classList.remove('pagination__number-active');
    nextNum.classList.add('pagination__number-active');
    let activePage = Number(nextNum.getElementsByClassName('pagination__page')[0].innerHTML)
        let from = activePage*12-11;
        let to = activePage*12;
        textPage.innerHTML = from +' - '+ to +' из 100+ вариантов аренды'
    }
})
}

toggleActiveNum(numPage);
toggleNextPage(nextPage);