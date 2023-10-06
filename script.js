const confirmPassword = document.querySelector("#passwordError")
const requiredInputs = document.querySelectorAll("[required]")
requiredInputs.forEach(input => {
    input.addEventListener('focusout', function(){
        checkValidity(input);
    })
})


document.querySelectorAll('.password').forEach(elem => elem.addEventListener("keyup", checkPassword));
document.querySelector('.submit-btn').addEventListener("click", checkForm);
// document.addEventListener("click", checkValidity)


function checkPassword() {
    if (user_password.value != user_password_confirm.value) {
        confirmPassword.textContent = "*Passwords must match"
        user_password_confirm.setCustomValidity("*Passwords must match");
    }
    else if (user_password.value == user_password_confirm.value) {
        confirmPassword.textContent = "";
        user_password_confirm.setCustomValidity("");
    }
    else {
        confirmPassword.textContent = "";
        user_password_confirm.setCustomValidity("");
    }

}

function checkForm() {
    requiredInputs.forEach(input => {
        let errorDiv = (input.nextElementSibling.nextElementSibling);
        let errorSpan = (input.nextElementSibling);
        
        if (input.value.length == 0) {
            input.setCustomValidity("*This field is required");
            errorSpan.classList.add("errorSpan");
            errorDiv.classList.add("errorDiv");
            // errorDiv.textContent = "*This field is required";
        }
        else {
            input.setCustomValidity("");
        }
    })
}

function checkValidity(input) {

    let errorDiv = (input.nextElementSibling.nextElementSibling);
    let originalError = errorDiv.textContent;
    console.log(input.value);
    if (input.value.length > 0) {
        input.setCustomValidity("");
        errorDiv.classList.remove("errorDiv");
        errorDiv.textContent = originalError;
    }
}