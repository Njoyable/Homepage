<!DOCTYPE html>
<html>
<head>
    <title>Zeitrechner</title>
    <link rel="stylesheet" type="text/css" href="timecalc.css">
    <script src="timecalc.js" defer></script>
    <style>
        .hidden {
            visibility: hidden;
        }
    </style>
</head>
<body>

<div class="topnav">
    <a href="index.html" style="margin-left: 20px;">Homepage</a>
</div>

<div class="centered-container">
    <div class="title-label">TIME DIFFERENCE</div>
    <label for="start">Start</label>
    <input type="text" id="start" name="input1" value="00:00"><br><br>

    <label for="end">End</label>
    <input type="text" id="end" name="input2" value="00:00"><br><br>

    <button type="button" id="submitB">Calculate time difference</button>
    <p id="differenceResult" class="hidden"></p>
</div>

<div class="centered-container">
    <div class="title-label">ADD TIME</div>
    <label for="timeInput">Enter time (hh:mm):</label>
    <input type="text" id="timeInput" value="00:00" placeholder="hh:mm" required>
    <br>
    <label for="minutesInput">Enter minutes to add:</label>
    <input type="number" id="minutesInput" required>
    <br>
    <button type="button" id="addMinutesButton">Add minutes</button>
    <p id="addResult" class="hidden"></p>
</div>

</body>
</html>
