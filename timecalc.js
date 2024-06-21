document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('start');
    const input2 = document.getElementById('end');
    const addButton = document.getElementById('submitB');
    const differenceResultDisplay = document.getElementById('differenceResult');
    const addMinutesButton = document.getElementById('addMinutesButton');
    const addResultDisplay = document.getElementById('addResult');

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
                
                differenceResultDisplay.textContent = `Time Difference: ${resultHours} hours ${resultMinutes} minutes`;
            } else {
                differenceResultDisplay.textContent = 'Invalid input';
            }
        } else {
            differenceResultDisplay.textContent = 'Invalid time format';
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
            alert("Please enter a valid time in the format HH:MM.");
            return;
        }

        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);

        if (isNaN(hours) || isNaN(minutes)) {
            alert("Please enter a valid time in the format HH:MM.");
            return;
        }

        let totalMinutes = hours * 60 + minutes + minutesInput;
        totalMinutes = totalMinutes % (24 * 60); // Wrap around 24 hours

        const newHours = Math.floor(totalMinutes / 60);
        const newMinutes = totalMinutes % 60;

        addResultDisplay.textContent = `New time: ${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    });
});
