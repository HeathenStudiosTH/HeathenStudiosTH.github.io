function countdownTimer(timerCount) {

    // Showing timer location
    document.getElementById("timer").innerHTML = "Prepare to Launch";

    // Establish timer start
    let steps = 1;
    // Setting up a step count to increase wait time
    let count = 10;
    // Actual timer with a wait time of 1 second between display change
    let timer = setInterval(function () {
        // Display output
        document.getElementById('timer').innerHTML = "T- " + count + " seconds";
        // Increase step count to keep cadence
        steps++;
        // Decrease count for countdown
        count--;

        // Validation check
        if (count < 0) {
            // Stops setInterval
            clearInterval(timer);
            // Displays Launch
            document.getElementById('timer').innerHTML = "LAUNCH";
        }
    }, 1000 * steps);
}