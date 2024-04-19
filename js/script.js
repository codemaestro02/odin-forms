// To make the aside tag the same height as the main tag
const bodyTag = document.querySelector("body")
window.addEventListener("load", resizeAside);
window.addEventListener("resize", resizeAside);

function resizeAside(){
        const mainTag = document.querySelector("main");
        const asideTag = document.querySelector("aside");
        const mainHeight = mainTag.clientHeight.toString() + "px";
        asideTag.style.height = mainHeight;
}

// To validate the two passwords and fire CSS styles in each case of success and failure
const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const submitButton = document.querySelector(".buttons button[type=submit]");
const telInput = document.getElementById("phone-number");


function validatePassword(password, confirmPassword){
    //checking whether the fields are empty or not
    if (password.value == "" || confirmPassword.value == ""){
        showErrorMessage("Please fill in both fields.");
        return false;
    } else if (password.value != confirmPassword.value) {
        showErrorMessage("Passwords do not match.")
        return false; 
    } else {
        console.log("Passwords match.");
        return true;
    }
}

// function to display error message on UI
function showErrorMessage(message) {
    const errorDiv = document.createElement('span');
    const form = document.querySelector(".form")
    errorDiv.className = 'error';
    errorDiv.style.fontSize = "10px";
    errorDiv.style.color = "red";
    errorDiv.textContent = "* " + message;
    form.appendChild(errorDiv);

    // clear error message after 0.5 seconds
    setTimeout(() => {document.querySelector('.error').remove()}, 500);
}

function isPasswordValid(password, confirmPassword, bool=true){
    if (bool){
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    } else{
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
}

function checkPasswords( ) {
    let isValid = validatePassword(password1, password2);
    if (isValid) {
        // Enable button if both passwords are valid
        submitButton.disabled = false;
        isPasswordValid(password1, password2, true);
    } else {
        // Disable button if either password is invalid
        submitButton.disabled = true;
        isPasswordValid(password1, password2, false);
    }
};

// Add event listeners for input fields 
password1.addEventListener('input', function(){
    // Check passwords when user types in the field
    checkPasswords();
});

password2.addEventListener('input', function() {
    // Delay so that typing isn't as fast than the input event can fire
    setTimeout(() => {checkPasswords()}, 2000);
});
