document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('start');
    const input2 = document.getElementById('end');
    const addButton = document.getElementById('submitB');
    const resultDisplay = document.createElement('p');
    const addMinutesButton = document.getElementById('addMinutesButton');
    
    addButton.addEventListener('click', function() {
        const time1 = input1.value.split(':');
        const time2 = input2.value.split(':');
        
        if (time1.length === 2 && time2.length === 2) {
            const hours1 = parseInt(time1[0]);
            const minutes1 = parseInt(time1[1]);
            const hours2 = parseInt(time2[0]);
            const minutes2 = parseInt(time2[1]);
            
            if (!isNaN(hours1) && !isNaN(minutes1) && !isNaN(hours2) && !isNaN(minutes2)) {
                const totalMinutes1 = hours1 * 60 + minutes1;
                const totalMinutes2 = hours2 * 60 + minutes2;
                let timeDifference = totalMinutes2 - totalMinutes1;
                
                if (timeDifference < 0) {
                    timeDifference += 24 * 60; 
                }
                
                const resultHours = Math.floor(timeDifference / 60);
                const resultMinutes = timeDifference % 60;
                
                resultDisplay.textContent = `Time Difference: ${resultHours} hours ${resultMinutes} minutes`;
                resultDisplay.setAttribute('id', 'result'); // Ensure resultDisplay has id="result"
                addButton.parentNode.insertBefore(resultDisplay, addButton.nextSibling); // Insert resultDisplay after addButton
            } else {
                resultDisplay.textContent = 'Invalid input';
            }
        } else {
            resultDisplay.textContent = 'Invalid time format';
        }
    });
    
    addMinutesButton.addEventListener('click', function() {
        const timeInput = document.getElementById("timeInput").value;
        const minutesInput = parseInt(document.getElementById("minutesInput").value, 10);

        if (isNaN(minutesInput)) {
            alert("Please enter a valid number of minutes.");
            return;
        }

        const timeParts = timeInput.split(":");
        if (timeParts.length !== 2) {
            alert("Please enter a valid time in the
