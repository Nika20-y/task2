var element = document.getElementById('masked');
var maskOptions = {
    mask: '00.00.2000',
    lazy: false
};
var mask = IMask(element, maskOptions);