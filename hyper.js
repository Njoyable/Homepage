document.addEventListener("DOMContentLoaded", function() {

    var menge = document.getElementById("menge");
    var mengeS = document.getElementById("mengeS");
    var pulled = document.getElementById("pulled");
    var special = document.getElementById("special");

    var result = document.getElementById("result");
   
    document.querySelector("form").addEventListener("submit", function(event) {

        event.preventDefault();

        var mengeValue = parseFloat(menge.value);
        var mengeSValue = parseFloat(mengeS.value);
        var pulledValue = parseFloat(pulled.value);
        var specialValue = parseFloat(special.value);

        var prob = (calcBinomialCoe(mengeSValue, specialValue) * calcBinomialCoe((mengeValue-mengeSValue), (pulledValue-specialValue))) / calcBinomialCoe(mengeValue, pulledValue)

        result.textContent = "Wahrscheinlichkeit: " + prob;

    }) 
});

function calcBinomialCoe(n, k) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    if (k < 0 || k > n) {
        return 0;        
    } else {
        return factorial(n) / (factorial(k) * factorial(n-k));
    }
};