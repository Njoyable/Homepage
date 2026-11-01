document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DATE OPTIONS
    // =========================

    const allDates = [
        "Aquarium",
        "Sunset / Sunrise Gazing",
        "Book Store",
        "Museum",
        "Photo Shooting",
        "Concert",
        "Lego",
        "Cooking / Baking",
        "Night Stroll",
        "Painting",
        "Movie Night",
        "Late Night / Sleepover",
        "Restaurant",
        "Day Stroll",
        "Café",
        "Zoo",
        "Random City Trip",
        "Bowling",
        "Billiards",
        "Flea Market",
        "Puzzle"
    ];


    const firstDates = [
        "Aquarium",
        "Museum",
        "Cooking / Baking",
        "Night Stroll",
        "Restaurant",
        "Day Stroll",
        "Café",
        "Zoo",
        "Bowling",
        "Billiards",
        "Flea Market"
    ];


    // =========================
    // ELEMENTS
    // =========================

    const panelContainer =
        document.getElementById("panel-container");

    const pickButton =
        document.getElementById("pick");

    const result =
        document.getElementById("result");

    const categoryTitle =
        document.getElementById("categoryTitle");

    const categoryDescription =
        document.getElementById("categoryDescription");

    const categoryButtons =
        document.querySelectorAll(".category-button");


    let currentCategory = "all";

    let currentOptions = allDates;


    // =========================
    // RENDER DATE OPTIONS
    // =========================

    function renderPanels() {

        panelContainer.innerHTML = "";


        currentOptions.forEach(option => {

            const panel =
                document.createElement("div");

            panel.classList.add("panel");

            panel.textContent = option;

            panelContainer.appendChild(panel);

        });
    }


    // =========================
    // CATEGORY SWITCH
    // =========================

    function changeCategory(category) {

        currentCategory = category;


        if (category === "first") {

            currentOptions = firstDates;

            categoryTitle.textContent =
                "First Dates";

            categoryDescription.textContent =
                "Ideas suited for getting to know someone.";

        } else {

            currentOptions = allDates;

            categoryTitle.textContent =
                "All Dates";

            categoryDescription.textContent =
                "Pick from all available date ideas.";
        }


        categoryButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        });


        result.textContent =
            "Your date idea will appear here";

        result.classList.remove(
            "success"
        );


        renderPanels();
    }


    // =========================
    // RESET PANELS
    // =========================

    function resetPanels() {

        document
            .querySelectorAll(".panel")
            .forEach(panel => {

                panel.classList.remove(
                    "active",
                    "selected"
                );

            });
    }


    // =========================
    // RANDOM PANEL
    // =========================

    function getRandomPanel() {

        const panels =
            document.querySelectorAll(".panel");

        const randomIndex =
            Math.floor(
                Math.random() *
                panels.length
            );

        return panels[randomIndex];
    }


    // =========================
    // PICK DATE
    // =========================

    function selectRandomPanel() {

        pickButton.disabled = true;


        categoryButtons.forEach(button => {
            button.disabled = true;
        });


        result.classList.remove(
            "success"
        );


        result.textContent =
            "Choosing your date...";


        resetPanels();


        let flashes = 0;

        const totalFlashes = 20;

        const flashSpeed = 120;


        const flashTimer =
            setInterval(() => {

                resetPanels();


                const currentPanel =
                    getRandomPanel();


                currentPanel.classList.add(
                    "active"
                );


                flashes++;


                if (flashes >= totalFlashes) {

                    clearInterval(
                        flashTimer
                    );

                    finishSelection();
                }

            }, flashSpeed);
    }


    // =========================
    // FINAL SELECTION
    // =========================

    function finishSelection() {

        resetPanels();


        const finalPanel =
            getRandomPanel();


        finalPanel.classList.add(
            "selected"
        );


        result.textContent =
            `❤️ ${finalPanel.textContent}`;


        result.classList.add(
            "success"
        );


        launchConfetti();


        pickButton.disabled = false;


        categoryButtons.forEach(button => {
            button.disabled = false;
        });
    }


    // =========================
    // CONFETTI
    // =========================

    function launchConfetti() {

        if (
            typeof confetti !== "function"
        ) {
            return;
        }


        confetti({

            particleCount: 180,

            spread: 100,

            origin: {
                x: 0.5,
                y: 0.6
            },

            scalar: 1

        });
    }


    // =========================
    // EVENTS
    // =========================

    pickButton.addEventListener(
        "click",
        selectRandomPanel
    );


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeCategory(
                    button.dataset.category
                );

            }
        );

    });


    // =========================
    // INITIAL LOAD
    // =========================

    renderPanels();

});