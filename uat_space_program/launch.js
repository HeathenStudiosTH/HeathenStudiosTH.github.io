function postLaunchData() {
    // Getting timer location
    let timerLocation = document.getElementById("timer");
    // Getting heading location
    let headingLocation = document.getElementById("heading");

    // Setting count and steps
    let count = 0;
    let steps = 1;

    setTimeout(function () {
        // Remove Heading and "Launch" strings in body to make room for table
        timerLocation.innerHTML = "";
        headingLocation.innerHTML = "";

        // Show table via bootstrap collapse
        $('#launchData').collapse();
        // Heading section removal to allow room for table
        $('#heading').remove();

        // Update "Readings" column with new data
        setInterval(function () {
            document.getElementById('et').innerHTML = "T +: " + count;
            count++;
            steps++;
        }, 1000 * steps);
    }, 2000);
}

function launchTime() {
    let launchTime = new Date().getTime();
}