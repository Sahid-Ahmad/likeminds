document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-photo').src = userData.photo;
    } else {
        // Redirect to sign-up or sign-in if no user data is found
        window.location.href = 'signup.html';
    }
});
