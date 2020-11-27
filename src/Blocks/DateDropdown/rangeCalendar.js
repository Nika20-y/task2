let calendar = document.getElementsByClassName("datepicker")
let inputFormDate = document.getElementsByClassName("datepicker__dates")
for(let i=0; i<inputFormDate.length; i++){
    calendar[i].addEventListener("click", function () {
        let numberFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.date
        let numberTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.date
        let monthFrom =Number(calendar[i].getElementsByClassName("-range-from-")[0].dataset.month)+1
        let monthTo =Number(calendar[i].getElementsByClassName("-range-to-")[0].dataset.month)+1
        let yearFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.year
        let yearTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.year
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= numberFrom+"."+monthFrom+"."+yearFrom;
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= numberTo+"."+monthTo+"."+yearTo;
    })
    let btnClear=calendar[i].getElementsByClassName("datepicker--button")
    btnClear[1].addEventListener("click", function () {
        inputFormDate[i].getElementsByClassName("datepicker__datefrom")[0].innerHTML= "ДД.ММ.ГГГГ"
        inputFormDate[i].getElementsByClassName("datepicker__dateto")[0].innerHTML= "ДД.ММ.ГГГГ"
    })
}