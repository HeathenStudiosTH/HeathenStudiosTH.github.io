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