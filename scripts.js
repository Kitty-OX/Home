document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Switch to Light Mode';
        } else {
            darkModeToggle.textContent = 'Switch to Dark Mode';
        }
    });
});
