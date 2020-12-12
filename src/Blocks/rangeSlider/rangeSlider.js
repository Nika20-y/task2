let inputLeft = document.getElementsByClassName("rangeSlider__input1")[0];
let inputRight = document.getElementsByClassName("rangeSlider__input2")[0];

let thumbLeft = document.getElementsByClassName("rangeSlider__thumbLeft")[0];
let thumbRight = document.getElementsByClassName("rangeSlider__thumbRight")[0];
let range = document.getElementsByClassName("rangeSlider__range")[0];
let rangePrice = document.getElementsByClassName("rangeSlider__values")[0];
rangePrice.innerHTML = inputLeft.value + "₽"+ " - "+ inputRight.value+"₽";

function setLeftValue() {
    let leftButton = inputLeft,
        min = parseInt(leftButton.min),
        max = parseInt(leftButton.max);

    leftButton.value = Math.min(parseInt(leftButton.value), parseInt(inputRight.value));

    let percent = ((leftButton.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "3%";
    range.style.left = percent + "%";
    rangePrice.innerHTML = leftButton.value + "₽"+ " - "+ inputRight.value+"₽";
}
setLeftValue();

function setRightValue() {
    let rightButton = inputRight,
        min = parseInt(rightButton.min),
        max = parseInt(rightButton.max);

    rightButton.value = Math.max(parseInt(rightButton.value), parseInt(inputLeft.value) + 1);

    let percent = ((rightButton.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + 3 + "%";
    range.style.right = (100 - percent) + "%";
    rangePrice.innerHTML = inputLeft.value + "₽"+ " - "+ rightButton.value+"₽";
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);
