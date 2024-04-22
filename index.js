document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function(dropdown) {
        const isClickInside = dropdown.parentNode.contains(event.target);
        if (!isClickInside) {
            dropdown.style.display = "none";
        }
    });
});

const dropbtn = document.querySelector(".dropbtn");
dropbtn.addEventListener("click", function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display =
        dropdownContent.style.display === "none" || !dropdownContent.style.display
            ? "block"
            : "none";
});
