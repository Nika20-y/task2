export default function checkboxList () {
    let checkboxList = document.getElementsByClassName("checkboxList__wrapper")[0];
    checkboxList.addEventListener("click", function () {

        this.classList.toggle("active");
        let checkbox = this.nextElementSibling;
        let icon = document.getElementsByClassName("material-icons")[0];
        if (checkbox.style.display === "block") {
            checkbox.style.display = "none";
            icon.style.transform = "none";
        } else {
            checkbox.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
}