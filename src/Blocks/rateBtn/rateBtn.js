export default  function rateBtn() {
    let rateBtn = document.getElementsByClassName('rateBtn__icon');
    for (let i = 0; i < rateBtn.length; i++) {
        rateBtn[i].onclick = function () {
            let star = document.getElementsByClassName('material-icons')[i].innerHTML;
            if (star === 'star_border') {
                star = 'star';
                for (let a = 0; a <= i; a++) {
                    document.getElementsByClassName('material-icons')[a].innerHTML = star;
                }
            } else {
                star = 'star_border'
                for (let a = i + 1; a < rateBtn.length; a++) {
                    document.getElementsByClassName('material-icons')[a].innerHTML = star;
                }
            }
        }
    }
}