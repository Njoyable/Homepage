const panels = document.querySelectorAll('.panel');

function selectRandomPanel() {
    console.log("Button clicked, starting random selection process.");

    // Reset all panels initially
    panels.forEach(panel => {
        panel.classList.remove('selected');
    });

    // Create a list of randomly ordered panel indexes
    const randomSequence = Array.from(panels.keys()).sort(() => Math.random() - 0.5);

    // Number of times to flash random panels before settling on one
    const flashCount = 20; // Flash 20 times
    const interval = 200; // Interval between flashes (200 ms)

    let currentIndex = 0;

    // Function to reset all panels
    function resetPanels() {
        panels.forEach(panel => {
            panel.classList.remove('selected');
        });
    }

    // Function to flash a random panel
    const flashRandomPanel = () => {
        console.log(`Flash ${currentIndex + 1} of ${flashCount}`);

        // Reset all panels
        resetPanels();

        // Highlight the current random panel
        const panelToFlash = panels[randomSequence[currentIndex % panels.length]];
        panelToFlash.classList.add('selected');

        currentIndex++;

        // If we've flashed enough times, stop flashing and choose the final panel
        if (currentIndex >= flashCount) {
            console.log("Flashing complete. Selecting final panel.");

            clearInterval(flashTimer); // Stop the flashing timer

            // Reset all panels again to ensure only the final panel is selected
            resetPanels();
            
            // Final choice
            const finalPanel = panels[randomSequence[randomSequence.length - 1]];
            finalPanel.classList.add('selected');
            
            // Trigger confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    };

    // Set interval to create the "random flashing" effect
    const flashTimer = setInterval(flashRandomPanel, interval);
}
