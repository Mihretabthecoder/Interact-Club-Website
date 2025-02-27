document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let userType = document.getElementById("userType").value;

    if (userType === "admin") {
        window.location.href = "admin_dashboard.html";
    } else {
        window.location.href = "student_dashboard.html";
    }
});
