// Get the form and input fields
const form = document.getElementById("registrationForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordVerifyField = document.getElementById("passwordVerify");
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const emailField = document.getElementById("email");
const phoneNumberField = document.getElementById("phoneNumber");
const newsletterRadios = document.getElementsByName("signUpNewsletter");

// Get error message containers
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const passwordVerifyError = document.getElementById("passwordVerifyError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneNumberError");
const newsletterError = document.getElementById("newsletterError");

// Helper function to clear all error messages
function clearErrors() {
    usernameError.textContent = '';
    passwordError.textContent = '';
    passwordVerifyError.textContent = '';
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    phoneNumberError.textContent = '';
    newsletterError.textContent = '';
}

// Function to validate the form when submitted
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to handle validation
    
    let hasErrors = false;
    clearErrors(); // Clear previous error messages
    
    // Validate username
    if (!/^[a-zA-Z0-9]+$/.test(usernameField.value)) {
        usernameError.textContent = "Username must only contain letters and numbers.";
        usernameField.focus();
        hasErrors = true;
    }

    // Validate password (minimum of 8 characters)
    if (passwordField.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        if (!hasErrors) passwordField.focus(); // Focus on the first error
        hasErrors = true;
    }

    // Validate password verify (must match password)
    if (passwordVerifyField.value !== passwordField.value) {
        passwordVerifyError.textContent = "Passwords do not match.";
        if (!hasErrors) passwordVerifyField.focus();
        hasErrors = true;
    }

    // Validate first name (must be text)
    if (!firstNameField.value.trim()) {
        firstNameError.textContent = "First name is required.";
        if (!hasErrors) firstNameField.focus();
        hasErrors = true;
    }

    // Validate last name (must be text)
    if (!lastNameField.value.trim()) {
        lastNameError.textContent = "Last name is required.";
        if (!hasErrors) lastNameField.focus();
        hasErrors = true;
    }

    // Validate email (basic email format)
    if (emailField.value && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailField.value)) {
        emailError.textContent = "Please enter a valid email address.";
        if (!hasErrors) emailField.focus();
        hasErrors = true;
    }

    // Validate phone number (basic format: (xxx) xxx-xxxx)
    if (phoneNumberField.value && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumberField.value)) {
        phoneNumberError.textContent = "Phone number must be in the format (xxx) xxx-xxxx.";
        if (!hasErrors) phoneNumberField.focus();
        hasErrors = true;
    }

    // Validate newsletter option (must select yes or no)
    if (!Array.from(newsletterRadios).some(radio => radio.checked)) {
        newsletterError.textContent = "Please select whether you want to sign up for the newsletter.";
        if (!hasErrors) newsletterRadios[0].focus(); // Focus on the first radio button
        hasErrors = true;
    }

    // If there are no errors, submit the form
    if (!hasErrors) {
        form.submit();
    }
});
