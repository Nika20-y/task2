
    let rateBtn = document.getElementsByClassName('rateBtn');
    let quantityStar = rateBtn.length*5;
    for (let i = 0; i < rateBtn.length; i++) {
        let rateBtnIcon = rateBtn[i].getElementsByClassName('rateBtn__icon');
        for (let a = 0; a < rateBtnIcon.length; a++) {
            rateBtnIcon[a].onclick = function () {
                let star =  rateBtnIcon[a].getElementsByClassName('rateBtn__icon-star')[0].innerHTML;
                if (star === 'star_border') {
                    star = 'star';
                    for (let x = 0; x <= a; x++) {
                        rateBtn[i].getElementsByClassName('rateBtn__icon-star')[x].innerHTML = star;
                    }
                } else {
                    star = 'star_border'
                    for (let x = a + 1; x < rateBtnIcon.length; x++) {
                        rateBtn[i].getElementsByClassName('rateBtn__icon-star')[x].innerHTML = star;
                    }
                }
            }
        }

    }
