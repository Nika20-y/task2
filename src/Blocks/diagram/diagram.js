let numReviews = ['130','65','65','0'] //['excellent','normal','good','disapointed']
let sum = 0;
function arraySum(array){
    for(let i = 0; i < array.length; i++){
        sum += Number(array[i]);
    }
}
arraySum(numReviews);

document.getElementsByClassName('diagram__number')[0].innerHTML=sum
let reviews = document.getElementsByClassName('diagram__segment')
let dasharray = [0,0,0,0]
let dashoffset = [-25,0,0,0]
const n = 0.2 //constant for gap between sectors

window.onload= function () {
    for(let i=0;i<reviews.length;i++) {
         dasharray[i] = (Number(numReviews[i])/ Number(sum)) * 100 - n;
        if(dasharray[i]===-0.2&&i>=1){
            dasharray[i]=0;
            let sumDasharray=0;
            let a=0;
            while (a < dasharray.length){
                sumDasharray=sumDasharray+dasharray[a];
                a++;
            }
            dasharray[i-1]=dasharray[i-1]-(100-Number(sumDasharray));
            reviews[i-1].style.strokeDasharray=dasharray[i-1]+' '+100

        }
        reviews[i].style.strokeDasharray=dasharray[i]+' '+100
        if(i>='1'){
            dashoffset[i]=Number(dashoffset[i-1])-dasharray[i-1]-n*2;
            if (dashoffset[i]<=-100){
                dashoffset[i]=dashoffset[i]+100;
            }
        }
        reviews[i].style.strokeDashoffset=dashoffset[i];
    }
}


