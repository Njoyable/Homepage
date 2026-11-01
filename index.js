const menuButton = document.getElementById("menuButton");
const sidenav = document.getElementById("sidenav");

menuButton.addEventListener("click", () => {
    sidenav.classList.toggle("open");
});

document.addEventListener("click", (event) => {
    const clickedInsideNav = sidenav.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (
        window.innerWidth <= 800 &&
        !clickedInsideNav &&
        !clickedMenuButton
    ) {
        sidenav.classList.remove("open");
    }
});