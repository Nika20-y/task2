let likeBtn = document.getElementsByClassName('likeBtn')
let selectedBtn = document.getElementsByClassName('selected')
let quantitylikeBtn;
let iconLikeBtn


for(let i=0; i<likeBtn.length; i++) {
    quantitylikeBtn = document.getElementsByClassName('likeBtn__quantity')[i].textContent;
      likeBtn[i].onclick = function () {
          likeBtn[i].classList.toggle('selected');
          if (selectedBtn[i]){
              quantitylikeBtn++;
              iconLikeBtn= 'favorite';
          }
          else {
              quantitylikeBtn--;
              iconLikeBtn= 'favorite_border';
          }
         document.getElementsByClassName('likeBtn__quantity')[i].innerHTML= quantitylikeBtn;
          document.getElementsByClassName('likeBtn__icon')[i].innerHTML = iconLikeBtn;

      }


}
