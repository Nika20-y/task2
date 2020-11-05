
    let choice = document.getElementsByClassName("dropdownFacilities");

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
        quantity[i] = document.getElementsByClassName("dropdownFacilities__quantity")[i];
        minus[i] = document.getElementsByClassName("dropdownFacilities__minus")[i];
        plus[i] = document.getElementsByClassName("dropdownFacilities__plus")[i];
    }

    let counter = []
    let a = 0;
    let allFacilities=0;
    while (a < choice.length*3){
        counter.push(document.getElementsByClassName("dropdownFacilities__quantity")[a].value)
        allFacilities=allFacilities+Number(counter[a]);
        a++;
    }


    for (let x = 0; x < choice.length*3; x++) {
        plus[x].onclick = function () {
            if (counter[x] < 100) {
                counter[x]++;
                quantity[x].value = counter[x];
            }
            allFacilities = allFacilities+counter[x];
            setTitle();
        };
        minus[x].onclick = function () {
            if (counter[x] > 0) {
                counter[x]--;
                quantity[x].value = counter[x];
            }
            allFacilities = allFacilities-counter[x];
            setTitle();
        }
    }

    function setTitle() {
        for( let i=0; i<choice.length;i++) {
            var title = document.getElementsByClassName("dropdownFacilities__name")[i];
            if (allFacilities > 0) {
                let bedroom;
                let bed;
                let bathroom;
                var ordinal = i * 3;
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
            } else {
                title.innerHTML = 'Удобства';
            }
        }
}