// Function to roll the dice
function rollDice() {

    //Collect 2 random numbers and display them by their corresponding element with ID
    setTimeout(function () {
        // Picks two random numbers for dice
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let sum = randomNumber1 + randomNumber2;

        // Obtain location of img files based on value
        document.getElementById("img1").setAttribute("src", "imgs/dice-" + randomNumber1 + ".svg");
        document.getElementById("img2").setAttribute("src", "imgs/dice-" + randomNumber2 + ".svg");

        // Displays random numbers in dice locations
        document.getElementById("die1").innerHTML = "";
        document.getElementById("die2").innerHTML = "";
        document.getElementById("sum").innerHTML = "Sum: " + sum;

        // Checking sum against score rules
        if (randomNumber1 + randomNumber2 == 5 || randomNumber1 + randomNumber2 == 11) {
            document.querySelector("h1").innerHTML = "CRAPS! You Lose";
        } else if (randomNumber1 == 1 && randomNumber2 == 1) {
            document.querySelector("h1").innerHTML = ("SNAKE EYES!");
        } else if (randomNumber1 === randomNumber2 && randomNumber1 % 2 == 0) {
            document.querySelector("h1").innerHTML = ("DOUBLES! WINNER!");
        } else {
            document.querySelector("h1").innerHTML = ("Simple Craps");
        }

    }, 1000);
}