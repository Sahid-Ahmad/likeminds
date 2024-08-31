document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').files[0];

    if (name && photo) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const userData = {
                name: name,
                photo: e.target.result // Base64 encoded image string
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        };
        
        reader.readAsDataURL(photo);
    }
});
