function start() {
    document.getElementById('startButton').disable = true;
    document.getElementById('stopButton').disable = false;
    countdownTimer();
}

function stop() {
    document.getElementById('startButton').disable = false;
    document.getElementById('stopButton').disable = true;
    clearTimeout(timer);
}

function reset() {
    location.reload;
}

// Countdown function
function countdownTimer() {
    // Getting timer location
    let timerText = document.getElementById("timer");
    timerText.innerHTML = "Prepare to Launch";

    // Removal of unnecessary text
    document.getElementById("home-page-info").innerHTML = "";

    // Establish timer start
    let steps = 1;
    // Setting up a step count to increase wait time
    let count = 10;
    // Actual timer with a wait time of 1 second between display change
    let timer = setInterval(function () {
        // New if conditions that checks if count is under 10 secs
        if (count <= 5) {
            // *NEW output to be displayed*
            timerText.innerHTML = '<span style = \'color: #aa0e28; font-weight: bold;\'>WARNING</span><br>Less than 1/2 way to launch, <br>time left = <span style=\'color: #aa0e28; font-weight: bold;\'>' + count + '</span> seconds';
        } else if (count == 1) {
            timerText.innerHTML = '<span style = \'color: #aa0e28; font-weight: bold;\'>WARNING</span><br>Less than 1/2 way to launch, <br>time left = <span style=\'color: #aa0e28; font-weight: bold;\'>' + count + '</span> second';
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
            // Change font color to red
            timerText.style.color = '#aa0e28';
            // Change font weight to bold
            timerText.style.fontWeight = 'bold';
            postLaunchData();
        }
    }, 1000 * steps);
}