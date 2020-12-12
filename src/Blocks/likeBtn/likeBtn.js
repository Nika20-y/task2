let likeBtn = document.getElementsByClassName('likeBtn')
let quantitylikeBtn;
let iconLikeBtn;

activateLikeBtn();

function activateLikeBtn() {

    for (let i = 0; i < likeBtn.length; i++) {
        likeBtn[i].onclick = function () {
            likeBtn[i].classList.toggle("likeBtn-selected");
            quantitylikeBtn = document.getElementsByClassName('likeBtn__quantity')[i].innerHTML;
            if (likeBtn[i].classList.contains('likeBtn-selected')) {
                quantitylikeBtn++;
                iconLikeBtn = 'favorite';
            } else {
                iconLikeBtn = 'favorite_border';
                quantitylikeBtn--;
            }
            document.getElementsByClassName('likeBtn__quantity')[i].innerHTML = quantitylikeBtn;
            document.getElementsByClassName('likeBtn__icon')[i].innerHTML = iconLikeBtn;
        }
    }
}
