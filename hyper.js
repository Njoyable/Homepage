document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("hyperForm");

    const populationInput =
        document.getElementById("menge");

    const successPopulationInput =
        document.getElementById("mengeS");

    const sampleInput =
        document.getElementById("pulled");

    const successSampleInput =
        document.getElementById("special");

    const result =
        document.getElementById("result");


    // =========================
    // BINOMIAL COEFFICIENT
    // =========================

    function binomialCoefficient(n, k) {

        if (
            k < 0 ||
            k > n
        ) {
            return 0;
        }


        if (
            k === 0 ||
            k === n
        ) {
            return 1;
        }


        // Makes calculation more efficient
        k = Math.min(
            k,
            n - k
        );


        let result = 1;


        for (
            let i = 1;
            i <= k;
            i++
        ) {

            result *=
                (n - k + i) / i;
        }


        return result;
    }


    // =========================
    // RESULT DISPLAY
    // =========================

    function showError(message) {

        result.classList.remove(
            "success"
        );

        result.classList.add(
            "error"
        );

        result.textContent =
            message;
    }


    function showResult(
        probability
    ) {

        const percentage =
            probability * 100;


        result.classList.remove(
            "error"
        );

        result.classList.add(
            "success"
        );


        result.innerHTML = `
            <div>Probability</div>

            <div class="result-probability">
                ${formatPercentage(percentage)}
            </div>

            <div>
                P(X = k) = ${formatProbability(probability)}
            </div>
        `;
    }


    function formatPercentage(
        percentage
    ) {

        if (
            percentage === 0 ||
            percentage === 100
        ) {
            return `${percentage}%`;
        }


        if (percentage < 0.0001) {

            return `${percentage.toExponential(4)}%`;
        }


        return `${percentage.toFixed(4)}%`;
    }


    function formatProbability(
        probability
    ) {

        if (
            probability !== 0 &&
            probability < 0.000001
        ) {

            return probability.toExponential(6);
        }


        return probability.toFixed(8);
    }


    // =========================
    // CALCULATE
    // =========================

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const N =
                Number(populationInput.value);

            const M =
                Number(successPopulationInput.value);

            const n =
                Number(sampleInput.value);

            const k =
                Number(successSampleInput.value);


            // Check empty values

            if (
                populationInput.value === "" ||
                successPopulationInput.value === "" ||
                sampleInput.value === "" ||
                successSampleInput.value === ""
            ) {

                showError(
                    "Please fill in all fields."
                );

                return;
            }


            // Only allow integers

            if (
                !Number.isInteger(N) ||
                !Number.isInteger(M) ||
                !Number.isInteger(n) ||
                !Number.isInteger(k)
            ) {

                showError(
                    "All values must be whole numbers."
                );

                return;
            }


            // No negative numbers

            if (
                N < 0 ||
                M < 0 ||
                n < 0 ||
                k < 0
            ) {

                showError(
                    "Values cannot be negative."
                );

                return;
            }


            // M cannot be larger than N

            if (M > N) {

                showError(
                    "Successful items (M) cannot be larger than the population (N)."
                );

                return;
            }


            // n cannot be larger than N

            if (n > N) {

                showError(
                    "The sample size (n) cannot be larger than the population (N)."
                );

                return;
            }


            // k cannot be larger than sample

            if (k > n) {

                showError(
                    "Successful draws (k) cannot be larger than the sample size (n)."
                );

                return;
            }


            // k cannot be larger than M

            if (k > M) {

                showError(
                    "Successful draws (k) cannot be larger than the number of successful items (M)."
                );

                return;
            }


            /*
                Minimum possible successes:

                Example:
                N = 10
                M = 8
                n = 5

                There are only 2 unsuccessful items,
                so drawing 5 items must include at
                least 3 successful items.
            */

            const minimumSuccesses =
                Math.max(
                    0,
                    n - (N - M)
                );


            const maximumSuccesses =
                Math.min(
                    n,
                    M
                );


            if (
                k < minimumSuccesses ||
                k > maximumSuccesses
            ) {

                showResult(0);

                return;
            }


            // Hypergeometric formula

            const successfulWays =
                binomialCoefficient(
                    M,
                    k
                );


            const unsuccessfulWays =
                binomialCoefficient(
                    N - M,
                    n - k
                );


            const totalWays =
                binomialCoefficient(
                    N,
                    n
                );


            const probability =
                (
                    successfulWays *
                    unsuccessfulWays
                ) /
                totalWays;


            showResult(
                probability
            );
        }
    );

});