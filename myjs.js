const form = document.querySelector('form');
const emailField = form.querySelector('.email-field');
const emailInput = emailField.querySelector('.email');

const passField = form.querySelector('.creat-password');
const passInput = passField.querySelector('.password');

const cPassField = form.querySelector('.confirm-password');
const cPassInput = cPassField.querySelector('.cPassword');

// Email Validation
function checkEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid"); // Remove invalid class if email value matches the emailPattern
}

//hide and show password
const eyeIcons = document.querySelectorAll(".show-hide")
eyeIcons.forEach(eyeIcons => {
    eyeIcons.addEventListener("click", () => {
        const pInput = eyeIcons.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcons.classList.replace("bx-hide", "bx-show")
            return pInput.type = "text";
        }
        eyeIcons.classList.replace("bx-show", "bx-hide")
        pInput.type = "password";
    });
});


//password Validation
function createpass() {
    const passPattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");//adding invalid class if password input value do not match
    }
    passField.classList.remove("invalid");//removing invalid class if password input value do not match

}
//Confirm password validtion
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");

}


// Calling Function on Form Submit 
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    checkEmail();
    createpass();
    confirmPass();


    // Calling function on key up
    emailField.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createpass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});



