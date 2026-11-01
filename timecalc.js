document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ELEMENTS
  // =========================

  const startInput = document.getElementById("start");

  const endInput = document.getElementById("end");

  const differenceButton = document.getElementById("submitB");

  const differenceResult = document.getElementById("differenceResult");

  const timeInput = document.getElementById("timeInput");

  const hoursInput = document.getElementById("hoursInput");

  const minutesInput = document.getElementById("minutesInput");

  const addTimeButton = document.getElementById("addTimeButton");

  const addResult = document.getElementById("addResult");

  // =========================
  // HELPER FUNCTIONS
  // =========================

  function timeToMinutes(time) {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timePattern.test(time)) {
      return null;
    }

    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
  }

  function formatTime(totalMinutes) {
    // Keeps the result inside a 24-hour day
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    const hours = Math.floor(totalMinutes / 60);

    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  function showResult(element, message, type) {
    element.textContent = message;

    element.classList.remove("success", "error");

    element.classList.add(type);
  }

  // =========================
  // TIME DIFFERENCE
  // =========================

  differenceButton.addEventListener("click", () => {
    const start = timeToMinutes(startInput.value);

    const end = timeToMinutes(endInput.value);

    if (start === null || end === null) {
      showResult(
        differenceResult,
        "Please enter valid times in HH:MM format.",
        "error",
      );

      return;
    }

    let difference = end - start;

    // If end is earlier than start,
    // assume the end time is on the next day
    if (difference < 0) {
      difference += 1440;
    }

    const hours = Math.floor(difference / 60);

    const minutes = difference % 60;

    let resultText = "";

    if (hours > 0) {
      resultText += `${hours} ${hours === 1 ? "hour" : "hours"}`;
    }

    if (minutes > 0) {
      if (hours > 0) {
        resultText += " ";
      }

      resultText += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    }

    if (difference === 0) {
      resultText = "0 minutes";
    }

    showResult(differenceResult, resultText, "success");
  });

  // =========================
  // ADD / SUBTRACT TIME
  // =========================

  addTimeButton.addEventListener("click", () => {
    const time = timeToMinutes(timeInput.value);

    const hours = Number(hoursInput.value || 0);

    const minutes = Number(minutesInput.value || 0);

    if (time === null) {
      showResult(
        addResult,
        "Please enter a valid time in HH:MM format.",
        "error",
      );

      return;
    }

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      showResult(addResult, "Please enter valid hours and minutes.", "error");

      return;
    }

    const amountToAdd = hours * 60 + minutes;

    const newTime = time + amountToAdd;

    showResult(addResult, formatTime(newTime), "success");
  });

  // =========================
  // ENTER KEY SUPPORT
  // =========================

  startInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      differenceButton.click();
    }
  });

  endInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      differenceButton.click();
    }
  });

  timeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTimeButton.click();
    }
  });

  hoursInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTimeButton.click();
    }
  });

  minutesInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTimeButton.click();
    }
  });
});
