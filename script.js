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
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('profileName').value;
        const email = document.getElementById('profileEmail').value;

        alert(`Profile updated! \nName: ${name} \nEmail: ${email}`);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const emotionForm = document.getElementById('emotionForm');
    const historyList = document.getElementById('historyList');
    const settingsForm = document.getElementById('settingsForm');
    const themeSelect = document.getElementById('theme');
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');
    const savedHistory = JSON.parse(localStorage.getItem('history')) || [];

    const updateHistory = () => {
        historyList.innerHTML = '';
        savedHistory.forEach(entry => {
            const historyEntry = document.createElement('div');
            historyEntry.classList.add('history-entry');
            historyEntry.innerHTML = `<strong>Emotion:</strong> ${entry.emotion} <br><strong>Note:</strong> ${entry.note}`;
            historyList.appendChild(historyEntry);
        });
    };

    updateHistory();

    emotionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emotion = document.getElementById('emotion').value;
        const note = document.getElementById('note').value;

        if (emotion === '') {
            alert('Please select an emotion.');
            return;
        }

        const entry = { emotion, note };
        savedHistory.push(entry);
        localStorage.setItem('history', JSON.stringify(savedHistory));

        updateHistory();
        emotionForm.reset();
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.body.className = themeSelect.value;
        localStorage.setItem('theme', themeSelect.value);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

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

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('profileName').value;
        const email = document.getElementById('profileEmail').value;
        alert(`Profile updated! \nName: ${name} \nEmail: ${email}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;
        const regEmail = document.getElementById('regEmail').value;

        if (regUsername && regPassword && regEmail) {
            alert(`Registration successful! \nUsername: ${regUsername} \nEmail: ${regEmail}`);
            registerForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('profileName').value;
        const email = document.getElementById('profileEmail').value;
        const bio = document.getElementById('profileBio').value;
        alert(`Profile updated! \nName: ${name} \nEmail: ${email} \nBio: ${bio}`);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});
