export default  function dropdownFacil() {
    let choice = document.getElementsByClassName("dropdownFacilities")[0];
    choice.addEventListener("click", function () {
        this.classList.toggle("active");
        let facilities = this.nextElementSibling;
        if (facilities.style.display === "block") {
            facilities.style.display = "none";
        } else {
            facilities.style.display = "block";
        }
    });


    let quantity = []
    let minus = []
    let plus = []

    for (let i = 0; i < 3; i++) {
        quantity[i] = document.getElementsByClassName("dropdownFacilities__quantity")[i];
        minus[i] = document.getElementsByClassName("dropdownFacilities__minus")[i];
        plus[i] = document.getElementsByClassName("dropdownFacilities__plus")[i];
    }

    let counter = [0, 0, 0]
    let title = document.getElementsByClassName("dropdownFacilities__name")[0]
    let allFacilities;
    let list = document.getElementsByClassName('dropdownFacilities__list')[0]

    for (let x = 0; x < 3; x++) {
        plus[x].onclick = function () {
            if (counter[x] < 10) {
                counter[x]++;
                quantity[x].value = counter[x];
            }
            allFacilities = counter[0] + counter[1] + counter[2];
            setTitle();
        };
        minus[x].onclick = function () {
            if (counter[x] > 0) {
                counter[x]--;
                quantity[x].value = counter[x];
            }
            allFacilities = counter[0] + counter[1] + counter[2];
            setTitle();
        }
    }

    function setTitle() {
        if (allFacilities > 0) {
            let bedroom;
            let bed;
            let bathroom;
            if (counter[0] > 0) {
                bedroom = counter[0] + ' ' + 'спальни';
                title.innerHTML = bedroom;
            }
            if (counter[1] > 0) {
                bed = counter[1] + ' ' + 'кровати';
                title.innerHTML = bed;
                if (counter[0] > 0) {
                    title.innerHTML = bedroom + ',' + ' ' + bed;
                }
            }
            if (counter[2] > 0) {
                bathroom = counter[2] + ' ' + 'ванные комнаты';
                title.innerHTML = bathroom;
                if (counter[0] > 0) {
                    title.innerHTML = bedroom + ',' + ' ' + bathroom;
                }
                if (counter[1] > 0) {
                    title.innerHTML = bed + ',' + ' ' + bathroom;
                }
                if (counter[1] > 0 && counter[0] > 0) {
                    title.innerHTML = bedroom + ',' + ' ' + bed + ',' + ' ' + bathroom;
                }
            }

        } else {
            title.innerHTML = 'Удобства';

        }
    }
}