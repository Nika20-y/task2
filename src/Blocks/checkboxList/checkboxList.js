
    let checkboxList = document.getElementsByClassName("checkboxList__wrapper");
 for(let i=0; i<checkboxList.length; i++){
    checkboxList[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let checkbox = this.nextElementSibling;
        let iconCheckbox = document.getElementsByClassName("checkboxList__icon-item")[i];
        if (checkbox.style.display === "block") {
            checkbox.style.display = "none";
            iconCheckbox.style.transform = "none";
        } else {
            checkbox.style.display = "block";
            iconCheckbox.style.transform = "rotate(180deg)";
        }
    });}
