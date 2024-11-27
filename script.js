<script>
    document.addEventListener('DOMContentLoaded', () => {
      const usernameField = document.getElementById('username');
      const passwordField = document.getElementById('password');
      const checkbox = document.getElementById('checkbox');
      const existingButton = document.getElementById('existing');

      // Check if user credentials are saved in local storage
      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
      }

      document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameField.value;
        const password = passwordField.value;

        if (checkbox.checked) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }
        alert(`Logged in as ${username}`);
        if (!existingButton.style.display) {
          existingButton.style.display = 'block';
        }
      });

      existingButton.addEventListener('click', () => {
        const storedUsername = localStorage.getItem('username');
        alert(`Logged in as ${storedUsername}`);
      });
    });
  </script>
