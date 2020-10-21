setTimeout(init2slider('rangeSlider__item', 'rangeSlider__beetwen', 'rangeSlider__button1', 'rangeSlider__button2', 'rangeSlider__input1', 'rangeSlider__input2'), 0);

export default function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
        let slider = document.getElementsByClassName('rangeSlider__item')[0];
        let between = document.getElementsByClassName('rangeSlider__beetwen')[0];
        let button1 = document.getElementsByClassName('rangeSlider__button1')[0];
        let button2 = document.getElementsByClassName('rangeSlider__button2')[0];
        let inpt1 = document.getElementsByClassName('rangeSlider__input1')[0];
        let inpt2 = document.getElementsByClassName('rangeSlider__input2')[0];

        let min = 0;
        let max = 30000;

        button1.style.marginLeft = '0px';
        button2.style.marginLeft = (slider.offsetWidth - button1.offsetWidth) + 'px';
        between.style.width = (slider.offsetWidth - button1.offsetWidth) + 'px';


        function getCoords(elem) {
            let object = elem.getBoundingClientRect();
            return {
                top: object.top + pageYOffset,
                left: object.left + pageXOffset
            };
        }

        let sliderCoords = getCoords(slider);

        button1.onmousedown = function (event) {
            let button1Coords = getCoords(button1);
            let button2Coords = getCoords(button2);
            let diffSlider1 = event.pageX - button1Coords.left;
            let diffSlider2 = event.pageX - button2Coords.left;

            document.onmousemove = function (event) {

                let left1 = event.pageX - diffSlider1 - sliderCoords.left;
                let right1 = slider.offsetWidth - button1.offsetWidth;
                if (left1 < 0) left1 = 0;
                if (left1 > right1) left1 = right1;
                button1.style.marginLeft = left1 + 'px';

                diffSlider2 = event.pageX - button2Coords.left;
                let left2 = event.pageX - diffSlider2 - sliderCoords.left;
                let right2 = slider.offsetWidth - button2.offsetWidth;
                if (left2 < 0) left2 = 0;
                if (left2 > right2) left2 = right2;


                let per_min = 0;
                let per_max = 0;
                if (left1 > left2) {
                    button1.style.marginLeft =button2.style.marginLeft;
                    between.style.width = '0';
                    between.style.marginLeft = left1 + 'px';
                    per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
                    per_max = per_min;
                } else {
                    between.style.width = (left2 - left1) + 'px';
                    between.style.marginLeft = left1 + 'px';

                    per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
                    per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
                }

                inpt1.innerHTML = Math.round((max - min) * per_min / 100) + '₽';
                inpt2.innerHTML = Math.round((max - min) * per_max / 100) + '₽';

            };
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        };


        button2.onmousedown = function (event) {
            let button1Coords = getCoords(button1);
            let button2Coords = getCoords(button2);
            let diffSlider2 = event.pageX - button2Coords.left;
            let diffSlider1 = event.pageX - button1Coords.left;
            if(button2.offsetLeft>=button1.offsetLeft){
                button2Coords=button1Coords;
            }
            document.onmousemove = function (event) {
                let left2 = event.pageX - diffSlider2 - sliderCoords.left;
                let right2 = slider.offsetWidth - button2.offsetWidth;
                if (left2 < 0) left2 = 0;
                if (left2 > right2) left2 = right2;
                button2.style.marginLeft = left2 + 'px';

                diffSlider1 = event.pageX - button1Coords.left;
                let left1 = event.pageX - diffSlider1 - sliderCoords.left;
                let right1 = slider.offsetWidth - button1.offsetWidth;
                if (left1 < 0) left1 = 0;
                if (left1 > right1) left1 = right1;

                let per_min = 0;
                let per_max = 0;

                if (left1 > left2) {
                    button2.style.marginLeft =button1.style.marginLeft;
                    between.style.width = '0';
                    between.style.marginLeft = left1 + 'px';
                    per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
                    per_max = per_min;
                } else {
                    between.style.width = (left2 - left1) + 'px';
                    between.style.marginLeft = left1 + 'px';
                    per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
                    per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
                }
                inpt1.innerHTML = Math.round((max - min) * per_min / 100) + '₽';
                inpt2.innerHTML = Math.round((max - min) * per_max / 100) + '₽';

            }
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        }
    }


