document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("login-password");
    const showPasswordCheckbox = document.getElementById("showLoginPassword");
    const loginForm = document.getElementById("login-form");

    // Show Password Functionality
    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function () {
            passwordInput.type = this.checked ? "text" : "password";
        });
    }

    // Login Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        console.log("Login button clicked!");

        const email = document.getElementById("email").value;
        const password = passwordInput.value;
        const rememberMe = document.getElementById("rememberMe").checked;

        console.log("Entered Email:", email);
        console.log("Entered Password:", password);

        // Fetch stored user data from JSON
        fetch("users.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load users.json");
                }
                return response.json();
            })
            .then(users => {
                console.log("Loaded Users:", users);

                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    alert("Login successful!");

                    // Store user session
                    if (rememberMe) {
                        localStorage.setItem("user", JSON.stringify(user));
                    } else {
                        sessionStorage.setItem("user", JSON.stringify(user));
                    }

                    // Redirect based on user type
                    if (user.role === "admin") {
                        console.log("Redirecting to admin dashboard...");
                        window.location.href = "admin_dashboard.html";
                    } else {
                        console.log("Redirecting to student dashboard...");
                        window.location.href = "student_dashboard.html";
                    }
                } else {
                    alert("Invalid email or password. Please try again.");
                    console.log("Invalid credentials entered.");
                }
            })
            .catch(error => console.error("Error fetching users:", error));
    });
});
