let burgerButton = document.getElementsByClassName("header__navMobile")
for (let i=0; i<burgerButton.length; i++) {
        burgerButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.opacity === "1") {
            panel.style.opacity = "0";

        } else {
            panel.style.opacity = "1";

        }
    })
}