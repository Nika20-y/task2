


    document.getElementsByClassName('dropdown').onclick = function() {
        open('dropdown__list', this);
        return false;
    };

function open( ) {
    let div = document.getElementsByClassName('dropdown__list');
    if(div.style.display === 'none') {
        div.style.display = 'block';

    }
else {
        div.style.display = 'none';

    }
}
