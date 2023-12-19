function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var resultDiv = document.getElementById('result');

    // Admin credentials
    var adminEmail = 'admin@gmail.com';
    var adminPassword = 'admin123';

    // User credentials
    var userEmail = 'user@gmail.com';
    var userPassword = 'user123';

    // Check if the entered credentials match either admin or user
    if (email === adminEmail && password === adminPassword) {
        // Redirect to admin.html
        window.location.href = 'AdminPanel.html';
    } else if (email === userEmail && password === userPassword) {
        // Redirect to HomePage.html
        window.location.href = 'Logged_HomePage.html';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.textContent = 'Invalid email or password. Please try again.';
    }
}
