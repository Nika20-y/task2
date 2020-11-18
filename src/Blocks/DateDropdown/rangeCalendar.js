let inputDate = document.getElementsByClassName("date")
let calendar = document.getElementsByClassName("datepicker")
for(let i=0; i<inputDate.length; i++){
    let inputFormDate = inputDate[i].getElementsByClassName("datepicker__dates")[0]
    calendar[i].addEventListener("click", function () {
        let numberFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.date
        let numberTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.date
        let monthFrom =Number(calendar[i].getElementsByClassName("-range-from-")[0].dataset.month)+1
        let monthTo =Number(calendar[i].getElementsByClassName("-range-to-")[0].dataset.month)+1
        let yearFrom =calendar[i].getElementsByClassName("-range-from-")[0].dataset.year
        let yearTo =calendar[i].getElementsByClassName("-range-to-")[0].dataset.year
        inputFormDate.getElementsByClassName("datepicker__datefrom")[0].innerHTML= numberFrom+"."+monthFrom+"."+yearFrom;
        inputFormDate.getElementsByClassName("datepicker__dateto")[0].innerHTML= numberTo+"."+monthTo+"."+yearTo;
    })
    let btnClear=calendar[i].getElementsByClassName("datepicker--buttons")
    btnClear[i].addEventListener("click", function () {
        inputFormDate.getElementsByClassName("datepicker__datefrom")[0].innerHTML= "ДД.ММ.ГГГГ"
        inputFormDate.getElementsByClassName("datepicker__dateto")[0].innerHTML= "ДД.ММ.ГГГГ"
    })
}