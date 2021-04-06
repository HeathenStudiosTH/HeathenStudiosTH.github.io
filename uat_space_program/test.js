let timerCount = 10;
let timeMultiplier = 1;

function countdownTimer(timerCount) {

    // Showing Timer Location
    document.getElementById("timer").innerHTML = "Prepare to Launch";

    // Setting countdown time
    for (i = 0; i > 11; i++) {
        // Call delay() function
        delay(i);

        // Changing display at end
        if (timerCount < 0) {
            document.getElementById("timer").innerHTML = "LAUNCH";
        }
    }

    // Delay function
    function delay(i) {
        setTimeout(function () {
            document.getElementById("timer").innerHTML = timerCount + " seconds";
        }, 1000 * timeMultiplier);
        timerCount--;
        timeMultiplier++;
    }
}