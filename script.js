document.addEventListener('DOMContentLoaded', () => {
    const emotionForm = document.getElementById('emotionForm');
    const historyList = document.getElementById('historyList');
    const settingsForm = document.getElementById('settingsForm');
    const themeSelect = document.getElementById('theme');

    emotionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emotion = document.getElementById('emotion').value;
        const note = document.getElementById('note').value;

        if (emotion === '') {
            alert('Please select an emotion.');
            return;
        }

        const entry = document.createElement('div');
        entry.classList.add('history-entry');
        entry.innerHTML = `<strong>Emotion:</strong> ${emotion} <br><strong>Note:</strong> ${note}`;
        historyList.appendChild(entry);
        emotionForm.reset();
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.body.className = themeSelect.value;
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener('change', () => {
        localStorage.setItem('theme', themeSelect.value);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            document.getElementById('login').style.display = 'none';
            document.querySelector('main').style.display = 'block';
        } else {
            alert('Invalid username or password.');
        }
    });
});
