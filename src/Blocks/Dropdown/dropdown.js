
    var acc = document.getElementsByClassName("dropdown");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


    let quantity = []
    let minus = []
    let plus = []

    for (let i = 0; i < 3; i++) {
        quantity[i] = document.getElementsByClassName("dropdown__visitors")[i];
        minus[i] = document.getElementsByClassName("dropdown__minus")[i];
        plus[i] = document.getElementsByClassName("dropdown__plus")[i];
    }

    let counter = [0, 0, 0]
    let btnClear = document.getElementsByClassName('dropdown__clear')[0];
    let btnSubmit = document.getElementsByClassName('dropdown__submit')[0]
    let title = document.getElementsByClassName("dropdown__name")[0]
    let allGuests;
    let list = document.getElementsByClassName('dropdown__list')[0]

    for (let x = 0; x < 3; x++) {
        plus[x].onclick = function () {
            if (counter[x] < 10) {
                counter[x]++;
                quantity[x].value = counter[x];
            }
            allGuests = counter[0] + counter[1] + counter[2];
            setTitle();
        };
        minus[x].onclick = function () {
            if (counter[x] > 0) {
                counter[x]--;
                quantity[x].value = counter[x];
            }
            allGuests = counter[0] + counter[1] + counter[2];
            setTitle();
        }
    }
    btnClear.onclick = function () {
        quantity[0].value = 0;
        quantity[1].value = 0;
        quantity[2].value = 0;
        counter[0] = 0;
        counter[1] = 0;
        counter[2] = 0;
        title.innerHTML = 'Сколько гостей';
        btnClear.style.visibility = "hidden";
    }
    btnSubmit.onclick = function () {
        list.style.display = 'none';
    }

    function setTitle() {
        if (allGuests > 0) {
            if (allGuests === 1) {
                title.innerHTML = '1 гость';
            } else if (allGuests < 5) {
                title.innerHTML = allGuests + ' ' + 'гостя';
            } else {
                title.innerHTML = allGuests + ' ' + 'гостей';
            }
            btnClear.style.visibility = "visible";
        } else {
            title.innerHTML = 'Сколько гостей';
            btnClear.style.visibility = "hidden";
        }
    }


