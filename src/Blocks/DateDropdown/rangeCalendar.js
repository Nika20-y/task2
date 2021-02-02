
let calendar = document.getElementsByClassName("datepicker")
let inputFormDate = document.getElementsByClassName("datepicker__dates")
for(let i=0; i<inputFormDate.length; i++){
    let a = i;
    if(document.querySelector('.datepicker-here.datepicker-inactive') !== null){
        a++;
    }
    calendar[a].addEventListener("click", function () {
        let numberFrom =calendar[a].getElementsByClassName("-range-from-")[0].dataset.date;
        let numberTo =calendar[a].getElementsByClassName("-range-to-")[0].dataset.date;
        let monthFrom =Number(calendar[a].getElementsByClassName("-range-from-")[0].dataset.month)+1;
        let monthTo =Number(calendar[a].getElementsByClassName("-range-to-")[0].dataset.month)+1;
        let yearFrom =calendar[a].getElementsByClassName("-range-from-")[0].dataset.year;
        let yearTo =calendar[a].getElementsByClassName("-range-to-")[0].dataset.year;
        monthFrom = monthFrom < 10 ? '0' + monthFrom : monthFrom;
        numberFrom = numberFrom < 10 ? '0' + numberFrom : numberFrom;
        monthTo = monthTo < 10 ? '0' + monthTo : monthTo;
        numberTo = numberTo < 10 ? '0' + numberTo : numberTo;
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= numberFrom+"."+monthFrom+"."+yearFrom;
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= numberTo+"."+monthTo+"."+yearTo;
    })
    let btnClear=calendar[i].getElementsByClassName("datepicker--button")
    btnClear[1].addEventListener("click", function () {
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= "ДД.ММ.ГГГГ"
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= "ДД.ММ.ГГГГ"
    })
}