function countdownTimer(timerCount) {

    // Showing timer location
    let timerText = document.getElementById("timer");
    timerText.innerHTML = "Prepare to Launch";

    // Establish timer start
    let steps = 1;
    // Setting up a step count to increase wait time
    let count = 10;
    // Actual timer with a wait time of 1 second between display change
    let timer = setInterval(function () {
        // New if conditions that checks if count is under 10 secs
        if (count <= 10) {
            // NEW output to be displayed
            timerText.innerHTML = 'Warning<br>Less than 1/2 way to launch, <br>time left = ' + count + ' seconds';
        } else {
            // Display output
            timerText.innerHTML = "T- " + count + " seconds";
        }

        // Increase step count to keep cadence
        steps++;
        // Decrease count for countdown
        count--;

        // Validation check
        if (count < 0) {
            // Stops setInterval
            clearInterval(timer);
            // Displays Launch
            timerText.innerHTML = 'LAUNCH';
            timerText.style.color = '#aa0e28';
        }
    }, 1000 * steps);
}