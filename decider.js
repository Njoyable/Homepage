document.addEventListener("DOMContentLoaded", () => {

    const inputContainer =
        document.getElementById("input-container");

    const addInputButton =
        document.getElementById("addInputButton");

    const decideButton =
        document.getElementById("decideButton");

    const resultContainer =
        document.getElementById("result-container");


    // =========================
    // CREATE NEW INPUT
    // =========================

    function createInput() {

        const optionRow =
            document.createElement("div");

        optionRow.classList.add("option-row");


        const input =
            document.createElement("input");

        input.type = "text";

        input.name = "dynamicInput";

        input.placeholder = "Another option...";


        const removeButton =
            document.createElement("button");

        removeButton.type = "button";

        removeButton.classList.add(
            "remove-button"
        );

        removeButton.textContent = "×";

        removeButton.setAttribute(
            "aria-label",
            "Remove option"
        );


        optionRow.appendChild(input);

        optionRow.appendChild(
            removeButton
        );


        inputContainer.appendChild(
            optionRow
        );


        input.focus();
    }


    // =========================
    // REMOVE INPUT
    // =========================

    function removeInput(button) {

        const rows =
            document.querySelectorAll(
                ".option-row"
            );


        // Always keep at least two fields
        if (rows.length <= 2) {

            showResult(
                "You need at least two options.",
                "error"
            );

            return;
        }


        button
            .closest(".option-row")
            .remove();
    }


    // =========================
    // CHOOSE RANDOM OPTION
    // =========================

    function chooseRandomInput() {

        const inputs =
            document.querySelectorAll(
                "input[name='dynamicInput']"
            );


        const options =
            Array.from(inputs)

                .map(input =>
                    input.value.trim()
                )

                .filter(value =>
                    value !== ""
                );


        if (options.length < 2) {

            showResult(
                "Enter at least two options first.",
                "error"
            );

            return;
        }


        const randomIndex =
            Math.floor(
                Math.random() *
                options.length
            );


        const chosenOption =
            options[randomIndex];


        showResult(
            `🎉 ${chosenOption}`,
            "success"
        );
    }


    // =========================
    // RESULT
    // =========================

    function showResult(
        message,
        type
    ) {

        resultContainer.textContent =
            message;


        resultContainer.classList.remove(
            "success",
            "error"
        );


        resultContainer.classList.add(
            type
        );
    }


    // =========================
    // EVENTS
    // =========================

    addInputButton.addEventListener(
        "click",
        createInput
    );


    decideButton.addEventListener(
        "click",
        chooseRandomInput
    );


    inputContainer.addEventListener(
        "click",
        event => {

            if (
                event.target.classList.contains(
                    "remove-button"
                )
            ) {

                removeInput(
                    event.target
                );
            }
        }
    );


    // Press Enter to decide

    inputContainer.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                chooseRandomInput();
            }
        }
    );

});