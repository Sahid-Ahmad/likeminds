<script>
    function handleSignIn() {
        const category = document.getElementById('signinCategory').value;
        const username = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        // Simple validation check
        if (category && username && password) {
            // Save the selected category to session storage
            sessionStorage.setItem('userCategory', category);

            // Simulate successful sign-in by redirecting to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all required fields.');
        }
    }
</script>
