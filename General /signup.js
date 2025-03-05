document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Password validation
        const passwordErrorElement = document.getElementById("password-error");
        if (password !== confirmPassword) {
            passwordErrorElement.textContent = "Passwords do not match. Please try again.";
            return;
        } else {
            passwordErrorElement.textContent = ""; // Clear any error message
        }

        // Prepare data to send
        const userData = {
            fullname: fullname,
            email: email,
            password: password
        };

        // Send data to the server
        fetch('https://urban-enigma-7vv4w66x75g4cr4v-5000.app.github.dev/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Redirect to the student dashboard after successful sign-up
            window.location.href = "student_dashboard.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    // Toggle show password functionality
    const showPasswordCheckbox = document.getElementById("showSignupPassword");
    const signupPasswordInput = document.getElementById("signup-password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    showPasswordCheckbox.addEventListener("change", function () {
        const type = showPasswordCheckbox.checked ? "text" : "password";
        signupPasswordInput.type = type;
        confirmPasswordInput.type = type;
    });
});
