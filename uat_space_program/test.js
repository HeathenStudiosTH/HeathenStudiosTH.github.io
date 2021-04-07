function countdownTimer(timerCount) {

    // Showing timer location
    document.getElementById("timer").innerHTML = "Prepare to Launch";

    // Establish timer start
    let steps = 1;
    let count = 10;
    let timer = setInterval(function () {
        document.getElementById('timer').innerHTML = "T- " + count + " seconds";
        steps++;
        count--;

        if (count < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "LAUNCH";
        }
    }, 1000 * steps);
}