let inputDate = document.getElementsByClassName("datepicker-here")
let calendar = document.getElementsByClassName("datepicker")
for(let i=0; i<inputDate.length; i++){
    let inputFormDate = document.getElementsByClassName("datepicker__dates")
    calendar[i].addEventListener("click", function () {
        let numberFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.date
        let numberTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.date
        let monthFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.month
        let monthTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.month
        let yearFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.year
        let yearTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.year
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= numberFrom+"."+monthFrom+"."+yearFrom;
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= numberTo+"."+monthTo+"."+yearTo;
    })
    let btnClear=calendar[i].getElementsByClassName("datepicker--buttons")
    btnClear[i].addEventListener("click", function () {
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= "ДД.ММ.ГГГГ"
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= "ДД.ММ.ГГГГ"
    })
}