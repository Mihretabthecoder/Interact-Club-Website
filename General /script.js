// Toggle Password Visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passwordField.type = "password";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    }
});