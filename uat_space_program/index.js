// Sign in function
function signIn(fullName, badgeNo) {
    // Get value from form to be used for validation
    let firstName = document.getElementById("inputFirstName").value;
    let lastName = document.getElementById("inputLastName").value;
    badgeNo = document.getElementById("inputBadgeNo").value;

    // Combining two variables to create one string variable
    fullName = firstName + " " + lastName;

    if (fullName.length < 3 || fullName.length >= 20 && firstName.length == 0 || lastName.length == 0) {
        //if true
        document.getElementById("loginStatus").innerHTML = "Invalid full name!!!";
        return false;
    }
    else if (badgeNo >= 999 || badgeNo <= 100) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!!!";
        return false;
    }
    else {
        alert("Access Granted! Welcome " + fullName);
        location.replace("index.html");
    }
}

// Countdown function
function countdownTimer(timerCount) {
    // Getting timer location
    let timerText = document.getElementById("timer");
    timerText.innerHTML = "Prepare to Launch";

    // Removal of unnecessary text
    document.getElementById("home-page-info1").innerHTML = "";
    document.getElementById("home-page-info2").innerHTML = "";

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
        }
    }, 1000 * steps);
}