function postLaunchData() {
    // Setting count and steps
    let count = 2;
    let steps = 1;
    let dataInput;

    // Setting up 1 second delay to reveal "data table"
    setTimeout(function () {
        // Show table via bootstrap collapse
        $('#launchData').collapse();
        // Heading and timer section removal to allow room for table
        $('#heading').remove();
        $('#timer').remove();

        // Update "Readings" column with new data
        dataInput = setInterval(function () {
            document.getElementById('et').innerHTML = "T +: " + count + " seconds";
            count++;
            steps++;
        }, 1000 * steps);
    }, 1000);
}