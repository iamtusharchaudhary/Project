document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate credentials (this is just an example, not secure)
    if (username === "your_username" && password === "your_password") {
        // alert("welcome to our website");
        // Redirect to welcome page or do something else
    } else {
        alert("Invalid username or password");
    }
});
