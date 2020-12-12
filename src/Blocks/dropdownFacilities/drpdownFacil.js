
    let choiceFacility = document.getElementsByClassName("dropdownFacilities");
    let listFacility = document.getElementsByClassName("dropdownFacilities__list");

function activeDropdownFacil() {

    for (let i = 0; i < choiceFacility.length; i++) {
        choiceFacility[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let facilities = this.nextElementSibling;
            if (facilities.style.display === "block") {
                facilities.style.display = "none";
            } else {
                facilities.style.display = "block";
            }
        });
    }
}
activeDropdownFacil();

    document.addEventListener('DOMContentLoaded', function(){
        setTitle();
    }, false);

    let quantityFacilities = []
    let minusFacility = []
    let plusFacility = []
    let counterFacilities = []
    let allFacilities=[];


    for(let i=0; i<choiceFacility.length; i++){
        allFacilities[i]=0;
        let a = 0;
    while (a < 3) {
        counterFacilities.push(listFacility[i].getElementsByClassName("dropdownFacilities__quantity")[a].value)
        allFacilities[i] = allFacilities[i] + Number(counterFacilities[a]);
        a++;
    }
    }

function countFacilities() {

    for (let i = 0; i < choiceFacility.length; i++) {
        quantityFacilities = listFacility[i].getElementsByClassName("dropdownFacilities__quantity");
        minusFacility = listFacility[i].getElementsByClassName("dropdownFacilities__minus");
        plusFacility = listFacility[i].getElementsByClassName("dropdownFacilities__plus");
        for (let x = 0; x < 3; x++) {
            counterFacilities[x + (i * 3)] = quantityFacilities[x].value;
            plusFacility[x].onclick = function () {
                if (counterFacilities[x + (i * 3)] < 100) {
                    counterFacilities[x + (i * 3)]++;
                    listFacility[i].getElementsByClassName("dropdownFacilities__quantity")[x].value = counterFacilities[x + (i * 3)];
                }
                allFacilities[i] = allFacilities[i] + 1;
                listFacility[i].getElementsByClassName("dropdownFacilities__minus")[x].style.opacity = "1";
                setTitle();
            };
            minusFacility[x].onclick = function () {
                if (counterFacilities[x + (i * 3)] > 0) {
                    allFacilities[i] = allFacilities[i] - 1;
                    counterFacilities[x + (i * 3)]--;
                    listFacility[i].getElementsByClassName("dropdownFacilities__quantity")[x].value = counterFacilities[x + (i * 3)];
                }
                if (counterFacilities[x + (i * 3)] === 0) {
                    listFacility[i].getElementsByClassName("dropdownFacilities__minus")[x].style.opacity = "0.5";
                }
                setTitle();
            }
            if (quantityFacilities[x].value > 0) {
                minusFacility[x].style.opacity = '1';
            } else {
                minusFacility[x].style.opacity = '0.5';
            }
        }
    }
}
    countFacilities();


    function setTitle() {
        for( let i=0; i<choiceFacility.length;i++) {
            let title = document.getElementsByClassName("dropdownFacilities__name")[i];
            let ordinal = i * 3;
            if (allFacilities[i] > 0) {
                let bedroom;
                let bed;
                let bathroom;
                if (counterFacilities[ordinal] > 0) {
                    bedroom = counterFacilities[ordinal] + ' ' + 'спальни';
                    title.innerHTML = bedroom;
                }
                if (counterFacilities[1 + ordinal] > 0) {
                    bed = counterFacilities[1 + ordinal] + ' ' + 'кровати';
                    title.innerHTML = bed;
                    if (counterFacilities[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bed + '...';
                    }
                }
                if (counterFacilities[2 + ordinal] > 0) {
                    bathroom = counterFacilities[2 + ordinal] + ' ' + 'ванные комнаты';
                    title.innerHTML = bathroom;
                    if (counterFacilities[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bathroom + '...';
                    }
                    if (counterFacilities[1 + ordinal] > 0) {
                        title.innerHTML = bed + ',' + ' ' + bathroom + '...';
                    }
                    if (counterFacilities[1 + ordinal] > 0 && counterFacilities[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bed + '...';
                    }
                }
            }
            else {
                title.innerHTML = 'Удобства';
            }
        }
}