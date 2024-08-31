document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-photo').src = userData.photo || 'default-photo.jpg';
        document.getElementById('user-id').textContent = `SID: ${userData.id}`;
    }
});
