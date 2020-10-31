var inputLeft = document.getElementsByClassName("rangeSlider__input1")[0];
var inputRight = document.getElementsByClassName("rangeSlider__input2")[0];

var thumbLeft = document.getElementsByClassName("rangeSlider__thumbLeft")[0];
var thumbRight = document.getElementsByClassName("rangeSlider__thumbRight")[0];
var range = document.getElementsByClassName("rangeSlider__range")[0];
var rangePrice = document.getElementsByClassName("rangeSlider__values")[0];
rangePrice.innerHTML = inputLeft.value + "₽"+ " - "+ inputRight.value+"₽";

function setLeftValue() {
    var leftButton = inputLeft,
        min = parseInt(leftButton.min),
        max = parseInt(leftButton.max);

    leftButton.value = Math.min(parseInt(leftButton.value), parseInt(inputRight.value));

    var percent = ((leftButton.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    rangePrice.innerHTML = leftButton.value + "₽"+ " - "+ inputRight.value+"₽";
}
setLeftValue();

function setRightValue() {
    var rightButton = inputRight,
        min = parseInt(rightButton.min),
        max = parseInt(rightButton.max);

    rightButton.value = Math.max(parseInt(rightButton.value), parseInt(inputLeft.value) + 1);

    var percent = ((rightButton.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    rangePrice.innerHTML = inputLeft.value + "₽"+ " - "+ rightButton.value+"₽";
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);
