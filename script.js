document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    function toggleTheme() {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')){
            themeToggle.textContent = 'Change theme to Light';
        } else {
            themeToggle.textContent = 'Change theme to Dark';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});