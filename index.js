// Global variable to assign "class" function and give buttons access to "setVariable"
let timerCount;
// Global variable to assign constructor function to audio commands
let loadedAudio;

// Once document is loaded, assigning global variable timerCount to _countdownTimer() to access start, stop, and reset sub functions
$(document).ready(function (e) {
    timerCount = new _countdownTimer(function (count) {
        if (count == 0) {
            timerCount.reset();
        }
    });
})

// Countdown constructor function
function _countdownTimer() {
    // Getting timer location
    let timerText = document.getElementById("timer");
    timerText.innerHTML = "Prepare to Launch";

    let steps = 1; // Setting up a step count to increase wait time
    let count = 10; // Establish timer start
    let isRunning = false; // Checking if timer is running
    let timer; // Timer variable

    // Start function for start button
    this.start = function () {
        // Changing access to start and stop button
        $('#startButton').prop('disabled', true);
        $('#stopButton').prop('disabled', false);

        // Changing run status
        if (isRunning == false) {
            isRunning = true;

            // Actual timer with a wait time of 1 second between display change
            timer = setInterval(function () {
                // New if conditions that checks if count is under 10 secs
                if (count < 1) {
                    // Stops setInterval
                    clearInterval(timer);
                    // Displays Launch
                    timerText.innerHTML = 'LAUNCH';
                    // Change font color to red
                    timerText.style.color = '#aa0e28';
                    // Change font weight to bold
                    timerText.style.fontWeight = 'bold';
                    postLaunchData();
                } else if (count <= 5 && count > 1) {
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
            }, 1000 * steps);
        }
    }

    // Stop function for stopButton
    this.stop = function () {
        // Changing access to start and stop button
        $('#startButton').prop('disabled', false);
        $('#stopButton').prop('disabled', true);

        // Changing run status
        if (isRunning == true) {
            isRunning = false;
            // Stopping clock
            clearInterval(timer);
            clearInterval(tableTimer);
        }

        steps = 1;
        count = 10;
        timerText.innerHTML = "<span style = \'color: #aa0e28; font-weight: bold;\'>ABORT</SPAN>";
    }

    // Reset function to turn count back to 10
    this.reset = function () {
        if (isRunning == true) {
            isRunning = false;
            clearInterval(timer);
            steps = 1;
            count = 10;
            timerText.innerHTML = "Prepare to Launch";
        } else {
            steps = 1;
            count = 10;
            timerText.innerHTML = "Prepare to Launch";
        }
    }
}

// Sound constructor function
function sound(src) {
    // Creating element for audio to be embedded
    this.sound = document.createElement("audio");
    // Getting source for file
    this.sound.src = src;
    // Setting preload and control attributes
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    // Setting element as hidden on webpage
    this.sound.style.display = "none";
    // Taking element and appending it to end of <body> tag
    document.body.appendChild(this.sound);
    // Establishing play function
    this.play = function () {
        this.sound.play();
    }
    // Establishing stop function
    this.stop = function () {
        this.sound.pause();
    }
}

// Build play function using sound constructor function
function playInterstellar() {
    // Taking loadAudio variable and assigning it source file
    loadedAudio = new sound("sounds/no-time-for-caution-edit.mp3");
    // Initiate play function
    loadedAudio.play();
}

// Build stop function using constructor function
function stopInterstellar() {
    loadedAudio.stop();
}