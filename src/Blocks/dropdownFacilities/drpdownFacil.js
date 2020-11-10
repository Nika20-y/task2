
    let choice = document.getElementsByClassName("dropdownFacilities");
    let list = document.getElementsByClassName("dropdownFacilities__list");

    for(let i=0; i<choice.length; i++){
    choice[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let facilities = this.nextElementSibling;
        if (facilities.style.display === "block") {
            facilities.style.display = "none";
        } else {
            facilities.style.display = "block";
        }
    });}

    document.addEventListener('DOMContentLoaded', function(){
        setTitle();
    }, false);

    let quantity = []
    let minus = []
    let plus = []

    for (let i = 0; i < choice.length*3; i++) {

    }

    let counter = []

    let allFacilities=[];
    for(let i=0; i<choice.length; i++){
        allFacilities[i]=0;
        let a = 0;
    while (a < 3) {
        counter.push(list[i].getElementsByClassName("dropdownFacilities__quantity")[a].value)
        allFacilities[i] = allFacilities[i] + Number(counter[a]);
        a++;
    }
    }

    for(let i=0; i<choice.length; i++){
        quantity = list[i].getElementsByClassName("dropdownFacilities__quantity");
        minus = list[i].getElementsByClassName("dropdownFacilities__minus");
        plus = list[i].getElementsByClassName("dropdownFacilities__plus");
    for (let x = 0; x < 3; x++) {
        counter[x+(i*3)]= quantity[x].value;
        plus[x].onclick = function () {
            if (counter[x+(i*3)] < 100) {
                counter[x+(i*3)]++;
                list[i].getElementsByClassName("dropdownFacilities__quantity")[x].value = counter[x+(i*3)];
            }
            allFacilities[i] = allFacilities[i]+1;
            list[i].getElementsByClassName("dropdownFacilities__minus")[x].style.opacity="1";
            setTitle();
        };
        minus[x].onclick = function () {
            if (counter[x+(i*3)] > 0) {
                allFacilities[i] = allFacilities[i]-1;
                counter[x+(i*3)]--;
                list[i].getElementsByClassName("dropdownFacilities__quantity")[x].value = counter[x+(i*3)];
            }
            if (counter[x+(i*3)]===0) {
                list[i].getElementsByClassName("dropdownFacilities__minus")[x].style.opacity="0.5";
            }
            setTitle();
            }
        if (quantity[x].value > 0) {
            minus[x].style.opacity = '1';
        } else {
            minus[x].style.opacity = '0.5';
        }
    }}



    function setTitle() {
        for( let i=0; i<choice.length;i++) {
            var title = document.getElementsByClassName("dropdownFacilities__name")[i];
            var ordinal = i * 3;
            if (allFacilities[i] > 0) {
                let bedroom;
                let bed;
                let bathroom;
                if (counter[ordinal] > 0) {
                    bedroom = counter[ordinal] + ' ' + 'спальни';
                    title.innerHTML = bedroom;
                }
                if (counter[1 + ordinal] > 0) {
                    bed = counter[1 + ordinal] + ' ' + 'кровати';
                    title.innerHTML = bed;
                    if (counter[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bed + '...';
                    }
                }
                if (counter[2 + ordinal] > 0) {
                    bathroom = counter[2 + ordinal] + ' ' + 'ванные комнаты';
                    title.innerHTML = bathroom;
                    if (counter[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bathroom + '...';
                    }
                    if (counter[1 + ordinal] > 0) {
                        title.innerHTML = bed + ',' + ' ' + bathroom + '...';
                    }
                    if (counter[1 + ordinal] > 0 && counter[ordinal] > 0) {
                        title.innerHTML = bedroom + ',' + ' ' + bed + '...';
                    }
                }
            }
            else {
                title.innerHTML = 'Удобства';
            }
        }
}