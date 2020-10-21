export default  function likeBtn() {
    let likeBtn = document.getElementsByClassName('likeBtn__wrapper')
    let selectedBtn = document.getElementsByClassName('selected')
    let quantitylikeBtn;
    let iconLikeBtn;


    for (let i = 0; i < likeBtn.length; i++) {
        quantitylikeBtn = document.getElementsByClassName('likeBtn__quantity')[i].textContent;
        let borderLikeBtn = document.getElementsByClassName('likeBtn')[i]
        likeBtn[i].onclick = function () {
            likeBtn[i].classList.toggle('selected');
            if (selectedBtn[i]) {
                quantitylikeBtn++;
                iconLikeBtn = 'favorite';
                borderLikeBtn.style.backgroundImage = 'linear-gradient(180deg,#bc9cff,#8ba4f9)';
            } else {
                quantitylikeBtn--;
                iconLikeBtn = 'favorite_border';
                borderLikeBtn.style.background = 'rgba(31,32,65,.25)';
            }
            document.getElementsByClassName('likeBtn__quantity')[i].innerHTML = quantitylikeBtn;
            document.getElementsByClassName('likeBtn__icon')[i].innerHTML = iconLikeBtn;

        }


    }
}